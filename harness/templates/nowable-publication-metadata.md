# Nowable Publication Metadata

Use this template to record a Nowable landing publication. Do not publish or mutate Cloudflare from this template.

```yaml
version: 1
type: nowable-publication-metadata
id: ""
prospect_reference:
  rapigrowth_prospect_id: ""
  company_name: ""
  external_record_uri: ""
  source: rapigrowth | manual | fixture | other
publication_metadata_path:
  source_of_truth: nowable | manual_import | fixture | cloudflare_export | other
  import_mode: manual | automated | fixture | hybrid
  import_status: draft | in_review | approved | blocked
  owner: ""
  reviewer: ""
  source_uri: ""
  external_writes_allowed: false
retrieval_policy:
  mode: latest | approved | latest_and_approved | manual_selection
  local_outputs_allowed: false
  evaluation_timestamp: ""
  latest_rule: "highest version_sequence among non-archived records"
  approved_rule: "newest approved record with valid TTL"
  unknown_behavior: "return unknown; do not inspect outputs folders"
landing_versions:
  - prospect: ""
    landing_identifier: ""
    version: "v1"
    version_sequence: 1
    cloudflare_url: ""
    deployment_timestamp: ""
    ttl_expiry: ""
    state: draft | published | approved | expired | archived | blocked
    approval_status: pending | approved | rejected | not_required
    metadata_source:
      source_uri: ""
      source_of_truth: nowable | manual_import | fixture | cloudflare_export | other
      import_mode: manual | automated | fixture | hybrid
review:
  review_status: draft | in_review | approved | blocked
  confidence: high | medium | low
  human_review_required: true
```

## Rules

- Latest and approved can be different versions.
- TTL affects approved eligibility.
- `local_outputs_allowed` must remain `false`.
- Use `unknown` rather than guessing missing Cloudflare URLs or approval states.
