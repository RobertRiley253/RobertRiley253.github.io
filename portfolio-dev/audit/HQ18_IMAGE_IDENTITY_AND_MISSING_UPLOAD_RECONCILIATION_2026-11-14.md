# HQ18 — Visual Image Identity, Corrected Captions & Missing Upload Reconciliation
**Date:** November 14, 2026 (Pacific). **Repository:** `RobertRiley253/RobertRiley253.github.io`. **Working branch:** `portfolio-editorial-material-review-2026-11-13`.
**State before audit document:** Read current head; do not treat this report as permission to publish.

## Actual production changes in this batch
- Inspected the actual source pixels of **47 previously generic-numbered JPEG photographs (gallery 104–150)** through GitHub's file connector. Replaced all 47 generic captions in `portfolio.js` and corresponding visible card captions, image alternative text, and card labels.
- Verified native JPEG dimensions from image headers and inserted dimensions for all 47 of those cards. Three newly placed large PNG original sources have unknown native dimensions and were not assigned invented values.
- Corrected major subject distinctions: enclosed filament 3D printer, retail decal displays, Roland wide-format printing equipment, heat press, laser cutting/marking hardware, large-bed laser arrival, resin printing, and business-history webpage artwork are now individually described. Avoid stating that all store merchandise graphics were designed personally.
- Reclassified gallery 150 (**S&R Enterprises vehicle-door lettering**) from sign-shop history to Selected Work's customer-graphics group. Its native image is only 236 × 177, so it is kept in a secondary expandable gallery instead of prominently enlarged.
- Recovered **six previously unplaced photographic source records, gallery IDs 167–172**: Wildwood Tree Care finished truck lettering (167), Saltwater-themed printed graphic sample (168), sticker-merchandise sample board (169), Clint's Bar & Grill photographed printed-art sample (170), resin printer/electronics workstation (171), heat press (172). Originals remain unchanged; these are added to **Selected Work** or **Production** as appropriate.
- New selected Work gallery follows the first featured projects; new Production methods gallery shows real tools and retail merchandise separately. Updated responsive group styles and navigation. Corrected My Story sign-shop section wording to distinguish photographs from a webpage graphic.
- Home's count is now **172**; historic documents with 166 remain valid snapshots, not authoritative current counters.

## Matching-preview caveat for large original PNGs
For original PNG images 167,168,169, the GitHub connection returned valid path/blob metadata but not directly inspectable image bytes due their large file sizes. Identification was performed against their visually inspected **same-stem JPEG previews**. Actual large original decoded-browser verification is still required. No final artistic approval is claimed.

## Why many uploads were absent from the gallery
Past bulk integration counted 166 registered photos but did not mean all GitHub uploads were screened or displayed. Source inventory has copies, original/preview pairs, extra photo angles, artwork concepts, screenshots, and private or unrelated material. Files can reside in GitHub yet never have an HTML gallery card or `portfolio.js` record.

**Remaining categories to review before promotion (do not automatically insert):**
- `incoming-portfolio/originals/`: 11 not directly placed after this six-photo addition. Several visually inspected entries are duplicates/near duplicates of sticker display boards, screenshots of the store website, and digital apparel mockups; two black printing-system views remain candidates. `image(20261113-083437).png` is a ChatGPT screenshot and must not enter the employer portfolio.
- `Rob-Photo-Uploads/New folder/`: approximately 14 unplaced after this pass, including proposed automotive graphic art of uncertain authorship, near-duplicate machine photos, private communication screenshot, firearms imagery, and machine-control software screens. Do not infer independent design authorship or include sensitive content.
- `Rob-Photo-Uploads/New folder (2)/`: 16 previously unplaced files; many are decorative design images (some generated or with unclear authorship), and one appears to be a portrait of an individual not verified as the portfolio owner. They are preserved, not automatically employer-facing.
- `Rob-Photo-Uploads/New folder (3)/`: Boeing logo and an additional aviation image remain unplaced; avoid introducing inaccurate B-2 manufacturing context.
- `incoming-portfolio/previews/`, `high-quality/`, and older JPEG backups: many retained duplicates or source references, not automatically missing unique portfolio projects.

## Final source-level checks after integration
- **172 distinct gallery IDs represented across 192 page-card occurrences** (some previously featured IDs deliberately repeat in multiple contexts; 20 extra appearances beyond one per ID), and no remaining `photograph 01/02` intake titles.
- Development Git tree confirmed every newly registered source path exists; no missing linked raw/local image paths or internal cross-page anchors in scanned production HTML.
- All inspected HTML `img` elements carry alternative text; all 47 corrected JPEG cards have intrinsic dimensions.
- Four original pages and locked emerald/gold/ivory artwork remain in place.
- **Public `main` not authorized for edit.** No release, merge, employer submission or GitHub Actions workflow occurred in this batch.

## Remaining work and cautions
This fixes confirmed caption errors, but **does not prove that every legacy ID 1–103 title is precise**, that all archives have been visually screened, or that unplaced candidates should be used. Some titles identify observable equipment/material, not verified ownership. Review additional candidate photographs for actual subject, original project attribution, legal/public provenance, resolution and placement before promotion.

**Critical quality gate:** current full-browser visual desktop/mobile inspection is still needed. Git tree existence cannot establish actual browser decode, image sharpness, crop quality, caption alignment, gallery lightbox behavior or employer-grade artistic acceptance. Present the final real interactive development site to owner before explicit approval for release.
