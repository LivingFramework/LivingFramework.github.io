# Folder Structure — Dr. Zara Ali's Cowork Setup

> Zara's actual folder organisation for her postdoctoral research.

---

## Zara's Folder Structure

```
📁 Claude/                                      ← Main Cowork folder
│
├── 📁 00-governance/                           ← Read first every session
│   ├── RUNNING-DOCUMENT.md                     ← Active memory + project tracking
│   ├── PARTNERSHIP-AGREEMENT.md               ← Operating contract
│   ├── TRUTH-PROTOCOL.md                      ← Academic honesty rules
│   ├── SESSION-START-PROTOCOL.md              ← Session prompt library
│   ├── FAILURE-RECOVERY.md                    ← Failure log (incl. F-001 citation)
│   └── CANONICAL-NUMBERS.md                   ← Word counts, deadlines, interview counts
│
├── 📁 01-inputs/                               ← Source material. Claude reads only.
│   ├── interview-transcripts/                  ← Raw transcripts (never edited)
│   │   ├── Barcelona/                          ← B-01 through B-12
│   │   ├── Amsterdam/                          ← A-01 through A-11
│   │   └── Bristol/                            ← R-01 through R-11
│   ├── field-notes/                            ← Observation notes
│   └── policy-documents/                       ← Municipal policy texts (primary sources)
│       ├── Barcelona-FoodCouncil-Statute-2022.pdf
│       ├── Amsterdam-FoodStrategy-2030.pdf
│       └── Bristol-GoodFoodPlan-2021.pdf
│
├── 📁 02-working/                              ← Active writing
│   ├── monograph/
│   │   ├── Chapter1-FINAL.md                  ← Do not edit
│   │   ├── Chapter2-FINAL.md                  ← Do not edit
│   │   ├── Chapter3-FINAL.md                  ← Do not edit
│   │   ├── Chapter4-MunicipalGovernance-v4-DRAFT.md   ← ACTIVE
│   │   └── Chapter4-Section43-ArgumentNotes.md        ← Pre-writing notes
│   ├── articles/
│   │   └── JUS-Article-Outline-v1.md          ← Approved outline — not started
│   ├── applications/
│   │   └── ESRC-Application-Notes.md          ← Early notes — BLOCKED until Ch.4 done
│   └── scratch/
│       └── TheoreticalNotes-FoodSovereignty.md
│
├── 📁 03-outputs/                              ← Completed and submitted work
│   ├── drafts/
│   │   └── Chapter4-v3-SupervisorReview.docx  ← With supervisor (May 2025)
│   └── final/
│       ├── Chapter1-Submitted.docx
│       ├── Chapter2-Submitted.docx
│       └── Chapter3-Submitted.docx
│
└── 📁 04-archive/                              ← Deprecated versions. Never delete.
    ├── DEPRECATED-Chapter4-v3-DRAFT.md
    ├── DEPRECATED-Chapter4-v2-DRAFT.md
    └── DEPRECATED-Chapter3-v6-DRAFT.md
```

---

## Zara's Key Conventions

**Version numbering:** Each new major structural revision increments the version number. Prose-only edits do not. `v4` indicates a structural change from `v3`.

**FINAL designation:** Only Zara can mark a file FINAL, and only after it has been reviewed and approved. Claude never upgrades a file to FINAL status.

**Interview transcript codes:**
- Barcelona: B-01 through B-12
- Amsterdam: A-01 through A-11
- Bristol: R-01 through R-11

These codes are used throughout all working documents. Participant names never appear in working files.

**The citation rule in files:** Any draft document can contain `[CITATION NEEDED: ...]` placeholders. These are filled by Zara before submission, never by Claude.

---

## Why Inputs Are Read-Only

The interview transcripts and field notes in `01-inputs/` are primary research data. They are never edited, paraphrased, or modified by Claude. Claude reads them to understand context; Zara interprets them for the argument.

This separation protects the integrity of the empirical record. If Claude were to modify a transcript (even accidentally), the original participant voice would be corrupted and would require reconstruction from a recording.

---

## Archive Discipline

Zara experienced one version confusion incident in Chapter 3: a paragraph Claude helped revise in `v5` disappeared from `v6` because the wrong starting file was used. The archive now makes clear which file is canonical, and the Corrections Log tracks when versions are deprecated.

**Rule:** When a new draft version is created, move the previous one to `04-archive/` with the `DEPRECATED-` prefix before starting work on the new version.
