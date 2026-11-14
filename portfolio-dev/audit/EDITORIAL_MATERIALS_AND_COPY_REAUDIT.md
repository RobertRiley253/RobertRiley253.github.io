# Robert R. Riley — Editorial, Material, and Structural Re-Audit

**Review candidate:** `portfolio-editorial-material-review-2026-11-13`  
**Parent:** `portfolio-composition-rebuild-review-2026-11-13`  
**Owner feedback:** Layout is much improved; preserve effective identity, image-rich grouping and colors. Strengthen traditional ambient texture on light backgrounds, correct backward "5 YEARS / teaching" presentation, balance page wording, and inspect remaining structural problems.  
**Release status:** REVIEW CANDIDATE ONLY. The owner has not approved publication.

## What the design-review perspectives decided

| Perspective | Decision | Evidence |
|---|---|---|
| Art direction / materials | **Improved, requires owner review** | New CSS-built paper/linen grain with ivory, aged brass, warm parchment and sage undertones, coordinated across four pages |
| Photography | **Preserved** | Original project JPG sources, full-size view, 103 image IDs and source-proportion limits were left intact; no filters or modifications to the originals |
| Typography and editorial | **Corrected in review candidate** | Reordered snapshot index into subject → principal fact → qualification; teaching clearly reads "ART & DESIGN EDUCATION / Teaching / Approximately five years…" |
| Biography and technical content | **Kept and tightened** | Nine career chapters, employer ledger, aerospace, teaching, signmaking, shop leadership, racing and historical research preserved; repeated/general introductory explanations shortened |
| Layout / graphic design | **Improved, manually observed** | Four-photo homepage chapters now fill the full 12-column width in deliberate 7/5–5/7 or 6/6–6/6 pairings. Short-photo captions no longer get pushed to the adjacent card's height |
| Responsive and accessibility | **Automated pass on prior intermediate commit; latest change pending separate confirmation** | GitHub Actions `editorial-materials-qa.yml` tested 375, 768, 1024, 1440px with gallery smoke test, accessibility scan, missing anchors, no horizontal overflow, story chapter counts |
| Privacy / release | **Pass on site HTML** | No mailto or private direct-contact addresses, no form or public résumé; preview noindex/nofollow; public `main` unchanged |
| Skeptical reviewer | **Not final or universally excellent** | Owner must judge material depth, hierarchy and the full visual experience. Automated tests do not rate artistic excellence |

## Specifically corrected

1. **Career cards:** old cards mixed "1994", "2008–2025", "BOEING" and "5 YEARS" as unmatched oversized headings. New cards consistently use a small discipline label, a significant word/date, then a concise explanation. Teaching is the subject, years are supporting context.
2. **Traditional ambience:** layered material tones, fine grain, gentle color temperature and unobtrusive engraved rules give formerly plain light panels stronger cohesion with the dark emerald/gold website. Photo pixels remain unchanged and unfiltered.
3. **Page copy:** 15 concise editorial revisions across Home, Work, Production and My Story, plus teaching and professional-summary copy corrections. Removed redundant descriptions without deleting vocational history.
4. **Four-photo grids:** live screenshots showed an accidental half-empty right column in the earlier version. The four-image sections now have balanced paired rows without making one small image into a giant hero.
5. **Caption attachment:** live screenshot showed a short photo's caption separated from the image due to inherited card stretching. Final CSS anchors the label immediately beneath its photograph.

## Evidence and boundaries

- Four-page HTML source checked: 103 distinct existing numbered photo IDs still represented.
- Page structure checked: no duplicate IDs; no unbalanced `section`/`div`/`button`/`figure` tags in current source; section fragment links checked; no email leaks.
- Earlier intermediate GitHub Actions run `43566999685`: successful gallery smoke, automated Axe, rendering at 375/768/1024/1440, and source-size/overflow tests. Screenshots saved with the workflow artifact.
- The last photo-caption alignment CSS update was applied after that intermediate screenshot; a final run was triggered to recheck it. Do not present intermediate screenshots as final proof of that last change.
- Original unresolved historical photographic provenance: 63 known original image dimensions; 40 newer numbered archive records still await complete source-resolution crosscheck. Conservative sizing remains in place.
- Content accuracy and project-image provenance still deserve a final owner approval review, distinct from this wording and layout refinement.
- Browser accessibility automation is not a complete screen-reader or real-device manual audit.

## Publication conditions

Show the actual four interactive preview pages. Obtain affirmative owner approval of materials, wording, photographs and overall layout before considering a merge to public `main`. Do not substitute this source audit for that approval.
