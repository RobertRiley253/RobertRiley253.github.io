/* Development-only portfolio browser smoke checks. No deploy, no writes to main. */
const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');

(async () => {
  const output = path.join(__dirname, '..', 'browser-qa');
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const report = { timestamp: new Date().toISOString(), branch: process.env.GITHUB_REF_NAME || 'local', pages: [], failures: [] };
  const base = process.env.PORTFOLIO_TEST_URL || 'http://127.0.0.1:8765/portfolio-dev/';
  const pages = ['index.html', 'work.html', 'production.html', 'profile.html'];
  const viewports = [{ name: 'desktop', width: 1440, height: 900 }, { name: 'mobile', width: 375, height: 812 }, { name: 'small-phone', width: 320, height: 720 }];
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport, deviceScaleFactor: 1, reducedMotion: 'reduce' });
    for (const name of pages) {
      const id = name.replace('.html', '') + '-' + viewport.name;
      const result = { name, viewport: viewport.name, ok: false };
      try {
        await page.goto(base + name, { waitUntil: 'domcontentloaded', timeout: 25000 });
        await page.locator('h1').first().waitFor({ timeout: 10000 });
        const observations = await page.evaluate(() => ({
          title: document.title,
          width: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          h1: document.querySelectorAll('h1').length,
          noindex: !!document.querySelector('meta[name="robots"][content*="noindex"]'),
          cards: document.querySelectorAll('[data-image]').length,
          missingAlts: [...document.images].filter(img => !img.hasAttribute('alt')).length,
          duplicateIds: (() => { const ids = [...document.querySelectorAll('[id]')].map(el => el.id); return ids.length - new Set(ids).size; })(),
          overflowElements: [...document.querySelectorAll('body *')].filter(el => { const r = el.getBoundingClientRect(); const st = getComputedStyle(el); return st.position !== 'fixed' && st.display !== 'none' && r.width > 0 && (r.right > innerWidth + 2 || r.left < -2); }).slice(0, 12).map(el => ({ tag: el.tagName, class: String(el.className).slice(0, 85), text: (el.textContent || '').trim().slice(0, 40), right: Math.round(el.getBoundingClientRect().right) }))
        }));
        result.observations = observations;
        if (observations.h1 !== 1) throw new Error('Expected exactly one main heading');
        if (!observations.noindex) throw new Error('Missing noindex meta');
        if (observations.missingAlts || observations.duplicateIds) throw new Error('Missing alt text or duplicate IDs');
        if (observations.scrollWidth > viewport.width + 2) throw new Error('Horizontal overflow ' + observations.scrollWidth + 'px at ' + viewport.width + 'px; elements=' + JSON.stringify(observations.overflowElements));
        await page.screenshot({ path: path.join(output, id + '.png'), animations: 'disabled', timeout: 25000 });
        const first = page.locator('[data-image]').first();
        if (await first.count()) {
          await first.scrollIntoViewIfNeeded();
          // Wait for the actual visible lazy-loaded gallery photographs to decode.
          // Without this, screenshot capture races image loading and shows empty frames.
          await page.waitForFunction(() => [...document.querySelectorAll('.image-card img')]
            .filter(img => { const r = img.getBoundingClientRect(); return r.bottom > -100 && r.top < innerHeight + 100; })
            .every(img => img.complete && img.naturalWidth > 0), null, { timeout: 20000 });
          await page.screenshot({ path: path.join(output, id + '-gallery.png'), animations: 'disabled', timeout: 25000 });
          await first.click({ timeout: 12000 });
          const dialog = page.locator('dialog#lightbox');
          await dialog.waitFor({ state: 'visible', timeout: 5000 });
          if (!await dialog.evaluate(node => node.open)) throw new Error('Lightbox failed to open');
          await page.keyboard.press('ArrowRight');
          if (!await page.locator('#viewer-count').textContent()) throw new Error('Viewer count missing');
          await page.keyboard.press('Escape');
          if (await dialog.evaluate(node => node.open)) throw new Error('Escape failed to close viewer');
        }
        if (name === 'work.html') {
          const archive = page.locator('details.related-archive').first();
          if (await archive.count()) {
            await archive.locator('summary').click();
            if (!await archive.evaluate(node => node.open)) throw new Error('Archive failed to expand');
          }
        }
        result.ok = true;
      } catch (error) {
        result.error = String(error.message || error);
        report.failures.push(id + ': ' + result.error);
        try { await page.screenshot({ path: path.join(output, id + '-failure.png'), timeout: 10000 }); } catch {}
      }
      report.pages.push(result);
      console.log((result.ok ? 'PASS ' : 'FAIL ') + id + (result.error ? ' — ' + result.error : ''));
    }
    await page.close();
  }
  // Validate actual browser image decoding for all preserved originals and nine review previews.
  const assetPage = await browser.newPage();
  try {
    await assetPage.goto(base + 'index.html', { waitUntil: 'domcontentloaded', timeout: 25000 });
    const imageResults = await assetPage.evaluate(async () => {
      const selected = PHOTOS;
      return Promise.all(selected.map(photo => new Promise(resolve => {
        const img = new Image();
        const timer = setTimeout(() => resolve({ id: photo.id, file: photo.file, loaded: false, error: 'timeout' }), 15000);
        img.onload = () => { clearTimeout(timer); resolve({ id: photo.id, file: photo.file, loaded: img.naturalWidth > 0, width: img.naturalWidth, height: img.naturalHeight }); };
        img.onerror = () => { clearTimeout(timer); resolve({ id: photo.id, file: photo.file, loaded: false, error: 'image error' }); };
        img.src = photo.file.startsWith('incoming-portfolio/previews/')
          ? 'https://raw.githubusercontent.com/RobertRiley253/RobertRiley253.github.io/portfolio-development-2026-11-12/' + photo.file
          : 'https://robertriley253.github.io/' + photo.file;
      })));
    });
    report.imageChecks = imageResults;
    for (const asset of imageResults) {
      if (!asset.loaded) report.failures.push('Image failed to load: ' + asset.file + ' (' + asset.error + ')');
    }
    console.log('Browser image decoding: ' + imageResults.filter(asset => asset.loaded).length + '/' + imageResults.length + ' portfolio photographs (originals and previews)');
  } catch (error) {
    report.failures.push('Browser image checks: ' + String(error.message || error));
  } finally {
    await assetPage.close();
  }
  await browser.close();
  fs.writeFileSync(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
  if (report.failures.length) {
    console.error('Browser checks failed: ' + report.failures.length + '/' + report.pages.length);
    process.exitCode = 1;
  } else {
    console.log('All ' + report.pages.length + ' desktop/mobile page checks passed.');
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
