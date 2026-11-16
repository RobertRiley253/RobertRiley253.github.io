# HISTORY / FACEBOOK COMMUNITY FEATURE — design decision and supplied links (November 15–16, 2026)

## Owner's current directive
Robert wants an elegant Facebook and history-community feature for his public portfolio. Main landing place: My Story's local-history chapter; supplemental invitation on the homepage and, when built, the future Photo Album. Distinguish **the groups he founded / runs / developed** from groups where he is merely an administrator and substantial contributor. His supplied URLs are his own communities; the screenshot shows a broader set of groups including ones he administers. No additional image uploads desired. Use existing authentic historical images under `portfolio-dev/incoming-portfolio-2026-11-15/history_*.png` for cards, selected with editorial accuracy. Keep the emerald/champagne-gold/parchment identity. This is not a wholesale redesign.

## Design perspective consensus (AI review lenses; not independently hired humans)
- **Art direction:** an editorial historical photo essay with a conspicuous Facebook-branded introduction, one featured image, elegant individual cards and short descriptions, not raw numerical links or a Facebook screenshot montage. Green backgrounds, restrained gold hairlines and ivory caption mats; align with approved site's type and textures.
- **History/community:** anchor to the owner's research, public history storytelling and memory-sharing. Avoid invented founding dates, audience claims or conflating general administrator work with owned communities. Do not imply every historical archive photograph is personally shot or owned by Robert.
- **Graphic/UX:** the profile section should follow `#new-local-history-photographs` or appear directly after `#story-history`'s narrative. Add a single modest homepage referral and a nonintrusive closing link in future `The Photo Album`. Individual card clicks should open their correct group URL. Mobile: single column; desktop: photo-plus-copy followed by a 2/3-column variable grid. Screen-reader labels disclose external Facebook navigation; use noreferrer/noopener.
- **Employment:** introduce community outreach as a legitimate demonstration of research, writing, visual curation, audience engagement and community building; do not let this dominate the employer-first professional homepage. Preserve precise verified Insights wording: 46,560,500 **content views over 606 days**, not unique people and not purely historical posts.
- **Skeptical / link verification:** Do not pair a screenshot group name with an unverified numeric group URL. Facebook refuses unauthenticated fetch for these URLs; search engines didn't confirm the name-to-ID relationship. Fifth and sixth pasted URL differ in type; the photo URL isn't a group.

## Editorial recommendation
Feature title: **The stories continue on Facebook.**
Lead: **“History is more than old photographs. It's the people who remember the places, businesses and everyday moments behind them. I share regional history, archival discoveries and stories—and I love seeing the community add its own memories.”**
Primary blue Facebook icon with clear **“Follow Robert Riley's history stories”** link to `https://www.facebook.com/rox.riley`.
Subheading: **“The communities I've built”** for the five verified owner-supplied group URLs, once named. Give each a distinct *actual* group title, brief evocative copy tied to that title, and a verified active link; avoid generic numbered cards.
Separate footer or small aside: **“You may also find me sharing stories in other local history groups.”** Do not assert ownership or list them as founder communities without owner verification.
Optional footer: **“The archive keeps growing. Come back for another photograph, story or shared memory.”**
Avoid Facebook logo copyright misuse: a simple recognizable Facebook “f” and brand-blue badge is a suitable signpost; no scraping or downloading other people's profile photos and covers. Reuse existing historical portfolio images to create the featured visuals.

## Screenshot-supplied group names (10 visible, not URL-identified)
1. The Kapowsin History Group
2. The Puyallup Valley History Group
3. Tacoma Time Capsule
4. Washington State History
5. Rob Riley's Time Vault
6. Bad A.I.
7. Puyallup Time Capsule
8. Puyallup History Page Group
9. The 70's ❤️
10. I ❤️ 80s

The user says the links he gave are groups he created and runs, while other entries in this screenshot are communities he helps administer or where he contributes. **Do not assume any specific group-ID/name pairing from list order.**

## Exact user-supplied URLs
Five actual group URLs:
- `https://www.facebook.com/groups/1564227011225101`
- `https://www.facebook.com/groups/1737856936769524`
- `https://www.facebook.com/groups/698198932918069`
- `https://www.facebook.com/groups/9675742525806537`
- `https://www.facebook.com/groups/1198695048625003`

One individual image, **not a Facebook group home**:
- `https://www.facebook.com/photo/?fbid=3608704289260655&set=p.3608704289260655`
Do not use this photo link as a group card. Determine its intended role before using it.

Personal profile for all readers:
- `https://www.facebook.com/rox.riley`

## Precise unresolved detail before group cards can be final
Need one correct name mapping for each of the five numeric group URLs. Facebook direct requests returned DisabledError and web search did not reliably resolve names. Ask user to copy the title shown in each opened group URL, or provide screenshot showing address and group name; **no image upload required for portfolio asset creation**. This is a small editorial identification step, not a redesign or requirement to upload new artwork. Once mapped, add cards in a single commit, using the history photographs already in repo. A Facebook profile CTA does not depend on the mapping and can be built independently.

## Publication boundary
Only edit the development branch `portfolio-editorial-material-review-2026-11-13` until owner approves exact final rendered site. Public `main` stays unchanged. Do not send Facebook posts, join groups, invite members, or publish correspondence.
