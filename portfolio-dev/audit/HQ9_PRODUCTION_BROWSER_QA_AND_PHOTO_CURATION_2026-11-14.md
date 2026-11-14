# HQ 9 — Production Browser QA and First Visual Curation

**Branch:** `portfolio-editorial-material-review-2026-11-13`  
**Date:** November 14, 2026  
**Release:** Development review only. Do not merge, deploy, or modify source images.

## Changes made after HQ8
- Extended `portfolio-dev/tests/browser-smoke.cjs` to check all six #real-shop-equipment figure images in Chromium, assert real decoded image dimensions, exact original-source link match, nonempty captions and sensible layout geometry; capture dedicated section screenshots at desktop and mobile widths.
- Updated `.github/workflows/portfolio-development-browser-qa.yml` to run this existing non-deploy Chromium suite automatically on pushes to this named review branch affecting `portfolio-dev/**` or the workflow file. Kept `workflow_dispatch` support.
- Updated `portfolio-dev/hq8-photo-evidence.css` to preserve the **entire portrait-oriented fiber-laser workstation** `IMG_8669.JPG` using `object-fit:contain`, instead of cropping its top/bottom inside a fixed landscape card. Other five original images remain unchanged.

## Automated test results
- **Run 43594308268**, commit `a8d60b7749c5642870542b2e6903daa0c6a1d998`: successful (before the portrait crop fix). Production passed browser tests at 1440, 1024, 768, 430, 375 and 320 px, plus 200% zoom. Production Axe desktop/mobile tests each reported **0 violation types**. The six-photo assertions were included. Screenshot artifact `portfolio-development-browser-qa` is available at https://github.com/RobertRiley253/RobertRiley253.github.io/actions/runs/43594308268/artifacts/14113882144 .
- **Run 43594472135**, commit `9a36c4d08335b5a78330c9b6e6e743bf13c8fc10`: triggered after the CSS portrait correction; check completion and report separately. Do **not** claim this later revision passed until its run is verified.
- The checks are programmatic/browser screenshot captures. **Actual aesthetic inspection of the screenshots is a separate gate**; successful automation does not alone certify visual excellence.

## Original-image observations from source visual inspection
- `IMG_2658.jpg`: full-frame view of a Roland printer printing a black-on-white commercial sign; use as a specific production-action angle. The older `portfolio-057.jpg` was inspected directly and shows a different angle of an idle Roland printer in a shop. **Related subject, not the same photo.**
- `IMG_1209.jpg`: room view with printer/laminator and other tools; useful as a wider working-environment view.
- `IMG_3250.jpg`: large laser bed and gantry; visually specific, not a generic staged manufacturer photograph.
- `IMG_8669.JPG`: vertically composed fiber-laser marking machine on a stand; the complete upright machine should remain visible.
- `IMG_6703.jpg`: visibly supported resin prints on Anycubic printer build plate, not a finished-product portrait.
- `IMG_8554.jpg`: active laser engraving of wood lettering reading **TAMMIE**. Existing public caption remains conservative about its personal context; do not invent creator, ownership, or provenance details.
- Existing Production archive already includes Roland, large-bed laser, resin fabrication and shop views. This is **subject overlap**, not yet evidence of duplicate pixels. Continue visual comparison to 103 archival photo records before replacing or removing any.

## Next steps
1. Verify the second browser run at the portrait CSS commit and inspect screenshot artifact independently for aesthetics.
2. Locate the source photo crosswalk / existing originals for source-level duplication, not just matching category names.
3. Curate narrowly selected real vehicle-and-fleet projects for Selected Work, and authentic No. 91 personal racing history for My Story. Keep personal project/third-party representative imagery clearly differentiated.
4. Recover unsupported seven PNG and two AVIF previews with a compatible decoder. Keep original sources untouched.
5. Obtain owner visual approval before release.

**No deployment. No main modification. No deletion.**
