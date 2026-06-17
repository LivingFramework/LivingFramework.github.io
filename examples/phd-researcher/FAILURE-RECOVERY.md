# Failure Recovery Log — Dr. Zara Ali

> Active failure log and repair record.
> In academic writing, failures are documented so they become rules.

---

## The Repair Sequence

**STOP → DIAGNOSE → ROLLBACK → NOTE**

1. **STOP** — Halt immediately. Do not continue building on a flawed foundation.
2. **DIAGNOSE** — Identify what went wrong and why.
3. **ROLLBACK** — Return to the last known-good state. Delete the fabricated content.
4. **NOTE** — Log the failure. Adjust the rules.

---

## Failure Taxonomy

| Type | Name | What It Looks Like in Academic Writing |
|------|------|----------------------------------------|
| F1 | Context Drift | Claude shifts from Zara's theoretical framework to a different one mid-draft |
| F2 | File Divergence | Claude works from an old draft version, losing revisions |
| F3 | Numerical Error | Word count figures wrong; interview numbers misquoted |
| F4 | Boundary Violation | Content from one chapter leaks into another |
| F5 | Trust Fracture | Claude validates a weak argument it should have challenged |
| F6 | Sycophancy Drift | Claude progressively strengthens claims beyond evidential warrant |
| F7 | Reconstruction Error | Claude supplies a citation, statistic, or researcher name from training data |

---

## Documented Failures

---

### F-001 — Fabricated Academic Citation

**Type:** F7 (Reconstruction Error)
**Date:** October 14, 2024
**Severity:** CRITICAL — would have been academic misconduct if submitted

**What happened:**
During an early session working on the theoretical framework, Zara asked Claude to help structure an argument about agonistic democracy and food policy. Claude drafted a paragraph that included the citation: *"Mouffe, C. (2018) Food Democracy and Urban Governance. Polity Press."*

Chantal Mouffe is a real theorist whose work Zara was drawing on. The book cited does not exist. Claude had reconstructed a plausible publication from the author's real name and research areas.

**Why it was dangerous:**
Academic citation fabrication, if submitted and published, constitutes research misconduct. This was not a near-miss — this was a fabricated reference in a draft that would have been submitted.

**How it was caught:**
Zara attempted to locate the book in her Zotero library and in the university library catalogue. It did not exist in either.

**Repair applied:**
1. STOPPED — immediately halted the session
2. DIAGNOSED — F7 Reconstruction Error; Claude had no citation prohibition at the time
3. ROLLED BACK — deleted the entire paragraph; rewrote without reference to the fabricated book; identified the actual Mouffe text Zara wanted to cite (from her own library)
4. NOTED — logged; CITATION PROHIBITION added as absolute Rule 1

**Change made:**
CITATION PROHIBITION established. Claude writes `[CITATION NEEDED]` and stops. No exceptions.

---

### F-002 — American English Throughout Draft

**Type:** F1 (Context Drift)
**Date:** February 18, 2025
**Severity:** Low — caught in review, no substantive damage

**What happened:**
Claude produced a 1,400-word section of Chapter 3 in American English throughout: "organization," "analyze," "color," "favor." The draft was otherwise structurally sound.

**Root cause:**
No UK English rule existed. Claude defaulted to American English — its training data majority.

**Repair applied:**
1. STOPPED — caught in Zara's review before any use
2. DIAGNOSED — missing rule; not a trust failure
3. ROLLED BACK — find/replaced all American variants in the draft
4. NOTED — UK ENGLISH rule added to RUNNING-DOCUMENT.md; added to session start prompt

**Change made:**
UK ENGLISH rule added as Rule 4. Session start prompt now specifies: "Write in British English throughout."

---

### F-003 — Overclaimed Causal Argument

**Type:** F5 (Trust Fracture) / F6 (Sycophancy Drift)
**Date:** April 12, 2025
**Severity:** Medium — caught before supervisor review

**What happened:**
Zara asked Claude to "make this more forceful" regarding a finding about municipal procurement policy. Claude revised: *"...the interview evidence demonstrates that municipal procurement mechanisms directly cause shifts in urban food sovereignty outcomes..."*

The original text had read: *"...interview evidence suggests a relationship between municipal procurement mechanisms and urban food sovereignty outcomes..."*

The revision upgraded a suggestion with correlational support to a causal demonstration. This was not warranted by the 7 interview responses the argument drew on.

**Root cause:**
No ARGUMENT DISCIPLINE rule existed. "Make this more forceful" was interpreted as "upgrade the evidential language" without checking what the evidence could actually support.

**Repair applied:**
1. STOPPED — Zara's supervisor flagged the causal claim in draft review
2. DIAGNOSED — F5/F6; Claude had made the text sound more authoritative without warrant
3. ROLLED BACK — returned to "suggests a relationship"; added methodological caveat about sample size (n=7)
4. NOTED — ARGUMENT DISCIPLINE rule added

**Change made:**
ARGUMENT DISCIPLINE rule added as Rule 3. Claude now asks "What evidence are you drawing on for this claim?" before strengthening a causal argument.

---

## Near-Misses (Not Full Failures)

| Date | Description | What Prevented It |
|------|-------------|-------------------|
| 2025-01-10 | Claude began writing "as argued by Purcell and Guthman (2012)..." — an article that exists but Zara had not referenced | Caught mid-sentence; stopped before completing the citation |
| 2025-03-22 | Claude used American spellings in two sentences of an otherwise British-English draft | Zara caught in proofreading |
| 2025-05-08 | Claude characterised 3 interview responses as "consistent across the sample" without noting the 34-interview sample size | Zara flagged before the section was approved |

**Action on near-misses:** All logged. The January 10 near-miss confirmed that the citation prohibition catches real risk — Claude was about to reproduce a real citation that Zara hadn't provided, which could have introduced a reference Zara hadn't read or intended to use.

---

## Repair Prompts

**If a citation appears in a draft:**
```
"Stop. Citation found in draft. This violates Rule 1.
Identify and remove every citation and reference in this draft.
Replace each with [CITATION NEEDED: brief description].
Then tell me how many you found."
```

**If an argument seems overclaimed:**
```
"Before I accept this, tell me: what evidence supports this claim at this level of certainty?
How many interview cases? What did they say?
If the evidence is thinner than this claim, rewrite at the appropriate level."
```

**If Claude has drifted into sycophancy:**
```
"Stop. I think you've been agreeing with me too readily.
Re-read TRUTH-PROTOCOL.md.
Tell me: what is the weakest argument in the current section?
Be specific."
```
