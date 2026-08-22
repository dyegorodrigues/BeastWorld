#!/usr/bin/env bash
set -euo pipefail

repo_root="$(git rev-parse --show-toplevel)"
cd "$repo_root"

required_files=(
  "START_HERE_FOR_AI.md"
  "README.md"
  "AGENTS.md"
  "PROJECT_STATE.md"
  "HANDOFF.md"
  "docs/00_governance/RETOMADA.md"
  "docs/00_governance/CONTEXT_REHYDRATION_PACKET.md"
  "docs/00_governance/CONTEXT_REHYDRATION_AUDIT_2026-08-22.md"
  "docs/00_governance/CONTEXT_INDEX.md"
  "docs/00_governance/CONTEXT_TIMELINE_2026-08-22.md"
  "docs/00_governance/CONTEXT_READ_RECEIPT_TEMPLATE.md"
  "docs/00_governance/INTERACTION_ARCHIVE_INDEX.md"
  "docs/00_governance/INTERACTION_ARCHIVE_AND_PROVENANCE_POLICY.md"
  "docs/00_governance/SESSION_ARCHIVE_LEDGER.md"
  "docs/00_governance/SESSION_RESUME_TEMPLATE.md"
  "docs/09_external_ai/manus/working/09-DOCUMENTO-MESTRE-V2.md"
  "docs/09_external_ai/manus/working/11-DELTA-AUTORAL-22-08-DRAGAO-PAI-E-LIBERDADE.md"
  "docs/08_sources/conversations/2026-08-22-author-context-recovery-request-verbatim-002.md"
)

for path in "${required_files[@]}"; do
  test -f "$path" || { printf 'MISSING\t%s\n' "$path" >&2; exit 1; }
done

test "$(git branch --show-current)" = "manus/reconstruction-spine-2026-08-21" || {
  printf 'WARNING\tbranch=%s\texpected=manus/reconstruction-spine-2026-08-21\n' "$(git branch --show-current)"
}

test "$(sha256sum docs/08_sources/attachments/2026-08-22/pasted_content.txt | awk '{print $1}')" = "a79a3a02e1aeb1b35c74b5627775f31868b86acca58c9419c504c81798051bd8"
test "$(sha256sum docs/08_sources/attachments/2026-08-22/pasted_content_2.txt | awk '{print $1}')" = "1503607da30eefe09dc546937138aa2c1a2d2bbe0d52bd4cd0a26598837a5b5a"

git diff --check
printf 'PASS\trequired_files=%s\n' "${#required_files[@]}"
printf 'HEAD\t%s\n' "$(git rev-parse HEAD)"
printf 'BRANCH\t%s\n' "$(git branch --show-current)"
printf 'REMOTE\t%s\n' "$(git rev-parse --abbrev-ref --symbolic-full-name '@{u}' 2>/dev/null || printf 'NO-UPSTREAM')"
printf 'MANIFEST\t%s\n' "docs/00_governance/ARCHIVE_MANIFEST_2026-08-22.tsv"
