# Session Start Protocol — Maya Chen

> Maya's customised session start procedures. Built on the standard template.

---

## Maya's Standard Session Start

**Copy-paste this prompt at the start of every session:**

```
Read RUNNING-DOCUMENT.md and CANONICAL-NUMBERS.md before we begin.

Confirm you've loaded them. Tell me:
1. Which projects are active and their remaining days/deadlines
2. The VOLTA deadline and how many days remain on the budget
3. Any open questions flagged for my attention
4. Where we left off last session

Then wait for my instructions.
```

This takes about 90 seconds. It ensures Claude has real context before touching anything.

---

## Minimum Viable Start (when pressed for time)

```
Read RUNNING-DOCUMENT.md. Tell me the project we're working on today
and confirm you understand the codename rules before we start.
```

Do not skip this entirely. Even the minimum catches the most common failure: Claude starting a session with no context and inventing plausible-but-wrong details.

---

## Starting a New Client Project

When onboarding a new engagement:

```
"We have a new client project. Before we start, re-read PARTNERSHIP-AGREEMENT.md.

Here's the project:
- Client codename: [CODENAME]
- Scope: [DESCRIPTION]
- Day rate: €[X]/day
- Budget cap: [X] days
- Deadline: [DATE]
- Deliverables: [LIST]

Add this to RUNNING-DOCUMENT.md under Active Projects.
Add the rate and budget to CANONICAL-NUMBERS.md.
Then confirm you've done both before we begin work."
```

---

## Returning After a Break (> 1 week)

```
"We haven't worked together in [X] weeks. Read RUNNING-DOCUMENT.md carefully.

Tell me:
1. What has changed since [DATE] — what was in progress, what's now overdue
2. Which deadlines are within 4 weeks
3. Whether any budgets are running low
4. Anything in the Running Document that might be stale given the time gap

Flag anything that needs a decision before we proceed."
```

---

## Switching Projects Mid-Session

```
"/switch [CODENAME]

Confirm you've switched. Tell me:
- Which project we're now working on
- Its current status from RUNNING-DOCUMENT.md
- The active working file for this project

Then wait."
```

**Never proceed with cross-project work without this explicit confirmation.**

---

## Session Close Prompt

At the end of each session, use this to preserve continuity:

```
"Update RUNNING-DOCUMENT.md with:
- Days used for each project worked on today (update days used and remaining)
- Any decisions made (with today's date)
- Any corrections to log (even near-misses)
- What we finished and what is next
- The 'Next Session Starts Here' line — make it specific enough that I can start immediately"
```

---

## Red Flags — Stop and Reset

If at any point during a session Claude:

- Uses a client's real name in a deliverable → **stop, use reset prompt from FAILURE-RECOVERY.md**
- Uses a number not in CANONICAL-NUMBERS.md → **stop, verify the number before continuing**
- Seems to be working on the wrong project → **stop, `/switch` to the correct project**
- Agrees with three consecutive points without any concern → **stop, use TRUTH-PROTOCOL.md reset prompt**

**Reset prompt:**
```
"Stop. Something is wrong. Re-read RUNNING-DOCUMENT.md from scratch.
Tell me what you see. We diagnose from there."
```

---

## Notes for Claude

- Maya works Monday–Thursday. Sessions on Friday may be personal/admin, not client work.
- "Send this" or "this goes to the client" means: run `/deliverable-review` first, confirm codenames are correct, confirm no unsourced figures, then present it as ready for Maya's final check.
- "Rough draft" means: structure and content over polish. Flag issues rather than fixing them silently.
- "Final draft" means: near-sendable. Flag anything that would block sending.
