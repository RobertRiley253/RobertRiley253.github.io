# Whole-site visual and release QA — November 15, 2026 (Pacific)

Development branch only: `portfolio-editorial-material-review-2026-11-13`.
The owner has not approved public publication. Never merge or write to `main` automatically.

## Release scope
- Four pages: `portfolio-dev/index.html`, `work.html`, `production.html`, `profile.html`.
- Approved forest green / parchment / champagne-gold exhibition styling, traditional RRR monogram, gold signature retained.
- Employer-first commercial signage, graphics, fabrication and technical skills; Facebook history direct link; professional contact links across all four footers.
- Remaining optional photographs can be added after a credible release, without deleting originals or attribution records.

## Verified checks at prior baseline (before upright illustration update)
- GitHub Actions `43810729505` succeeded on commit `a23fa07718a5589a5f7bfadd84cdd4ea8fa3b308`.
- Responsive checks 28/28, cross-browser checks 36/36.
- Full-gallery active image decode checks 12/12 page/browser combinations: 17 Home, 84 Selected Work, 101 Production and 46 My Story image elements per browser, 248 total per browser.
- Registry 172/172 original source image decodes, with 192 protected interactive placements.
- Published-release simulation/action `43810729567` passed on the same baseline. No public deployment.
- Complete mobile and desktop screenshots of all four pages visually inspected. Several enormous Chromium fullPage screenshots showed blank raster areas. At least one specific example (Production interactive gallery ID 94) was confirmed visually rendered after scrolling into view in Chromium and WebKit, indicating a screenshot-capture artifact for that example. This does NOT establish that every other apparently blank full-page raster area is harmless.

## Corrections this audit cycle
- Gallery ID 94 source `incoming-portfolio/originals/image(20261113-080135).png` visually identified as CO₂ laser cutter with rotary fixture on slatted bed. Caption corrected in Production HTML, JS gallery registry and protected baseline; original retained.
- Three sideways original illustration photographs identified from package contact sheets. New oriented display copies created in `portfolio-dev/oriented/` by GitHub Actions `43811483724`, with My Story href/src updated:
  - `illustration_covid19_drawing.png`: rotate 90° counterclockwise;
  - `illustration_character_inked_detail.png`: rotate 90° clockwise;
  - `illustration_character_sketch_construction.png`: rotate 90° clockwise.
- The original uploads remain preserved unchanged under `portfolio-dev/incoming-portfolio-2026-11-15/`.
- GitHub Actions `43811483724` completed successfully and its development-only commit was `3f8a1518e423c7d11ba2f83449484ebffe9d5e73`.
- Prior baseline guard failure from a deliberate caption change was resolved by updating the protected photo-title baseline, not weakening the no-regression guard.

## Remaining release gates
1. Re-run development QA and protected release-candidate builder on the upright-illustrations commit, because Actions commits made with GITHUB_TOKEN do not trigger follow-on workflows automatically.
2. Visually check the updated My Story illustrations at phone and desktop sizes.
3. Present exact four-page publication candidate to owner and obtain explicit publication approval.
4. After approval, copy complete dependency-safe candidate to the public release branch with rollback verification; do not blindly merge divergent development and public histories.
5. Independently verify live URLs, images, contact and Facebook after publication.

## Publication note
The last previous publication candidate included 294 files / 272 images with no missing assets at that point. The new upright display copies will change these totals. Count the fresh artifact, not this historic count.
