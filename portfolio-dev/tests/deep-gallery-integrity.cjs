/* Full-length image gallery QA: actively load and inspect image cards, not just file paths. */
const { chromium, firefox, webkit }=require('playwright');
const fs=require('fs'),path=require('path');
(async()=>{
const base=process.env.PORTFOLIO_TEST_URL||'http://127.0.0.1:8765/portfolio-dev/';
const output=path.resolve(__dirname,'../browser-qa/deep-gallery');
fs.mkdirSync(output,{recursive:true});
const pages=['index.html','work.html','production.html','profile.html'],browsers={chromium,firefox,webkit},results=[],failures=[];
for(const [engine,launcher] of Object.entries(browsers)){
  let browser;
  try {
    browser=await launcher.launch({headless:true});
    const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
    for(const route of pages){
      const test=engine+'/'+route;
      try {
        await page.goto(base+route,{waitUntil:'domcontentloaded',timeout:45000});
        const images=page.locator('.image-card img, .bulk-exhibit-card img, .intake-curated-card img');
        const count=await images.count();if(count<10)throw Error('Image gallery inventory unexpectedly small: '+count);
        const records=[];
        // Force loading and decoding even for images far below the fold and inside collapsible galleries.
        for(let start=0;start<count;start+=12){
          const chunk=await page.evaluate(async ({start,end})=>{
            const all=[...document.querySelectorAll('.image-card img, .bulk-exhibit-card img, .intake-curated-card img')];
            return await Promise.all(all.slice(start,end).map(async img=>{
              if(img.loading==='lazy')img.loading='eager';
              let error='';
              try{await Promise.race([img.decode(),new Promise((_,reject)=>setTimeout(()=>reject(Error('image decode timeout')),12000))]);}
              catch(e){error=String(e.message||e);}
              const css=getComputedStyle(img),rect=img.getBoundingClientRect();
              const card=img.closest('[data-image]');
              return {id:card?.getAttribute('data-image')||'',src:img.getAttribute('src'),
                loaded:img.complete&&img.naturalWidth>0&&img.naturalHeight>0,
                width:img.naturalWidth,height:img.naturalHeight,opacity:css.opacity,
                visible:css.display!=='none'&&css.visibility!=='hidden',
                rectWidth:rect.width,rectHeight:rect.height,layoutExpected:!img.closest('details:not([open])')&&css.display!=='none',error};
            }));
          },{start,end:Math.min(count,start+12)});
          records.push(...chunk);
        }
        const broken=records.filter(x=>!x.loaded||(x.layoutExpected&&(!x.rectWidth||!x.rectHeight)));
        if(broken.length)throw Error('Gallery images not loaded or no layout: '+JSON.stringify(broken.slice(0,10)));
        // Inspect the formerly blank CO2 laser machine card on Production.
        if(route==='production.html'){
          const card=page.locator('[data-image="94"]');
          if(await card.count()!==1)throw Error('Laser gallery card 94 missing');
          await card.scrollIntoViewIfNeeded({timeout:15000});
          const photo=card.locator('img');
          const ok=await photo.evaluate(img=>img.complete&&img.naturalWidth>0&&getComputedStyle(img).display!=='none'&&!img.hidden);
          if(!ok)throw Error('Laser 94 image not visibly decoded');
          await card.screenshot({path:path.join(output,engine+'-laser-card-94.png'),timeout:30000});
        }
        console.log('PASS '+test+' gallery images '+count+'/'+records.length);
        results.push({test,count,ok:true});
      }catch(e){console.error('FAIL '+test+' '+e.message);failures.push({test,error:e.message});}
    }
    await page.close();
  }catch(e){failures.push({engine,error:e.message});console.error('ENGINE FAIL '+engine+' '+e.message);}
  finally{if(browser)await browser.close();}
}
fs.writeFileSync(path.join(output,'report.json'),JSON.stringify({results,failures},null,2));
if(failures.length)process.exitCode=1;
console.log('Full-gallery checks '+results.length+'/'+(results.length+failures.length)+' passed');
})().catch(e=>{console.error(e);process.exitCode=1;});