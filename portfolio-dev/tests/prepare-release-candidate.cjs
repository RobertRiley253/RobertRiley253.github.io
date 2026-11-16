/* Build a dependency-complete, UNPUBLISHED candidate. Never writes to main. */
const fs=require('node:fs'), path=require('node:path');
const root=path.resolve(__dirname,'../..');
const dev=path.join(root,'portfolio-dev');
const out=path.join(root,'release-candidate');
const pages=['index.html','work.html','production.html','profile.html'];
fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out,{recursive:true});
const copied=new Set(), missing=new Set(), paths=new Set(), edits=[];
function safe(rel){const clean=rel.replace(/\\/g,'/').replace(/^\/+/,'');if(!clean||clean==='.'||clean.split('/').includes('..'))throw Error('Unsafe path: '+rel);return clean;}
function copy(from,to){
  from=safe(from);to=safe(to);
  const file=path.join(root,from);
  if(!fs.existsSync(file)||!fs.statSync(file).isFile()){missing.add(from);return false;}
  const target=path.join(out,to);
  if(!copied.has(to)){fs.mkdirSync(path.dirname(target),{recursive:true});fs.copyFileSync(file,target);copied.add(to);}
  paths.add(from);return true;
}
function resolveAsset(uri){
  if(!uri||uri.startsWith('#')||/^(?:mailto:|tel:|data:|javascript:)/i.test(uri))return null;
  let u=uri.split('#')[0].split('?')[0];
  const raw=/^https:\/\/raw\.githubusercontent\.com\/RobertRiley253\/RobertRiley253\.github\.io\/[^/]+\//i;
  const live=/^https:\/\/robertriley253\.github\.io\//i;
  if(raw.test(u))u=u.replace(raw,'');
  else if(live.test(u))u=u.replace(live,'');
  else if(/^https?:\/\//i.test(u))return null;
  u=decodeURIComponent(u).replace(/^\/+/,'');
  if(!u||u.endsWith('.html'))return null;
  return safe(u);
}
function assetToSource(asset){
  if(fs.existsSync(path.join(dev,asset)))return ['portfolio-dev/'+asset,asset];
  if(fs.existsSync(path.join(root,asset)))return [asset,asset];
  return [asset,asset];
}
function rewrite(text){
  return text.replace(/https:\/\/raw\.githubusercontent\.com\/RobertRiley253\/RobertRiley253\.github\.io\/[^/'"\s)]+\//gi,'')
    .replace(/https:\/\/robertriley253\.github\.io\//gi,'');
}
function scanUris(text){
  const urls=[];
  for(const m of text.matchAll(/\b(?:href|src|poster)=["']([^"']+)["']/gi))urls.push(m[1]);
  for(const m of text.matchAll(/url\(\s*["']?([^)'"]+)["']?\s*\)/gi))urls.push(m[1]);
  return urls;
}
for(const page of pages){
  const content=fs.readFileSync(path.join(dev,page),'utf8');
  const dest=path.join(out,page);
  let updated=rewrite(content).replace(/<meta name="robots" content="noindex,nofollow">/g,'');
  // Public-only canonical address and link preview for resumes and employer correspondence.
  const title=(updated.match(/<title>([^<]+)<\/title>/)||[])[1];
  const desc=(updated.match(/<meta name="description" content="([^"]+)"/)||[])[1];
  if(!title||!desc)throw Error('Public metadata missing on '+page);
  const absolute='https://robertriley253.github.io/'+page;
  const escapeAttr=value=>value.replace(/&amp;/g,'&').replace(/&/g,'&amp;').replace(/"/g,'&quot;');
  const metadata=[
   '<link rel="canonical" href="'+absolute+'">',
   '<meta property="og:type" content="website">',
   '<meta property="og:title" content="'+escapeAttr(title)+'">',
   '<meta property="og:description" content="'+escapeAttr(desc)+'">',
   '<meta property="og:url" content="'+absolute+'">',
   '<meta property="og:image" content="https://robertriley253.github.io/portfolio-001.jpg">',
   '<meta name="twitter:card" content="summary_large_image">'
  ].join('');
  if(updated.includes('rel="canonical"'))throw Error('Duplicate canonical metadata: '+page);
  updated=updated.replace('</head>',metadata+'</head>');
  fs.writeFileSync(dest,updated);
  copied.add(page);
  for(const uri of scanUris(content)){const asset=resolveAsset(uri);if(!asset)continue;const [src,dst]=assetToSource(asset);copy(src,dst);}
  edits.push({page,removedNoindex:!updated.includes('name="robots" content="noindex'),convertedAssetUrls:content!==updated});
}
const js=fs.readFileSync(path.join(dev,'portfolio.js'),'utf8');
copy('portfolio-dev/portfolio.js','portfolio.js');
for(const m of js.matchAll(/"file":"([^"]+)"/g)){const asset=resolveAsset(m[1]);if(asset){const [src,dst]=assetToSource(asset);copy(src,dst);}}
/* CSS may reference background artwork not directly used in HTML. */
let inspected=new Set();
while(true){
  const css=[...copied].filter(f=>f.endsWith('.css')&&!inspected.has(f));
  if(!css.length)break;
  for(const f of css){
    inspected.add(f);const content=fs.readFileSync(path.join(out,f),'utf8');
    for(const uri of scanUris(content)){
      const target=resolveAsset(uri);if(!target)continue;
      const local=path.posix.normalize(path.posix.join(path.posix.dirname(f),target));
      const [src,dst]=assetToSource(local);copy(src,dst);
    }
  }
}
const required=['portfolio.js',...pages];
for(const name of required)if(!copied.has(name))missing.add(name);
const imageCount=[...copied].filter(f=>/\.(jpg|jpeg|png|webp|avif|gif)$/i.test(f)).length;
if(imageCount<160)throw Error('Insufficient images copied: '+imageCount);
const report={publicSiteUpdated:false,sourceBranch:process.env.GITHUB_REF_NAME||'development',pages,filesCopied:copied.size,imagesCopied:imageCount,missing:[...missing],edits};
fs.writeFileSync(path.join(out,'release-manifest.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
if(missing.size)process.exitCode=1;