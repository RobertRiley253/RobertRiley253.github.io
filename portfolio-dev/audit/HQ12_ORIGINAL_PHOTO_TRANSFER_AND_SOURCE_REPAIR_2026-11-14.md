# HQ12 — Verified original-photo transfer and source repair

Development branch: `portfolio-editorial-material-review-2026-11-13`. Public `main` is not the editing or publishing target.

## Recoveries verified in GitHub

- All 51 previously missing original-resolution PNGs (47 regular portfolio + 4 NDT) were found at the repository root of `main` after the owner had already extracted and uploaded them.
- All 51 were copied to `incoming-portfolio/originals/` on this development branch without re-encoding. GitHub blob SHAs and byte sizes match the copies originally found on `main`.
- Seven original-photo batch ZIPs were moved by Git blob reference to `incoming-portfolio/uploaded-archives/` and then removed from the root of `main`, after verification. The separate NDT ZIP is preserved in `incoming-portfolio/ndt-originals/`.
- Existing originals in `incoming-portfolio/fullres/` remain intact. No photo source, archive, or MOV video was deleted as part of the new full-resolution replacement.

## Site changes on development branch only

- Replaced 66 references to compressed `incoming-portfolio/previews/*.jpg` with original PNG source paths that exist on this branch: 4 in Home, 13 in Selected Work, 18 in Production, and 31 gallery data records in `portfolio.js`.
- Updated the gallery's raw-image branch base from `portfolio-development-2026-11-12` to the active review branch.
- Corrected 11 older-branch `incoming-portfolio/fullres/` image URLs (2 Selected Work, 9 Production) to the active review branch, verifying those paths exist here.
- No redesign, reordering, captions changes, or merge/deploy to `main`.

## Verified / not verified

- Source inspection verifies that 51 originals are in GitHub and all corrected referenced paths exist in the development Git tree.
- This is **not** proof of real browser decode, mobile responsive performance, accessibility checks, or visual sharpness. Perform visual/browser QA and owner's live review before any publication.
- Preserve all existing designs, supporting image archives, and earlier photo placements until reviewed. Never ask owner to re-upload these 51 images.
