import fs from 'node:fs';

const fixturePath = new URL('../harness/fixtures/nowable-cloudflare-publication.fixture.json', import.meta.url);
const record = JSON.parse(fs.readFileSync(fixturePath, 'utf8'));

if (record.type !== 'nowable-publication-metadata') {
  throw new Error(`unexpected record type: ${record.type}`);
}
if (record.publication_metadata_path.external_writes_allowed !== false) {
  throw new Error('external writes must be disabled for fixture/import path');
}
if (record.retrieval_policy.local_outputs_allowed !== false) {
  throw new Error('local outputs lookup must be disabled');
}

const versions = record.landing_versions;
const asOf = new Date(record.retrieval_policy.evaluation_timestamp);
const latest = versions
  .filter((v) => v.state !== 'archived')
  .sort((a, b) => b.version_sequence - a.version_sequence)[0];
const approved = versions
  .filter((v) => v.state === 'approved' && v.approval_status === 'approved')
  .filter((v) => !v.ttl_expiry || new Date(v.ttl_expiry) > asOf)
  .sort((a, b) => b.version_sequence - a.version_sequence)[0];

if (!latest || latest.version !== 'v3') {
  throw new Error(`expected latest v3, got ${latest && latest.version}`);
}
if (!approved || approved.version !== 'v2') {
  throw new Error(`expected approved v2, got ${approved && approved.version}`);
}
if (latest.version === approved.version) {
  throw new Error('fixture must prove latest differs from approved');
}

const outputsPattern = /(^|\/)outputs(\/|$)/;
const outputsRefs = versions.some((v) =>
  outputsPattern.test(v.cloudflare_url || '') || outputsPattern.test(v.metadata_source?.source_uri || ''),
);
if (outputsRefs) {
  throw new Error('fixture must not reference local outputs folders');
}

console.log(`nowable fixture ok: latest=${latest.version}, approved=${approved.version}`);
