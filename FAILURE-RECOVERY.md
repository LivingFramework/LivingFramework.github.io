# Failure Recovery

> What to do when things break. Because they will.

Long-horizon collaboration doesn't fail dramatically. It fails through small, invisible drift that compounds until something snaps.

The goal isn't preventing failure. The goal is making failure visible, bounded, and repairable.

**A system that breaks visibly and repairs cleanly is more trustworthy than one that pretends to be perfect.**

---

## The Core Protocol

When something goes wrong, follow this sequence:

```
STOP → DIAGNOSE → ROLLBACK → NOTE
```

Do not skip steps. Do not rush.

---

## Step 1: STOP

The moment you sense something is off — stop.

Do not:
- Ask Claude to explain itself while continuing
- Try to fix it quickly and push forward
- Hope it resolves on its own

Do:
- Pause all work immediately
- State clearly that something is wrong

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
- Which failure type is this? (See taxonomy below)

**Prompt:**
> "Let's diagnose. What was the last stable state? What changed? Which files are affected? Don't explain why yet — just identify what."

---

## Failure Taxonomy

Seven categories of drift, from empirical research on long-horizon human-AI collaboration. Most failures belong to one of these.

| # | Type | What It Looks Like |
|---|------|--------------------|
| 1 | **Context & Memory Drift** | Claude acts on forgotten or outdated rules; "remembers" something incorrectly |
| 2 | **Numerical Reasoning Errors** | Numbers reconstructed from memory rather than referenced; calculations break |
| 3 | **File & Version Divergence** | Multiple versions exist; Claude references wrong one; parallel truths emerge |
| 4 | **Governance & Boundary Violations** | Work from one project appears in another; domain rules forgotten |
| 5 | **Emotional / Trust Drift** | Responses feel off — over-soft, over-confident, or misaligned in tone |
| 6 | **Cross-Domain Interference** | Assumptions from one context contaminate another |
| 7 | **Subtle Sycophancy Drift** | Claude agrees more than it should; pushback softens; truth erodes gradually |

Identifying the type speeds up the repair. Context drift repairs differently from numeric errors. Sycophancy drift repairs differently from file divergence.

---

## Step 3: ROLLBACK

Return to the last known good state. Do not try to fix forward.

Actions:
- Identify the last clean version of affected file(s)
- Restore from archive or revert changes
- Re-read RUNNING-DOCUMENT.md to reset context
- Confirm Claude is aligned before proceeding

**Prompt:**
> "We're rolling back to [last stable state]. Discard work since [point of failure]. Re-read RUNNING-DOCUMENT.md and confirm you're aligned with current rules before we continue."

---

## Step 4: NOTE

Document what happened so it doesn't repeat.

Update:
1. **RUNNING-DOCUMENT.md** — add to Corrections Log
2. **Failure History below** — if the pattern is new

Capture:
- What failed
- What triggered it
- How it was repaired
- What rule or practice prevents recurrence

**Prompt:**
> "Log this failure in the Corrections Log: what happened, what we fixed, and what prevents it next time."

---

## Quick Reference

```
┌─────────────────────────────────────────────┐
│           FAILURE RECOVERY                  │
├─────────────────────────────────────────────┤
│  1. STOP     — Halt immediately             │
│  2. DIAGNOSE — What broke (not why)         │
│  3. ROLLBACK — Return to last stable state  │
│  4. NOTE     — Document to prevent repeat   │
└─────────────────────────────────────────────┘
```

---

## Type-Specific Repairs

### Context & Memory Drift
Re-read RUNNING-DOCUMENT.md from scratch. Ask Claude to summarise current rules before proceeding.

### Numerical Errors
Identify the incorrect number. Find it in CANONICAL-NUMBERS.md. Have Claude re-do any calculation using only canonical sources.

### File Divergence
Identify which file is authoritative. Archive all other versions. Update RUNNING-DOCUMENT.md Files In Play section. Confirm one canonical version before proceeding.

### Boundary Violations
Identify which domain was crossed. Re-read relevant boundary rules. Consider adding an explicit rule to RUNNING-DOCUMENT.md.

### Emotional / Trust Drift
Name it directly: "Your tone has shifted. Recalibrate." Re-read TRUTH-PROTOCOL.md. Use the Truth Check mode command.

### Sycophancy Drift
Use the Trust Reset:
> "Truth check. Stop managing my feelings. Tell me what you actually think about [X]. Be specific. Include what's weak or wrong."

---

## Warning Signs — Catch Drift Early

Stop before full failure. Watch for:

- Claude contradicting earlier decisions
- Numbers that look plausible but weren't referenced
- Tone shifts (over-soft, defensive, over-confident)
- Confusion about which file is authoritative
- Claude asking questions that were already answered
- Agreement where you expected pushback
- Work from one project appearing in another
- Responses that feel good but don't feel honest

When you see these: **STOP**. Don't wait for the full collapse.

---

## Prevention Habits

The best repair is the one you never need.

1. **Read RUNNING-DOCUMENT.md every session** — resets context
2. **Reference CANONICAL-NUMBERS.md for all numbers** — no reconstruction
3. **One canonical file per domain** — eliminates version confusion
4. **Archive, don't delete** — rollback requires history
5. **Name files with status** — DRAFT / FINAL / DEPRECATED
6. **Log corrections as they happen** — not later
7. **Trust your instincts** — if something feels off, stop

---

## Failure History

> Log significant failures here for pattern recognition. Patterns repeat.

| Date | Type | What Happened | Resolution | Prevention |
|------|------|---------------|------------|------------|
| | | | | |

---

## The Mindset

Failure is not the enemy. Invisible failure is.

When something breaks visibly and repairs cleanly, the collaboration gets stronger — not weaker. Each repaired failure makes the system more robust. The twelve documented repair patterns in the LC-OS research came from real failures, logged and studied.

Treat failures as design data, not setbacks.

**STOP → DIAGNOSE → ROLLBACK → NOTE**
