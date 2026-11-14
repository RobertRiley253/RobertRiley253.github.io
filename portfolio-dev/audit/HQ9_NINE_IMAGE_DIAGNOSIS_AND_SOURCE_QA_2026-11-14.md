# HQ 9 — Image Rendering Investigation & Production Source QA (November 14, 2026)

**Branch:** `portfolio-editorial-material-review-2026-11-13`  
**Scope:** Follow-on to HQ8; no changes to `main`, deployment, original photo bytes, or four-page presentation.

## Exact nine files from the HQ8 unrendered set

Seven PNGs in `Rob-Photo-Uploads/New folder (2)/` that returned **zero encoded image characters** when explicitly fetched with the GitHub connector's base64 setting on November 14:
1. `Designer - 2024-03-17T093357.090.png`
2. `Designer - 2024-04-21T152844.935.png`
3. `Designer - 2024-04-21T161856.397.png`
4. `Designer - 2024-04-21T162924.769.png`
5. `Designer - 2024-04-30T135754.056.png`
6. `download (7).png`
7. `download (8).png`

**Important contrast:** The other two PNGs in that folder, `Designer - 2024-03-23T025642.644.png` and `Designer - 2024-04-01T010034.576.png`, returned non-empty encoded content. All nine PNG names were individually retested. This isolates the seven actual failures rather than inaccurately treating all nine PNGs as unavailable. The failed seven still have distinct Git blob SHAs and nonzero file sizes in the 124-row inventory; the connector return is not proof of corrupt originals.

Two AVIFs in `Rob-Photo-Uploads/New folder (3)/`:
1. `08984bc2-618a-493f-9a7f-08dda7e3555c_cx0_cy12_cw0_w1080_h608_s.avif`
2. `221107-F-JY895-1358.avif`

Both AVIFs returned nonempty base64 data on November 14 (35,344 and 396,866 encoded characters respectively, including line breaks); the attempted image preview could not display the data via the available image return method. They are **not established as corrupt**. Their actual subject matter remains unverified.

## Six already integrated shop photographs — independently rechecked

`portfolio-dev/production.html` contains **one** `#real-shop-equipment` section, with six original-image anchors and adjacent figures/captions. All six source file fetches returned nonempty base64 content, with these blob identifiers:

| Image | Git blob SHA | Existing section role |
| --- | --- | --- |
| `IMG_2658.jpg` | `c352f03fafc2188b73a99900a52a580bf63e582c` | Roland commercial wide-format print |
| `IMG_1209.jpg` | `b07937a955e8e0fdda5059a626902f34f0bfd9dd` | Shop equipment |
| `IMG_3250.jpg` | `ac658fa2bb7a5b50bd2b8061120010af980e4de9` | Large-bed laser |
| `IMG_8669.JPG` | `bbe422a560c319c42c4bc450d554e4726e19807c` | Fiber-laser station |
| `IMG_6703.jpg` | `7d625978bdef7a808f85b684a1e11c644d4a1b34` | Anycubic resin print |
| `IMG_8554.jpg` | `622b086ddbdd70a45a2cbfe764d156123c226218` | Engraved wood lettering |

`portfolio-dev/hq8-photo-evidence.css` exists and defines desktop three columns, two columns under 850px, and one column under 520px, plus keyboard focus and reduced-motion rules. The HTML references the stylesheet once.

**QA boundary:** These checks verify source structure, paths, accessible labels and source retrievability. They do NOT constitute a fresh rendered desktop/mobile browser test, screenshot comparison, live image requests in a browser, or visual crop review. Older workflow run `43567357733` predates the six-image integration. Do not mark this new section visually accepted.

## Outstanding work, in order

1. Obtain a compatible binary decoder/visual renderer for the seven PNG retrieval failures and the two AVIF images. Record visual contents without guessing from filenames and keep originals unchanged.
2. Run fresh browser screenshots at 375/768/1024/1440px of the changed Production page; inspect image loading, cropping, captions, layout, keyboard operation and overflow.
3. Match six images against the original 103-photo crosswalk visually, not only by hash; prefer better originals where provenance allows.
4. Curate a small group of genuine vehicle/fleet work and personal No. 91 motorsport photos, with precise source and attribution. Do not publish third-party reference images as owner-authored work.
5. Present real preview pages for owner approval. No merge, publication, or external transmission without explicit approval.
