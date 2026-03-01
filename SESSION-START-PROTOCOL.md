# Session Start Protocol

> The first five minutes of a Cowork session determine the quality of everything that follows.

Claude starts every session without memory. It reconstructs context from whatever you give it. Give it the right context and it picks up exactly where you left off. Give it nothing and it starts cold — well-intentioned but uninformed.

This document tells you how to start sessions properly.

---

## Why Session Start Matters

The context window is everything. What Claude knows at the start of a session is all it will know for that session. You cannot retroactively give context — you can only add it going forward.

Decisions made on incomplete context compound. Two sessions of partial context create drift that takes a third session to repair. Five minutes of proper setup prevents an hour of untangling.

---

## The Minimum Viable Start

If you have limited time, do at minimum:

```
"Read RUNNING-DOCUMENT.md. Tell me the one most important thing
to hold from it, and confirm you understand the current rules."
```

Wait for confirmation. Then proceed.

This takes 60 seconds. It saves you from the most common failure mode: Claude acting on stale or reconstructed context.

---

## The Full Session Start

For sessions where you're doing important work:

**Step 1: Load governance**
```
"Read RUNNING-DOCUMENT.md and CANONICAL-NUMBERS.md before we begin."
```

**Step 2: Request confirmation**
```
"Confirm you've loaded them. Tell me: current project status,
active rules, and what we were working on last."
```

**Step 3: Check for drift**
```
"Is anything in the running document unclear, contradictory,
or missing that I should know about?"
```

**Step 4: Set the session agenda**
```
"Today I want to [GOAL]. We have [TIME AVAILABLE].
Confirm you understand what we're doing and flag anything
that might complicate it."
```

---

## Starting a New Project

When beginning something new with Claude:

**Step 1: Establish the partnership**
```
"We're starting a new project. Before we begin, read
PARTNERSHIP-AGREEMENT.md and TRUTH-PROTOCOL.md.
These govern how we work together."
```

**Step 2: Define the project**
```
"Here's what we're building: [DESCRIPTION]
Here's what success looks like: [DEFINITION]
Here are the constraints: [CONSTRAINTS]
Here's my role vs yours: [DIVISION OF RESPONSIBILITY]"
```

**Step 3: Create the Running Document**
```
"Create a Running Document for this project using
the RUNNING-DOCUMENT.md template. Fill in what you know.
Mark what needs filling in."
```

---

## Returning After a Break

If significant time has passed since the last session:

```
"We haven't worked together in [TIME PERIOD].
Read RUNNING-DOCUMENT.md and tell me:
1. What we were working on
2. What decisions were made
3. What was left open
4. Anything that might be stale given the time that's passed"
```

This prompts Claude to flag things that may have changed — market conditions, your priorities, time-sensitive decisions — rather than assuming everything is still current.

---

## Cowork-Specific: Scheduled Tasks

If you have scheduled tasks running (Monday reviews, Friday book sessions, etc.):

```
"Check Claude_Session_Updates.md for any automated updates
since our last session. Summarise what happened and flag
anything that needs my attention."
```

This ensures automated work gets integrated into the session rather than running in parallel without connection.

---

## Red Flags at Session Start

Stop and reset if Claude:

- Contradicts something in the Running Document
- References a decision that was superseded
- Uses numbers that aren't in CANONICAL-NUMBERS.md
- Seems to be working from a different version of the project
- Can't accurately summarise where you left off

**Reset prompt:**
```
"Stop. Something is misaligned. Re-read RUNNING-DOCUMENT.md
from scratch. Tell me what you see. We'll diagnose from there."
```

---

## Session End Protocol

Good endings make good starts. Before closing a session:

**Update the Running Document:**
```
"Update RUNNING-DOCUMENT.md with:
- What we did today
- Decisions made (with date)
- What's next
- Anything I must remember for next session"
```

**Set the next session start:**
```
"Write a one-sentence 'Next Session Starts Here' note in
RUNNING-DOCUMENT.md. Make it specific enough that future
Claude can pick up immediately."
```

---

## The One Rule

**Never skip session start.**

When you're in a hurry, session start feels like overhead. Skip it once and it's fine. Skip it three times and drift has accumulated. Skip it ten times and you're untangling context from two months ago.

The busier you are, the more you need the structure — not less.

Sixty seconds at the start. Every time.
