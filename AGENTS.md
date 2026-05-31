# Nowable Pi Agents

Nowable Pi is the operational harness for the Nowable product. Treat it as the owner of landing-page publication metadata, Cloudflare deployment traceability, fixtures, and future Nowable-specific automation.

## Operating protocol

1. Keep Nowable-owned schemas, templates, fixtures, docs, and tests in this repository.
2. Niumind may coordinate implementation through OpenSpec, but Niumind must not own Nowable publication contracts.
3. Use local/manual/fixture-based work unless a human explicitly approves real Cloudflare/Nowable credentials and external writes.
4. Do not store secrets, API keys, customer PII, or generated `outputs/` artifacts in the harness.
5. Keep `README.md` and `CHANGELOG.md` updated for managed directories changed by a task.

## Guardrails

- No Cloudflare writes without explicit approval.
- No publishing from fixtures.
- No local `outputs/` folder inspection for latest/approved publication state.
- Unknown metadata must remain unknown instead of guessed.
