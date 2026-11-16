const {chromium}=require('playwright');
const fs=require('node:fs'),path=require('node:path');
(async()=>{
 const base=(process.env.PORTFOLIO_TEST_URL||'http://127.0.0.1:8877/').replace(/\/?$/,'/');
 const browser=await chromium.launch({headless:true});
 try{
  for(const width of [390,1440,1920]){
   const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1});
   const errors=[];page.on('pageerror',e=>errors.push(e.message));
   const response=await page.goto(base+'album.html',{waitUntil:'domcontentloaded',timeout:30000});
   if(response.status()!==200)throw Error('Album status '+response.status());
   await page.locator('.album-card').first().waitFor({timeout:12000});
   const count=await page.locator('.album-card').count();
   if(count<30)throw Error('Fewer than 30 starting cards: '+count);
   const all=await page.locator('#album-count').innerText();if(!/259 photographs/.test(all))throw Error('Inventory count mismatch: '+all);
   const horizontal=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
   if(horizontal>5)throw Error('Album horizontal overflow at '+width+': '+horizontal+'px');
   if(width===1440){
    await page.getByRole('button',{name:'Racing',exact:true}).click();
    const filtered=await page.locator('.album-card').count();if(filtered<10||filtered>=count)throw Error('Bad racing filter '+filtered);
    await page.locator('.album-card').first().click();
    if(!await page.locator('#album-lightbox').evaluate(e=>e.open))throw Error('Photo viewer did not open');
    await page.keyboard.press('ArrowRight');
    if(!(await page.locator('#album-viewer-count').innerText()).includes('2 /'))throw Error('Viewer next failed');
    await page.locator('#album-close').click();
    await page.getByRole('button',{name:'All photographs'}).click();
    await page.getByRole('button',{name:/Turn to the next photographs/}).click();
    if(await page.locator('.album-card').count()<=count)throw Error('Show more failed');
    const nav=await page.locator('nav[aria-label="Main pages"] a').count();if(nav!==5)throw Error('Expected five navigation links, got '+nav);
    const routes=await page.locator('.album-routes a').count();if(routes!==5)throw Error('Missing site-guide route');
    const bad=await page.locator('a[href=""]').count();if(bad)throw Error('Empty anchor');
    fs.mkdirSync(path.resolve(__dirname,'../browser-qa'),{recursive:true});
    await page.screenshot({path:path.resolve(__dirname,'../browser-qa/album-desktop-1440.png'),fullPage:false});
   }
   if(width===390){await page.screenshot({path:path.resolve(__dirname,'../browser-qa/album-mobile-390.png'),fullPage:false});}
   if(errors.length)throw Error('Browser errors at '+width+': '+errors.join('; '));
   console.log('Album verified',width,'px',count,'initial cards');
   await page.close();
  }
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
