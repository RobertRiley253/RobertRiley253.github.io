# HQ20 — Prepublication employer-readiness audit and controlled release gate
_Date: November 15, 2026 · Source branch: `portfolio-editorial-material-review-2026-11-13`_

## Conclusion
This four-page portfolio is **substantially ready for owner visual review**, but **not authorized for public publication**. Its working content, photograph placements, graphic identity and original galleries are preserved. The latest technical QA passed. Do not imply the website has already been published.

## Work checked
- Actual GitHub Actions Chromium screenshot artifact `14159183665` from run `43708432166` downloaded and visually inspected in a full-page view:
  - **My Story desktop full-page**: approved emerald/champagne/parchment design intact; new traditional-drawing, Burke Gibson process, software-workflow and specialty printing sections render as intended; history evidence and seven-plus archival photos are visible.
  - **My Story mobile full-page**: gallery cards stack cleanly and text remains within viewport. Sections are long but visually coherent and readable.
  - **Production desktop full-page**: original production gallery and added transfer/screen-print sample section are present with no visually apparent unloaded blank cards.
- GitHub Actions run `43708699916` completed **SUCCESS** after the history-screenshot integration and precise research/analytics copy revision. Earlier green run `43708432166` also passed all **28 desktop/mobile page checks**, **0 axe violation types** in eight WCAG scans, and no-regression inventory. Per-file media decoding was part of smoke tests.
- Five supplemental signature screenshots visually inspected: FlexiSIGN editing nodes/outline frames, Illustrator GUI showing a JPEG. Three used, two near repeats preserved only.
- History figure now includes an uncropped source screenshot proving **46,560,500 views / 606 days** across Facebook content, carefully distinguished from unique people and history-only views.
- Burke Gibson proper corporate spelling verified against `https://www.burkegibsonllc.com/`; user's own department duties remain the authoritative source for employment details.
- Source folder has **46 original PNG uploads**, **32 distinct intake sources visibly selected** in **34 new appearances** (My Story 24, Selected Work 4, Production 6); all original **172 registry images / 192 legacy placements protected**. Two filenames represent identical-bytes decal binder images, left intact in archive.

## Publication hazards to keep separate from technical QA

### 1. Public main branch and development branch are diverged
At audit time the dev branch was **562 commits ahead and 17 commits behind `main`** per GitHub comparison. These 17 main-only commits include user-uploaded photographs and media at root. **Do not blindly force-push, reset, or overwrite main.** Publication must be deliberate: reconcile main-only files, preserve existing public assets and original gallery files, and test a deployable release copy before approval.

### 2. Preview and public visibility are distinct
All four development HTML pages deliberately contain `<meta name="robots" content="noindex,nofollow">`. These must not be changed in the development branch as an accidental way of publishing. Review the approved preview links now, then stage public metadata/publish paths only once owner expressly approves.

### 3. Employer contact method not yet specified
There are no `mailto:` / `tel:` contacts in the four HTML pages. This is okay if the link is always accompanied by a résumé and applicant contact information, but for a *standalone public portfolio* decide whether to display a professional email, external contact channel or privacy-preserving contact option. **Do not publish an email address without owner's approval.**

### 4. Image provenance and employer-specific claims
Archival photos demonstrate curation and storytelling, not claimed original photography. Representative industrial screen-printing press photos are **not certified Burke Gibson workplace shots**. Familiar characters, team logos and transfer samples may raise rights/attribution concerns; their captions explicitly limit claims to process demonstrations. Hold all ambiguous/uncertain images in intake until verified instead of displaying indiscriminately.

### 5. Practical visual judgement
The site is long by deliberate owner choice and contains more material than a conventional one-page résumé. To optimize initial impression:
- Homepage must keep strongest original professional work first (the approved presentation currently does).
- Important evidence is discoverable through the permanent four-page navigation and new homepage software-workflow link.
- Review any repetitive sample images or odd aspect-ratio crops in the owner preview before publication.
- Avoid redesign or replacing the approved RRR monogram and champagne-gold signature.

## Final release procedure (do not execute without explicit owner consent)
1. Freeze a tested development commit and document main/public SHA before changes.
2. Ask owner to look at the four actual development previews, including My Story's Burke Gibson / software / local-history chapters.
3. Resolve contact channel and any objectionable/restricted image attribution before release.
4. Prepare a **release candidate from current main**, incorporating approved portfolio files and required original assets without removing any main-only user uploads. Verify relative URLs and page path routing.
5. On the release candidate only, switch production SEO/noindex state appropriately and run all browser, image decoding, WCAG and protected-identity checks. Distinguish publication page URL from private preview.
6. Present the complete release candidate and exact proposed publish action. **Wait for explicit approval**, then deploy and verify the actual public URL. Do not auto-send résumés or employer messages.

## Work state and audit continuity
- Production ledger: `PORTFOLIO_PRODUCTION_LEDGER.md`.
- Image-by-image intake: `portfolio-dev/audit/HQ19_IMAGE_UPLOAD_INTEGRATION_AND_CURATION_2026-11-15.md`.
- Tests: `portfolio-dev/tests/no-regression.cjs`, browser/axe workflow `.github/workflows/portfolio-development-browser-qa.yml`.
- This report reflects reviewed development state at November 15, 2026. The owner visual approval remains outstanding.

### Additional creative work added after visual pass
One user-uploaded dog-and-bird digital character illustration was added as a visually distinct, non-branded study in the artist chapter without inventing a specific drawing technique or commission. Current intake count is **46 archived PNGs / 33 distinct selected sources / 35 image appearances (25 My Story + 4 Selected Work + 6 Production)**. Technical QA for this last one-image addition must finish before claiming final green state.
