# Running Document

> The current project state for Claude or Cowork. Keep this authoritative, current, and easy for the AI to load.

This is your continuity artefact. Modern Claude workflows may include project files, memory, uploaded documents, connectors, or Cowork folders. Those features help Claude access context, but this document defines the current authoritative state.

Claude does not need this pasted every time if it can already access the current file. Claude does need to confirm it is using the current version before important work.

**Context check prompt:**
> "Use the current RUNNING-DOCUMENT.md as the authoritative project state. Confirm the current goal, active rules, and next action before we begin."

---

## Document Control

**Last updated:** [DATE]  
**Current version:** [VERSION]  
**Status:** Active / Draft / Needs review  
**Where Claude can access this:** [Claude Project / Cowork folder / shared doc / pasted context / other]

---

## Human Profile

> Give Claude the context it should not have to infer.

**Name:** [Your name]  
**Background:** [Professional/personal context relevant to this work]  
**Technical level:** [Non-technical / some technical / technical]  
**How I work best:** [Direct feedback, short responses, structured options, etc.]  
**Constraints:** [Time, tools, risk boundaries, accessibility needs]  
**Current objective:** [What you are trying to achieve]

---

## Active Work

| Project / Workstream | Status | Priority | Next action | Authoritative files |
|---|---|---|---|---|
| [Name] | Active / Paused / Waiting | High / Medium / Low | [What needs doing] | [File or folder] |
| | | | | |

---

## Rules Claude Must Follow

> These rules override convenience, memory, and inference.

1. [e.g., "Direct answer first. Context second."]
2. [e.g., "Label fact vs inference vs speculation."]
3. [e.g., "Do not use numbers unless they are in CANONICAL-NUMBERS.md or explicitly provided."]
4. [e.g., "Challenge weak reasoning before helping execute it."]
5. [e.g., "Ask one clarifying question only when truly blocking."]

---

## Mode Commands

| Command | What it does |
|---|---|
| "Just answer." | One sentence or direct answer only |
| "Simplify." | Plain language, no jargon |
| "Proceed." | Start the work now |
| "Stop." | Halt current action |
| "Truth check." | Separate fact, inference, uncertainty, and honest assessment |
| "Source check." | Identify which files/sources support the answer |
| [Add your own] | |

---

## Current Project State

> The concise truth Claude should use before acting.

**Current goal:** [Goal]  
**Current phase:** [Phase]  
**What is already decided:** [Summary]  
**What is not decided:** [Summary]  
**What must not change without approval:** [Boundaries]

---

## Decisions Log

| Date | Decision | Rationale | Status |
|---|---|---|---|
| [DATE] | [What was decided] | [Why] | Active / Superseded |
| | | | |

---

## Corrections Log

> When Claude or the workflow gets something wrong, log it if it may recur.

| Date | What went wrong | Correction | Prevention rule |
|---|---|---|---|
| [DATE] | [Error] | [Fix] | [Rule] |
| | | | |

---

## Open Questions

- [ ] [Question — why it matters]
- [ ] [Question — why it matters]

---

## Active Ideas

> Not decisions yet. Useful context Claude should preserve without treating as final.

- [Idea and brief context]
- [Idea and brief context]

---

## Files In Play

> This prevents Claude from using stale or non-authoritative files.

| File / Location | Status | Purpose | Notes |
|---|---|---|---|
| [filename or folder] | Active / Frozen / Deprecated | [Purpose] | [Notes] |
| | | | |

---

## Native Claude / Cowork Context

> Record what Claude may be relying on outside this document.

| Context source | Status | Notes |
|---|---|---|
| Claude project instructions | Current / Stale / Unknown | [Notes] |
| Uploaded project files | Current / Stale / Unknown | [Notes] |
| Claude memory / preferences | Useful / Ignore / Review | [Notes] |
| Connectors / external sources | Connected / Not connected | [Notes] |
| Cowork local folder | Active / Not used | [Notes] |
| Scheduled or background tasks | Active / Not used | [Notes] |

**Rule:** If native memory or project context conflicts with this Running Document, this Running Document wins until updated.

---

## Scheduled / Background Work

| Task | When / Trigger | Purpose | Where updates appear |
|---|---|---|---|
| [Task name] | [Schedule] | [Purpose] | [File/log/location] |
| | | | |

---

## Next Session Starts Here

**Pick up from:** [Exactly where to resume]  
**Most important thing to hold:** [The one thing that must not be forgotten]  
**Open decision needing resolution:** [Anything waiting for a call]  
**Files to check first:** [Files]

---

## Recent Session Log

> Keep this compact. Archive old notes when they stop being useful.

### [DATE] — Session [N]
- [What happened]
- [What was decided]
- [What is next]

---

## What I Am Watching

> Things in the world relevant to this work. Claude should connect these when relevant, but must check freshness before relying on them.

- [Topic — why it matters]
- [Topic — why it matters]

---

## Remember

The Running Document is not bureaucracy. It is the governed state of the collaboration.

If it is stale, Claude may work from stale context. If it is current, Claude has a stable foundation.

Update it when decisions, files, numbers, or rules change.