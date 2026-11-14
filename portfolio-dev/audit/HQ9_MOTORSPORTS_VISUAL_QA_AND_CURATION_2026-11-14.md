# HQ 9 — Motorsports History Integration and Actual Visual QA

**Date:** November 14, 2026  
**Branch:** `portfolio-editorial-material-review-2026-11-13`  
**Scope:** My Story historic motorsports photograph and Production screenshot review, no release or original-byte changes.

## Actual changes

- `portfolio-dev/profile.html` motorsports chapter `#story-racing` now uses `Rob-Photo-Uploads/New folder/IMG_4623.jpg` as the main photograph. The archival image shows a Lucky Signs-branded race car producing tire smoke outside the Lucky Signs location. This replaces the repeated commercial Hot Shot van image in that chapter; it does NOT remove the commercial van from other portfolio pages.
- First photo in the same chapter's supporting photo sequence now uses `Rob-Photo-Uploads/New folder/IMG_4626.jpg`: an archival front/hood view of the Lucky Signs Racing Team lettering. The remaining two images still contextualize commercial vehicle work.
- Chapter copy distinguishes the historical Lucky Signs motorsports relationship from exact claims about which car Robert personally drove. Neither photo is falsely captioned as the No. 91 car or as proof of specific race participation.
- `portfolio-dev/tests/browser-smoke.cjs` includes explicit image-load and nonempty-alt checks for both racing photos at each responsive viewport.
- Existing portfolio identity, monogram, palette, material surfaces, navigation, home page, Selected Work page, and all 124 incoming originals remain preserved.

## Browser and actual image review

- Chromium workflow run **43595163367** on the updated profile-image commit `5833f0030c2655d011e589026e3e270b63842885`: success. Full-page desktop/mobile screenshots and dedicated Production evidence photos captured to workflow artifact.
- The actual `profile-desktop-full.png` and `profile-mobile-full.png` screenshots from that run were retrieved and visually inspected. Racing chapter at ~1440px desktop shows an authentic racing Polaroid at restrained size adjacent to text, with clear separation and three readable photo cards; at 375px mobile the paragraph, main image, gold/emerald caption strip, and 2-column-following grid wrap without overlap or horizontal spill.
- Production's `production-hq9-equipment-desktop.png` and `production-hq9-equipment-mobile.png` screenshots from the same run were inspected. Six photos display in a stable three-column desktop composition and mobile single-column layout with captions adjacent to their associated images. The upright fiber-laser machine is displayed within its landscape slot without cutting off its apparatus; it has tasteful neutral side margins, a better outcome than the earlier forced crop.
- Subsequent browser workflow run **43595357280** on the revised explicit racing-photo assertions `a7b8d91aa3e4eb0f9b2672ecf58329136f36a2d6`: **success**. `profile` passed 1440, 1024, 768, 430, 375 and 320 px, plus 200% zoom. Axe reported **0 violation types** at desktop and mobile. Both named archival images passed decoding/load assertions.
- No visual approval by the portfolio owner has been asserted; screenshots are test artifacts, not a hosted interactive preview.

## Source and curation distinctions

- `IMG_20190621_134849.jpg` (American Made Concrete full pickup view) and existing `portfolio-014.jpg` (same truck's branded door close-up) are different shots of one client project; **do not count as two projects**. Existing close-up is already appropriately visible on Selected Work, so no additional near-duplicate card was added.
- `IMG_3189.jpg`: genuine That Sticker Store-branded bucket-truck/service-vehicle view, useful as business history, not automatically a representative client wrap.
- `IMG_4578.jpg`: branded red That Sticker Store vehicle in workshop, historically relevant but cluttered composition. May be used sparingly only if no stronger alternative available.
- `IMG_4623.jpg`, `IMG_4626.jpg`: strong historic motorsports context; keep aged Polaroid look, avoid restoration or over-enlargement.
- `IMG_4649.jpg`, `IMG_4653.jpg`, `IMG_4667.jpg`, `IMG_4674.jpg`: additional historical signmaking/lettering photos showing store and in-process work, but identities/individual authorship not proven just by the image. Keep as contextual candidates, not made-up commission credits.
- Many 2026 JPGs in first incoming folder are equipment, shop panoramas or standalone artwork. Not every asset is an installed client project.

## Outstanding

1. The separate 32-image local archive has a reported authentic Robert-and-Tammie No. 91 photograph `image(20261114-084036).png`. That source has not been retrieved from the currently accessible GitHub branch or Library search and was **not fabricated or replaced** with a lookalike. Integrate only after obtaining exact original archive and rights/identity confirmation.
2. Seven PNG retrieval failures and two incompatible AVIF previews remain visually unresolved. They were identified in `HQ9_NINE_IMAGE_DIAGNOSIS_AND_SOURCE_QA_2026-11-14.md`; never delete originals on this basis.
3. Continue visual duplicate screening and conservatively curate more *completed* vehicle/signage examples, rather than filling pages with all 124 uploads.
4. Show a navigable four-page review presentation and obtain owner's explicit visual/copy approval before considering `main`.

**No merge, publication, external correspondence, deletions, or original-image alterations.**
