## Context

The initial Rapigrowth Prospect Factory work identified Nowable/Cloudflare traceability as necessary, but Nowable is a separate product. This change makes Nowable Pi the owner of its publication metadata and harness contracts.

## Decisions

1. **Nowable owns publication metadata**
   - The canonical schema is `harness/schemas/nowable-publication-metadata.schema.json`.
   - Rapigrowth/Niumind can reference records but should not own this contract.

2. **Fixture-first traceability**
   - The baseline uses a deterministic fixture with `latest=v3` and `approved=v2`.
   - This validates TTL/state/approval behavior without credentials.

3. **No outputs-folder retrieval**
   - Current link resolution must come from records, not generated folders.

4. **External writes remain blocked**
   - Cloudflare/Nowable writes require a later explicit contract.

## Risks

- Future adapters may drift from the fixture contract; mitigate with evals and verifier claims.
- External credentials may broaden risk; require explicit approval and domain lock.
