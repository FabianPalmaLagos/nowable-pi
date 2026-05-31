# Nowable Pi

Harness operativo para Nowable: contratos, plantillas, fixtures y validaciones locales para trazabilidad de landings publicadas en Cloudflare.

## Contenido

- `docs/` — notas operativas y decisiones de producto.
- `.pi/` — agentes, chains y skills de Nowable Pi.
- `harness/` — políticas, esquemas, plantillas, fixtures y reportes locales.
- `scripts/` — validaciones determinísticas sin dependencias externas.
- `openspec/` — cambios/specs Nowable-owned para publicación y trazabilidad.

## Relación con Niumind

Niumind puede contener el OpenSpec que coordina el desarrollo, pero la estructura Nowable vive aquí. Este repo es la fuente para metadata de publicación, versionado, TTL, estado y aprobación de landings.

## Validación local

```bash
node scripts/check-nowable-fixture.mjs
node harness/evals/runner.mjs smoke
```

La validación no llama servicios externos ni requiere credenciales.
