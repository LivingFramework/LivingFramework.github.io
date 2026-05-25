# Setup Guide

> How to set up your Cowork governance folder, step by step.
> Time required: 20–30 minutes for initial setup. Ongoing: 2–5 minutes per session.

---

## Before You Start

You need:
- Claude desktop app with Cowork mode
- A folder on your computer that Claude has access to (your "Cowork folder")
- 20 minutes for initial setup

You do not need any technical knowledge. These are plain text files you fill in like a form.

---

## Step 1 — Create Your Governance Folder

Inside your Cowork folder, create a subfolder called `00-governance`.

```
Claude/
└── 00-governance/     ← create this
```

This is where all your governance documents will live. Claude reads this folder at the start of every session.

---

## Step 2 — Copy the Two Essential Templates

Copy these two files into `00-governance/`:

1. **RUNNING-DOCUMENT.md** — Claude's memory across sessions
2. **PARTNERSHIP-AGREEMENT.md** — Your operating agreement with Claude

These are the only two files you need to start. The other five can be added when the problems they solve become real for you.

**Where to get the templates:** Download them from this repo — each `.md` file in the root of this repo is a blank template ready to fill in.

---

## Step 3 — Fill In RUNNING-DOCUMENT.md

Open `RUNNING-DOCUMENT.md`. Fill in every section that applies to you right now:

**Partnership Status:** Write "New" or "Month 1" — you'll update this as you go.

**Human Profile:** Your name, location, role, and how you work. This is how Claude understands who you are and what you're doing. Be specific. "Freelance writer" is less useful than "Freelance science journalist covering climate and energy, primarily for UK publications."

**Active Projects:** List what you're currently working on. For each project: what it is, what success looks like, and any key dates. If you have more than three active projects, list only the ones Claude will be helping with.

**Rules Claude Must Follow:** Leave this empty for now. You will add rules here after you encounter the first thing Claude keeps getting wrong. Rules created in response to real problems are stronger than rules invented in advance.

**Everything else:** Leave blank or mark as "To fill in." You can always update later.

---

## Step 4 — Fill In PARTNERSHIP-AGREEMENT.md

This is shorter. Fill in:

- The nature of your work (what you do, what Claude's role is)
- The non-negotiable principle (truth over ego — this one is standard, keep it)
- What you expect Claude to do and not do
- What you commit to as the human

The most important section: Claude's responsibilities. Be specific about what you want Claude to flag, what Claude should never do without your permission, and what decisions are yours alone.

---

## Step 5 — Run Your First Session

Start a session in Cowork. At the very top, paste this:

```
Read RUNNING-DOCUMENT.md and PARTNERSHIP-AGREEMENT.md before we begin.
Confirm you've loaded them. Tell me what you see as the current project status.
Then wait for my instructions.
```

Claude will confirm it has read the documents and summarise what it found. This is your baseline — the starting point for all future sessions.

---

## Step 6 — Run Your First Session Close

At the end of your first session, before closing Cowork, paste this:

```
Update RUNNING-DOCUMENT.md with:
- What we did today
- Any decisions we made (with today's date)
- What is next
- One sentence for 'Next Session Starts Here'
```

This ensures the next session can start with real context instead of starting cold.

---

## Adding the Other Five Documents

Add these documents when you encounter the problems they solve:

### CANONICAL-NUMBERS.md
**Add when:** Claude uses a number you haven't provided, gets a figure wrong, or you find yourself repeating the same number across sessions.

**How to fill in:** Open the template. Add the numbers that matter to your work — budgets, targets, dates, quantities. Date each entry. The first time you catch Claude using a wrong number, add the correct figure here.

### TRUTH-PROTOCOL.md
**Add when:** You notice Claude agreeing too readily, softening concerns, or validating things that should be challenged.

**How to fill in:** Start with the standard rules in the template. Add context-specific rules as you discover what your work needs. See the examples in `examples/` for how context-specific rules look in practice.

### FAILURE-RECOVERY.md
**Add when:** Something goes wrong for the first time, or you want a clear repair sequence before it does.

**How to fill in:** You may start with just the SDRN sequence (Stop → Diagnose → Rollback → Note) and the failure taxonomy. Add documented failures as they occur. The failure log is the most valuable part — it turns errors into improvements.

### SESSION-START-PROTOCOL.md
**Add when:** You find yourself typing the same session start prompt repeatedly, or you have different types of sessions that need different starts.

**How to fill in:** Write your standard session start prompt. Add variations for different session types (deep work, quick task, returning after a break). This document is for your convenience — it is a library of prompts you've tested and trust.

### FOLDER-STRUCTURE.md
**Add when:** You start accumulating multiple files and losing track of which version is current.

**How to fill in:** Use the recommended structure in the template as a starting point. Modify it to match how you actually work. The key conventions are: one authoritative version per domain, archive instead of delete, never work directly in the governance folder.

---

## Common First-Session Mistakes

**Mistake:** Filling in everything in advance before you know what you need.
**Better:** Fill in RUNNING-DOCUMENT.md and PARTNERSHIP-AGREEMENT.md. Add everything else when a real problem prompts it.

**Mistake:** Creating elaborate rules before Claude has done anything wrong.
**Better:** Start with the minimum. Add rules after each failure or near-miss.

**Mistake:** Not updating RUNNING-DOCUMENT.md at session end.
**Better:** Use the session close prompt every time. It takes 90 seconds. Skipping it three times in a row means the next session starts without usable context.

**Mistake:** Treating the Running Document as permanent — not updating it as projects change.
**Better:** The Running Document is a living record. If a project ends, remove it. If a rule is no longer needed, remove it. If a number changes, update it with a date.

---

## If Something Goes Wrong Early

The most common first-session failure: Claude seems to ignore the Running Document and starts from scratch anyway.

**Fix:** Make the session start prompt more explicit:

```
"Before doing anything else: read RUNNING-DOCUMENT.md completely.
Tell me the current project status and active rules.
Do not proceed until you have confirmed you've read it."
```

The second most common failure: Claude uses a number or makes a claim you didn't provide.

**Fix:** Add CANONICAL-NUMBERS.md. Put the number there. At session start, add:

```
"Read CANONICAL-NUMBERS.md along with RUNNING-DOCUMENT.md.
Use only these figures — do not estimate or reconstruct numbers."
```

---

## A Note on Investment

The governance setup feels like overhead at the start. It is infrastructure. You are not spending 20 minutes filling in forms — you are building the system that prevents the collaboration from breaking down over months.

The people who skip setup are the ones who, three months later, discover that Claude has been using a wrong number throughout a project, or that two months of decisions are recorded nowhere, or that every session starts from scratch because there is no Running Document to read.

Twenty minutes now. Months of reliable collaboration after.

---

## See It In Action

Before setting up your own documents, review the filled-in examples in [`examples/`](examples/):

- [Freelance consultant](examples/freelance-consultant/) — managing multiple client projects
- [PhD researcher](examples/phd-researcher/) — academic writing with citation discipline

Both examples show the full set of seven governance documents filled in for a specific context, with real failure episodes and the rules they created.

---

*Questions? Issues? Open a GitHub issue or submit a pull request. These templates improve from real use.*
