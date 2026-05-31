# OpenSpec Flow

Use OpenSpec for non-trivial Nowable changes that affect publication behavior, schemas, agent workflows, storage, APIs, or deployment metadata.

## Source of truth

- Active changes live under `openspec/changes/<change>/`.
- Specs describe durable Nowable behavior.
- Niumind may coordinate work, but Nowable-owned contracts live in this project.

## Flow

1. Propose or reconcile OpenSpec artifacts.
2. Produce a closed plan/domain lock.
3. Use one `nowable.worker` to implement.
4. Use `nowable.verifier` to validate claims and run local checks.
5. Archive only after pass and explicit approval.

External Cloudflare/Nowable writes remain blocked unless explicitly approved.
