# RRR hybrid identity — ready for owner review (November 13, 2026)

## Direction requested
Use the **traditional interlocking RRR monogram in the top navigation**, the **preserved Robert R. Riley signature in the dark-green homepage hero**, and the **traditional monogram in the footer**. This intentionally combines the strongest aspects of the two prior branding directions instead of forcing one mark into every context.

## Implementation
- Created an independent hybrid branch from the traditional RRR review candidate, retaining all four pages, all **103 distinct photographic records**, image viewer and gallery presentation.
- Header and footer use the preserved `brand-assets/rrr-traditional-ink.png`; the hero uses `brand-assets/rrr-signature-champagne.png`.
- No newly invented logo or altered user source master was used. The previous traditional and script-only review branches stay intact.
- Responsive branded CSS is stored in `brand-review-theme.css`. The green feature area is signed without an explanatory mockup caption.
- Updated the Experience page to describe the hybrid accurately; the archived gold-on-green signature plaque remains visible in its branding context.
- Review-only, noindex, non-public. The primary development branch and public `main` are unchanged.

## Verified QA
- GitHub Actions run **43526117513**, conclusion **success**.
- **28/28** browser page and zoom test cases passed across four pages.
- **103/103** portfolio images successfully loaded and decoded in Chromium.
- **0** Axe WCAG 2/2.1 A/AA violation types in eight tested desktop/mobile page variants.
- Screenshots and raw reports archived as artifact **14085715487**; desktop/mobile comparison and full homepage were saved in ChatGPT Library under `/Signage Portfolio/Brand Integration Reviews/Hybrid Monogram + Signature`.
- CI restored to manual-only after success. Automated testing is not a substitute for actual human browser/device inspection.

## Release gate
The user has authorized building **this review candidate**, not publishing it. Obtain the owner's explicit approval of final appearance, photograph/caption accuracy and publication before any `main` merge, release or public site replacement.
