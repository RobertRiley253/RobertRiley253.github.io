# Team Review Charter — Binding Veto and Accountability Rules

**Scope:** Signage portfolio visual presentation and career-life-history content, November 13–14, 2026.  
**Status:** Design/review perspectives, not separate hired human professionals. The assistant coordinates and implements their consensus; the owner authorizes publication.  
**Live site:** `main` unchanged. No edits to production site in this audit.

## What was wrong with the previous process

Earlier design concepts and the 216-item idea inventory were treated as if brainstorming were equivalent to approved designs. Implementation reused oversized photo blocks and one repeating biography grid. Automated tests measured image decoding, navigation and accessibility but not whether the pages actually looked compelling or showed JPEG artifacts.

That process is withdrawn. Each specialist perspective receives a distinct **veto test**. A failure stays FAILED until a newly rendered screenshot and source evidence demonstrate the correction. A broad claim that 'the whole team approved' without those artifacts is invalid.

## Specialist decision and acceptance matrix

| Perspective | Expected contribution | Audit register targets | Must reject |
|---|---|---|---|
| **Creative direction** | The first screen must be a cohesive visual exhibition, not an HTML product grid | RRR-005, RRR-006, RRR-036, RRR-039, RRR-050 | Veto poor first-impression composition on full-width screenshot; require multiple coherent scale treatments |
| **Graphic design / layout** | The photographs form a compact, image-rich composition with purposeful visual density | RRR-007, RRR-023, RRR-034, RRR-036, RRR-037, RRR-041 | Veto single-image rows, excessive vertical walls, repetitive frames and blank-looking fields |
| **Photography / image fidelity** | No visibly soft, jagged, overscaled JPEG at a featured size | RRR-018, RRR-019, RRR-020, RRR-021, RRR-024, RRR-025 | Veto any hero without size/source audit and actual 100% rendered check |
| **Art direction / editorial sequence** | Each page has multiple visibly different design compositions | RRR-038, RRR-040, RRR-043, RRR-047, RRR-048 | Veto repeated cards disguised by different section colors |
| **Illustration / identity** | Protected selected signature artwork and monogram; meaningful illustration integrated, not arbitrary decoration | RRR-053, RRR-057, RRR-063, RRR-073 | Veto overwritten logo, fake editable-vector claims, anonymous decorative stock imagery |
| **Typography** | Headlines and captions create hierarchy without dominating the photographs | RRR-008, RRR-045, RRR-069, RRR-071 | Veto unreadable small labels, oversized headings and long monotonous text walls |
| **Materials / texture** | Rich printmaking, sign painting and physical material character beyond flat gradients | RRR-066, RRR-068, RRR-070, RRR-075 | Veto unconvincing faux effects or textures that mask photography |
| **Biography / history** | Accurate public history of all careers and accomplishments with cautious sourced dates | RRR-079, RRR-082, RRR-087, RRR-089, RRR-094 | Veto unsupported life details, missing major trade or repeated one-photo chapter designs |
| **Sign-production specialist** | Evidence of actual signmaking craftsmanship, production and shop operations | RRR-084, RRR-085, RRR-096, RRR-097, RRR-100 | Veto generic job descriptions substituted for demonstrated work |
| **Aerospace / technical reviewer** | Graphite/composites, B-2, metalwork, welding, machining, RIP/ICC stated precisely | RRR-088, RRR-089, RRR-091, RRR-095, RRR-096 | Veto implied classified images or current certification inflation |
| **Local-history / Facebook reviewer** | Visitors can understand maker and historian; no need for invasive contact | RRR-003, RRR-081, RRR-098, RRR-110, RRR-122 | Veto recruiter-only language that alienates ordinary readers |
| **UX/navigation** | Every project and chapter is intuitive on desktop and mobile; archive isn't one giant feed | RRR-107, RRR-111, RRR-112, RRR-118 | Veto hidden controls and scroll-fatiguing default gallery |
| **Accessibility / performance** | Keyboard, touch, zoom, contrast, image loading and reduced motion all verified | RRR-121, RRR-124, RRR-136, RRR-139 | Veto broken interaction; do not equate Axe pass with visual quality |
| **Privacy / publication control** | No private contact details; no public production change without approval | RRR-119, RRR-120, RRR-125, RRR-132, RRR-143 | Veto mailto, public phone, address, form, public résumé and unauthorized deployment |
| **Skeptical antagonist** | Demand visual evidence and insist that 'finished' means owner-reviewed | RRR-131, RRR-137, RRR-146, RRR-150, RRR-152 | Veto high scores, CSS quantity and team unanimity claims unsupported by visual review |
| **Owner approval** | Retain final say over actual visual product, not just described intention | RRR-005, RRR-133, RRR-140, RRR-147 | No publication or completion claim before complete full-page owner review |

## Compulsory stage gates

**Stage 0 — Frozen source and approved assets.** Preserve photo originals, 56-image original identity archive, original golden signature proof, approved RRR artwork, and all historical branches. Identify newer code assets as candidate implementations rather than historical approvals. Public `main` cannot be changed.

**Stage 1 — Original image quality.** Measure all 103 current-photo sources and their intended display sizes. Any featured photo too soft, artifacted or small is either downsized, displayed as a small historical record or substituted with an already-authentic higher-quality source. Never invent a replacement photograph.

**Stage 2 — The layout composition.** Require image-rich art-directed homepage with several composition families, plus layouts that vary meaningfully by chapter. A solitary giant photo row is not an acceptable default. Show a complete desktop scroll view and mobile scroll view. No decorative embellishment can conceal a structurally poor layout.

**Stage 3 — Content integrity.** Preserve the user's full career, including sign businesses, teaching, aerospace, metals, welding, automotive work, computer field service and social history. The My Story page must not copy the résumé's private contact info. Employer roles and qualifications must remain source-qualified.

**Stage 4 — Review after real screenshots.** Explicitly record specialist objections and resolve them; compare the new full-page design against the stronger historical curated version. A passing browser suite is necessary but never sufficient.

**Stage 5 — User review and release.** Show the full four-page final experience and exact changes, wait for explicit user approval; only then consider deployment and source normalization. Never confuse raw.githack public preview with private hosting.

## Outcome of the current reconciliation

The current `portfolio-life-story-masterpiece-review-2026-11-13` layout **fails Stage 2**, and is also not verified against Stage 1 for all 103 photographs. It remains **NOT ACCEPTED**; do not call it final.

## Link to permanent source audit

- `portfolio-dev/audit/PORTFOLIO_EXPECTATIONS_AND_ACCEPTANCE_REGISTER.md` — 153 trackable expectations, each with status, evidence and next action.
- `portfolio-dev/audit/PHOTO_RESOLUTION_AND_LAYOUT_DEFECTS.md` — measured original-photo risks and exact layout-failure descriptions.
- `portfolio-dev/design-studies/216-creative-direction-candidates.md` — earlier brainstorming inventory. These were proposals, not 216 approvals.
