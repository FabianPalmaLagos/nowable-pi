---
name: plan
package: nowable
description: Nowable planning chain: scout context, then produce a closed plan and validation contract without implementation edits.
---

## nowable.scout
output: harness/reports/nowable-scout.md
outputMode: file-only
reads: AGENTS.md, README.md, harness/README.md, harness/policies/publication-safety.md
progress: true

Scout the Nowable Pi context for this request:

{task}

Return relevant files, constraints, risks, and suggested domain lock. Do not edit files.

## nowable.planning-lead
output: harness/reports/nowable-plan.md
outputMode: inline
reads: harness/reports/nowable-scout.md, harness/templates/worker-contract.md, harness/policies/publication-safety.md
progress: true

Using the scout report and original request, produce a CLOSED implementation plan and validation contract.

Original request:
{task}

Scout report:
{previous}
