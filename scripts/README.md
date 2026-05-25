# Cowork Governance Setup Script

> Generates a pre-filled `00-governance/` folder with all seven Cowork templates in under a minute.

---

## What It Does

Asks you four questions. Creates a complete governance folder with:

- All 7 templates copied and pre-filled with your name, role, project, and date
- Full folder structure: `00-governance/`, `01-inputs/`, `02-working/`, `03-outputs/`, `04-archive/`
- A `README.md` with your session start prompt ready to use

---

## Requirements

**Node.js 14 or higher.** No other dependencies.

Check if you have it:
```
node --version
```

If you see `v14.x.x` or higher, you're ready. If not, download at [nodejs.org](https://nodejs.org) — install the LTS version.

---

## How to Run

**Step 1 — Open a terminal in this folder**

On Windows: right-click the `LivingFramework.github.io` folder → "Open in Terminal"  
On Mac: open Terminal, then `cd` to the folder

**Step 2 — Run the script**

```
node scripts/init-project.js
```

**Step 3 — Answer four questions**

```
1. Your name                           : Rishi Sood
2. What you do (one sentence)          : Independent researcher working on governance frameworks
3. Main project you'll work on with Claude: LC-OS Research
4. What does success look like?        : Three papers published by December 2025
```

**Step 4 — Choose where to create the folder**

```
1  Current directory  (creates ./lc-os-research/)
2  My Claude folder   (creates in ~/Desktop/Claude/ or similar)
```

That's it. Your governance folder is ready.

---

## What Gets Created

```
lc-os-research/
│
├── 00-governance/
│   ├── RUNNING-DOCUMENT.md       ← Pre-filled with your name, role, project, date
│   ├── PARTNERSHIP-AGREEMENT.md  ← Pre-filled with your name and date
│   ├── TRUTH-PROTOCOL.md         ← Anti-sycophancy rules (standard)
│   ├── SESSION-START-PROTOCOL.md ← Session prompts (standard)
│   ├── FAILURE-RECOVERY.md       ← Repair protocol (standard)
│   ├── CANONICAL-NUMBERS.md      ← Numbers sheet (date pre-filled)
│   └── FOLDER-STRUCTURE.md       ← Folder guide (standard)
│
├── 01-inputs/                    ← Source material
├── 02-working/lc-os-research/    ← Active work
├── 03-outputs/drafts/
├── 03-outputs/final/
├── 04-archive/
└── README.md                     ← Your session start prompt
```

---

## After Running the Script

**Finish filling in RUNNING-DOCUMENT.md:**

The script pre-fills your name, role, project, and date. You still need to add:
- **Active Projects** — specifics of what you're working on
- **Rules** — any rules Claude must follow (add as you discover what needs protecting)
- **Next Session** — where to start the first time

**Add numbers to CANONICAL-NUMBERS.md:**

Any budgets, targets, word counts, deadlines — add them here with today's date. Claude references this file instead of guessing.

**Start your first session:**

Copy the `00-governance/` folder into your Claude folder (if it isn't already there). Then paste this in Cowork:

```
Read RUNNING-DOCUMENT.md and PARTNERSHIP-AGREEMENT.md before we begin.
Confirm you've loaded them. Tell me what you see as the current project status.
Then wait for my instructions.
```

---

## Troubleshooting

**"node is not recognized"**  
Node.js is not installed or not on your PATH. Download from [nodejs.org](https://nodejs.org), install the LTS version, then restart your terminal.

**"Folder already exists"**  
A folder with the same name already exists in the output location. Rename or delete it, then run the script again. The script will never overwrite an existing folder.

**Script exits without creating files**  
Name is required — the script stops if you leave question 1 blank. Run it again and enter your name.

---

## Reference

Full documentation and filled-in examples: [examples/](../examples/)  
Manual setup without the script: [SETUP-GUIDE.md](../SETUP-GUIDE.md)
