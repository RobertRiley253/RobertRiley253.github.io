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
  const viewports = [{ name: 'desktop', width: 1440, height: 900 }, { name: 'laptop', width: 1024, height: 768 }, { name: 'tablet', width: 768, height: 900 }, { name: 'large-phone', width: 430, height: 932 }, { name: 'mobile', width: 375, height: 812 }, { name: 'small-phone', width: 320, height: 720 }];
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
        const brokenAnchors = await page.evaluate(() => [...document.querySelectorAll('a[href^="#"]')]
          .filter(a => a.getAttribute('href').length > 1 && !document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1))))
          .map(a => a.getAttribute('href')));
        if (brokenAnchors.length) throw new Error('Broken same-page anchor(s): ' + brokenAnchors.join(', '));
        if (observations.missingAlts || observations.duplicateIds) throw new Error('Missing alt text or duplicate IDs');
        if (observations.scrollWidth > viewport.width + 2) throw new Error('Horizontal overflow ' + observations.scrollWidth + 'px at ' + viewport.width + 'px; elements=' + JSON.stringify(observations.overflowElements));
        await page.screenshot({ path: path.join(output, id + '.png'), animations: 'disabled', timeout: 25000 });
        if (['desktop','mobile'].includes(viewport.name)) {
          // Browser fullPage screenshots alone do not trigger below-the-fold lazy loading.
          // Scroll through the full document first, then return to top and capture.
          await page.evaluate(async () => {
            document.documentElement.style.scrollBehavior = 'auto';
            const step = Math.max(350, Math.round(innerHeight * 0.8));
            for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
              window.scrollTo(0, y);
              await new Promise(resolve => setTimeout(resolve, 65));
            }
            window.scrollTo(0, 0);
          });
          await page.waitForFunction(() => [...document.querySelectorAll('img')]
            .filter(img => img.getClientRects().length && !img.closest('details:not([open])'))
            .every(img => img.complete && img.naturalWidth > 0), null, { timeout: 25000 });
          await page.waitForTimeout(250);
          await page.screenshot({ path: path.join(output, id + '-full.png'), fullPage: true, animations: 'disabled', timeout: 45000 });
        }
        // Late-gallery visual safeguard: distinguish accessible source files from
        // actual decoded images rendered in the long Production page.
        // These HQ18 cards appeared as empty image frames in a prior full-page screenshot,
        // despite the separate 172/172 source-asset preflight passing.
        if (name === 'production.html' && ['desktop','mobile'].includes(viewport.name)) {
          const ids = [99, 155, 158, 159, 172, 106, 107];
          const states = [];
          for (const id of ids) {
            const img = page.locator('[data-image="' + id + '"] img').first();
            if (await img.count() !== 1) throw new Error('Missing late-gallery image card ' + id);
            await img.scrollIntoViewIfNeeded();
            try {
              await img.waitFor({ state: 'visible', timeout: 15000 });
              await img.evaluate(async node => {
                if (!node.complete) await new Promise((resolve, reject) => {
                  const timer = setTimeout(() => reject(new Error('Image load timeout')), 15000);
                  node.addEventListener('load', () => { clearTimeout(timer); resolve(); }, { once: true });
                  node.addEventListener('error', () => { clearTimeout(timer); reject(new Error('Image error')); }, { once: true });
                });
                if (node.decode) await node.decode();
              });
            } catch(e) {
              states.push({ id, error: String(e.message||e) });
              continue;
            }
            states.push(await img.evaluate(node => ({
              id: Number(node.closest('[data-image]').dataset.image),
              loaded: node.complete && node.naturalWidth > 0,
              naturalWidth: node.naturalWidth,
              renderWidth: Math.round(node.getBoundingClientRect().width),
              renderHeight: Math.round(node.getBoundingClientRect().height),
              visibility: getComputedStyle(node).visibility,
              opacity: getComputedStyle(node).opacity,
              source: node.currentSrc
            })));
          }
          result.lateGalleryEvidence = states;
          for (const state of states) {
            if (!state.loaded || !state.renderWidth || !state.renderHeight || state.visibility === 'hidden' || state.opacity === '0')
              throw new Error('Late-gallery image not visibly decoded: ' + JSON.stringify(state));
          }
          // Check actual paint in a normal viewport, since oversized fullPage
          // screenshots can omit some compositor layers despite decoded images.
          for (const photoId of [99, 155]) {
            await page.locator('[data-image="' + photoId + '"]').first().scrollIntoViewIfNeeded();
            await page.waitForTimeout(200);
            await page.screenshot({ path: path.join(output, 'production-photo-' + photoId + '-' + viewport.name + '.png'), animations: 'disabled', timeout: 25000 });
          }
          await page.locator('#new-studio-photography').scrollIntoViewIfNeeded();
          await page.screenshot({ path: path.join(output, 'production-late-gallery-' + viewport.name + '.png'), animations: 'disabled', timeout: 25000 });
        }
        // HQ9: verify real Lucky Signs historical imagery, not the former commercial van stand-in.
        if (name === 'profile.html') {
          const history = page.locator('#story-racing');
          if (await history.count() !== 1) throw new Error('Missing motorsports history chapter');
          for (const filename of ['IMG_4623.jpg', 'IMG_4626.jpg']) {
            const img = history.locator('img[src*="' + filename + '"]');
            if (await img.count() !== 1) throw new Error('Expected one racing image ' + filename);
            await img.scrollIntoViewIfNeeded();
            await img.evaluate(async node => {
              if (!node.complete) await new Promise((resolve, reject) => {
                node.addEventListener('load', resolve, { once: true });
                node.addEventListener('error', () => reject(new Error('Historical photograph download failed')), { once: true });
              });
              if (node.decode && node.naturalWidth > 0) await node.decode();
            });
            const state = await img.evaluate(node => ({ complete: node.complete,
              naturalWidth: node.naturalWidth, naturalHeight: node.naturalHeight,
              alt: node.alt, src: node.currentSrc }));
            if (!state.complete || state.naturalWidth < 150 || !state.alt)
              throw new Error('Racing image failed: ' + JSON.stringify(state));
          }
        }
        // HQ18: independently verify all retained production-evidence photographs (expanded beyond HQ9's six).
        if (name === 'production.html') {
          const evidence = page.locator('#real-shop-equipment');
          if (await evidence.count() !== 1) throw new Error('Expected one equipment evidence section');
          await evidence.scrollIntoViewIfNeeded();
          const photos = evidence.locator('.hq8-shop-proof');
          const photoCount = await photos.count();
          // HQ18 expanded the original six-photo section to twelve; preserve all additions.
          if (photoCount < 12) throw new Error('Lost shop-evidence photographs: expected at least 12, found ' + photoCount);
          const diagnostics = [];
          for (let i = 0; i < photoCount; i++) {
            const figure = photos.nth(i);
            const img = figure.locator('img');
            await img.scrollIntoViewIfNeeded();
            await img.evaluate(async node => {
              if (!node.complete) await new Promise((resolve, reject) => {
                node.addEventListener('load', resolve, { once: true });
                node.addEventListener('error', () => reject(new Error('Image download failed')), { once: true });
              });
              if (node.decode && node.naturalWidth > 0) await node.decode();
            });
            const state = await figure.evaluate(node => {
              const img = node.querySelector('img');
              const link = node.querySelector('a');
              const caption = node.querySelector('figcaption');
              const imageRect = img.getBoundingClientRect();
              const captionRect = caption.getBoundingClientRect();
              return { src: img.currentSrc, loaded: img.complete && img.naturalWidth > 0,
                naturalWidth: img.naturalWidth, naturalHeight: img.naturalHeight,
                imageWidth: Math.round(imageRect.width), imageHeight: Math.round(imageRect.height),
                captionGap: Math.round(captionRect.top - imageRect.bottom),
                captionText: caption.textContent.trim(),
                originalLinkMatches: link.href === img.src };
            });
            diagnostics.push(state);
            if (!state.loaded || !state.originalLinkMatches || !state.captionText)
              throw new Error('Shop evidence photo ' + (i + 1) + ' failed load/link/caption QA: ' + JSON.stringify(state));
            if (state.imageWidth < 100 || state.imageHeight < 75 || state.captionGap < -3 || state.captionGap > 48)
              throw new Error('Shop evidence photo ' + (i + 1) + ' has abnormal geometry: ' + JSON.stringify(state));
          }
          result.shopEvidence = diagnostics;
          if (['desktop','mobile'].includes(viewport.name)) {
            await evidence.scrollIntoViewIfNeeded();
            await page.screenshot({ path: path.join(output, 'production-hq9-equipment-' + viewport.name + '.png'), animations: 'disabled' });
          }
        }
        const first = page.locator('[data-image]').first();
        if (await first.count()) {
          await first.scrollIntoViewIfNeeded();
          // Wait for the actual visible lazy-loaded gallery photographs to decode.
          // Without this, screenshot capture races image loading and shows empty frames.
          await page.waitForFunction(() => [...document.querySelectorAll('.image-card img')]
            .filter(img => { const r = img.getBoundingClientRect(); return r.bottom > -100 && r.top < innerHeight + 100; })
            .every(img => img.complete && img.naturalWidth > 0), null, { timeout: 20000 });
          result.galleryImageState = await first.locator('img').first().evaluate(img => {
            const css = getComputedStyle(img);
            const rect = img.getBoundingClientRect();
            return { complete: img.complete, naturalWidth: img.naturalWidth, naturalHeight: img.naturalHeight,
              hidden: img.hidden, display: css.display, visibility: css.visibility, opacity: css.opacity,
              rectWidth: Math.round(rect.width), rectHeight: Math.round(rect.height),
              fallback: !!img.closest('.image-wrap')?.querySelector('.image-unavailable') };
          });
          // Give Chromium one paint opportunity after decode before capturing gallery imagery.
          await page.waitForTimeout(250);
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
        // Navigation should lead to another actual page, not simply show a styled label.
        const navLinks = await page.locator('.nav a').count();
        if (navLinks !== 4) throw new Error('Expected exactly four navigable main sections, got ' + navLinks);
        const current = page.locator('.nav a[aria-current="page"]');
        if (await current.count() !== 1) throw new Error('Missing or repeated current-page navigation marker');
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
  // 200% browser-layout simulation: CSS zoom exercises text, buttons and layout together.
  // This is not a substitute for human screen magnification / native browser zoom review.
  for (const name of pages) {
    const page = await browser.newPage({ viewport: { width: 768, height: 900 }, reducedMotion: 'reduce' });
    const id = name.replace('.html','') + '-zoom200';
    try {
      await page.goto(base + name, { waitUntil: 'domcontentloaded', timeout: 25000 });
      await page.evaluate(() => { document.documentElement.style.zoom = '2'; });
      await page.waitForTimeout(125);
      const dims = await page.evaluate(() => ({ windowWidth: innerWidth, documentWidth: document.documentElement.scrollWidth, hasHorizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 2 }));
      if (dims.hasHorizontalOverflow) throw Error('Horizontal overflow at 200% zoom: ' + JSON.stringify(dims));
      await page.screenshot({ path: path.join(output, id + '.png'), animations: 'disabled', timeout: 25000 });
      report.pages.push({ name, viewport: 'zoom200', ok: true, observations: dims });
      console.log('PASS ' + id);
    } catch(error) {
      report.pages.push({ name, viewport: 'zoom200', ok: false, error: String(error.message || error) });
      report.failures.push(id + ': ' + String(error.message || error));
      console.log('FAIL ' + id + ' — ' + String(error.message || error));
    }
    await page.close();
  }
  // Verify every registered original from the exact checked-out development commit.
  // Avoid the former hard-coded older branch and public 'main' URLs, which falsely
  // reported newly uploaded images as missing although they exist in this checkout.
  const assetPage = await browser.newPage();
  try {
    await assetPage.goto(base + 'index.html', { waitUntil: 'domcontentloaded', timeout: 25000 });
    const imageResults = await assetPage.evaluate(async ({ baseUrl }) => {
      const selected = PHOTOS;
      const results = [];
      // Bounded batches avoid racing 172 image decodes and exhausting Chromium memory.
      for (let index = 0; index < selected.length; index += 8) {
        const group = selected.slice(index, index + 8);
        const batch = await Promise.all(group.map(photo => new Promise(resolve => {
          const img = new Image();
          const timer = setTimeout(() => resolve({ id: photo.id, file: photo.file, loaded: false, error: 'timeout' }), 20000);
          img.onload = () => { clearTimeout(timer); resolve({ id: photo.id, file: photo.file, loaded: img.naturalWidth > 0, width: img.naturalWidth, height: img.naturalHeight }); };
          img.onerror = () => { clearTimeout(timer); resolve({ id: photo.id, file: photo.file, loaded: false, error: 'image error' }); };
          const encodedPath = photo.file.split('/').map(encodeURIComponent).join('/');
          img.src = new URL('../' + encodedPath, baseUrl).href;
        })));
        results.push(...batch);
      }
      return results;
    }, { baseUrl: base });
    report.imageChecks = imageResults;
    for (const asset of imageResults) {
      if (!asset.loaded) report.failures.push('Image failed to load from checked-out development source: ' + asset.file + ' (' + asset.error + ')');
    }
    console.log('Browser image decoding from checked-out development branch: ' + imageResults.filter(asset => asset.loaded).length + '/' + imageResults.length + ' portfolio photographs');
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
