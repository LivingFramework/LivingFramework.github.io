# Template Status Guide

**Purpose:** Classify the Claude/Cowork templates by current relevance so users know what to adopt first, what is optional, and what belongs only in advanced workflows.

---

## Status Labels

| Status | Meaning |
|---|---|
| **Core** | Still broadly useful for modern Claude work. |
| **Conditional** | Useful when the problem it solves is present. |
| **Advanced** | For high-stakes, multi-file, or agentic workflows. |
| **Cowork-specific** | Designed for Claude Cowork or agentic file/task workflows. |
| **Legacy wording updated** | Concept remains useful, but older “Claude has no memory” framing has been modernised. |

---

## Template Status

| Template | Current status | Recommendation |
|---|---|---|
| `RUNNING-DOCUMENT.md` | **Core** | Use for any multi-session project, but store it as an authoritative project file rather than assuming it must always be pasted. |
| `CANONICAL-NUMBERS.md` | **Core** | Use whenever numbers, dates, budgets, targets, or calculations matter. Still highly relevant. |
| `SESSION-START-PROTOCOL.md` | **Core / Conditional** | Use a light version for normal work; use the full sequence for important or stale projects. |
| `FAILURE-RECOVERY.md` | **Core for serious work** | Use when mistakes, drift, or file errors would matter. Keep it light for everyday use. |
| `PARTNERSHIP-AGREEMENT.md` | **Conditional** | Use when Claude is acting as a thinking partner, critic, planner, or collaborator rather than a simple assistant. |
| `TRUTH-PROTOCOL.md` | **Conditional but important** | Use when honest disagreement, critique, or decision quality matters. Still relevant across models. |
| `FOLDER-STRUCTURE.md` | **Advanced / Cowork-specific** | Use when Claude/Cowork edits files, manages folders, or works across multiple artefacts. Simplify for basic projects. |

---

## What Should Be Default?

For most users today:

1. Start with `RUNNING-DOCUMENT.md`.
2. Add `CANONICAL-NUMBERS.md` if numbers matter.
3. Add `FAILURE-RECOVERY.md` if errors start repeating.
4. Add `PARTNERSHIP-AGREEMENT.md` and `TRUTH-PROTOCOL.md` if Claude is acting as a serious thinking partner.
5. Add `FOLDER-STRUCTURE.md` for Cowork, agentic file editing, or multi-file workflows.

---

## What Changed Since the Original Version?

The original templates assumed Claude was usually starting each session cold.

The modern version assumes Claude may have access to project memory, files, tools, connectors, or workspace context.

That changes the instruction style:

- from “paste this every session”
- to “make sure Claude is working from the current authoritative project state”

The template value is no longer only memory replacement. It is governance: source of truth, version control, repair, challenge, and auditability.

---

## What Not to Do

Do not adopt all templates because they exist.

Do not keep stale documents just because they feel official.

Do not let Claude's native memory override the explicit project record.

Do not treat Cowork autonomy as a reason to reduce governance. Agentic workflows need clearer boundaries, not fewer.