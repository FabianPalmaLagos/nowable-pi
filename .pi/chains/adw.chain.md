---
name: adw
package: nowable
description: Nowable ADW chain: plan, single writer, independent verifier.
---

## nowable.planning-lead
output: harness/reports/nowable-plan.md
outputMode: file-only
reads: AGENTS.md, README.md, harness/policies/publication-safety.md, harness/templates/worker-contract.md
progress: true

Produce a CLOSED implementation contract for:

{task}

Do not edit implementation files.

## nowable.worker
output: harness/reports/nowable-worker-handoff.md
outputMode: file-only
reads: harness/reports/nowable-plan.md, AGENTS.md, harness/policies/publication-safety.md, harness/templates/worker-handoff.md
progress: true

Execute only the closed contract from the previous step.

Original request:
{task}

Contract:
{previous}

## nowable.verifier
output: harness/reports/nowable-verifier-report.md
outputMode: inline
reads: harness/reports/nowable-plan.md, harness/reports/nowable-worker-handoff.md, harness/templates/verifier-report.md, harness/policies/publication-safety.md
progress: true

Verify the worker claims independently against files and commands.

Original request:
{task}

Worker handoff:
{previous}
