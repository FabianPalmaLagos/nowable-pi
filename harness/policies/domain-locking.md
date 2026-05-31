# Domain Locking Policy

Every implementation task must name the smallest writable path set required.

## Roles

- Leads may write reports/plans under `harness/reports/**` and OpenSpec artifacts when scoped.
- `nowable.worker` writes only paths listed in a closed worker contract.
- `nowable.verifier` writes reports under `harness/reports/**` only.

## Protected paths

Never write without explicit approval:

- `.git/`, `.env*`, `node_modules/`, `outputs/`, `dist/`, `build/`.
- Files outside the Nowable Pi project root.
- Credentials or production deployment configuration.

## Rule

If a required edit is outside the domain lock, stop before editing.
