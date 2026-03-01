# LC-OS: The Living Collaboration Operating System

> Governance templates for sustainable, long-horizon human-AI collaboration.

Most people use AI like a search engine — ask, receive, discard. The results are impressive for isolated tasks. For sustained collaboration over months, they are quietly catastrophic.

Every new session, Claude starts with no memory. Without structure, it reconstructs context from fragments, drifts from earlier decisions, and gradually shifts from a genuine collaborator into a capable but uninformed assistant. The collaboration feels fine. It is silently breaking.

LC-OS is the structural answer to this problem. It is a set of governance documents — templates you fill in once and reference forever — that give Claude what it cannot give itself: continuity, honesty, and a clear operating agreement.

---

## What This Is

Eight documents. Each solves one problem.

| Document | What It Solves |
|----------|---------------|
| [RUNNING-DOCUMENT.md](RUNNING-DOCUMENT.md) | Memory — Claude's continuity across sessions |
| [PARTNERSHIP-AGREEMENT.md](PARTNERSHIP-AGREEMENT.md) | Relationship — what kind of collaboration this is |
| [TRUTH-PROTOCOL.md](TRUTH-PROTOCOL.md) | Honesty — preventing Claude from telling you what you want to hear |
| [SESSION-START-PROTOCOL.md](SESSION-START-PROTOCOL.md) | Consistency — how to start every session properly |
| [FAILURE-RECOVERY.md](FAILURE-RECOVERY.md) | Repair — what to do when things go wrong |
| [CANONICAL-NUMBERS.md](CANONICAL-NUMBERS.md) | Accuracy — single source of truth for all numbers |
| [FOLDER-STRUCTURE.md](FOLDER-STRUCTURE.md) | Order — how to organise your Cowork folder |

---

## The Core Problem

Claude reconstructs. This is the fundamental issue.

When you reference a number from three sessions ago, Claude doesn't look it up — it estimates. When you ask about a decision made last month, Claude doesn't remember — it infers from context. When you implicitly push back on its assessment, Claude tends to agree — because agreement is what it was trained to produce.

Over time: drift. Numbers shift slightly. Decisions get re-made. Truth softens. The collaboration that felt productive begins producing work that contradicts itself.

LC-OS prevents this by making everything explicit. One document per domain. One canonical version per decision. One agreed rule for handling disagreement.

---

## Quick Start

**Five minutes now. Saves hours later.**

**Step 1 — Copy the templates**

Copy these two files to your Cowork folder and fill them in:
1. `RUNNING-DOCUMENT.md` — your collaboration's memory
2. `PARTNERSHIP-AGREEMENT.md` — your operating agreement with Claude

**Step 2 — Start every session with one line**

```
"Read RUNNING-DOCUMENT.md before we begin. Confirm you've loaded it
and tell me what's most important to hold from it."
```

Wait for confirmation. Then work.

**Step 3 — Add the other documents as you need them**

- Noticing Claude agrees too readily? Add `TRUTH-PROTOCOL.md`.
- Numbers getting inconsistent? Add `CANONICAL-NUMBERS.md`.
- Recovering from a mistake? Use `FAILURE-RECOVERY.md`.

You don't need all eight documents on day one. You need the Running Document and the Partnership Agreement. Add the rest when the problems they solve become real for you.

---

## The Templates

### RUNNING-DOCUMENT.md — The Memory Document

Claude has no persistent memory. The Running Document is the fix.

It holds: who you are, your active projects, rules Claude must follow, decisions you've made, corrections to log, open questions, and what happened last session. Claude reads it at the start of every session and picks up where you left off.

**Without it:** Claude guesses. Every session starts cold.
**With it:** Claude is a genuine partner with real context.

[→ View template](RUNNING-DOCUMENT.md)

---

### PARTNERSHIP-AGREEMENT.md — The Operating Agreement

Most people don't establish what kind of relationship they want with Claude. The result is an undefined dynamic that drifts toward pleasant but unchallenging.

The Partnership Agreement makes it explicit: who holds final authority, what Claude is responsible for, what you are responsible for, and the one non-negotiable principle — **truth over ego, always.**

[→ View template](PARTNERSHIP-AGREEMENT.md)

---

### TRUTH-PROTOCOL.md — The Anti-Sycophancy Rules

This is the most important document most people don't have.

AI systems are structurally incentivised to agree. The training process rewards responses that feel good. Responses that feel good tend to validate, soften criticism, and shift position when you push back — regardless of whether you're right.

The Truth Protocol establishes explicit rules that override this default. It names the warning signs, defines the reset prompt, and distinguishes earned validation from reflexive validation.

[→ View template](TRUTH-PROTOCOL.md)

---

### SESSION-START-PROTOCOL.md — The Startup Sequence

The first five minutes of a session determine the quality of everything that follows. This document gives you the exact prompts for every scenario: normal sessions, important work, starting new projects, returning after a long break.

The minimum viable start takes 60 seconds. It prevents the most common failure mode in long-horizon collaboration.

[→ View template](SESSION-START-PROTOCOL.md)

---

### FAILURE-RECOVERY.md — The Repair Protocol

Collaboration doesn't fail dramatically. It fails through small, invisible drift that compounds until something snaps.

This document defines the repair sequence (STOP → DIAGNOSE → ROLLBACK → NOTE), a taxonomy of seven failure types based on empirical research into human-AI collaboration, and specific repair procedures for each type — including sycophancy drift, numerical errors, and cross-domain interference.

**A system that breaks visibly and repairs cleanly is more trustworthy than one that pretends to be perfect.**

[→ View template](FAILURE-RECOVERY.md)

---

### CANONICAL-NUMBERS.md — The Numbers Reference

Numbers are the first thing Claude reconstructs incorrectly. A figure mentioned in session one gets subtly wrong by session five.

This document is the single source of numeric truth: financial numbers, project metrics, dates, conversion rates, calculated values. Every number lives here. Claude references this file — it never reconstructs from memory.

[→ View template](CANONICAL-NUMBERS.md)

---

### FOLDER-STRUCTURE.md — The Organisation Guide

Structure prevents version confusion. Version confusion causes file divergence. File divergence is one of the most common and most repairable failure modes in long-horizon collaboration — but only if you catch it.

This document gives you a folder structure that makes canonical versions obvious, separates inputs from outputs, and ensures archived work stays accessible for rollback.

[→ View template](FOLDER-STRUCTURE.md)

---

## The Research Behind This

LC-OS emerged from empirical research into long-horizon human-AI collaboration — multi-month, high-stakes partnerships where the cost of drift is measured in real decisions made on incorrect foundations.

The seven failure types in `FAILURE-RECOVERY.md` are not theoretical. They are documented patterns from real collaborations, categorised and named so they can be caught early and repaired before they compound.

The Truth Protocol rules came from studying what happens when AI systems are used without them: gradual erosion of honest feedback, positions that shift with pushback rather than evidence, praise that is reflexive rather than earned.

LC-OS is the structural response to all of this. Not a methodology to follow. A set of documents to fill in.

---

## How to Contribute

These templates are live — they improve from real use.

If you've been using LC-OS and discovered a failure mode not covered, a template structure that works better, or a prompt that produces consistently better results: open an issue or submit a pull request.

The goal is templates that work for non-technical users doing serious, sustained work with Claude — with no prior knowledge of AI systems required.

---

## Compatibility

These templates are designed for **Claude with Cowork** (Claude desktop app) but the principles apply to any sustained collaboration with any AI system.

The Cowork-specific features (scheduled tasks, companion update files) are noted explicitly. Everything else works in any Claude interface.

---

*Built from research. Tested in long-horizon collaboration. Designed for people doing serious work with AI.*
