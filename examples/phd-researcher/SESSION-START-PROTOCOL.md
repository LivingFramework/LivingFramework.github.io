# Session Start Protocol — Dr. Zara Ali

> Zara's customised session start procedures.

---

## Standard Session Start

**Copy-paste this at the start of every session:**

```
Read RUNNING-DOCUMENT.md and CANONICAL-NUMBERS.md before we begin.

Confirm you've loaded them. Tell me:
1. Which chapter/section we're working on and its current word count vs target
2. Which deadlines are within 6 weeks
3. The open question about Section 4.3 (three cities or four?) — still needs a decision
4. Where we left off last session

Remember: British English throughout. No citations — write [CITATION NEEDED] for any reference needed.
Then wait for my instructions.
```

---

## Minimum Viable Start (tight on time)

```
Read RUNNING-DOCUMENT.md. Tell me the section we're working on today
and confirm the citation rule before we begin.
```

This takes 60 seconds. The citation rule confirmation is not optional — it is the single most important rule in this collaboration.

---

## Beginning a Writing Session

For sessions where Zara will be doing extended drafting:

```
"We're working on [Section X.X] today.
Target: [X] words.
Here are the arguments I want to make: [OUTLINE]
Here are the citations I'm drawing on: [LIST FROM ZOTERO]
Draft this section. Write all citations I haven't provided as [CITATION NEEDED].
Flag any argument that you think is overclaimed given the evidence I've listed."
```

**Always give Claude the citations before drafting begins.** Claude cannot supply them. Providing them upfront produces a more coherent draft than stopping mid-draft to insert references.

---

## Beginning a Structural/Editing Session

For sessions focused on argument review rather than drafting:

```
"I'm not drafting today — I want to stress-test the argument structure in [Section X.X].
Here's the current draft: [PASTE OR FILE REFERENCE]

Tell me:
1. What are the logical gaps?
2. Where are the claims stronger than the evidence?
3. Is there anything a reviewer would immediately challenge?

Do not soften this. I want the real problems."
```

---

## Returning After a Break (> 2 weeks)

```
"We haven't worked together in [X] weeks.
Read RUNNING-DOCUMENT.md carefully.

Tell me:
1. Where Chapter 4 currently stands — section by section
2. Which deadlines have passed or are now urgent
3. What was the open question about Section 4.3?
4. Whether the word count trajectory puts us on track for the June 15 target

Flag anything that has become urgent since we last worked."
```

---

## Session Close Prompt

Before ending every session:

```
"Update RUNNING-DOCUMENT.md:
- Current word count for Chapter 4 (Section 4.1 + 4.2 + anything started today)
- Sections completed today (if any — mark as FINAL only if I approve)
- Any decisions made (with today's date)
- Any corrections or near-misses to log
- What we're doing next session
- The 'Next Session Starts Here' note — specific enough to start immediately"
```

---

## Red Flags — Stop and Reset

**If a citation appears in a draft:**
Use the citation repair prompt from FAILURE-RECOVERY.md immediately.

**If an argument sounds stronger than Zara's evidence:**
```
"Before I approve this section — tell me:
what evidence supports this specific claim, and at what level of certainty?"
```

**If Claude has been producing draft after draft without any critique:**
```
"Stop. What is actually wrong with what we've been producing?
I've been approving everything. Tell me what I should be questioning."
```

**General reset:**
```
"Stop. Re-read RUNNING-DOCUMENT.md from scratch.
Tell me what you see. We diagnose from there."
```

---

## Notes for Claude

- Zara provides all citations. When she says "I'm drawing on [author]," that is not permission to supply publication details — it is context for the argument.
- "Sharpen this" = improve the prose. "Strengthen this" = needs a conversation about evidence first.
- Section approvals are explicit: Zara says "this section is FINAL." Claude does not assume approval.
- Interview data is referred to by interviewee code (e.g., "Participant B-03"), never by name.
- The three-cities or four-cities question for Section 4.3 is still open. Do not assume an answer until Zara decides.
