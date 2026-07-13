# Folder Structure Guide

> How to organise Claude/Cowork project files so an AI agent can navigate without guessing.

Use this guide for Level 4 workflows: Cowork, desktop file editing, scheduled tasks, autonomous work, or any setup where Claude can read, write, move, or create files.

For simple chat or project-file workflows, you may not need this full structure. Use the lightest structure that protects the work.

---

## Why Folder Structure Still Matters

Modern Claude workflows may involve project files, local folders, connectors, uploads, memory, and background actions.

That creates power and risk.

A capable AI working from the wrong file can create more damage than a weaker assistant asking for help. Folder structure makes authority visible.

The key failure to prevent is file divergence: two versions exist, Claude edits the wrong one, and work compounds on a broken foundation.

---

## Recommended Structure for Cowork / Agentic Work

```text
📁 Claude-Project/
│
├── 📁 00-governance/               ← Control layer. Read/check first.
│   ├── RUNNING-DOCUMENT.md         ← Authoritative project state
│   ├── CANONICAL-NUMBERS.md        ← Numeric/date/metric truth
│   ├── PARTNERSHIP-AGREEMENT.md    ← Optional collaboration rules
│   ├── TRUTH-PROTOCOL.md           ← Optional anti-sycophancy rules
│   ├── SESSION-START-PROTOCOL.md   ← Context check prompts
│   └── FAILURE-RECOVERY.md         ← Repair protocol
│
├── 📁 01-inputs/                   ← Raw materials. Claude reads, does not overwrite.
│   ├── papers/
│   ├── data/
│   └── uploads/
│
├── 📁 02-working/                  ← Active work in progress.
│   ├── [Project Name]/
│   │   ├── RUNNING-DOCUMENT.md     ← Optional project-specific state
│   │   └── [working files]
│   └── scratch/                    ← Temporary files
│
├── 📁 03-outputs/                  ← Deliverables.
│   ├── drafts/
│   └── final/
│
├── 📁 04-archive/                  ← Deprecated/superseded files for rollback.
│   ├── DEPRECATED-[filename]
│   └── SUPERSEDED-[YYYY-MM-DD]-[filename]
│
└── Claude_Session_Updates.md       ← Optional Cowork/background task log
```

---

## The Governance Folder

`00-governance/` is the control layer.

It contains files that define how Claude should work, what is authoritative, and how to repair failure.

**Rule:** Before important work, Claude should confirm it is using the current governance files.

Do not use this folder as scratch space. Governance files should be stable and easy to review.

---

## Inputs Folder

`01-inputs/` contains source material: research papers, reference documents, data exports, uploads, screenshots, PDFs, or source files.

Claude may read these, but should not overwrite them.

If Claude generates a cleaned or transformed version, put that in `02-working/` or `03-outputs/`, not here.

---

## Working Folder

`02-working/` contains active drafts, analysis, notes, and current project files.

For complex projects, add a project-specific Running Document inside the project folder. That file should reference the main governance documents instead of duplicating all rules.

Use `scratch/` for temporary explorations that are safe to delete.

---

## Outputs Folder

`03-outputs/` contains deliverables.

Use:

- `drafts/` for work under review
- `final/` for approved outputs

When a file moves to final, update `RUNNING-DOCUMENT.md` Files In Play.

---

## Archive Folder

`04-archive/` protects rollback.

Do not silently delete old versions of important files.

Use names like:

```text
DEPRECATED-[original-filename]
SUPERSEDED-[YYYY-MM-DD]-[original-filename]
OLD-v1-[original-filename]
```

The archive prevents uncertainty about what changed and lets you recover from wrong edits.

---

## File Naming Conventions

For active files:

```text
[ProjectName]-[Description]-[Status].md
[ProjectName]-[Description]-v[N]-[Status].docx
```

Useful status labels:

- `DRAFT` — work in progress
- `REVIEW` — waiting for human review
- `FINAL` — approved and complete
- `CANONICAL` — authoritative source for this domain
- `DEPRECATED` — no longer active

---

## Single Canonical Version Rule

For every important domain, there should be exactly one active authoritative source.

Not one main file and one recent backup.

Not one file Claude usually uses.

One active source.

When a new version becomes authoritative:

1. mark or move the old file to archive
2. update Files In Play in `RUNNING-DOCUMENT.md`
3. tell Claude which file is authoritative
4. confirm no background task is still using the old file

---

## Cowork / Background Task Log

If Cowork or scheduled tasks can work between live sessions, use a task/update file such as:

```text
Claude_Session_Updates.md
```

At the start of a live session:

```text
Check Claude_Session_Updates.md for changes since our last live session.
Summarise what changed, which files were affected, and what needs human review.
```

Background work must be reconciled. Otherwise it becomes parallel drift.

---

## Common Mistakes

### Too much structure

If folders become the work, simplify.

### Two active versions

Pick one canonical version. Archive the other.

### Claude edits inputs

Inputs should remain original. Claude's transformed work belongs in working or outputs.

### Governance files used as scratch space

Keep governance files clean. Put exploratory work elsewhere.

### Background work not reconciled

If Cowork changed files while you were away, begin by reviewing those changes.

### Running Document not updated after file moves

If Claude does not know which file changed, it may use the old one.

---

## Starting From Scratch

For a serious Cowork/file workflow:

1. Create the five folders.
2. Put core governance files in `00-governance/`.
3. Fill in `RUNNING-DOCUMENT.md`.
4. Add `CANONICAL-NUMBERS.md` if numbers matter.
5. Create your first project folder in `02-working/`.
6. Add `Claude_Session_Updates.md` only if background work is running.

Everything else can wait until the problem it solves becomes real.

---

## The Goal

The goal is not a perfect folder structure.

The goal is a structure Claude can navigate without guessing, and a human can audit without panic.