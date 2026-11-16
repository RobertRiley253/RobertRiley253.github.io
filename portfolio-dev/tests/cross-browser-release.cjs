/* Release gate: browser-engine and phone-width coverage. Development only. */
const { chromium, firefox, webkit } = require('playwright');
const fs = require('fs');
const path = require('path');
(async () => {
  const base = process.env.PORTFOLIO_TEST_URL || 'http://127.0.0.1:8765/portfolio-dev/';
  const out = path.join(__dirname, '..', 'browser-qa');
  fs.mkdirSync(out, { recursive: true });
  const failures = [], results = [];
  const sizes = [{name:'desktop',width:1440,height:900},{name:'phone',width:390,height:844},{name:'narrow-phone',width:320,height:720}];
  const routes = ['index.html','work.html','production.html','profile.html'];
  for (const [engine, driver] of Object.entries({chromium, firefox, webkit})) {
    let browser;
    try {
      browser = await driver.launch({headless:true});
      for (const vp of sizes) {
        const context = await browser.newContext({viewport:{width:vp.width,height:vp.height},reducedMotion:'reduce',deviceScaleFactor:1});
        const page = await context.newPage();
        for (const route of routes) {
          const key = engine + '-' + vp.name + '-' + route;
          try {
            const response = await page.goto(base + route,{waitUntil:'domcontentloaded',timeout:45000});
            if (!response || response.status()>=400) throw Error('HTTP '+(response&&response.status()));
            await page.locator('h1').first().waitFor({timeout:15000});
            await page.evaluate(() => document.fonts.ready);
            const state = await page.evaluate(() => {
              const images=[...document.images];
              const ids=[...document.querySelectorAll('[id]')].map(e=>e.id);
              const targets=[...document.querySelectorAll('a[href^="#"]')].filter(a=>a.getAttribute('href').length>1&&!document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)))).map(a=>a.getAttribute('href'));
              return {width:document.documentElement.clientWidth,scrollWidth:document.documentElement.scrollWidth,
                h1:document.querySelectorAll('h1').length,missingAlts:images.filter(img=>!img.hasAttribute('alt')).length,
                duplicateIds:ids.length-new Set(ids).size,brokenAnchors:targets,
                brokenEagerImages:images.filter(img=>img.hasAttribute('src')&&img.getAttribute('src')?.trim()&&img.loading!=='lazy'&&img.complete&&!img.naturalWidth).map(img=>img.src).slice(0,10),
                navLinks:[...document.querySelectorAll('header nav a')].map(a=>a.getAttribute('href'))};
            });
            if(state.h1!==1)throw Error('H1 count '+state.h1);
            if(state.scrollWidth>vp.width+2)throw Error('Horizontal overflow '+state.scrollWidth+' > '+vp.width);
            if(state.missingAlts||state.duplicateIds||state.brokenAnchors.length||state.brokenEagerImages.length)throw Error(JSON.stringify(state));
            if(state.navLinks.length<4)throw Error('Missing site navigation');
            if(route==='index.html'&&!await page.locator('a[href*="facebook.com/rox.riley"]').count())throw Error('Missing Facebook entry');
            if(route==='profile.html'&&!await page.locator('a[href^="mailto:"]').count())throw Error('Missing email contact');
            // One readable screenshot per page/engine at mobile and desktop sizes.
            if(vp.name!=='narrow-phone')await page.screenshot({path:path.join(out,key+'.png'),animations:'disabled',timeout:45000});
            // Verify actual gallery interaction on desktop and standard phones in every browser engine.
            if(vp.name!=='narrow-phone') {
              const card=page.locator('button[data-image]:visible').first();
              if(await card.count()) {
                await card.click({timeout:12000});
                await page.waitForFunction(() => !!document.querySelector('dialog#lightbox')?.open,null,{timeout:12000});
                await page.locator('#viewer-close').click({timeout:12000});
                if(await page.locator('dialog#lightbox').evaluate(el=>el.open))throw Error('Gallery viewer did not close');
              } else throw Error('No visible interactive photo card');
            }
            console.log('PASS '+key);results.push({key,ok:true,state});
          } catch(e) {console.error('FAIL '+key+' '+e.message);failures.push({key,error:e.message});results.push({key,ok:false,error:e.message});}
        }
        await context.close();
      }
    }catch(e){failures.push({engine,error:e.message});console.error('ENGINE FAIL '+engine+' '+e.message);}
    finally{if(browser)await browser.close();}
  }
  fs.writeFileSync(path.join(out,'cross-browser-report.json'),JSON.stringify({results,failures},null,2));
  console.log('Cross-browser checks '+(results.length-failures.length)+'/'+results.length+' cases, '+failures.length+' failures');
  if(failures.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1;});
