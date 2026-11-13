# Multidiscipline Design and UX Audit — 2026-11-12
Repository: RobertRiley253/RobertRiley253.github.io
Branch: `portfolio-development-2026-11-12`
Files reviewed: four production-candidate HTML pages, shared CSS, shared JavaScript, and the existing usability checklist.
Scope: source/structural inspection only. This is an AI-assisted review across professional disciplines, not a review by separately hired humans. No public deployment or final acceptance is authorized.

## Design intent
Elegant, classic, restrained and distinctive. Original commercial signage photography must be the primary evidence, supplemented by production documentation and optional clearly decorative conceptual artwork. Simple enough for a first-time sign-shop hiring manager on phone or desktop.

## Confirmed strengths
- Four coordinated pages: home, selected work, production and experience.
- Large primary navigation, page-specific calls to action and homepage exploration cards.
- Responsive CSS breakpoints, keyboard/photo-dialog controls and swipe handlers.
- All 63 source photographs represented in the site; original files not modified.
- Previous gallery candidate preserved; public `main` remains unchanged.

## Findings in priority order

### P0 — Acceptance and truthfulness
- Real-browser rendered and real-phone validation is **not complete**. Static structure checks do not certify the actual UX.
- Confirm project captions, provenance and Robert Riley's personal contributions before adding project case studies.
- Public release must await full review and explicit approval.

### P1 — First-visit usability
- Test a visitor sequence: open home → see best projects → change category → enlarge photo → return → inspect production → contact.
- Tiny tertiary labels persist: CSS includes fixed 9px, 10px, 11px and 12px type. Improve reading contrast and size wherever they provide meaningful information. Decorative microtype should not carry critical meaning.
- Long work page with 47 visible photo cards risks excessive scanning; consider a more selective signature-work tier with visible category shortcuts and further supporting work below.
- Multiple similar "Explore production" calls are repeated in the work page; editorially streamline.
- Test fixed/sticky controls and heading wrap at 320px, 375px, 430px, tablet sizes, and large monitors; confirm 200% and 400% zoom.

### P1 — Visual art direction
- Evaluate actual opening-image selection and the three-image hero composition in rendered context.
- Develop 6–8 signature project spreads that combine hero images, context, material details and true contribution captions **only where supported by archives**.
- Build a disciplined, restrained graphic language: a refined monogram, editorial chapter dividers, custom line illustration, typography and color hierarchy, not gratuitous animations.

### P1 — Asset performance and quality
- The current HTML image elements do not declare intrinsic width and height. Where actual image dimensions can be confirmed, add dimensions or aspect-ratio metadata to reduce cumulative layout shift.
- Test first-paint and loading on slow mobile networks. Consider optimized derivatives and responsive srcset only while keeping original photographs preserved.
- Real-image visual assessment required: resolution, crop, legibility, composition, duplicates, proof-versus-installation labeling and strongest work order.
- Confirm error states and lightbox focus/gestures in actual browsers and assistive technology.

### P2 — Content and confidence
- Make production capability credible by linking tools/processes to matching documented results. Do not assert that the user performed an unverified project step.
- Check contact link and résumé coordination; consider downloadable portfolio companion / résumé QR only after review.
- Add a clear explanation that portfolio includes original photographs and distinct artifact types.

### P2 — Optional original/AI artwork
- Explore 1–3 original decorative visual treatments: restrained technical linework, subtle type-driven signwriting motif, or a bespoke nonrepresentational graphic identity.
- Keep generated material separate from actual project images. Label AI conceptual imagery if it could otherwise look like portfolio evidence.
- User can supply inspiration websites for art direction. Avoid copying third-party artwork or layouts wholesale.
- Image generation is **not authorized by this audit alone**; agree on specific artwork deliverable and placement before producing a visual asset.

## Required acceptance gates
1. Full desktop visual walk-through
2. Narrow/wide mobile + tablet visual walk-through
3. Mouse/touch/keyboard + screen-reader photo-viewer test
4. Legibility and interaction targets inspection
5. Page load, image failure and layout-shift test
6. Photography/project role editorial audit
7. Content, spelling, accessibility and contrast inspection
8. Approval copy of all four pages and a change summary
9. Explicit owner approval **before** merging or publishing

## Implementation ledger
- Completed previously: responsive four-page structure, enlarged navigation, category jumps, next-step actions, photo viewer, navigation checks, album preservation.
- Newly identified: small meaningful text, missing image dimensions, duplicate CTAs, need for true signature project stories, optional original decorative artwork.
- Still pending: full rendered/device testing, image provenance/quality audit, additional source photos, final review/approval.

Never mark a task as completed merely because a CSS rule or JS handler exists; verify actual functionality and rendering.
