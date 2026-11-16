# SAFEKEEP — Portfolio Successor HQ: complete continuity and launch status
**Prepared:** November 15, 2026 Pacific (late evening); source checks around November 16 UTC.
**Purpose:** exact continuation after conversation/tab limits. This is NOT a new project, new design brief or publication permission.

## 1. First actions for successor — mandatory
1. Use GitHub connector for **`RobertRiley253/RobertRiley253.github.io`**, branch **`portfolio-editorial-material-review-2026-11-13`**. Re-read latest HEAD rather than relying on a historical SHA.
2. Last observed code commit *before this document was added*: **`2cdbfc98f4b34f6fb0ec937d9ceab3884dbf3e8f`**. Any subsequent handoff/documentation commits mean HEAD is newer; verify.
3. Read **this handoff first**, then `PORTFOLIO_CREATIVE_CONSTITUTION.md`, `PORTFOLIO_RECOVERY_AND_CONTINUITY.md`, `PORTFOLIO_PRODUCTION_LEDGER.md`, and the specialist/acceptance documents named below.
4. Read actual current source files: `portfolio-dev/index.html`, `work.html`, `production.html`, `profile.html`, `portfolio.js`, referenced CSS, image folders and audit ledgers. **Do not start from older branches, stale PROGRESS.md, or an earlier artifact**.
5. Respond to user with meaningful completed work, not more theoretical checklists. The current task at interruption is **locating and placing missing worthwhile photos in their correct categories while preserving the approved four-page design**, then final visually verified release/approval.
6. Do not publish, merge to `main`, send D10 correspondence, submit a résumé/application, or post to Facebook without a complete review and explicit owner approval.

## 2. Mission and latest user decision
- This is a **general-purpose, employer-facing lifetime portfolio**, not a D10-branded brochure. Résumés and the D10 follow-up will direct hiring managers to it; the goal is **GETTING A JOB** as soon as possible.
- User is under time pressure (original half-hour goal). Prefer consolidated, high-impact production batches to endless small QA tests, redrafts, or creative tangents.
- Four already-designed pages: Home, Selected Work, Production, My Story. Lead with exceptional authentic commercial signage, wraps, printed/design work, fabrication/technical ability and credible visual proof. Racing, social-history and personal memories are real supporting dimensions.
- Most recent user emphasized: **“many photos that I've added ... get as many images up there as possible and in their correct spots.”** The earlier suggestion to put all secondary photography off until after publication was NOT an abandonment of this objective. Every useful distinct authentic uploaded image should be considered, properly placed, oriented and captioned. Genuine duplicates, unsuitable material, private records, uncertain attribution, old previews and redundant variants may remain archived with a documented reason. **No blind bulk dump or inaccurate labels.**
- This handoff was explicitly requested to avoid loss if the tab becomes unhealthy. Do not require the user to repeat the earlier instructions.

## 3. Protected artistic and editorial constitution
- LOCKED approved hybrid exhibition aesthetic: forest/emerald green, champagne gold, ivory/parchment, dimensional/artistic industrial-editorial character; traditional interlocking RRR monogram in header/footer and champagne-gold personal signature in the emerald feature. **No redesign; no replacing/regenerating selected identity assets.**
- Photograph-first, rich multi-column art-directed layouts, natural proportions, sharp work first, compact useful captions, minimal repetitive text, restraint with orange vans and other overrepresented projects. Avoid oversized blurry low-resolution heroes, endless single-file picture columns, mismatched crops, unnecessary white voids and arbitrary filler graphics.
- Preserve image originals, archive versions and alternative branches. Do not alter the artwork or remove previous good work to simplify the release.
- Correct customer work versus own shops/storefronts, signproofs versus installed results, shop equipment versus delivered jobs, modern reference images versus personal photographs. Avoid inflated technical credentials or claims. Distinguish historical demonstration materials from authentic commissioned work.
- B-2/composites: explain Robert's aerospace work accurately; do not present classified/representative aircraft photographs as his own original site photography. Welding/NDT/CNC/lasers/RIP/ICC/printing/teaching/shop experience should be visible and accurately represented.
- Authentic racing imagery is supporting personal history. Robert competed in demolition derby, Thunder Car, figure-eight, etc.; Mike Robinson was his pit chief/partner, not the star of the story. No. 191 should not be attributed to Robert. Do not confuse a reconstruction with a genuine archival photograph.
- Facebook history storytelling is relevant to employers and community readers. **Direct Facebook link** `https://www.facebook.com/rox.riley` now appears in Home and My Story. My Story documents **46,560,500 content views / 606 days** from Facebook Insights, NOT individual people and NOT all history-only views. Keep provenance and metrics qualifications.
- Privacy: historically older documents vetoed publishing email, but later owner-driven release work inserted professional contact email **`roxxx253@gmail.com`** into Home/Profile and all four footers. A successor must flag any newly discovered privacy question, but do not blindly revert more recent contact functionality.
- Most recent Tammie/No. 91 racing remembrance caption changed in Home at HEAD `2cdbfc98...`: **“Tammie and me — the racing years”** / **“The days at the track, and the life we shared”**. Alt: “Remembrance of Rob and Tammie together beside the No. 91 race car at sunset.” This avoids a technical AI label and does **not** claim it is a historical original. Preserve user's recently approved natural wording and the source crop.
- Three formerly sideways illustration photos now have upright display copies in `portfolio-dev/oriented/`; originals retained in `portfolio-dev/incoming-portfolio-2026-11-15/`. Production gallery ID 94 caption corrected to **“CO₂ laser cutter — rotary fixture on slatted bed”** in HTML, JS registry and no-regression baseline.

## 4. Verified GitHub state at handoff
- Protected development branch HEAD before this handoff doc: `2cdbfc98f4b34f6fb0ec937d9ceab3884dbf3e8f`.
- Public `main` last independently checked at `a1aa4178049c3a466146a9f1bc6f5bdf1ce6b4c9` (verify again). **Never blindly merge or force-push**: `main` and development diverge, and `main` holds root-level user-uploaded assets.
- Source site is under `portfolio-dev/`; public site is at root `https://robertriley253.github.io/`. Source development HTML intentionally uses `noindex,nofollow`.
- The automated nonpublishing release builder `portfolio-dev/tests/prepare-release-candidate.cjs` normalizes all four pages/assets to root in a separate `release-candidate/` directory, strips `noindex` in that package only, adds canonical and sharing metadata, preserves dev source, and reports dependencies. Workflow `.github/workflows/portfolio-release-candidate.yml` uploads a **nonpublished ZIP and screenshots**; no public deploy.
- Most recently successful **exact-HEAD release build** was GitHub Actions **`43815525919`**, on Tammie-caption commit `2cdbfc98...`. At handoff query, exact-HEAD **development browser QA `43815525994` was still IN PROGRESS**; recheck before claiming it passed.
- Earlier fully green release run **`43814371753`** at `f6040965...`: 36/36 Chromium/Firefox/WebKit cross-browser cases, 8/8 touch iPhone/Android emulation cases, deep active gallery checks 12/12 (248 image elements across four pages per browser), zero missing release-package dependency errors. Prior responsive suite 28/28. Successful release ZIP around 294 files, 272 images; *not a guarantee of every caption or visual choice*. Exact-HEAD counts can differ.
- Latest package source audit also checked 624 local references and found none broken. Latest content/caption edit requires continued exact-HEAD audit.
- Actual screenshots have been inspected, including four mobile/desktop opening screens and long pages. Some giant fullPage captures showed empty image tiles; direct scroll/decode confirmed at least a specific laser-card image really renders in Chromium/WebKit. Do not assume **all** apparently empty raster areas are harmless; verify if found.
- Approved site NOT YET publicly published. No completed employer outreach resulting from this portfolio work. Explicit final owner review is mandatory.

## 5. Image audit — crucial unfinished creative work
- A latest Git tree query showed **459** PNG/JPG/JPEG/WebP/AVIF/GIF image paths (includes 3 new oriented copies and material that is not meant to be presented). This is NOT 459 distinct appropriate portfolio photos.
- Core protected JS photo registry: **172 distinct gallery IDs**, **192 occurrences** of interactive gallery cards. This excludes supplemental static figures, screenshots and duplicate placements. Another verified deep-gallery test processed **248 page-image elements per browser**, not 248 distinct photographs.
- Source ledger `portfolio-dev/audit/IMAGE_ASSET_DISPOSITION_CROSSWALK_2026-11-15.csv`: **456 rows** (prepared before latest 3 rotated display copies). Historic disposition tally: 246 `DISPLAYED`, 21 `DISPLAYED_EXPANDABLE_RACING_ARCHIVE`, 3 `FEATURED_RACING_ORIGINAL`, 1 `DISPLAYED_AI_RECREATION`, 1 `DISPLAYED_PERSONAL_RECREATION`, **68 `SUPPORT_OR_UNREFERENCED`**, 54 archived JPEG previews, 14 archived duplicates/alternate plus other held provenance, private, equipment reference and software/aircraft/media categories. Counts are file rows, not unique public pages nor necessarily latest after fresh edits.
- Of 68 supporting/unreferenced, root-level commercially valuable filename candidates include:
  `archive-carshow-art.jpg`, `archive-carshow-print.jpg`, `archive-chinook-concepts.jpg`, `archive-chinook-proof.jpg`, `archive-chinook-truck.jpg`, `archive-chinook-van.jpg`, `archive-dental-sign.jpg`, `archive-hotshot-options.jpg`, `archive-hotshot-vehicle.jpg`, `archive-nwcw-rear.jpg`, `archive-nwcw-side.jpg`, `archive-wrap-finished.jpg`, `archive-wrap-montage.jpg`. Many also called `photo-01.jpg`...`photo-43.jpg`, `work-0.jpg`...`work-9.jpg` and two signature graphics. **Do not assume these are all novel genuine missing assets:** inspect actual image content against displayed images, blob/source provenance, duplicate meaning and caption before adding them. In particular, don't add recycled near-duplicates as separate portfolio projects merely because SHA differs.
- User has specifically complained that illustration sheets, cartoons, sticker binders, shop technology, welding, Boeing composites, racing cars, wide-format production, history photos, technical/software proof and other uploaded photos seemed absent. Many of those now appear in My Story/Selected Work/Production; the task is to **visually reconcile present versus actually missing** and make a ranked bulk placement batch if beneficial.
- Primary folder sources: `Rob-Photo-Uploads/New folder`, `New folder (2)`, `New folder (3)`, `Rob-Photo-Uploads/Racing-Archive`, `incoming-portfolio/originals`, `incoming-portfolio/previews`, `portfolio-dev/incoming-portfolio-2026-11-15` and `portfolio-dev/oriented`. Preserve originals and stronger full-resolution sources. Do not expose held sensitive screens.
- A user interruption occurred **just as the assistant was about to build contact sheets for unplaced owner images** and inspect the 68 unreferenced/held artistic sources. The contact-sheet workflow **had NOT been created or committed** when interrupted. **This is the immediate next practical task**, once handoff is secure: audit image thumbnails/provenance with structured contact sheets (batch), place genuine distinctive originals in the proper galleries without redesign, and re-run release verification.

## 6. Prior “whole team” outstanding recommendations — preserve, do not mark all complete
These are specialist AI review lenses, not independent hired humans; owner decides final acceptance.
- Read permanent **`portfolio-dev/audit/PORTFOLIO_EXPECTATIONS_AND_ACCEPTANCE_REGISTER.md`** (historical 153 expectations, with old statuses), **`portfolio-dev/audit/PORTFOLIO_EXPECTATIONS_TRACKER_153.csv`**, **`portfolio-dev/audit/TEAM_REVIEW_DECISIONS_AND_VETOES.md`**, **`portfolio-dev/audit/PHOTO_RESOLUTION_AND_LAYOUT_DEFECTS.md`**, **`portfolio-dev/MULTIDISCIPLINE_AUDIT.md`** and **`portfolio-dev/design-studies/216-creative-direction-candidates.md`** where available. These older audit statuses refer to earlier candidate branches; **do not mistake historical FAIL for a defect not since repaired, or 216 ideas for 216 approvals.** Reconcile statuses using current screenshots/source and record actual evidence.
- Creative/art direction: first-screen wow and cohesive exhibition; consistent hybrid logo/signature; several meaningful multi-photo compositions; image fidelity, balanced rhythm, no blurry giant cards, unnecessary long columns or empty fields.
- Commercial-signage specialist: strong storefront/building signs, car/truck graphics, art-to-proof-to-finished stories, real print and sample work, customer projects separated from owned store/equipment. Strongest material must lead, not personal racing or unrelated art.
- Manufacturing specialist: printing/color control (Roland SOLJET XR-640, Flexi/RIP ICC), lamination, lasers (CO₂/fiber), CNC, welding, titanium/Inconel, composites, garment transfer, 3D prints. Historical evidence accurate; no false employer ownership/rights.
- Biography/illustration/history specialist: full nonrepetitive story about shop management, teaching (including historical shops), aerospace B-2, non-destructive testing, illustration/character art and stickers, print, local history and accurately sourced Facebook performance. No unsupported claims.
- UX/accessibility skeptic: real desktop, narrow-phone and touch checks; no broken overlays/lightboxes, data mislabeling or public private correspondence, check all deep-gallery visual rendering; do not equate green code QA with perfect editorial quality.
- No more speculative site redesign proposals when the owner wants content finalization. Track deferred nice-to-haves without blocking job applications.

## 7. Historical development branches and handoff continuity
- `portfolio-art-exhibition-review-2026-11-13` — formerly superior creative direction; **preserve**.
- `portfolio-final-finishing-2026-11-13` — earlier homepage photo repair; preserve.
- `portfolio-development-2026-11-12` — older source baseline; preserve.
- Latest main source documents:
  - `PORTFOLIO_RECOVERY_AND_CONTINUITY.md`
  - `PORTFOLIO_PRODUCTION_LEDGER.md`
  - `PORTFOLIO_CREATIVE_CONSTITUTION.md`
  - `portfolio-dev/audit/WHOLE_SITE_VISUAL_AND_RELEASE_AUDIT_2026-11-15.md`
  - `portfolio-dev/audit/HQ19_IMAGE_UPLOAD_INTEGRATION_AND_CURATION_2026-11-15.md`
  - `portfolio-dev/audit/HQ20_PREPUBLICATION_EMPLOYER_READINESS_2026-11-15.md`
  - `portfolio-dev/audit/HQ18_VISUALLY_IDENTIFIED_PHOTO_CROSSWALK_2026-11-14.csv`
  - `portfolio-dev/audit/HQ11_INCOMING_PHOTO_PLACEMENT_LEDGER_2026-11-14.csv`
  - `portfolio-dev/audit/IMAGE_ASSET_DISPOSITION_CROSSWALK_2026-11-15.csv`
  - `portfolio-dev/audit/FINAL_30_MINUTE_PREFLIGHT_AND_EXECUTION_GATE_2026-11-15.md`
- Legacy ChatGPT Library handoffs `SAFEKEEP_Portfolio_HQ12_RELEASE_FIRST_HANDOFF_2026-11-15.md`, `SAFEKEEP_Portfolio_Successor_Handoff_2026-11-15.md` existed; if needed search Library rather than ask user to retype them. Their HEAD numbers are older than this handoff.

## 8. Hiring/communications boundaries and linked work
- D10 Signs + Graphics, CEO Tricia Samuel, is a high-priority prospective employer, not the entire audience. Preserve **D10 Amended Draft 17**, portfolio-led, natural/brief follow-up; it was **not sent**. Historical address `info@d-10.com`, historical subject `Re: For hiring team: Remote Commercial Signage Project Manager — Robert R. Riley`; do not send until exact final body, recipient, subject and attachments shown and user explicitly approves.
- Signarama Puyallup: user prefers an **in-person** résumé/contact at the shop; other employment leads include Pierce County Library jobs. Portfolio readiness unlocks proactive applications. Do not indefinitely postpone applications for photo-perfecting optional archive details.
- Do not expose unnecessary sensitive financial, personal or legal context in a public career site. Keep D10 and employment work distinct from portfolio publication approval.

## 9. One-pass next steps and release gate
1. **Immediately:** verify exact branch HEAD and status of Actions `43815525994` on `2cdbfc98...`. If later commits made by this handoff, ensure the exact candidate is re-tested after photo changes.
2. **Priority creative pass:** generate contact sheets for the outstanding photo classifications; evaluate relevance, distinctiveness, resolution, provenance; integrate strongest unused images by category in a **single meaningful batch**, with accurate captions and non-duplicative layouts. Avoid importing held private/ambiguous imagery.
3. Reconcile placement ledger (including 3 oriented illustrations) against galleries; label what was newly placed versus deliberately held. Do not claim “all uploaded photos included” without a hash/path/visual audit.
4. Re-run `.github/workflows/portfolio-development-browser-qa.yml` and `.github/workflows/portfolio-release-candidate.yml` for exact final code SHA. Inspect actual deep page/browser screenshots, not only source image decode.
5. Show the **exact final four-page release candidate** and ask for final owner visual approval. Only after approval prepare a controlled root-level deploy preserving `main` media and rollback path; then get a **separate explicit approval for publication**, publish and verify live URLs, image loading, Facebook/contact and mobile.
6. Only after real live portfolio URL is verified should D10 Draft 17 and résumé/application messages move toward user review and explicit sending approval.

## 10. New-tab restart text
> Continue my Robert R. Riley GitHub portfolio from the protected development branch `portfolio-editorial-material-review-2026-11-13`. First read `portfolio-dev/audit/SAFEKEEP_PORTFOLIO_SUCCESSOR_HQ_2026-11-15.md`, verify live HEAD and latest Actions, preserve all prior requirements and the approved design. The immediate priority is visual review/placement of genuine missing uploaded photographs from the unreferenced-asset inventory, in bulk with correct captions—not another redesign or restart. The four-page release remains unpublished. Preserve D10 follow-up Draft 17 for after portfolio approval, and obtain my explicit approval before any publication or email.

**Handoff integrity:** GitHub file itself is a persistent checkpoint; read from the repo and compare HEAD to avoid stale copied text. This document is not permission to publish or communicate externally.
