# Session Start Protocol

> A context check for Claude/Cowork sessions. Use it to confirm Claude is working from the right project state before important work begins.

The old version of session start was simple: paste or load the Running Document every time.

Modern Claude workflows are more varied. Claude may already have access to project files, uploaded documents, memory, connectors, local folders, or Cowork task outputs.

That is useful, but it creates a new risk: Claude may have access to context without knowing which context is current and authoritative.

This protocol solves that.

---

## Why Session Start Still Matters

The question is no longer only:

> Did Claude receive context?

The better question is:

> Is Claude using the current authoritative context?

Before important work, verify:

- current goal
- active rules
- authoritative files
- current numbers
- open decisions
- stale or conflicting context
- background updates from Cowork or scheduled tasks

---

## Minimum Viable Start

Use this for normal sessions:

```text
Use the current RUNNING-DOCUMENT.md as the authoritative project state.
Before we begin, confirm:
1. current goal
2. active rules
3. next action
4. any context that seems stale or unclear
```

If Claude cannot access the file, paste or attach it.

---

## Full Session Start

Use this for important, high-stakes, stale, or multi-file work.

### Step 1 — Load authoritative context

```text
Use these as the authoritative context for this session:
- RUNNING-DOCUMENT.md
- CANONICAL-NUMBERS.md, if numbers matter
- any files listed as Active in Files In Play

If your memory, project context, or prior chat conflicts with these files, treat these files as authoritative.
```

### Step 2 — Confirm alignment

```text
Confirm:
1. current project status
2. active rules
3. authoritative files
4. numbers source
5. what we were working on last
```

### Step 3 — Check for drift

```text
Before proceeding, flag anything that appears stale, contradictory, missing, or risky.
Do not silently resolve conflicts by guessing.
```

### Step 4 — Set the session goal

```text
Today I want to [GOAL]. We have [TIME AVAILABLE].
Confirm the plan and name any constraint that may affect the work.
```

---

## Starting a New Project

When beginning something new:

### Step 1 — Choose governance level

```text
We are starting a new project. Help me choose the lightest governance level needed:
Level 0 native Claude only
Level 1 Running Document
Level 2 add numbers and failure recovery
Level 3 add partnership/truth rules
Level 4 add Cowork/file workflow governance
```

### Step 2 — Define the project

```text
Here is what we are building: [DESCRIPTION]
Success looks like: [DEFINITION]
Constraints: [CONSTRAINTS]
My role vs Claude's role: [DIVISION]
Risks if this goes wrong: [LOW / MEDIUM / HIGH]
```

### Step 3 — Create initial state

```text
Create a first-pass RUNNING-DOCUMENT.md for this project.
Fill in what you know.
Mark unknowns clearly.
Do not invent missing facts.
```

---

## Returning After a Break

If significant time has passed:

```text
We have not worked on this for [TIME PERIOD].
Use the current RUNNING-DOCUMENT.md and active project files.
Tell me:
1. where we left off
2. which decisions are active
3. what may be stale now
4. what needs checking before we proceed
```

This is especially important for market, legal, pricing, scheduling, software, research, or AI-tooling details that may have changed.

---

## Cowork / Agentic Workflow Start

Use this when Cowork, scheduled tasks, or file-editing agents have been active:

```text
Before we begin, reconcile background work.
Check task/update logs such as Claude_Session_Updates.md if available.
Tell me:
1. what changed since the last live session
2. which files were created or modified
3. whether any changes need review
4. whether RUNNING-DOCUMENT.md or CANONICAL-NUMBERS.md must be updated
```

Agentic work must be reconciled. Otherwise background progress becomes parallel drift.

---

## Red Flags at Session Start

Stop and reset if Claude:

- cannot identify the current goal
- uses numbers not in `CANONICAL-NUMBERS.md`
- references an old decision as active
- relies on memory instead of the current file
- cannot identify the authoritative version
- contradicts `RUNNING-DOCUMENT.md`
- ignores files modified by Cowork or background tasks
- seems too agreeable when risk or uncertainty is present

**Reset prompt:**

```text
Stop. Something is misaligned.
Use only the current authoritative files.
Tell me what you see, what conflicts, and what needs updating before we continue.
```

---

## Session End Protocol

Good endings make good starts.

Before closing important work:

```text
Update RUNNING-DOCUMENT.md with:
- what we did
- decisions made
- numbers changed
- files changed
- what is next
- anything that must be checked next session
```

For Cowork or file-editing workflows, also ask:

```text
List every file you created, edited, renamed, or relied on.
Which file is now authoritative?
Which files should be archived or marked deprecated?
```

---

## The One Rule

Never start important work from unverified context.

Fast work with stale context is not fast. It is debt.