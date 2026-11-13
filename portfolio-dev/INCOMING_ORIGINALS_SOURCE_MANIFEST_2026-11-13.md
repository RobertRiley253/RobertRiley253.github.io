# Incoming photographs 64–72 — verified source provenance

2026-11-13 | Development-branch archival source inventory. The nine integrated photographs still use compressed JPEG review copies on the website.

## Source-of-record in ChatGPT Library
- `/Signage Portfolio/Incoming Original Photos/Robert_R_Riley_Portfolio_Recent_Uploads_GitHub_Transfer_2026-11-13.zip` (58 ZIP entries; includes videos and PNGs)
- `/Signage Portfolio/Incoming Original Photos/Signage_Portfolio_Three_New_Photos_2026-11-13.zip` (three additional PNG files plus manifest, including duplicate source copies of ids 71 and 72)

Source files below were actually opened from the Library ZIPs and independently hashed (SHA-256). The word *original* here means the preserved PNG source from the archive, **not a claim about native camera resolution or authorship**. The archives remain the source of record and were not altered.

| Gallery ID | ZIP source path | Source dimensions | PNG bytes | SHA-256 |
|---:|---|---|---:|---|
| 64 | `originals/image(20261113-080436).png` | 1241×931 | 1,979,343 | `eb5fc7353541a2863b2ba06f3d6235b6d025c4ee1dd13f38c5f2c26bd14ac32d` |
| 65 | `originals/image(20261113-080350).png` | 699×931 | 1,288,111 | `95307f28307c8ddb1dfe2497fd8325b40f5a5dc447f52ae0c3f4ed35abc9e72e` |
| 66 | `originals/image(20261113-074553).png` | 1280×720 | 759,500 | `1a4671a5120b8b7ae41e97c1f7f9453600b3cf222053d27f14ccd25cc65abd04` |
| 67 | `originals/image(20261113-074918).png` | 1241×931 | 1,457,408 | `b619574eef5e65b5c70ef0cd7d6d37ac73e00be55a825e708549798f25f6b4de` |
| 68 | `originals/image(20261113-075412).png` | 1241×931 | 1,915,191 | `1c324e7e16d5569a5f1838bba846535dae8d79737ff25845999da0a49372cb73` |
| 69 | `originals/image(20261113-075700).png` | 1241×931 | 1,907,521 | `a8ba6c527efd53febc08dda1916a19f84ff46bafb354ca9451b222be92d2fedd` |
| 70 | `originals/image(20261113-075842).png` | 1241×931 | 2,282,318 | `bf42bbc7ebe40a646941cf128b61dc30fda2cea4b926bb5e1c9b8325bafe2d82` |
| 71 | `originals/image(20261113-084445).png` | 1773×1773 | 6,120,624 | `534a29116e474534c7a7b344bb1d715c22dcd6221175a35acd03234106d0b171` |
| 72 | `originals/image(20261113-084543).png` | 1773×1773 | 4,618,452 | `e9bae0a47d5f1b88d8f8e689ed447eb4b64c7c5353eb356bcd2a6ea3044fc323` |

All listed `originals/` paths were verified inside the first ZIP. IDs 71 and 72 also appear at ZIP root in the second archive. Every preview is currently named `incoming-portfolio/previews/image(20261113-TIME).jpg` with the same timestamp as its PNG source. The original nine PNGs remain archived and intact; **they have not been uploaded to GitHub or substituted for the preview JPEGs**. Avoid exposing transient container download URLs in site markup.

## Transfer status and safeguards
1. Preserve filenames and source SHA-256; use a separate `incoming-portfolio/originals/` development-branch path when a binary-safe GitHub transfer is available.
2. Verify SHA-256 of uploaded bytes, then compare browser display, file weight and image dimensions. Do not blindly replace a source with a worse file or claim it is higher-resolution if pixel dimensions match.
3. Only after verification, update the affected photo records and captions in **development branch**, rerun Chromium image loading and responsive tests, then submit for owner review.
4. Never alter historical ZIPs, editorial exclusion decisions, the public `main` branch or published pages without explicit permission.

## Known quality considerations
The existing 63-image dimension inventory contains 27 source JPEGs narrower than 700px; eleven are narrower than 500px. Extremely small files (e.g. ids 60–62 at 306×230) should stay in supporting roles until a better underlying photograph is found. Keep contain-fit presentation and avoid fabricating detail with AI upscaling or substituting invented photographs.
