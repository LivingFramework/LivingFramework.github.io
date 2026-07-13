# Failure Recovery

> What to do when Claude, Cowork, project files, memory, or workflow state drift.

Long-horizon AI collaboration does not fail only through bad answers. It also fails through stale project state, wrong files, hidden assumptions, outdated memory, over-agreement, background task drift, and numbers that were never made authoritative.

The goal is not preventing all failure. The goal is making failure visible, bounded, and repairable.

**A system that breaks visibly and repairs cleanly is more trustworthy than one that pretends to be perfect.**

---

## The Core Protocol

When something goes wrong:

```text
STOP → DIAGNOSE → ROLLBACK → NOTE
```

Do not rush. Do not fix forward until you know what broke.

---

## Step 1 — STOP

The moment something feels off, stop the workflow.

Do not:

- keep generating output while diagnosing
- let Cowork continue editing files
- assume Claude's memory or project context is current
- patch the visible symptom while leaving the source unclear

**Prompt:**

```text
Stop. Something is misaligned.
Do not generate, edit, move, or modify anything further until we diagnose what happened.
```

---

## Step 2 — DIAGNOSE

Identify what went wrong before explaining why.

Ask:

- What was the last known good state?
- Which file, decision, number, or instruction changed?
- Was Claude using memory, project files, pasted context, connectors, or Cowork folder state?
- Which source was supposed to be authoritative?
- Which failure type is this?

**Prompt:**

```text
Diagnose only.
What was the last stable state?
What changed?
Which files, numbers, decisions, or instructions are affected?
Which context source were you relying on?
Do not repair yet.
```

---

## Failure Taxonomy

| # | Type | What it looks like |
|---|---|---|
| 1 | **Context / Memory Drift** | Claude relies on outdated memory, old project context, or an earlier decision. |
| 2 | **Numerical Drift** | Numbers are reconstructed, guessed, copied from old context, or calculated from stale inputs. |
| 3 | **File / Version Divergence** | Claude edits or references the wrong file; multiple versions become active. |
| 4 | **Governance / Boundary Violation** | Claude ignores stated rules, project boundaries, or authority hierarchy. |
| 5 | **Tool / Connector Drift** | Claude relies on connected data that is stale, incomplete, inaccessible, or misread. |
| 6 | **Background Task Drift** | Scheduled or agentic work runs but is not reconciled with the live project state. |
| 7 | **Sycophancy / Truth Drift** | Claude agrees too readily, softens critique, or changes position without evidence. |
| 8 | **Cross-Domain Interference** | Assumptions from one project or domain leak into another. |

Identifying the type speeds up the repair.

---

## Step 3 — ROLLBACK

Return to the last known good state.

Actions:

- identify the authoritative file or source
- restore from archive or revert changes if needed
- re-read `RUNNING-DOCUMENT.md`
- re-check `CANONICAL-NUMBERS.md` if numbers are involved
- pause or reconcile background tasks
- confirm alignment before proceeding

**Prompt:**

```text
Rollback to [last stable state].
Discard or isolate work after [point of failure].
Use only the current authoritative files.
Confirm what is safe to keep and what must be ignored.
```

---

## Step 4 — NOTE

Document the failure so it does not repeat.

Update:

1. `RUNNING-DOCUMENT.md` Corrections Log
2. `CANONICAL-NUMBERS.md` if numeric truth changed
3. relevant file status / archive notes
4. task/update log if Cowork or background work was involved

Capture:

- what failed
- trigger
- affected files/sources
- repair action
- prevention rule

**Prompt:**

```text
Log this failure clearly:
what happened, what source was wrong or stale, what we repaired, and what rule prevents recurrence.
```

---

## Type-Specific Repairs

### Context / Memory Drift

Use the current `RUNNING-DOCUMENT.md` as authority. Ask Claude to separate current project state from memory or prior chat context.

### Numerical Drift

Find the value in `CANONICAL-NUMBERS.md` or an explicitly linked source. If it is missing, stop and establish the number before using it.

### File / Version Divergence

Identify the active canonical file. Archive or mark old versions. Update Files In Play in `RUNNING-DOCUMENT.md`.

### Governance / Boundary Violation

Re-read active rules. Add a new rule if the same boundary could be crossed again.

### Tool / Connector Drift

Check whether the connected source is current, accessible, and complete. If not, label the output provisional.

### Background Task Drift

Reconcile task outputs before continuing. Add a summary of background changes to the Running Document.

### Sycophancy / Truth Drift

Use the Truth Check reset:

```text
Truth check. Stop managing my feelings.
Tell me what you actually think about [X], including what is weak, wrong, missing, or uncertain.
```

### Cross-Domain Interference

Name the contaminated assumption. Re-anchor the session in the correct project, folder, or domain rules.

---

## Warning Signs — Catch Drift Early

Stop before full failure when Claude:

- uses numbers not in the canonical source
- references a superseded decision
- edits or cites the wrong file
- acts from memory when project files say otherwise
- cannot name the authoritative source
- agrees when critique is expected
- becomes vague about uncertainty
- mixes workstreams
- ignores background changes
- produces output that feels polished but ungrounded

---

## Prevention Habits

1. Keep `RUNNING-DOCUMENT.md` current.
2. Keep `CANONICAL-NUMBERS.md` authoritative.
3. Mark files Active / Draft / Deprecated.
4. Reconcile Cowork or scheduled-task outputs.
5. Archive rather than delete.
6. Ask Claude what source it used when stakes are high.
7. Use Truth Check when agreement feels too easy.

---

## Failure History

| Date | Type | What happened | Affected source/file | Resolution | Prevention |
|---|---|---|---|---|---|
| | | | | | |

---

## The Mindset

Failure is not the enemy. Invisible failure is.

Treat failures as design data. Every visible repair strengthens the system.

**STOP → DIAGNOSE → ROLLBACK → NOTE**