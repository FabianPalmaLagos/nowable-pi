## Why

Nowable needs to own the publication metadata contract for landings it publishes to Cloudflare. Rapigrowth/Niumind can coordinate and consume references, but Nowable must remain the source of truth for version ordering, TTL, state, approval, and publication provenance.

## What Changes

- Add a Nowable-owned publication metadata schema, template, fixture, and deterministic check.
- Define latest and approved retrieval without local `outputs/` inspection.
- Establish the Nowable Pi harness as the operational owner for future publication traceability work.
- Keep external Cloudflare/Nowable writes blocked until explicit human approval and credentials exist.

## Impact

- New capability: `nowable-publication-traceability`.
- Affected docs/schemas/templates/fixtures live in `nowable-pi`.
- No production deployment or external write is included in this baseline.
