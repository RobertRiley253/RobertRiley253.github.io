# Incoming portfolio photograph transfer — 2026-11-13

Status: **54 of 54 manifest-listed JPEG previews transferred and size-reconciled with upload_manifest.csv. Full-resolution originals NOT transferred.**

## Source archives (retained in ChatGPT Library; do not delete)
- /Signage Portfolio/Incoming Original Photos/Robert_R_Riley_Portfolio_Recent_Uploads_GitHub_Transfer_2026-11-13.zip (211,894,686 bytes; reported 58 items)
- /Signage Portfolio/Incoming Original Photos/Signage_Portfolio_Three_New_Photos_2026-11-13.zip (16,053,776 bytes)
- /Signage Portfolio/Transfer Staging/ (54 image-named JPEG Base64 files, plus test files and upload_manifest.csv)

## Committed transfer
- Files: incoming-portfolio/previews/image(...).jpg — **54**
- Preview bytes summed from Git tree: **8,778,663**
- Manifest: incoming-portfolio/upload_manifest.csv
- For each row: original filename, size, SHA-256 and dimensions; corresponding JPEG preview filename, size, SHA-256 and dimensions.
- Git blob SHA values and sizes are available from the repository tree for the development branch.
- All 54 preview filenames and GitHub byte sizes were reconciled with the manifest on 2026-11-13; zero missing or mismatched.
- Images under previews/ are compressed JPEGs; they are **not** the originals.

## Original-file blocker
One full-resolution PNG, already staged as `full-original-test.b64.txt` (8,160,832 Base64 characters; approximately 6.12 MB binary), was fetched intact from the ChatGPT Library. Sending that entire Base64 payload to GitHub's `create_blob` connector returned: `h2 protocol error: error reading a body from connection`. No successful full-resolution blob or commit was confirmed. Do not repeat large-payload attempts without a different transport strategy.
- The earlier ZIP-to-Windows downloads failed despite internal ZIP integrity checks; that is not evidence of corruption.
- GitHub transfer requires a complete binary Base64 payload per blob; the connector does not offer an append/chunk-stream call.
- For larger originals, consider an independent authenticated bulk-upload mechanism or reliable external archive staging rather than repeated oversized connector calls.

## Safeguards
- Branch: `portfolio-development-2026-11-12` only.
- `main` not modified.
- Existing site pages and gallery layout not modified.
- No source archives deleted.
- Reconcile manifest by filename + SHA-256 before adding any future files to prevent duplicates.
