# Folder Structure — Maya Chen's Cowork Setup

> Maya's actual folder organisation, documented for reference and handoff.

---

## Maya's Active Folder Structure

```
📁 Claude/                              ← Maya's main Cowork folder
│
├── 📁 00-governance/                   ← Read first every session
│   ├── RUNNING-DOCUMENT.md             ← Active memory (read at session start)
│   ├── PARTNERSHIP-AGREEMENT.md        ← Operating contract with Claude
│   ├── TRUTH-PROTOCOL.md              ← Anti-sycophancy rules (consulting context)
│   ├── SESSION-START-PROTOCOL.md      ← Session prompts library
│   ├── FAILURE-RECOVERY.md            ← Failure log + repair procedures
│   └── CANONICAL-NUMBERS.md           ← All rates, budgets, deadlines
│
├── 📁 01-inputs/                       ← Source material. Claude reads, never writes.
│   ├── papers/                         ← Industry reports, research
│   │   ├── Bessemer-State-of-Cloud-2024.pdf
│   │   └── SaaS-Benchmarks-ChurnZero-2024.pdf
│   ├── client-briefs/                  ← Original client scopes and briefs
│   │   ├── MERIDIAN-Brief-Jan2025.pdf
│   │   ├── GREENPATH-Brief-Mar2025.pdf
│   │   └── VOLTA-Brief-Apr2025.pdf
│   └── interview-notes/                ← Raw interview notes (never edited)
│       └── GREENPATH-InterviewNotes-Raw.md
│
├── 📁 02-working/                      ← Active project work
│   ├── MERIDIAN/
│   │   ├── MERIDIAN-Roadmap-v3-DRAFT.md         ← ACTIVE — competitive section
│   │   └── MERIDIAN-CompetitorList-WORKING.md   ← Supporting research
│   ├── GREENPATH/
│   │   ├── GREENPATH-OrgDiagnosis-v1-DRAFT.md   ← ACTIVE — interview synthesis
│   │   └── GREENPATH-InterviewCodes-WORKING.md  ← Coding in progress
│   ├── VOLTA/
│   │   ├── VOLTA-GTM-ExecutionPlan-v2-DRAFT.md  ← ACTIVE — PRIORITY (Jul 1)
│   │   └── VOLTA-GTMStrategy-FINAL.md           ← Approved strategy (input to plan)
│   └── scratch/
│       └── Maya-Q4-PipelineNotes.md             ← Personal planning notes
│
├── 📁 03-outputs/                      ← Completed work
│   ├── drafts/                         ← In review with client
│   │   └── MERIDIAN-Roadmap-v2-ClientReview.docx
│   └── final/
│       ├── VOLTA-GTMStrategy-FINAL.docx         ← Sent April 22
│       └── MERIDIAN-CurrentState-FINAL.docx     ← Sent March 30
│
├── 📁 04-archive/                      ← Deprecated files. Never delete.
│   ├── DEPRECATED-MERIDIAN-Roadmap-v2-DRAFT.md
│   ├── DEPRECATED-VOLTA-GTM-ExecutionPlan-v1-DRAFT.md
│   └── OLD-GREENPATH-InterviewCodes-v1.md
│
└── Claude_Session_Updates.md          ← Scheduled task companion file
```

---

## Maya's Conventions

**Naming active files:**
`[CODENAME]-[Description]-v[N]-[STATUS].md`

Examples:
- `VOLTA-GTM-ExecutionPlan-v2-DRAFT.md`
- `MERIDIAN-Roadmap-v3-DRAFT.md`
- `GREENPATH-OrgDiagnosis-v1-DRAFT.md`

**Moving to archive:**
`DEPRECATED-[original-filename]`

**The rule that matters most:** When a new version of a file is created, the old one moves to `04-archive/` immediately. No "I'll do it later." Two versions of the same document in `02-working/` causes the exact failure (F2: File Divergence) that this structure prevents.

---

## How Maya Uses the Archive

The archive is not a cleanup task — it is insurance. When F-001 happened (Claude used the wrong client name in a deliverable), the rollback required going back to a clean version. That version existed because Maya had archived the draft rather than deleting it.

The archive has prevented scope loss on two occasions. Never delete; always archive.

---

## Notes for New Projects

When a new client engagement begins:
1. Create `02-working/[CODENAME]/` folder
2. Add brief and source materials to `01-inputs/client-briefs/`
3. Update RUNNING-DOCUMENT.md: Active Projects section
4. Update CANONICAL-NUMBERS.md: rate, budget, deadline
5. Create initial working file: `[CODENAME]-[FirstDeliverable]-v1-DRAFT.md`

That's it. Five steps. All governance documents already exist — new projects just add new folders and update the existing governance files.
