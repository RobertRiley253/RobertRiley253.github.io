# Designer atmosphere — visual review candidate (2026-11-13)

## Goal and boundaries
The owner requested a substantial unified design-art-direction pass on the approved 103-photo career portfolio. The existing traditional RRR monogram in the header/footer and champagne signature in the dark green hero remain unchanged. The separate prior career-showcase branch remains preserved; public main was not touched. No generated or stock artwork was placed into the site.

## Implemented
- New CSS-only layered ambient page backgrounds: warm ivory/parchment, muted sage, faint paper/engraving-style line grain, controlled green-and-gold radial illumination.
- The header and footer receive more refined gradients, small shadows and precise borders.
- Dark emerald homepage hero gains atmospheric lighting, technical measurement/grid lines and a low-opacity actual RRR monogram image watermark. Existing photographic composition remains intact.
- The three inner-page heroes receive pale olive/ivory ambience and another subtle original monogram watermark; the Production dark hero uses matching evergreen shading.
- Portfolio section headings, captions and project framing gain consistent hairline accents, sophisticated contrast, and restrained hover response without altering original image pixels.
- Career and production sections use consistent rich dark-green atmospheric backgrounds and precision-line motif; typography and large project stories are unified.
- Gold-signature closing section gains softly illuminated emerald treatment.
- CSS respects reduced-motion and forced-colors accessibility modes, and retains mobile layouts.
- File: `portfolio-dev/studio-ambient.css` added to all four HTML pages *after* existing styling so the system is centrally adjustable.

## QA and evidence
- GitHub Actions run: https://github.com/RobertRiley253/RobertRiley253.github.io/actions/runs/43530556449 — **success**.
- 28/28 browser responsive/zoom cases, 103/103 source images loaded/decoded; 8 desktop/mobile Axe accessibility scans had zero automated WCAG A/AA violations.
- Reviewed real 1440px desktop and 375px mobile Chromium captures for design integrity and image legibility.
- Full GitHub screenshot artifact ID: `14087606050`.
- Four-page desktop overview and first-fold mobile captures saved to ChatGPT Library `/Signage Portfolio/Designer Atmosphere Review`.
- GitHub QA workflow returned to manual-only after successful run to prevent repeated automated notifications.

## Remaining gate
Owner's personal visual approval and editorial/career claims verification; publishing the branch into public main requires *separate explicit approval*. Nothing in this branch constitutes approval to launch.
