# Nowable Pi agents

Agentes de proyecto para operar Nowable Pi con disciplina ADW.

## Roles

- `nowable.orchestrator` — coordinación, contratos y stop rules.
- `nowable.scout` — contexto comprimido read-only.
- `nowable.spec-lead` — OpenSpec/spec gate para cambios Nowable.
- `nowable.planning-lead` — planes cerrados, domain lock y verificación.
- `nowable.engineering-lead` — revisión técnica y riesgos sin editar código.
- `nowable.worker` — único writer para contratos aprobados.
- `nowable.verifier` — verificación independiente.
- `nowable.skill-architect` — convierte flujos repetidos en skills.
