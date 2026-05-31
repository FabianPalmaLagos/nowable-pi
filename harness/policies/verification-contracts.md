# Verification Contracts

A verification contract defines what done means before implementation starts.

## Claim shape

```yaml
claims:
  - id: C1
    claim: "specific statement"
    check: "file inspection | command | fixture test"
    evidence_expected: "path, line, or command output"
```

## Required checks for publication traceability

- Latest/approved selection is deterministic.
- `local_outputs_allowed` remains false.
- Fixtures do not reference local `outputs/` folders.
- External writes are disabled unless explicitly approved.

Verifier statuses: `pass`, `fail`, `unverifiable`, `blocked`.
