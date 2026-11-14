# HQ11 — Source-photo transfer reconciliation (2026-11-14)

**Branch:** `portfolio-editorial-material-review-2026-11-13` (not `main`). **Source archive examined:** 54 original PNGs, 2 MOV files and 2 metadata files in primary ZIP; secondary ZIP has 3 PNGs, all byte-identical duplicates of primary archive originals, plus CSV metadata. **Unique photographs:** 54. These are preserved PNG source files from ChatGPT, not independently verified camera originals.

## Verified results

- 54/54 compressed JPEG previews present in `incoming-portfolio/previews/`.
- **7/54 PNG originals** are already represented by matching source-name/byte-size in GitHub under `incoming-portfolio/fullres/` and `incoming-portfolio/high-quality/`; HQ11 independently compared their Git blob SHA to the archived original bytes before classifying them as exact matches.
- **47/54 PNG originals** remain without an exact corresponding GitHub blob on the examined branch. All 47 have a preview JPEG, so they are **preview-only, not photograph-absent**.
- Zero entirely unrepresented images from the 54 unique archived PNG sources.
- The separate 125 image-format file entries (including a duplicate filename) under `Rob-Photo-Uploads/` are a different workflow; do not count them as these ChatGPT originals.
- Two MOV videos in primary ZIP are preserved, not transferred as JPEG and not part of the 54 image comparisons.

## Source file inventory and exact upload set

The `PREVIEW ONLY` rows are the **47 files for direct GitHub upload**. Target directory `incoming-portfolio/originals/`; upload after locally extracting HQ11's seven independent ZIP batches. GitHub web upload does not unpack ZIPs.

| Original PNG | Source dimensions | Archive bytes | Status |
|---|---|---:|---|
| `image(20261113-074507).png` | 760x239 | 247588 | PREVIEW ONLY — UPLOAD |
| `image(20261113-074527).png` | 1241x931 | 2016484 | PREVIEW ONLY — UPLOAD |
| `image(20261113-074553).png` | 1280x720 | 759500 | EXACT SOURCE ON GITHUB |
| `image(20261113-074705).png` | 1200x675 | 890113 | PREVIEW ONLY — UPLOAD |
| `image(20261113-074738).png` | 1241x931 | 1623968 | PREVIEW ONLY — UPLOAD |
| `image(20261113-074918).png` | 1241x931 | 1457408 | EXACT SOURCE ON GITHUB |
| `image(20261113-075328).png` | 1241x931 | 2309216 | PREVIEW ONLY — UPLOAD |
| `image(20261113-075412).png` | 1241x931 | 1915191 | EXACT SOURCE ON GITHUB |
| `image(20261113-075543).png` | 1241x931 | 1683910 | PREVIEW ONLY — UPLOAD |
| `image(20261113-075700).png` | 1241x931 | 1907521 | EXACT SOURCE ON GITHUB |
| `image(20261113-075709).png` | 1241x931 | 1817225 | PREVIEW ONLY — UPLOAD |
| `image(20261113-075747).png` | 931x931 | 901118 | PREVIEW ONLY — UPLOAD |
| `image(20261113-075842).png` | 1241x931 | 2282318 | EXACT SOURCE ON GITHUB |
| `image(20261113-075940).png` | 931x931 | 641631 | PREVIEW ONLY — UPLOAD |
| `image(20261113-080019).png` | 1241x931 | 1244955 | PREVIEW ONLY — UPLOAD |
| `image(20261113-080043).png` | 931x931 | 821523 | PREVIEW ONLY — UPLOAD |
| `image(20261113-080100).png` | 1241x931 | 1704506 | PREVIEW ONLY — UPLOAD |
| `image(20261113-080135).png` | 1241x931 | 1831919 | PREVIEW ONLY — UPLOAD |
| `image(20261113-080218).png` | 960x582 | 1279206 | PREVIEW ONLY — UPLOAD |
| `image(20261113-080229).png` | 1421x931 | 3014241 | PREVIEW ONLY — UPLOAD |
| `image(20261113-080240).png` | 1240x931 | 2255503 | PREVIEW ONLY — UPLOAD |
| `image(20261113-080250).png` | 1241x931 | 1977152 | PREVIEW ONLY — UPLOAD |
| `image(20261113-080316).png` | 1241x931 | 2591358 | PREVIEW ONLY — UPLOAD |
| `image(20261113-080329).png` | 1241x931 | 2690620 | PREVIEW ONLY — UPLOAD |
| `image(20261113-080341).png` | 1241x931 | 2829362 | PREVIEW ONLY — UPLOAD |
| `image(20261113-080350).png` | 699x931 | 1288111 | EXACT SOURCE ON GITHUB |
| `image(20261113-080403).png` | 1241x931 | 838217 | PREVIEW ONLY — UPLOAD |
| `image(20261113-080436).png` | 1241x931 | 1979343 | EXACT SOURCE ON GITHUB |
| `image(20261113-080732).png` | 1241x931 | 1792016 | PREVIEW ONLY — UPLOAD |
| `image(20261113-080741).png` | 1241x931 | 1610761 | PREVIEW ONLY — UPLOAD |
| `image(20261113-081529).png` | 1536x2048 | 6061768 | PREVIEW ONLY — UPLOAD |
| `image(20261113-081546).png` | 2048x1430 | 1949135 | PREVIEW ONLY — UPLOAD |
| `image(20261113-081724).png` | 2048x1536 | 4847173 | PREVIEW ONLY — UPLOAD |
| `image(20261113-081740).png` | 2048x1536 | 5033193 | PREVIEW ONLY — UPLOAD |
| `image(20261113-081824).png` | 1773x1773 | 6353967 | PREVIEW ONLY — UPLOAD |
| `image(20261113-081902).png` | 1024x1024 | 1233079 | PREVIEW ONLY — UPLOAD |
| `image(20261113-081921).png` | 1792x1024 | 3494507 | PREVIEW ONLY — UPLOAD |
| `image(20261113-082108).png` | 1422x1080 | 1979885 | PREVIEW ONLY — UPLOAD |
| `image(20261113-082135).png` | 2048x1536 | 6198072 | PREVIEW ONLY — UPLOAD |
| `image(20261113-082154).png` | 2048x1536 | 5236977 | PREVIEW ONLY — UPLOAD |
| `image(20261113-082301).png` | 1430x2048 | 3108564 | PREVIEW ONLY — UPLOAD |
| `image(20261113-082346).png` | 2048x1536 | 5813539 | PREVIEW ONLY — UPLOAD |
| `image(20261113-082357).png` | 2048x1536 | 6097070 | PREVIEW ONLY — UPLOAD |
| `image(20261113-082511).png` | 2048x1536 | 4799751 | PREVIEW ONLY — UPLOAD |
| `image(20261113-082537).png` | 2048x1536 | 6258379 | PREVIEW ONLY — UPLOAD |
| `image(20261113-082553).png` | 2048x1536 | 5824368 | PREVIEW ONLY — UPLOAD |
| `image(20261113-082750).png` | 1536x2048 | 3472257 | PREVIEW ONLY — UPLOAD |
| `image(20261113-083223).png` | 1536x2048 | 5612243 | PREVIEW ONLY — UPLOAD |
| `image(20261113-083247).png` | 2048x1536 | 4812137 | PREVIEW ONLY — UPLOAD |
| `image(20261113-083308).png` | 2048x1536 | 4253560 | PREVIEW ONLY — UPLOAD |
| `image(20261113-083437).png` | 1350x496 | 158743 | PREVIEW ONLY — UPLOAD |
| `image(20261113-084445).png` | 1773x1773 | 6120624 | PREVIEW ONLY — UPLOAD |
| `image(20261113-084511).png` | 1773x1773 | 5337328 | PREVIEW ONLY — UPLOAD |
| `image(20261113-084543).png` | 1773x1773 | 4618452 | PREVIEW ONLY — UPLOAD |

## Transfer protection

Never retransmit the original large PNGs through oversized Base64 connector calls. Retain both source ZIPs in ChatGPT Library. Independently verify new uploaded files (bytes + checksum where supported), then use real source resolution to decide which site previews merit replacement. Do not alter `main`, merge, or deploy without owner approval. The existing preview JPGs must stay intact until the replacement is verified.

The complete per-image SHA-256 and exact target path are available in the HQ11 companion CSV downloadable in conversation. Existing upstream SHA-256 metadata remains in `incoming-portfolio/upload_manifest.csv`.
