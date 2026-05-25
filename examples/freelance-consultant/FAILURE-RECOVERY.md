# Failure Recovery Log — Maya Chen

> Active failure log and repair record for this collaboration.
> Failures are expected. Undocumented failures are the problem.

---

## How This Works

When something goes wrong — Claude uses wrong data, a deliverable contains an error, context from the wrong project leaks in — the repair sequence is:

**STOP → DIAGNOSE → ROLLBACK → NOTE**

1. **STOP** — Halt the current work. Don't continue building on a broken foundation.
2. **DIAGNOSE** — Identify the failure type (see taxonomy below) and root cause.
3. **ROLLBACK** — Return to the last known-good state.
4. **NOTE** — Log it in the Corrections Log in RUNNING-DOCUMENT.md.

---

## Failure Taxonomy

| Type | Name | Description |
|------|------|-------------|
| F1 | Context Drift | Claude's responses gradually shift away from the established project scope or constraints |
| F2 | File Divergence | Claude is working from the wrong version of a document |
| F3 | Numerical Error | A figure is wrong, estimated, or missing a source |
| F4 | Boundary Violation | Work from one project leaks into another |
| F5 | Trust Fracture | Claude agrees with Maya when it should have pushed back |
| F6 | Sycophancy Drift | Claude has been progressively validating rather than evaluating |
| F7 | Reconstruction Error | Claude reconstructed a fact from memory rather than canonical sources |

---

## Documented Failures

---

### F-001 — Client Name in Wrong Deliverable

**Type:** F4 (Boundary Violation)
**Date:** April 15, 2025
**Severity:** High — nearly sent to wrong client

**What happened:**
During a session where Maya had been working on MERIDIAN competitive analysis, she asked Claude to start a new document for the GREENPATH org diagnosis. Claude drafted a header that read: *"Prepared for: Meridian Software"* — the MERIDIAN client name appeared in a GREENPATH document.

**Root cause:**
Claude carried client name context from the earlier MERIDIAN work into the new GREENPATH task. There was no explicit project switch, so Claude did not reset its active context.

**Repair applied:**
1. STOPPED — caught the error before sending
2. DIAGNOSED — F4 Boundary Violation; root cause: no explicit project switch
3. ROLLED BACK — deleted the incorrect header, rewrote using GREENPATH codename
4. NOTED — logged in Corrections Log; added CODENAME RULE and `/switch` command to RUNNING-DOCUMENT.md

**Change made:**
CODENAME RULE added as Rule 1 in RUNNING-DOCUMENT.md. `/switch` command established. Claude must now confirm the active project codename at the start of each deliverable.

---

### F-002 — Unsourced Industry Benchmark

**Type:** F3 (Numerical Error) / F7 (Reconstruction Error)
**Date:** May 3, 2025
**Severity:** Medium — caught before sending to client

**What happened:**
Claude drafted a section of the MERIDIAN competitive analysis that included: *"Industry benchmark: 15% annual churn is typical for mid-market B2B SaaS."* No source was cited. When Maya asked where the figure came from, Claude admitted it was reconstructed from training data — not a verified current benchmark.

**Root cause:**
No CLAIM HYGIENE rule existed at the time. Claude defaulted to filling in a plausible-sounding benchmark rather than flagging the gap.

**Repair applied:**
1. STOPPED — removed the figure from the draft
2. DIAGNOSED — F3/F7; root cause: missing rule for unsourced claims
3. ROLLED BACK — replaced with [SOURCE NEEDED: B2B SaaS churn benchmark — Bessemer/ChurnZero/similar]
4. NOTED — logged in Corrections Log; replaced with verified Bessemer Venture Partners figure (12–15% for mid-market SaaS, 2024 State of the Cloud report)

**Change made:**
CLAIM HYGIENE rule added as Rule 5 in RUNNING-DOCUMENT.md. Claude must now ask for source rather than supply one.

---

## Open Near-Misses

> Situations that didn't become failures but were close. Review periodically.

| Date | Description | What Prevented It |
|------|-------------|-------------------|
| 2025-04-28 | Claude began calculating VOLTA project economics using MERIDIAN day rate (€1,100 vs €1,200) | Maya caught it before the calculation was used |
| 2025-05-09 | Claude used "organization" (US spelling) throughout a GREENPATH document intended for a UK-based board | Maya noticed in proofreading |

**Action on near-misses:**
- Day rate mix-up → CANONICAL-NUMBERS.md now clearly labels each rate by project
- US/UK spelling → Added to session start prompt: "GREENPATH is a UK client. Use British English."

---

## Repair Prompt Library

**When context from the wrong project has leaked:**
```
"Stop. We have a boundary violation. Which project are we working on right now?
Confirm the codename, re-read the relevant section of RUNNING-DOCUMENT.md,
and restart from the correct context."
```

**When a number is wrong or unsourced:**
```
"Stop. Where did that figure come from? Check CANONICAL-NUMBERS.md.
If it's not there, do not use it. Ask me for the source or flag it as [SOURCE NEEDED]."
```

**When Claude seems to be drifting into agreement:**
```
"You've agreed with my last three points without pushing back.
Re-read TRUTH-PROTOCOL.md. Tell me honestly: is there anything
in the current work that concerns you?"
```

---

*A clean failure log is not a sign of a bad collaboration. It is a sign of an honest one.*
