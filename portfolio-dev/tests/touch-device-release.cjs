/* Owner release gate: touch mobile emulation, not viewport-only testing. */
const {chromium,webkit,devices}=require('playwright');
const fs=require('node:fs'),path=require('node:path');
(async()=>{
 const base=process.env.PORTFOLIO_TEST_URL||'http://127.0.0.1:8765/portfolio-dev/';
 const out=path.resolve(__dirname,'../browser-qa/touch-devices');fs.mkdirSync(out,{recursive:true});
 const profiles=[{name:'iphone',driver:webkit,settings:devices['iPhone 13']},{name:'android',driver:chromium,settings:devices['Pixel 7']}];
 const pages=['index.html','work.html','production.html','profile.html'];
 let passed=0,failures=[];
 for(const profile of profiles){
  const browser=await profile.driver.launch({headless:true});
  try {
   const context=await browser.newContext({...profile.settings,reducedMotion:'reduce'});
   const page=await context.newPage();
   for(const route of pages){
    const id=profile.name+'-'+route;
    try{
     const response=await page.goto(base+route,{waitUntil:'domcontentloaded',timeout:40000});
     if(!response||response.status()>=400)throw Error('Page did not load');
     const state=await page.evaluate(()=>({actual:innerWidth,scroll:document.documentElement.scrollWidth,touch:'ontouchstart'in window,heading:document.querySelectorAll('h1').length}));
     if(!state.touch)throw Error('Touch not enabled');
     if(state.scroll>state.actual+2)throw Error('Horizontal scrolling: '+JSON.stringify(state));
     if(state.heading!==1)throw Error('Incorrect main heading count');
     const links=page.locator('header nav a');if(await links.count()!==5)throw Error('Incorrect top navigation count');
     const card=page.locator('button[data-image]:visible').first();
     if(await card.count()!==1)throw Error('Interactive photo card missing');
     await card.tap({timeout:12000});
     const modal=page.locator('dialog#lightbox');
     await modal.waitFor({state:'visible',timeout:12000});
     if(!await modal.evaluate(el=>el.open))throw Error('Viewer did not open');
     await page.locator('#viewer-close').tap({timeout:12000});
     if(await modal.evaluate(el=>el.open))throw Error('Viewer remained open');
     const dest=route==='profile.html'?'index.html':'profile.html';
     const nav=page.locator('header nav a[href="'+dest+'"]').first();
     await nav.tap({timeout:12000});
     await page.waitForURL('**/'+dest,{timeout:12000});
     passed++;console.log('PASS '+id+' touch/photo/viewer/nav '+state.actual+'px');
    }catch(e){const msg=id+': '+e.message;failures.push(msg);console.error('FAIL '+msg);}
   }
   await context.close();
  }finally{await browser.close();}
 }
 fs.writeFileSync(path.join(out,'report.json'),JSON.stringify({passed,failures},null,2));
 console.log('Touch-device QA '+passed+'/8');
 if(failures.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1;});