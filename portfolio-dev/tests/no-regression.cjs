/* Development-only HQ18 continuity guard. Does not publish or modify portfolio files. */
'use strict';
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'../..'),dev=path.join(root,'portfolio-dev');
const baseline=JSON.parse(fs.readFileSync(path.join(__dirname,'hq18-no-regression-baseline.json'),'utf8'));
const failures=[];
const read=(p)=>fs.readFileSync(path.join(dev,p),'utf8');
const currentSrc=read('portfolio.js');
const found=currentSrc.match(/^const PHOTOS=(\[[^\n]+\]);/);
if(!found){console.error('FAIL: unable to parse PHOTOS registry');process.exit(1)}
const photos=JSON.parse(found[1]);
const byId=new Map(photos.map(x=>[x.id,x]));
if(byId.size!==photos.length)failures.push('Duplicate registry IDs');
const prior=new Map(baseline.photos.map(x=>[x.id,x]));
for(const old of baseline.photos){
 const now=byId.get(old.id);
 if(!now){failures.push('Removed protected gallery ID '+old.id);continue}
 if(now.file!==old.file)failures.push('Changed source path for protected ID '+old.id+': '+old.file+' -> '+now.file);
 if(now.title!==old.title)failures.push('Changed protected caption for ID '+old.id+' (review baseline update if intentional)');
}
for(const photo of photos){
 if(!photo.file||!photo.title?.trim())failures.push('Missing source/title for ID '+photo.id);
 // All protected photo paths should already exist on this development checkout.
 if(photo.file && !/^https?:\/\//.test(photo.file)){
  const target=path.resolve(root,photo.file.replace(/^\/+/,'')); 
  if(!target.startsWith(root+path.sep)||!fs.existsSync(target))failures.push('Missing local source file for ID '+photo.id+': '+photo.file);
 }
}
let occurrenceCount=0;
for(const file of baseline.pages){
 const html=read(file);
 if(!/name=["']robots["'][^>]*noindex/i.test(html))failures.push('Development noindex missing: '+file);
 if(!html.includes('rrr-traditional-ink.png'))failures.push('Traditional RRR identity removed: '+file);
 const ids=[...html.matchAll(/data-image="(\d+)"/g)].map(x=>Number(x[1]));
 occurrenceCount+=ids.length;
 const oldIds=baseline.placements[file];
 const freq=a=>{const map=new Map();for(const id of a)map.set(id,(map.get(id)||0)+1);return map};
 const before=freq(oldIds),after=freq(ids);
 for(const [id,count] of before){
  if((after.get(id)||0)<count)failures.push(file+': lost '+(count-(after.get(id)||0))+' protected appearance(s) of photo '+id);
 }
 for(const id of ids)if(!byId.has(id))failures.push(file+': unknown gallery photo ID '+id);
}
// Owner-confirmed attribution: protect original Lucky Signs/Diamond Electric
// archival photograph from being reclassified as racing on future handoffs.
const story=read('profile.html');
const luckyStart=story.indexOf('id="story-business"');
const shopsStart=story.indexOf('id="story-shops"');
const racingStart=story.indexOf('id="story-racing"');
const fieldStart=story.indexOf('id="story-field"');
const luckyPhoto='IMG_4649.jpg';
if([luckyStart,shopsStart,racingStart,fieldStart].some(pos=>pos<0)||
    !(luckyStart<shopsStart && racingStart<fieldStart))
  failures.push('Missing My Story chapter boundaries for owner-identified Lucky Signs photograph');
else{
  const business=story.slice(luckyStart,shopsStart),racing=story.slice(racingStart,fieldStart);
  if(!business.includes(luckyPhoto)||!business.includes('Diamond Electric')||!business.includes('downtown Puyallup'))
    failures.push('Owner-confirmed Lucky Signs / Diamond Electric photo or attribution lost from business history');
  if(racing.includes(luckyPhoto))
    failures.push('Owner-confirmed Diamond Electric sign photograph incorrectly reclassified as racing');
}
// November 15 intake quality gate: all curated images resolve to actual
// checked-in originals; classification remains intentionally curated.
const intakeDir=path.join(dev,'incoming-portfolio-2026-11-15');
const intakePages={
  'profile.html':{required:22,sections:['new-illustration-studies','new-flatbed-printing','software-workflow-proof','new-specialty-print-processes','new-local-history-photographs']},
  'work.html':{required:4,sections:['new-technical-design-studies']},
  'production.html':{required:6,sections:['new-transfer-screenprinting-archive']}
};
for(const [page,{required,sections}] of Object.entries(intakePages)){
 const html=read(page);
 if(!html.includes('portfolio-intake-curation.css'))
   failures.push('Missing intake styles on '+page);
 for(const id of sections)if(!html.includes('id="'+id+'"'))
   failures.push('Missing curated section '+id+' on '+page);
 const urls=[...html.matchAll(/<img[^>]*src="(incoming-portfolio-2026-11-15\/[^"]+)"[^>]*>/g)];
 if(urls.length!==required)
   failures.push('New intake image count on '+page+': '+urls.length+' expected '+required);
 for(const [tag,src] of urls){
   const name=decodeURIComponent(path.basename(src)),file=path.resolve(intakeDir,name);
   if(!file.startsWith(intakeDir+path.sep)||!fs.existsSync(file))
     failures.push('Missing curated image: '+page+' '+src);
   if(!/alt="[^"]+"/.test(tag))
     failures.push('Missing meaningful curated image alt: '+src);
 }
}
const allIntakeFiles=fs.readdirSync(intakeDir).filter(x=>/\.png$/i.test(x));
if(allIntakeFiles.length<46)
 failures.push('Missing owner-upload intake source files: '+allIntakeFiles.length);
if(!read('profile.html').includes('46,560,500')||
   !read('profile.html').includes('history_childhood_jp_patches.png'))
 failures.push('Verified audience evidence or owner-identified personal-history image lost');
if(photos.length<baseline.photos.length)failures.push('Registry shrank below '+baseline.photos.length);
if(occurrenceCount<Object.values(baseline.placements).reduce((sum,a)=>sum+a.length,0))failures.push('Total gallery placements decreased');
console.log('Portfolio HQ18 guard: '+photos.length+' photo records; '+occurrenceCount+' page placements; '+baseline.photos.length+' protected baseline records.');
if(failures.length){for(const error of failures)console.error('FAIL '+error);process.exitCode=1}
else console.log('PASS: HQ18 photo IDs, source paths, captions, placements, four-page identity and noindex retained.');
