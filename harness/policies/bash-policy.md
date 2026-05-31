# Bash Policy

Bash is allowed for inspection and local validation, not uncontrolled mutation.

## Allowed by default

- Read-only inspection: `pwd`, `ls`, `find`, `grep`, `rg`, `git status`, `git diff`.
- Local validation: `node scripts/check-nowable-fixture.mjs`, `node harness/evals/runner.mjs smoke`.
- Project-local file creation only when an approved worker contract lists the path.

## Blocked without explicit approval

- Destructive deletion or reset commands.
- Cloudflare deploys/API writes or production Nowable writes.
- Credential edits, `.env*` writes, or secret handling.
- Writes to `outputs/`, `.git/`, `node_modules/`, `dist/`, or `build/`.
- Commands that infer publication state from local `outputs/` folders.

If a blocked command seems required, stop and ask the parent with the exact command and safer alternatives.
