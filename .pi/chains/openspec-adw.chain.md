---
name: openspec-adw
package: nowable
description: Nowable OpenSpec-backed ADW chain with spec lead, plan, worker, and verifier.
---

## nowable.spec-lead
output: harness/reports/nowable-spec-lead.md
outputMode: file-only
reads: AGENTS.md, README.md, harness/policies/publication-safety.md
progress: true

Check or prepare OpenSpec readiness for this Nowable request:

{task}

Return source-of-truth artifacts, blockers, and implementation boundaries. Do not edit non-OpenSpec implementation files.

## nowable.planning-lead
output: harness/reports/nowable-plan.md
outputMode: file-only
reads: harness/reports/nowable-spec-lead.md, harness/templates/worker-contract.md, harness/policies/publication-safety.md
progress: true

Produce a CLOSED worker contract from the OpenSpec/spec-lead report.

Original request:
{task}

Spec report:
{previous}

## nowable.worker
output: harness/reports/nowable-worker-handoff.md
outputMode: file-only
reads: harness/reports/nowable-plan.md, harness/policies/publication-safety.md, harness/templates/worker-handoff.md
progress: true

Execute only the closed OpenSpec-backed contract.

Original request:
{task}

Contract:
{previous}

## nowable.verifier
output: harness/reports/nowable-verifier-report.md
outputMode: inline
reads: harness/reports/nowable-plan.md, harness/reports/nowable-worker-handoff.md, harness/templates/verifier-report.md, harness/policies/publication-safety.md
progress: true

Verify implementation against the OpenSpec/spec report, plan, and worker claims.

Original request:
{task}

Worker handoff:
{previous}
