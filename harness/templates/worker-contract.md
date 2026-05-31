# Worker Contract

## Goal

<!-- Observable outcome. -->

## Domain lock

### Writable

- ``

### Read-only

- ``

### Forbidden

- `.git/`
- `.env*`
- `node_modules/`
- `outputs/`
- `dist/`
- `build/`
- external Cloudflare/Nowable writes unless explicitly approved

## Non-goals

- ``

## Claims

- id: C1
  claim: ""
  check: ""
  evidence_expected: ""

## Validation commands

```bash
node scripts/check-nowable-fixture.mjs
node harness/evals/runner.mjs smoke
```

## Stop rules

- Stop if a required edit is outside the domain lock.
- Stop if credentials or external writes are required.
- Stop if latest/approved retrieval would require local `outputs/` inspection.
