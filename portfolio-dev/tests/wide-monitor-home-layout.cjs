/* Regression coverage for owner's 1920-wide desktop screenshot. */
const {chromium}=require('playwright');
const path=require('node:path');
(async()=>{
 const browser=await chromium.launch({headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1920,height:1080},deviceScaleFactor:1});
  const base=process.env.PORTFOLIO_TEST_URL||'http://127.0.0.1:8765/portfolio-dev/';
  await page.goto(base+'index.html',{waitUntil:'domcontentloaded',timeout:45000});
  await page.locator('.career-positioning-main h2').scrollIntoViewIfNeeded();
  const values=await page.evaluate(()=>{
   const rect=s=>document.querySelector(s).getBoundingClientRect();
   const box=r=>({x:r.x,y:r.y,width:r.width,height:r.height,right:r.right,bottom:r.bottom});
   const section=rect('.career-positioning');
   const title=rect('.career-positioning-main h2');
   const paragraph=rect('.career-positioning-main > p');
   const links=rect('.career-positioning-links');
   return {section:box(section),title:box(title),paragraph:box(paragraph),links:box(links),
     padding:getComputedStyle(document.querySelector('.career-positioning')).paddingLeft,
     scrollWidth:document.documentElement.scrollWidth};
  });
  if(values.title.width<300)throw Error('Headline unexpectedly narrow '+JSON.stringify(values));
  if(values.paragraph.width<240)throw Error('Career paragraph unexpectedly narrow '+JSON.stringify(values));
  if(values.title.right>values.paragraph.x-8)throw Error('Career headline and paragraph overlap '+JSON.stringify(values));
  if(values.links.x<values.section.x-1||values.links.right>values.section.right+1)throw Error('Action links overflow section '+JSON.stringify(values));
  if(values.scrollWidth>1922)throw Error('Horizontal document overflow '+JSON.stringify(values));
  const fs=require('node:fs');const dir=path.join(__dirname,'../browser-qa');fs.mkdirSync(dir,{recursive:true});
  await page.locator('.career-positioning').screenshot({path:path.join(dir,'owner-1920-wide-home-career-section.png'),animations:'disabled'});
  console.log('PASS owner 1920px wide homepage career layout '+JSON.stringify(values));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
