# Failure Recovery

> What to do when things break. Because they will.

Long-horizon collaboration doesn't fail dramatically. It fails through small, invisible drift that compounds until something snaps.

The goal isn't preventing failure. The goal is making failure visible, bounded, and repairable.

This document tells you how.

---

## The Core Protocol

When something goes wrong, follow this sequence:

```
STOP → DIAGNOSE → ROLLBACK → NOTE
```

**Do not skip steps. Do not rush.**

---

## Step 1: STOP

The moment you sense something is off — stop.

Do not:
- Ask Claude to explain itself
- Try to fix it quickly
- Push forward hoping it resolves

Do:
- Pause all work
- State clearly: "We're stopping. Something is wrong."

**Prompt:**

> "Stop. Something isn't right. Do not generate further output until we diagnose what happened."

Stopping prevents error from spreading. The earlier you stop, the less you have to repair.

---

## Step 2: DIAGNOSE

Identify what went wrong. Not why — just what.

Ask:
- What was the last known good state?
- What changed since then?
- Which file(s) are affected?
- Is this a content error, a structure error, or a drift error?

**Prompt:**

> "Let's diagnose. What was the last stable state? What changed? Which files are affected? Don't explain why yet — just identify what."

Common failure types:

| Type | Symptom |
|------|---------|
| Context drift | Claude acting on outdated or forgotten rules |
| File divergence | Multiple versions, Claude referenced wrong one |
| Numeric error | Reconstructed number instead of referencing canonical |
| Boundary violation | Work from one domain leaking into another |
| Tone/trust drift | Responses feel off, over-soft, or misaligned |

---

## Step 3: ROLLBACK

Return to the last known good state.

Do not try to fix forward. Go back to stable ground first.

Actions:
- Identify the last clean version of affected file(s)
- Restore from archive or revert changes
- Re-read `RUNNING-DOCUMENT.md` to reset context
- Confirm Claude is aligned before proceeding

**Prompt:**

> "We're rolling back to [last stable state]. Discard work since [point of failure]. Re-read RUNNING-DOCUMENT.md and confirm you're aligned with current rules."

---

## Step 4: NOTE

Document what happened so it doesn't repeat.

Update these files:

1. **RUNNING-DOCUMENT.md** — add to Corrections Log
2. **This file** — add to Failure History below (if pattern is new)

Capture:
- What failed
- What triggered it
- How it was repaired
- What rule/practice prevents recurrence

**Prompt:**

> "Log this failure in the Corrections Log: what happened, what we fixed, what prevents it next time."

---

## Quick Reference Card

```
┌─────────────────────────────────────────────┐
│           FAILURE RECOVERY                  │
├─────────────────────────────────────────────┤
│  1. STOP     — Halt immediately             │
│  2. DIAGNOSE — What broke, not why          │
│  3. ROLLBACK — Return to last stable state  │
│  4. NOTE     — Document to prevent repeat   │
└─────────────────────────────────────────────┘
```

---

## Failure History

<!-- Log significant failures here for pattern recognition -->

| Date | Type | What Happened | Resolution | Prevention |
|------|------|---------------|------------|------------|
| | | | | |

---

## Warning Signs

Catch drift early. Watch for:

- Claude contradicting earlier decisions
- Numbers that look plausible but weren't referenced
- Tone shifts (over-soft, over-confident, defensive)
- Confusion about which file is authoritative
- Claude asking questions that were already answered
- Work from one project appearing in another

When you see these: **STOP**. Don't wait for full failure.

---

## Prevention Habits

Best way to handle failure is to make it rare:

1. **Read RUNNING-DOCUMENT.md every session** — context resets
2. **Reference CANONICAL-NUMBERS.md for any numbers** — no reconstruction
3. **One canonical file per domain** — no version confusion
4. **Archive, don't delete** — rollback requires history
5. **Name files with status** — know what's DRAFT vs FINAL
6. **Trust your instincts** — if something feels off, stop

---

## Remember

Failure isn't the enemy. Invisible failure is.

A system that breaks visibly and repairs cleanly is more trustworthy than one that pretends to be perfect.

When in doubt: **STOP → DIAGNOSE → ROLLBACK → NOTE**

