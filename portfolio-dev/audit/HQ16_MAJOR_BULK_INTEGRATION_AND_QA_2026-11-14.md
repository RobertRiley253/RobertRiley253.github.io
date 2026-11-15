# HQ16 — Major Bulk Photograph Integration & Curated Exhibition
**Date:** 2026-11-14 (Pacific). **Branch:** `portfolio-editorial-material-review-2026-11-13`. **Release:** development-only; public `main` unchanged. No GitHub Actions.
**This supersedes HQ14's 103-image count. Latest verified gallery count: 166.**

## Substantive visible work committed in bulk
- **63 additional photograph records (IDs 104–166)** incorporated in current development site, expanding the interactive lightbox gallery from **103 to 166** records. Exact ID, source path, page and group: `HQ16_EXPANDED_GALLERY_PLACEMENT_2026-11-14.csv`.
- **38 screened production-supporting photographs** from `Rob-Photo-Uploads/New folder/`, in three responsive exhibition sequences on Production: shop & print systems (15), machinery/fabrication (19), printing/material processes (4). Real images, not synthesized. Source placement based on prior HQ11 screening and category ledger.
- **9 sign-shop history photographs** added as an independent image-led chapter on My Story.
- **16 additional source photographs visually screened and inserted:**
  - Selected Work: 2 graphics projects — Jay's Computer Solutions vehicle graphics study and Famous Dave's historical menu-board layout options.
  - Production: 5 custom fabrication/3D object images and 5 service vehicle/large-bed laser equipment images.
  - B-2 aerospace experience: 4 additional aircraft photographs from uploaded `Rob-Photo-Uploads/New folder (3)/`, including an aircraft assembly-line photo, ramp display, historical airfield view and aircraft/hangar image. A separate restrained emerald/gold photo mosaic is styled in `life-edition.css`. The B-2 lineup image previously integrated remains. No new B-2 photos were placed with Exotic Metals or NDT.
- **Two production/materials records (gallery 71,72)** upgraded from earlier JPEG copies to recovered original PNG image sources; metadata corrected.
- All added original file bytes kept unchanged; **no source originals were deleted**.
- Responsive multi-column photo groups added to `composed-exhibition.css`, preserving photo proportions using `object-fit: contain`, native dimensions where verified and lazy loading. The four-page exhibition's existing emerald/gold/ivory atmosphere, approved RRR art, and hero images remain intact.
- Site-wide count copy adjusted to **166 photographic records**. Incorrect visible “JPEG preview” labels associated with recovered originals were removed.
- **Six internal navigation links from Home** now open new sections directly: commercial graphics, 3D/custom fabrication, studio production photos, service equipment, B-2, and signmaking history. No changes to public `main`.
- Existing `portfolio.js` lightbox updated so `Rob-Photo-Uploads/` photos open the real development-branch image URL (URL-encoded paths), not the older public branch. This applies to all 63 added IDs and retains keyboard/swipe/focus handling.

## Verified source-level QA (after content and styling commits)
- Exact current Git tree inspected: **166 gallery entries, all 166 represented by page image cards**, no gallery-ID mismatches, no thumbnail-to-record file mismatches; all **63 newly added source paths** exist in development Git tree.
- All new home-to-section anchor destinations are present. All four pages' local stylesheet/image/script paths and cross-page anchors resolved in source scan, **zero errors** in that scan.
- Project source inventory contains 382 image-format file entries, including previews, duplicates, old root assets and brand assets; do **not** equate 382 with distinct client photographs or with how many should be displayed.
- Previously reviewed exclusions continue protected: private email screenshot, sensitive machine-control screens, weapons/parts, ChatGPT screenshots, unrelated websites, unclear digital mockups or questionable attribution. Source originals are not deleted. Some remaining uploaded art/design images are unscreened; further curatorial review may uncover additional suitable items.
- Public `main` verified unchanged at `a1aa4178049c3a466146a9f1bc6f5bdf1ce6b4c9` during this pass.

## Still outstanding — do not claim completed
- Real rendered full-browser QA of the **latest 166-record development site**, including desktop/mobile visual sharpness, gallery navigation, image decoding and loading performance.
- Selective aesthetic finishing/caption specificity, duplicate visual clusters, placement rhythm across full page, and final owner-reviewed priority ordering. A coherent bulk set of secondary galleries has been added; this does **not** mean every unscreened uploaded photograph is suitable or all artistic curation is finalized.
- Inspect every additional unreviewed source before claiming real completed client work; skip unsafe or sensitive material.
- No merge, public release or employer submission without owner seeing the final interactive preview and explicitly approving.

## Interactive development preview links (not GitHub code browser)
Home: https://raw.githack.com/RobertRiley253/RobertRiley253.github.io/portfolio-editorial-material-review-2026-11-13/portfolio-dev/index.html#expanded-exhibit
New commercial graphics: https://raw.githack.com/RobertRiley253/RobertRiley253.github.io/portfolio-editorial-material-review-2026-11-13/portfolio-dev/work.html#new-graphics-layouts
Production fabrication: https://raw.githack.com/RobertRiley253/RobertRiley253.github.io/portfolio-editorial-material-review-2026-11-13/portfolio-dev/production.html#new-custom-fabrication
Production studio: https://raw.githack.com/RobertRiley253/RobertRiley253.github.io/portfolio-editorial-material-review-2026-11-13/portfolio-dev/production.html#new-studio-photography
B-2 aerospace: https://raw.githack.com/RobertRiley253/RobertRiley253.github.io/portfolio-editorial-material-review-2026-11-13/portfolio-dev/profile.html#story-aerospace
Sign-shop history: https://raw.githack.com/RobertRiley253/RobertRiley253.github.io/portfolio-editorial-material-review-2026-11-13/portfolio-dev/profile.html#new-signshop-history

The preview host may cache responses; verify exact latest render before claiming screenshot QA. Branch links do not themselves publish main.
