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
   // Protect owner-approved employer-first sequence; this is a loading batch, not a chapter boundary.
   const inventory=await page.evaluate(()=>{
     const raw=document.querySelector('#album-data')?.textContent;
     const items=JSON.parse(raw||'[]');
     return {total:items.length,unique:new Set(items.map(x=>x.f)).size,
       missing:items.filter(x=>!x.f||!x.t||!x.c).length,
       first:items.slice(0,48).map(x=>x.c),
       last:items.slice(-14).map(x=>x.c),
       categoryNames:[...new Set(items.map(x=>x.c))]};
   });
   if(inventory.total!==259||inventory.unique!==259||inventory.missing)throw Error('Album source manifest loss/duplication');
   if(inventory.first.some(c=>!['Signs & Design','Vehicles & Wraps','Illustration & Print'].includes(c)))throw Error('Nonprofessional category inserted into first 48');
   if(inventory.last.some(c=>c!=='History & Memories'))throw Error('Historical finale moved');
   const sequence=['Signs & Design','Vehicles & Wraps','Illustration & Print'];
   const sorted=inventory.first.slice().sort((a,b)=>sequence.indexOf(a)-sequence.indexOf(b));
   if(JSON.stringify(sorted)!==JSON.stringify(inventory.first))throw Error('Opening image groups lose coherent order');
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
    await page.getByRole('button',{name:/See the next/}).click();
    if(await page.locator('.album-card').count()<=count)throw Error('Show more failed');
    if(!(await page.locator('#album-progress-label').innerText()).includes('96 of 259'))throw Error('Progress tally not updated after paging');
    if(!(await page.locator('#album-remaining').innerText()).includes('163 more'))throw Error('Remaining photo total incorrect');
    await page.waitForFunction(()=>{const card=document.querySelector('.album-card[data-index="48"]');if(!card)return false;const box=card.getBoundingClientRect();return box.top>=-8&&box.top<innerHeight*.55},null,{timeout:4000}).catch(()=>{throw Error('The next batch did not scroll into view')});
    if(!await page.locator('.album-card[data-index="48"]').evaluate(el=>el===document.activeElement))throw Error('New photographs did not receive keyboard focus');
    if(await page.locator('.album-hero-collection img').count()!==4)throw Error('Four-photo hero composition missing');
    const fbImgs=await page.locator('.album-social-photographs img').count();if(fbImgs!==3)throw Error('Historical photo previews missing: '+fbImgs);
    const fbProfile=page.locator('.album-social-primary[href="https://www.facebook.com/rox.riley"]');
    if(await fbProfile.count()!==1)throw Error('Personal Facebook follow action missing');
    const historyLink=page.locator('.album-social-photographs[href="https://www.facebook.com/rox.riley"]');
    if(await historyLink.count()!==1)throw Error('History photo preview must lead to Facebook stories');
    if(await page.locator('.album-social-button-logo').count()!==1)throw Error('Branded Facebook call to action missing');
    if(await page.locator('.album-social-preview span').count()!==3)throw Error('Three kinds of Facebook content not clearly explained');
    if(await page.locator('.album-social-photo-cta').count()!==1)throw Error('Historical picture preview click affordance missing');
    const insights=await page.locator('.album-social-insights').innerText();
    if(!insights.includes('46,560,500')||!/606[- ]day(?:s)?/.test(insights))throw Error('Facebook Insights missing or imprecise');
    const historyCards=page.locator('#robert-history-communities .history-community-card');
    if(await historyCards.count()!==6)throw Error('Expected six verified history groups');
    const ids=['1564227011225101','1737856936769524','698198932918069','1122626339331764','9675742525806537','1198695048625003'];
    for(const id of ids)if(await historyCards.locator('[href="https://www.facebook.com/groups/'+id+'"]').count()!==1&&await page.locator('#robert-history-communities .history-community-card[href="https://www.facebook.com/groups/'+id+'"]').count()!==1)throw Error('Group link mismatch '+id);
    const communityPhotos=page.locator('#robert-history-communities .history-community-card .history-community-art img');
    if(await communityPhotos.count()!==6)throw Error('Every community must have one banner photograph');
    const vault=page.locator('#robert-history-communities .history-community-card').nth(2);
    const vaultLayout=await vault.evaluate(el=>({display:getComputedStyle(el).display,zoom:getComputedStyle(el).getPropertyValue('--cover-zoom').trim(),height:el.getBoundingClientRect().height}));
    if(vaultLayout.display!=='flex'||parseFloat(vaultLayout.zoom)<1.3)throw Error('Time Vault must have a compact card with readable optically cropped artwork');
    for(const image of await communityPhotos.all()){await image.scrollIntoViewIfNeeded();await image.evaluate(img=>img.decode().catch(()=>{}));if(!await image.evaluate(img=>img.complete&&img.naturalWidth>0))throw Error('Uploaded group photograph failed to render: '+await image.getAttribute('src'));}
    const exactArt={'1564227011225101':'542002597_','1737856936769524':'497586346_','698198932918069':'506466145_','1122626339331764':'571242153_','9675742525806537':'526356936_','1198695048625003':'494663516_'};
    for(const [id,part] of Object.entries(exactArt)){const src=await page.locator('#robert-history-communities .history-community-card[href="https://www.facebook.com/groups/'+id+'"] img').getAttribute('src');if(!src?.includes(part))throw Error('Wrong cover art matched to group '+id);}
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
