#!/usr/bin/env python3
"""Lightweight BeastWorld context/provenance integrity checks.

This catches repeatable operational regressions. It does not decide lore or
replace human review of Notion, author intent, or canon status.
"""

from __future__ import annotations

import json
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]

REQUIRED = [
    "START_HERE_FOR_AI.md",
    "V5_RECONCILIATION_STATE.md",
    "V5_CONTEXT_ROUTER.md",
    "docs/00_governance/CURRENT_CREATIVE_CHECKPOINT_2026-09-01.md",
    "docs/00_governance/CURRENT_SESSION_POINTER.json",
    "docs/00_governance/SESSION_ARCHIVE_LEDGER.md",
    "docs/00_governance/CONTEXT_ENGINEERING_OPERATING_SYSTEM_V2_2026-09-01.md",
]

ACTIVE_HOT = [
    "V5_RECONCILIATION_STATE.md",
    "V5_CONTEXT_ROUTER.md",
    "docs/00_governance/CURRENT_CREATIVE_CHECKPOINT_2026-09-01.md",
]

REJECTED_ACTIVE_PHRASES = [
    "mixed/substantial → alchemically materialized temporary soma",
    "mixed/alchemical temporary soma",
    "soma misto/alquímico",
]


def fail(message: str, failures: list[str]) -> None:
    failures.append(message)


def main() -> int:
    failures: list[str] = []

    for relative in REQUIRED:
        if not (ROOT / relative).is_file():
            fail(f"missing required context artifact: {relative}", failures)

    pointer_path = ROOT / "docs/00_governance/CURRENT_SESSION_POINTER.json"
    if pointer_path.is_file():
        try:
            pointer = json.loads(pointer_path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError) as exc:
            fail(f"invalid CURRENT_SESSION_POINTER.json: {exc}", failures)
            pointer = {}

        if pointer.get("promoted") is not False:
            fail("current pointer must explicitly declare promoted=false", failures)

        for key in ("source_records", "passes", "corrected_artifacts"):
            for relative in pointer.get(key, []):
                if not (ROOT / relative).is_file():
                    fail(f"pointer target does not exist ({key}): {relative}", failures)

        session_id = pointer.get("session_id")
        ledger = ROOT / "docs/00_governance/SESSION_ARCHIVE_LEDGER.md"
        if session_id and ledger.is_file() and session_id not in ledger.read_text(encoding="utf-8"):
            fail(f"current session missing from Git ledger: {session_id}", failures)

    for relative in ACTIVE_HOT:
        path = ROOT / relative
        if not path.is_file():
            continue
        content = path.read_text(encoding="utf-8")
        if "chatgpt/beastworld-v5-reconciliation-2026-08-26" not in content and relative != "docs/00_governance/CURRENT_CREATIVE_CHECKPOINT_2026-09-01.md":
            fail(f"active V5 branch not discoverable in {relative}", failures)
        for phrase in REJECTED_ACTIVE_PHRASES:
            if phrase in content:
                fail(f"rejected materialization model remains active in {relative}: {phrase}", failures)

    retomada = ROOT / "docs/00_governance/RETOMADA.md"
    if retomada.is_file():
        content = retomada.read_text(encoding="utf-8")
        if "V5_RECONCILIATION_STATE.md" not in content:
            fail("RETOMADA lacks a visible V5 override", failures)

    if failures:
        print("Context integrity check FAILED:")
        for item in failures:
            print(f"- {item}")
        return 1

    print("Context integrity check passed for automated scope.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
