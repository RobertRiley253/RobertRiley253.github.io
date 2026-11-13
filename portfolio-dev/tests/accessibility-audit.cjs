/* Automated WCAG checks on the development branch only. Reports all findings; never deploys. */
const { chromium } = require('playwright');
const AxeBuilder = require('@axe-core/playwright').default;
const fs = require('node:fs');
const path = require('node:path');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const base = process.env.PORTFOLIO_TEST_URL || 'http://127.0.0.1:8765/portfolio-dev/';
  const out = path.join(__dirname, '..', 'browser-qa');
  fs.mkdirSync(out, { recursive: true });
  const report = { pages: [], failures: [] };
  try {
    for (const viewport of [{ name: 'desktop', width: 1440, height: 900 }, { name: 'mobile', width: 375, height: 812 }]) {
      const page = await browser.newPage({ viewport, reducedMotion: 'reduce' });
      for (const name of ['index.html', 'work.html', 'production.html', 'profile.html']) {
        await page.goto(base + name, { waitUntil: 'domcontentloaded', timeout: 25000 });
        const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
        const issues = results.violations.map(v => ({ id: v.id, impact: v.impact, description: v.description, nodes: v.nodes.map(n => ({ target: n.target, failureSummary: n.failureSummary })).slice(0, 14) }));
        report.pages.push({ name, viewport: viewport.name, violations: issues, passes: results.passes.length });
        for (const issue of issues) {
          if (issue.impact === 'critical' || issue.impact === 'serious') report.failures.push(name + ' ' + viewport.name + ': ' + issue.id + ' (' + issue.impact + ')');
        }
        console.log('AXE ' + name + ' ' + viewport.name + ': ' + issues.length + ' violation types — ' + issues.map(x => x.id + ':' + x.impact).join(', '));
      }
      await page.close();
    }
  } finally {
    await browser.close();
    fs.writeFileSync(path.join(out, 'axe-report.json'), JSON.stringify(report, null, 2));
  }
  if (report.failures.length) {
    console.error('Unresolved serious/critical automated accessibility findings:', report.failures.join('; '));
    process.exitCode = 1;
  }
})().catch(e => { console.error(e); process.exitCode = 1; });
