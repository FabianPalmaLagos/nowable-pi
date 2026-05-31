# Cloudflare Publication Traceability v0

## Estado

Borrador operativo local/manual/fixture-based. No autoriza writes externos.

## Propósito

Nowable necesita registrar qué landing fue publicada, qué URL de Cloudflare corresponde, qué versión está más nueva y qué versión está aprobada para uso comercial. Esta información vive en Nowable Pi, no en Niumind.

## Ownership

- **Owner de contrato:** Nowable Pi.
- **Consumidor externo:** Niumind/Rapigrowth puede coordinar por OpenSpec e importar referencias.
- **Fuente primaria:** `nowable-publication-metadata` en este repo o su futura persistencia cloud aprobada.
- **No fuente:** carpetas locales `outputs/`.

## Ruta de metadata

Cada registro de publicación debe incluir:

- prospect/customer reference;
- landing identifier;
- version and monotonic `version_sequence`;
- Cloudflare URL;
- deployment timestamp;
- TTL/expiry;
- state;
- approval status;
- metadata provenance;
- retrieval policy with `local_outputs_allowed: false`.

## Retrieval

- **Latest:** newest non-archived landing by `version_sequence`.
- **Approved:** newest landing with `state: approved`, `approval_status: approved`, and valid TTL at the evaluation timestamp.
- If latest and approved differ, return both distinctly.
- If metadata is missing, return `unknown`; do not infer by scanning `outputs/`.

## Guardrails

- Fixtures and manual imports do not publish anything.
- Real Cloudflare/Nowable writes require explicit human approval and credentials outside this slice.
- Do not store secrets or customer-sensitive raw data in fixture records.
