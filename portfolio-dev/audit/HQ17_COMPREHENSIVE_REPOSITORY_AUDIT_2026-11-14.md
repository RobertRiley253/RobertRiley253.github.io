# HQ17 — Comprehensive Portfolio Repository Audit
**Audit date:** 2026-11-14 Pacific (session audit, source-level).  
**Repository:** `RobertRiley253/RobertRiley253.github.io`  
**Development branch:** `portfolio-editorial-material-review-2026-11-13`  
**Development source head before this report:** `06f0eeccb19e9c581581075f4f3f21c747c7b571`  
**Public `main` head:** `a1aa4178049c3a466146a9f1bc6f5bdf1ce6b4c9`  
**Scope:** the four production HTML pages, 14 referenced CSS stylesheets, `portfolio.js`, gallery metadata, complete development/public repository trees and image links. Other historical review HTML files are not production pages.

## Verified passing source-level checks
- Development Git tree complete (499 paths, not truncated); public tree examined independently.
- The four actual production pages are `index.html`, `work.html`, `production.html`, `profile.html`.
- All 166 gallery metadata entries have unique IDs 1–166 and **all 166 are represented by page photo cards**. Every gallery entry resolves to an existing source path in the development Git tree.
- All 166 gallery source files resolve to 166 **different Git blob hashes** (no exact duplicate photograph bytes among the numbered gallery records). This does not rule out visually similar or resized copies.
- The public-site root holds all 63 distinct public photo assets referenced from the current development HTML; no dangling old-main image paths found.
- No missing raw development-branch image paths or local image references found in the inspected HTML. Internal and cross-page anchor targets found; 219 HTML link attributes reviewed, no missing internal anchors identified.
- HTML: no unmatched `main`, `header`, `footer`, `nav`, `section`, `article`, `details`, `dialog`, `button`, `figure` or `picture` tags found by source scan. One `h1` per page.
- All 278 inspected HTML `img` tags have `alt` attributes. All 186 gallery cards across the four pages (17 Home, 64 Work, 89 Production, 16 My Story) have accessible labels in source. No blank-window links lacking `noopener` in the HTML source.
- JavaScript passes syntax construction; no `eval`, `innerHTML` or external `fetch()` patterns found in the portfolio script. CSS brace counts balanced across the 14 stylesheet files.
- All four pages include `noindex,nofollow`; source scans found no literal email addresses or phone numbers in HTML.
- Public `main` head is unchanged relative to previously recorded HQ16/HQ17 checkpoints. No build workflow triggered, merge performed or public release authorized.

## Open defects / important incomplete gates
**P1 — Real visual/browser QA not performed.** Source integrity is not image decoding, visual sharpness, mobile layout, artistic composition, cross-browser behavior, lightbox functionality or performance. The external RawGitHack development preview could not be independently rendered through tools in this audit. Need actual Chrome/browser screenshots and interactive testing at 1440/1024/768/375 widths; include lightbox, expandable galleries, keyboard navigation and slow-connection image loading.

**P1 — 47 generic photographic titles.** Gallery IDs 104–150 currently use names such as `Shop & print production — photograph 01`, `Machines & fabrication — photograph 01`, `Materials — photograph 01`, and `Sign-shop history — photograph 01`. Respect source authenticity and visually inspect before substituting specific subjects or reordering hero work. These captions are not yet employer-grade final curation.

**P2 — Missing intrinsic dimension attributes on 47 added photographs.** Production has 38 and My Story 9, separate from the four dynamic viewer `img` nodes (which appropriately load content at runtime). The photo wrappers use defined aspect ratios, which can stabilize grid geometry, so this is **not** proof of layout shifting. Record actual dimensions from verified image pixels/metadata before authoring width/height; do not guess.

**P2 — Repeated visual motifs / initial image hierarchy.** Source repeats some public portfolio photo URLs within and across sections (e.g., `portfolio-006.jpg`, `portfolio-023.jpg`, `portfolio-057.jpg`), sometimes appropriately as cover motifs. Only a real rendered visual comparison can establish whether repetition weakens the first impression. Do not blindly delete: many repetitions are intentional hero/editorial contexts.

**P2 — Many historical assets remain uncatalogued for visual acceptance.** The complete repo contains 379 image-format paths, including previews, brand assets, originals, duplicates and raw uploads. At least 10 SHA-identical duplicate-asset clusters exist in the full tree, but **none within the 166 numbered source records**. Some unreferenced images have not undergone image-by-image screening. Preserve them; do not infer client-work attribution from filenames.

**P3 — Maintenance complexity.** Up to 14 CSS sheets compose the site, with page-specific differences. This is not a demonstrated browser defect; avoid aggressive consolidation while design is locked, but review cascade/order after visual QA.

## Important qualifications
- Git tree path existence does not verify HTTP responses from RawGitHack or image CDN, nor image decode success, actual photo dimensions, sharpness, content accuracy, responsive clipping or WCAG conformance.
- JavaScript syntax check is not a runtime behavioral test.
- HTML balance and accessible labels are only a partial accessibility audit.
- Distinct SHA values do not imply visually distinct photos, and distinct numbered gallery IDs do not automatically prove the optimal composition.
- This report intentionally makes **no visual quality certification** and does not authorize `main` deployment or employer transmission.

## Recommended next execution
1. Obtain genuine current-branch browser rendering and inspect every page at the four widths; record evidence of exact visual defects.
2. Make an image-by-image curation list for generic IDs 104–150 with real subject descriptions, dimensions and first-impression scores.
3. Fix verified presentation problems in coordinated bulk batches, preserving approved palette/identity and current full-resolution originals.
4. Perform final owner-visible interactive review and secure explicit approval before public release.
