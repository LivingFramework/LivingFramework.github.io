# Governance Templates for Claude Cowork

Practical governance templates for long-horizon work with Claude Cowork.

Cowork gives Claude filesystem access. These templates give you the structure to make that sustainable.
https://doi.org/10.5281/zenodo.18262128
---

## The Problem

Cowork is powerful. But power without governance becomes chaos.

The AI doesn't "remember" — it reconstructs. Every session, it rebuilds context from whatever's in front of it. Without structure:

- Files start quietly contradicting each other
- Numbers get reconstructed instead of referenced
- Decisions fragment across versions
- Drift is invisible until it isn't

Week one feels like magic. Week three, you're untangling a mess.

---

## The Solution

These templates implement a minimal governance layer built from a year of daily human-AI collaboration. They address the failure modes that emerge in long-horizon work — not by preventing failure, but by making it visible, bounded, and repairable.

---

## What's Included

| Template | Purpose |
|----------|---------|
| [RUNNING-DOCUMENT.md](RUNNING-DOCUMENT.md) | Session continuity — read at every session start |
| [CANONICAL-NUMBERS.md](CANONICAL-NUMBERS.md) | Single source for numeric truth |
| [FOLDER-STRUCTURE.md](FOLDER-STRUCTURE.md) | How to organize your Cowork folder |
| [FAILURE-RECOVERY.md](FAILURE-RECOVERY.md) | What to do when things break |

---

## Quick Start

1. Create your Cowork folder
2. Copy these templates into it
3. Read `FOLDER-STRUCTURE.md` and organize accordingly
4. Start every session by pointing Claude to your `RUNNING-DOCUMENT.md`
5. Keep all numbers in `CANONICAL-NUMBERS.md` — never let Claude reconstruct them

That's it. Boring. Unglamorous. Effective.

---

## The Research Behind This

These templates are derived from a four-paper research series on governed human-AI collaboration:

- **Paper 1:** Context-Engineered Human–AI Collaboration for Long-Horizon Tasks
- **Paper 2:** The Lean Collaboration Operating System (LC-OS)
- **Paper 3:** Failure and Repair in Long-Horizon Human–AI Collaboration
- **Paper 4:** The Living Framework: Living with a Governed Human-AI Dyad

All open access: [github.com/LivingFramework/LC-OS](https://github.com/LivingFramework/LC-OS)

---

## Core Principles

1. **Reliability isn't preventing failure — it's structured repair**
2. **Single Source of Truth per domain — no parallel versions**
3. **Separate text from numbers — they drift differently**
4. **Read the Running Document at every session start**
5. **When in doubt: Stop → Diagnose → Rollback → Note**

---

## Author

**Rishi Sood**
Independent researcher focused on human-AI collaboration governance.

- Research: [github.com/LivingFramework/LC-OS](https://github.com/LivingFramework/LC-OS)
- X: [@satoshisats](https://x.com/satoshisats)

---

## License

MIT — use freely, attribution appreciated.

