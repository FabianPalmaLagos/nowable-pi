## ADDED Requirements

### Requirement: Nowable owns publication metadata
Nowable MUST maintain the authoritative publication metadata contract for landings it publishes or prepares for Cloudflare.

#### Scenario: Publication metadata is recorded
- **WHEN** a landing publication record is created
- **THEN** it MUST include prospect reference, landing identifier, version, version sequence, Cloudflare URL, deployment timestamp, TTL/expiry, state, approval status, and metadata provenance
- **AND** external writes MUST remain disabled unless explicitly approved

### Requirement: Latest and approved retrieval is deterministic
Nowable MUST retrieve latest and approved landing metadata from publication records without inspecting local output folders.

#### Scenario: Latest differs from approved
- **WHEN** the newest published version is pending approval
- **THEN** latest MUST return the highest non-archived version sequence
- **AND** approved MUST return the newest approved, TTL-valid version
- **AND** both results MUST remain distinct when they differ

#### Scenario: Local outputs are not a source of truth
- **WHEN** metadata is missing from records
- **THEN** the system MUST return unknown or blocked
- **AND** it MUST NOT inspect local `outputs/` folders to infer URLs, versions, or approval state

### Requirement: Nowable harness supports ADW execution
Nowable Pi MUST provide local harness surfaces for scoped planning, single-writer implementation, and independent verification.

#### Scenario: A non-trivial Nowable change is implemented
- **WHEN** a worker receives a contract
- **THEN** the contract MUST include domain lock, claims, validation commands, and stop rules
- **AND** verifier evidence MUST validate files and local commands independently
