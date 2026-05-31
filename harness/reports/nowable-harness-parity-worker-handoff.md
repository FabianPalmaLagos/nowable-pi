# Worker Handoff — Nowable Pi Harness Parity + OpenSpec Baseline

## Summary

Implemented items 4 and 5: Nowable Pi now has Niumind-style harness parity surfaces and a Nowable-owned OpenSpec baseline for Cloudflare publication traceability.

## Completed scope

- Added harness parity directories: `harness/mental-models/`, `harness/runs/`, and `harness/evals/`.
- Added stronger policies for bash, domain locking, verification contracts, and OpenSpec flow.
- Added control-plane schemas for worker contracts, worker handoffs, and verifier reports.
- Confirmed/updated worker contract, worker handoff, and verifier report templates.
- Added a Nowable-owned OpenSpec change: `add-cloudflare-publication-traceability`.
- Updated package scripts for fixture, eval, combined harness check, and OpenSpec validation.

## Key files

- `.pi/agents/README.md`
- `.pi/chains/README.md`
- `.pi/skills/nowable-harness/SKILL.md`
- `harness/policies/bash-policy.md`
- `harness/policies/domain-locking.md`
- `harness/policies/verification-contracts.md`
- `harness/policies/openspec-flow.md`
- `harness/schemas/worker-contract.schema.json`
- `harness/schemas/worker-handoff.schema.json`
- `harness/schemas/verifier-report.schema.json`
- `harness/evals/runner.mjs`
- `harness/evals/cases.json`
- `openspec/config.yaml`
- `openspec/changes/add-cloudflare-publication-traceability/tasks.md`
- `openspec/changes/add-cloudflare-publication-traceability/specs/nowable-publication-traceability/spec.md`

## Validation

- `node scripts/check-nowable-fixture.mjs` — pass; `nowable fixture ok: latest=v3, approved=v2`.
- `node harness/evals/runner.mjs smoke` — pass; `nowable eval smoke ok: 1/1 passed`.
- control schema parse command — pass; `control schemas parse ok`.
- `PATH="/Users/fpalma/Documents/Proyectos Personales/FabianPalma/my-pi-harness/niumind/node_modules/.bin:$PATH" openspec validate --all --json` — pass; 1 change passed, 0 failed.

## Claims

- C1: Nowable Pi has ADW parity surfaces for policies, mental models, runs, evals, templates, and schemas — pass.
- C2: Nowable Pi has an OpenSpec baseline for Cloudflare publication traceability — pass.
- C3: Fixture and smoke eval prove latest `v3` differs from approved `v2` without local `outputs/` lookup — pass.
- C4: External writes remain blocked by policy and fixture contract — pass.

## Remaining gaps

- `nowable-pi` is not initialized as a Git repository yet.
- OpenSpec CLI is validated using the existing Niumind-local executable path; add a local devDependency or global tool later if Nowable Pi should validate standalone.
- Future real Cloudflare/Nowable writes remain intentionally pending and require explicit approval.
