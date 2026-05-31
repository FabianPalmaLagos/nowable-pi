# Publication Safety Policy

Nowable publication metadata can be inspected and validated locally by default. Publication or remote mutation is blocked unless a human explicitly approves the exact target, credentials, and command.

## Allowed by default

- Reading schemas, templates, fixtures, and docs.
- Running local deterministic checks.
- Creating or editing fixture records that use `fixture://` URIs.

## Blocked without explicit approval

- Cloudflare deploys or API writes.
- Nowable production writes.
- Drive, Supabase, OpenBrain, or other remote writes.
- Credential edits or `.env*` changes.
- Inferring latest/approved state from local `outputs/` folders.

## Rule

If metadata is missing, record `unknown` or `blocked`; do not guess from local files.
