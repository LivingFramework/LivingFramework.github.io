# 2026 Relevance Audit

**Repository:** `LivingFramework/LivingFramework.github.io`  
**Scope:** Claude/Cowork governance templates only  
**Date:** 2026-07-13

---

## Summary

The Claude/Cowork templates remain useful, but the original framing needed updating.

The old posture was:

> Claude starts cold, so these files provide memory.

The modern posture is:

> Claude may have project files, memory, connectors, tools, and agentic workflows. These features help with access, but explicit governance is still needed for authority, truth, version control, repair, and auditability.

The templates should therefore be treated as modular governance controls rather than a fixed eight-document system that every user adopts immediately.

---

## What Is Still Strong

### Running Document

Still central. Modern AI workspaces can hold context, but the Running Document defines what is authoritative.

**Modern status:** Core.

### Canonical Numbers

Still highly relevant. Improved models still make mistakes when numbers are stale, implicit, or scattered across files.

**Modern status:** Core for numerical work.

### Truth Protocol

Still relevant. Model quality has improved, but agreeable or over-accommodating responses remain a real collaboration risk when users rely on AI for judgment.

**Modern status:** Conditional but important.

### Failure Recovery

Still relevant. Agentic workflows make repair more important, not less, because errors can affect files and project state.

**Modern status:** Core for serious work.

---

## What Needed Reframing

### Claude Memory

Older wording described Claude as having no persistent memory. That is no longer a safe universal assumption across all Claude interfaces and workflows.

Updated framing:

> Claude may have access to project context, files, memory, or workspace state. Still verify that it is using the current authoritative record.

### Cowork Specificity

The original repo was optimized for Claude Cowork. That remains useful, but the core templates now work across Claude interfaces.

Updated framing:

> Cowork is an advanced/agentic environment. Core governance works across Claude chat, projects, desktop, and file-based workflows.

### Session Start

Older wording implied the full Running Document should be read at every session start.

Updated framing:

> The start of a session should confirm current authoritative context. This may happen via project files, uploaded documents, shared folders, pasted context, or direct file access.

---

## Recommended Default Path

Most users should not begin with all templates.

Recommended default:

1. `RUNNING-DOCUMENT.md`
2. `CANONICAL-NUMBERS.md` if numbers matter
3. `FAILURE-RECOVERY.md` if errors repeat or the work is serious
4. `PARTNERSHIP-AGREEMENT.md` and `TRUTH-PROTOCOL.md` if Claude is acting as a true collaborator
5. `FOLDER-STRUCTURE.md` for Cowork, autonomous file editing, scheduled tasks, or multi-file workflows

---

## Template-by-Template Finding

| Template | Finding | Action |
|---|---|---|
| `README.md` | Strong but outdated memory framing | Modernized as a current front door |
| `RUNNING-DOCUMENT.md` | Still core, but should not assume cold-start only | Updated wording |
| `PARTNERSHIP-AGREEMENT.md` | Useful for serious partnership work | Updated memory language |
| `TRUTH-PROTOCOL.md` | Still relevant | Kept concept, lightly modernized framing |
| `SESSION-START-PROTOCOL.md` | Important but should adapt to project/file/memory workflows | Modernized |
| `FAILURE-RECOVERY.md` | Strong; needs agentic/file-work relevance | Modernized |
| `CANONICAL-NUMBERS.md` | Still highly relevant | Modernized source-of-truth framing |
| `FOLDER-STRUCTURE.md` | Most Cowork-specific; should be advanced not default | Modernized and reclassified |

---

## What Was Not Changed

This audit does not modify website pages, site assets, design files, research website copy, or non-template material.

It focuses only on the Claude/Cowork governance template layer.

---

## Final Assessment

The templates are not obsolete.

The old pitch is obsolete.

The modern role of these templates is not to compensate for a weak model. It is to create a governed collaboration layer around increasingly capable AI systems.