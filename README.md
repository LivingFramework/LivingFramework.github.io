# Governance Templates for Claude and Cowork

> Practical governance templates for long-horizon work with Claude, Claude projects, Cowork-style file workflows, and other serious AI collaboration setups.

> 🌐 **[Full documentation and assessment tool → livingframework.github.io](https://livingframework.github.io/)**

AI tools have changed quickly. Claude is no longer just a blank chat window for many users. Depending on the interface and plan, people may work with project files, memory, connectors, scheduled work, desktop workflows, and agentic file editing.

That changes the job of these templates.

They are no longer only a workaround for missing memory. They are a governance layer: explicit source-of-truth files, truth rules, repair procedures, and folder boundaries that keep serious AI collaboration reliable as the tools become more capable.

---

## Start Here

| If you are... | Start with |
|---|---|
| New to these templates | [ADOPTION_LEVELS.md](ADOPTION_LEVELS.md) |
| Wondering what changed with modern Claude | [MODERN_CLAUDE_NOTE.md](MODERN_CLAUDE_NOTE.md) |
| Deciding which templates still matter | [TEMPLATE_STATUS.md](TEMPLATE_STATUS.md) |
| Reviewing the modernization logic | [2026_RELEVANCE_AUDIT.md](2026_RELEVANCE_AUDIT.md) |
| Ready to begin a real project | [RUNNING-DOCUMENT.md](RUNNING-DOCUMENT.md) |

---

## The Modern Position

Use native Claude features for convenience.

Use these templates for authority.

Claude project files, memory, connectors, and Cowork-style tools can help Claude access context. But access is not the same as governance. Serious work still needs explicit answers to:

- Which file is authoritative?
- Which numbers are approved?
- Which decisions are active or superseded?
- What should Claude challenge rather than accept?
- What happens when something goes wrong?
- How do automated or background actions get reconciled with live sessions?

These templates answer those questions.

---

## What This Is

A modular template set. Do **not** assume you need all of it.

| Document | Current role |
|---|---|
| [RUNNING-DOCUMENT.md](RUNNING-DOCUMENT.md) | Core continuity and project-state document |
| [CANONICAL-NUMBERS.md](CANONICAL-NUMBERS.md) | Source of truth for numbers, dates, targets, calculations |
| [SESSION-START-PROTOCOL.md](SESSION-START-PROTOCOL.md) | How to confirm Claude is using the right context |
| [FAILURE-RECOVERY.md](FAILURE-RECOVERY.md) | Repair protocol for drift, file errors, stale context, bad reasoning |
| [PARTNERSHIP-AGREEMENT.md](PARTNERSHIP-AGREEMENT.md) | Operating agreement for serious human-AI partnership |
| [TRUTH-PROTOCOL.md](TRUTH-PROTOCOL.md) | Anti-sycophancy and honest critique rules |
| [FOLDER-STRUCTURE.md](FOLDER-STRUCTURE.md) | Advanced structure for Cowork, agentic file work, and multi-file projects |

---

## Quick Start

**Do not adopt all templates at once.** Choose the level your work needs.

### Level 0 — Native Claude only

Use Claude normally. No template needed.

Best for: one-off drafts, brainstorming, casual questions, low-risk exploration.

### Level 1 — Light governance

Use:

1. `RUNNING-DOCUMENT.md`
2. optionally `SESSION-START-PROTOCOL.md`

Best for: multi-session work where continuity matters.

### Level 2 — Governed work

Add:

1. `CANONICAL-NUMBERS.md`
2. `FAILURE-RECOVERY.md`

Best for: research, strategy, planning, finance, operations, client work, or anything where wrong context costs time.

### Level 3 — Partnership governance

Add:

1. `PARTNERSHIP-AGREEMENT.md`
2. `TRUTH-PROTOCOL.md`

Best for: serious thinking partnership, critique, emotional/trust-sensitive work, or high-quality decision support.

### Level 4 — Cowork / agentic workflow governance

Add:

1. `FOLDER-STRUCTURE.md`
2. task/update logs if scheduled or autonomous work is running
3. archive/versioning conventions

Best for: Cowork, desktop file editing, scheduled tasks, autonomous workflows, or multi-file operations.

---

## The Core Problem

Modern Claude can often access more context than earlier AI tools. But it can still work from stale files, infer outdated decisions, over-trust memory, use the wrong version, or agree too readily when challenged.

The problem is no longer simply:

> Claude has no memory.

The current problem is:

> Claude may have many context sources, but not all of them are authoritative.

LC-OS governance makes authority explicit.

---

## The Templates

### RUNNING-DOCUMENT.md — Project State

The Running Document is the current project state: what matters, what has been decided, what rules apply, what is open, and what to resume next.

Claude may access it through project files, a Cowork folder, a shared document, an upload, or pasted context. The key is not the delivery method. The key is that this file remains current and authoritative.

[→ View template](RUNNING-DOCUMENT.md)

---

### CANONICAL-NUMBERS.md — Numeric Truth

Numbers drift when they are scattered across chats, documents, and memory. This file keeps budgets, dates, targets, rates, and calculated values in one place.

[→ View template](CANONICAL-NUMBERS.md)

---

### SESSION-START-PROTOCOL.md — Context Check

Session start is no longer always “paste everything again.” It is a context check: confirm Claude is using the right project state, files, instructions, and numbers before important work begins.

[→ View template](SESSION-START-PROTOCOL.md)

---

### FAILURE-RECOVERY.md — Repair Protocol

When Claude works from stale context, changes the wrong file, uses the wrong number, or drifts into agreeable nonsense, stop and repair visibly.

[→ View template](FAILURE-RECOVERY.md)

---

### PARTNERSHIP-AGREEMENT.md — Operating Agreement

Use this when Claude is more than a task assistant: strategist, critic, builder, planner, or thinking partner.

[→ View template](PARTNERSHIP-AGREEMENT.md)

---

### TRUTH-PROTOCOL.md — Anti-Sycophancy Rules

Use this when you need Claude to challenge weak ideas, hold position when evidence supports it, and distinguish earned validation from reflexive agreement.

[→ View template](TRUTH-PROTOCOL.md)

---

### FOLDER-STRUCTURE.md — Agentic File Governance

Use this for Cowork, file-editing workflows, scheduled tasks, or any setup where Claude can read, write, move, or create project files.

[→ View template](FOLDER-STRUCTURE.md)

---

## What Changed Since the Original Version?

The original repo was optimized for Claude Cowork at a moment when long-running AI work often started from cold sessions.

This version preserves the templates but updates the posture:

- Claude/Cowork is a supported environment, not the only assumption.
- Native project files and memory are useful, but not automatically authoritative.
- Full governance is advanced, not the default.
- The Running Document is a source-of-truth file, not necessarily something pasted every session.
- Cowork/agentic workflows require stronger file boundaries, not weaker ones.

See [MODERN_CLAUDE_NOTE.md](MODERN_CLAUDE_NOTE.md) and [2026_RELEVANCE_AUDIT.md](2026_RELEVANCE_AUDIT.md).

---

## The Research Behind This

These templates are derived from the **[LC-OS research corpus](https://github.com/LivingFramework/LC-OS)** and the broader **[LC-OS Project toolkit](https://github.com/LivingFramework/LC-OS-Project)**.

The research found that long-horizon human-AI collaboration fails through drift: context drift, numeric drift, file divergence, boundary violations, trust fractures, and weak repair.

This repository is the Claude/Cowork-oriented implementation layer of that research.

---

## The Living Framework Ecosystem

| | Resource | What it contains |
|--|----------|-----------------|
| 🌐 | [**Website**](https://livingframework.github.io/) | Full documentation, AI readiness assessment, quick-start guide |
| 📚 | [**LC-OS Research**](https://github.com/LivingFramework/LC-OS) | Eight published papers, Mahdi Ledger, empirical foundations |
| 🛠️ | [**LC-OS Project**](https://github.com/LivingFramework/LC-OS-Project) | Practitioner toolkit — templates, worked examples, field manual |
| ⚙️ | [**Claude/Cowork Templates**](https://github.com/LivingFramework/LivingFramework.github.io) | Claude-oriented governance templates |

*Each resource is standalone. Together they form a complete governance stack — from theory to daily practice.*

---

## Compatibility

These templates were originally built for Claude Cowork. The core governance documents now work across Claude interfaces and can be adapted to other AI tools.

Cowork-specific guidance is labelled where it depends on agentic file work, scheduled tasks, or local folder access.

---

*Use the lightest structure that protects the work.*