# Folder Structure Guide

> How to organise your Cowork folder for governance that actually holds.

Structure is not overhead. It is the difference between a Claude that knows which file is authoritative and one that is silently working from the wrong version.

The single most common recoverable failure in long-horizon collaboration is file divergence: two versions of the same document exist, Claude references the wrong one, and work compounds on a broken foundation. This folder structure prevents it.

---

## The Recommended Structure

```
📁 Claude/                          ← Your main Cowork folder
│
├── 📁 00-governance/               ← Control layer. Read-first every session.
│   ├── RUNNING-DOCUMENT.md         ← Claude's memory (read at session start)
│   ├── PARTNERSHIP-AGREEMENT.md    ← Operating agreement
│   ├── TRUTH-PROTOCOL.md          ← Anti-sycophancy rules
│   ├── SESSION-START-PROTOCOL.md  ← How to begin every session
│   ├── FAILURE-RECOVERY.md        ← What to do when things break
│   └── CANONICAL-NUMBERS.md       ← Single source of numeric truth
│
├── 📁 01-inputs/                   ← Raw materials. Claude reads, never writes here.
│   ├── papers/                     ← Research, reference documents
│   ├── data/                       ← Source data, raw files
│   └── uploads/                    ← Files you've provided
│
├── 📁 02-working/                  ← Active work in progress
│   ├── [Project Name]/             ← One folder per project
│   │   ├── RUNNING-DOCUMENT.md     ← Project-specific running doc (if needed)
│   │   └── [working files]
│   └── scratch/                    ← Temporary working files (safe to delete)
│
├── 📁 03-outputs/                  ← Finished work
│   ├── drafts/                     ← In review
│   └── final/                      ← Approved and complete
│
├── 📁 04-archive/                  ← Deprecated files. Never delete — rollback needs history.
│   ├── [DEPRECATED-filename]
│   └── [OLD-VERSION-filename]
│
└── Claude_Session_Updates.md       ← Companion file for scheduled tasks (Cowork-specific)
```

---

## The Governance Folder (00-governance)

This folder is the control layer. Everything Claude needs to operate properly lives here.

**Rule:** Claude reads this folder at the start of every session before doing anything else.

**Never put working files here.** Governance documents are stable. Working files change constantly. Mixing them creates confusion about what is authoritative.

If you have project-specific rules, create a project-level RUNNING-DOCUMENT.md inside the project's `02-working/` folder. Reference the main governance docs from it — don't duplicate them.

---

## The Inputs Folder (01-inputs)

Read-only for Claude. This is where source material lives: research papers, reference documents, data files, anything Claude reads but does not modify.

**Why separate?** Keeping inputs immutable means you always have the original. Claude's edits and outputs go elsewhere. The source material is never corrupted.

---

## The Working Folder (02-working)

One subfolder per project. Claude works here.

Each project folder can have its own RUNNING-DOCUMENT.md if the project is large enough to need one. For smaller work, the main governance Running Document is sufficient.

The `scratch/` subfolder is for temporary files — notes, drafts, experiments — that do not need to be preserved. Clean it out periodically.

---

## The Outputs Folder (03-outputs)

Work you've completed. Separated into `drafts/` (in review, may change) and `final/` (approved, should not change without deliberate decision).

When a file moves from `drafts/` to `final/`, update the Files In Play section of RUNNING-DOCUMENT.md.

---

## The Archive Folder (04-archive)

**Never delete old files. Archive them.**

This is the rollback requirement. When something goes wrong and you need to return to a previous version, you need the history. Deleted files cannot be restored.

Naming convention for archived files:

```
DEPRECATED-[original-filename]
OLD-v1-[original-filename]
SUPERSEDED-[YYYY-MM-DD]-[original-filename]
```

The date in the filename tells you when it was archived.

---

## File Naming Conventions

**For active files:**
```
[ProjectName]-[Description]-[Status].md
[ProjectName]-[Description]-v[N].[status].docx
```

**Status suffixes:**
- `-DRAFT` — Work in progress
- `-REVIEW` — Waiting for your input
- `-FINAL` — Approved and complete
- `-CANONICAL` — Single authoritative source for this domain

**For archive:**
```
DEPRECATED-[original-filename]
SUPERSEDED-[YYYY-MM-DD]-[original-filename]
```

**Examples:**
```
GovernanceProject-RunningDoc-v2.FINAL.docx
Claudishi-CurriculumMap-CANONICAL.md
DEPRECATED-GovernanceProject-RunningDoc-v1.docx
```

---

## The Single Canonical Version Rule

For every domain — every topic, every project, every data type — there must be exactly one authoritative file.

Not one main file and one recent version. Not one file Claude should usually use. **One file. Period.**

When you create a new version:
1. Rename the old file with the `DEPRECATED-` prefix
2. Move it to `04-archive/`
3. Update the Files In Play section of RUNNING-DOCUMENT.md
4. Tell Claude the new canonical file

This takes two minutes. It prevents hours of untangling.

---

## The Companion Update File (Cowork-Specific)

If you're using Cowork's scheduled tasks (automated Monday/Wednesday/Friday sessions), add a `Claude_Session_Updates.md` file to your main Claude folder.

Scheduled tasks append updates to this file between your live sessions. At the start of each live session:

```
"Check Claude_Session_Updates.md for automated updates since our last session.
Summarise what happened and flag anything that needs my attention."
```

This connects your automated background work to your live collaboration — nothing runs in parallel without being integrated.

---

## Common Mistakes

**Too many folders**
More structure is not better structure. If you're spending time organising rather than working, simplify. The five-folder system above is the maximum most people need.

**Deleting instead of archiving**
The moment you delete an old file is the moment you lose the ability to roll back. Archive everything.

**Two canonical versions**
"I'll keep both just in case" creates version divergence. Pick one. Archive the other. This is not negotiable.

**Working directly in governance documents**
The `00-governance/` folder contains stable operating documents. Do not use it as scratch space. Working files go in `02-working/`.

**Not updating RUNNING-DOCUMENT.md when files move**
If Claude doesn't know a file changed, it will reference the old one. Every time a file moves or gets a new canonical version, update the Files In Play section.

---

## Starting From Scratch

If you're setting up for the first time:

1. Create the five folders (`00-governance/` through `04-archive/`)
2. Copy all governance templates into `00-governance/`
3. Fill in `RUNNING-DOCUMENT.md` with your details
4. Fill in `PARTNERSHIP-AGREEMENT.md`
5. Create your first project folder in `02-working/`

Everything else can wait until the problem it solves becomes real for you.

---

*The goal is not a perfect folder structure. The goal is a structure Claude can navigate without guessing.*
