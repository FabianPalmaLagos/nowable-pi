---
name: nowable-harness
description: Operates the Nowable Pi harness: ADW workflows, publication metadata contracts, Cloudflare traceability, no-outputs retrieval, single-writer execution, and independent verification.
---

# Nowable Harness

Use this skill for Nowable Pi tasks involving agents, ADW, publication metadata, Cloudflare traceability, fixtures, schemas, templates, or verifier contracts.

## Protocol

1. Read `AGENTS.md`, `harness/README.md`, and `harness/policies/publication-safety.md`.
2. For non-trivial changes, use `nowable.plan` or `nowable.openspec-adw`.
3. Keep a single writer: `nowable.worker`.
4. Verify with `nowable.verifier`.
5. Keep Nowable publication contracts in this repo; Niumind only coordinates or references them.

## Deterministic check

```bash
node scripts/check-nowable-fixture.mjs
```
