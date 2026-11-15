/* Development-only contact sheets of not-yet-displayed upload sources.
   Uses checked-out original files through local test server. No deploy. */
const {chromium}=require('playwright');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..','..');
const csv=path.join(root,'portfolio-dev/audit/IMAGE_ASSET_DISPOSITION_CROSSWALK_2026-11-15.csv');
const out=path.join(root,'portfolio-dev/browser-qa','unplaced-contact');
fs.mkdirSync(out,{recursive:true});
function parseCsvLine(line){
 const cells=[]; let cell='',quoted=false;
 for(let i=0;i<line.length;i++){
  const c=line[i];
  if(c==='"'){if(quoted&&line[i+1]==='"'){cell+='"';i++}else quoted=!quoted}
  else if(c===','&&!quoted){cells.push(cell);cell=''}
  else cell+=c;
 }
 cells.push(cell);return cells;
}
const rows=fs.readFileSync(csv,'utf8').trim().split(/\r?\n/).slice(1).map(parseCsvLine);
const items=rows.filter(r=>r[4]==='UNPLACED_REVIEW').map(r=>({path:r[0],bytes:Number(r[2])}));
const htmlEscape=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
(async()=>{
 const browser=await chromium.launch({headless:true});
 const page=await browser.newPage({viewport:{width:1480,height:1080},deviceScaleFactor:1});
 const report={count:items.length,files:[],sheets:[]};
 for(let start=0;start<items.length;start+=12){
  const batch=items.slice(start,start+12);
  const markup=batch.map((x,i)=>{
   const src='http://127.0.0.1:8765/'+x.path.split('/').map(encodeURIComponent).join('/');
   return '<figure><div class="image"><img src="'+src+'"></div><figcaption><b>'+String(start+i+1)+'. '+htmlEscape(path.basename(x.path))+'</b><small>'+htmlEscape(x.path.split('/').slice(0,-1).join('/'))+'</small></figcaption></figure>';
  }).join('');
  await page.setContent('<!doctype html><html><head><meta charset="utf-8"><style>*{box-sizing:border-box}body{font:13px Arial,sans-serif;background:#e9e7de;margin:0;padding:15px}h1{font-size:17px;margin:0 0 12px}main{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-template-rows:repeat(3,327px);gap:13px}figure{margin:0;background:white;border:1px solid #aaa;display:flex;flex-direction:column;overflow:hidden}.image{height:265px;display:flex;justify-content:center;align-items:center;background:#f0f0ee}.image img{max-width:100%;max-height:100%;object-fit:contain}figcaption{padding:8px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}figcaption small{display:block;color:#555;margin-top:5px}</style></head><body><h1>Unplaced uploads · originals only · '+(start+1)+'–'+(start+batch.length)+' / '+items.length+'</h1><main>'+markup+'</main></body></html>');
  await page.waitForFunction(()=>[...document.querySelectorAll('img')].every(img=>img.complete),null,{timeout:30000});
  const states=await page.locator('figure').evaluateAll(fs=>fs.map(f=>{const i=f.querySelector('img');return {loaded:i.naturalWidth>0,w:i.naturalWidth,h:i.naturalHeight}}));
  batch.forEach((b,i)=>report.files.push({...b,...states[i]}));
  const filename='unplaced-'+String(Math.floor(start/12)+1).padStart(2,'0')+'.png';
  await page.screenshot({path:path.join(out,filename),animations:'disabled'});
  report.sheets.push(filename);
  console.log('Saved contact sheet',filename,'image decodes',states.filter(x=>x.loaded).length+'/'+states.length);
 }
 fs.writeFileSync(path.join(out,'manifest.json'),JSON.stringify(report,null,2));
 await browser.close();
 console.log('Unplaced originals inspected:',report.files.length,'loaded:',report.files.filter(x=>x.loaded).length);
})().catch(e=>{console.error(e);process.exitCode=1});
