import fs from 'node:fs';
import path from 'node:path';

const profile = process.argv[2] || 'smoke';
const root = process.cwd();
const config = JSON.parse(fs.readFileSync(path.join(root, 'harness/evals/cases.json'), 'utf8'));
const ids = config.profiles[profile];
if (!ids) {
  throw new Error(`unknown eval profile: ${profile}`);
}

let passed = 0;
for (const id of ids) {
  const testCase = config.cases.find((item) => item.id === id);
  if (!testCase) throw new Error(`missing case: ${id}`);
  const record = JSON.parse(fs.readFileSync(path.join(root, testCase.fixture), 'utf8'));
  const versions = record.landing_versions;
  const asOf = new Date(record.retrieval_policy.evaluation_timestamp);
  const latest = versions
    .filter((v) => v.state !== 'archived')
    .sort((a, b) => b.version_sequence - a.version_sequence)[0];
  const approved = versions
    .filter((v) => v.state === 'approved' && v.approval_status === 'approved')
    .filter((v) => !v.ttl_expiry || new Date(v.ttl_expiry) > asOf)
    .sort((a, b) => b.version_sequence - a.version_sequence)[0];
  if (!latest || latest.version !== testCase.expected_latest) {
    throw new Error(`${id}: expected latest ${testCase.expected_latest}, got ${latest && latest.version}`);
  }
  if (!approved || approved.version !== testCase.expected_approved) {
    throw new Error(`${id}: expected approved ${testCase.expected_approved}, got ${approved && approved.version}`);
  }
  if (record.retrieval_policy.local_outputs_allowed !== testCase.local_outputs_allowed) {
    throw new Error(`${id}: local_outputs_allowed mismatch`);
  }
  const outputsPattern = /(^|\/)outputs(\/|$)/;
  const outputsRefs = versions.some((v) =>
    outputsPattern.test(v.cloudflare_url || '') || outputsPattern.test(v.metadata_source?.source_uri || ''),
  );
  if (outputsRefs) throw new Error(`${id}: fixture references local outputs folder`);
  passed += 1;
}
console.log(`nowable eval ${profile} ok: ${passed}/${ids.length} passed`);
