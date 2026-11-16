/* Review-only archive contact sheets; never publishes uploaded images. */
const fs=require('node:fs'),path=require('node:path');
const {chromium}=require('playwright');
const root=path.resolve(__dirname,'..','..');
const source=path.join(root,'Rob-Photo-Uploads','Racing-Archive');
const out=path.join(root,'portfolio-dev','browser-qa','racing-upload-review');
fs.mkdirSync(out,{recursive:true});
const files=fs.readdirSync(source).filter(x=>/\.(jpg|jpeg|png|webp)$/i.test(x)).sort();
const escape=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
(async()=>{
 const browser=await chromium.launch({headless:true});
 const page=await browser.newPage({viewport:{width:1536,height:1120},deviceScaleFactor:1});
 let results=[];
 for(let n=0;n<files.length;n+=12){
  const batch=files.slice(n,n+12);
  const html=batch.map((f,i)=>{
   const p='Rob-Photo-Uploads/Racing-Archive/'+f;
   const src='http://127.0.0.1:8765/'+p.split('/').map(encodeURIComponent).join('/');
   return '<figure><div class="image"><img src="'+src+'"></div><figcaption><b>'+(n+i+1)+'. '+escape(f)+'</b></figcaption></figure>';
  }).join('');
  await page.setContent('<!doctype html><html><head><meta charset="utf-8"><style>*{box-sizing:border-box}body{margin:0;padding:18px;background:#e8e5da;font:15px system-ui,sans-serif}h1{margin:0 0 14px;font-size:20px}main{display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(3,336px);gap:12px}figure{margin:0;min-width:0;background:white;border:1px solid #aaa;overflow:hidden}.image{display:flex;justify-content:center;align-items:center;background:#ddd;height:296px}.image img{max-width:100%;max-height:100%;object-fit:contain}figcaption{padding:8px;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}</style></head><body><h1>Racing Archive · Original Upload Contact Sheet '+(Math.floor(n/12)+1)+' / '+Math.ceil(files.length/12)+'</h1><main>'+html+'</main></body></html>');
  await page.waitForFunction(()=>[...document.images].every(i=>i.complete),null,{timeout:30000});
  const info=await page.locator('img').evaluateAll(nodes=>nodes.map(i=>({loaded:i.naturalWidth>0,width:i.naturalWidth,height:i.naturalHeight})));
  batch.forEach((f,i)=>results.push({filename:f,...info[i]}));
  await page.screenshot({path:path.join(out,'racing-upload-'+String(Math.floor(n/12)+1).padStart(2,'0')+'.png'),animations:'disabled'});
 }
 fs.writeFileSync(path.join(out,'manifest.json'),JSON.stringify(results,null,2));
 await browser.close();
 console.log('Racing upload review',results.length,'images,',results.filter(x=>x.loaded).length,'decoded');
})().catch(e=>{console.error(e);process.exit(1)});
