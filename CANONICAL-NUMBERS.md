# Canonical Numbers

> The single source of numeric truth for this collaboration.

Claude cannot reliably recall numbers across sessions. It reconstructs them — plausibly but incorrectly. A figure cited correctly in session one will drift by session five.

This document is the fix. Every number that matters lives here. Claude references this file — it never reconstructs from memory.

**Rule:** If a number is not in this document, Claude must ask before using it. Not estimate. Ask.

---

## How to Use This Document

**You:** Add numbers here as they become established. Date each entry. Mark deprecated numbers when they change — don't delete them.

**Claude:** Before using any figure in calculations, plans, or documents — check this file. If the number isn't here, flag it and ask.

**Session start prompt:**
> "Read CANONICAL-NUMBERS.md along with RUNNING-DOCUMENT.md. Reference it for all figures."

---

## Financial Numbers

> Budget figures, prices, costs, revenue, income.

| Label | Value | Date Established | Notes |
|-------|-------|-----------------|-------|
| [e.g., Monthly operating budget] | [£0,000] | [DATE] | [Source or context] |
| [e.g., Target monthly revenue] | [£0,000] | [DATE] | [Phase or milestone] |
| [e.g., Current savings] | [£0,000] | [DATE] | [As of date] |
| | | | |

---

## Project Numbers

> Quantities, metrics, targets, counts.

| Label | Value | Date Established | Notes |
|-------|-------|-----------------|-------|
| [e.g., Total curriculum sessions] | [72] | [DATE] | [Programme name] |
| [e.g., Sessions completed] | [0] | [DATE] | [Update each session] |
| [e.g., Target word count] | [00,000] | [DATE] | [Document name] |
| | | | |

---

## Dates and Deadlines

> Fixed dates, milestones, deadlines, durations.

| Label | Date / Duration | Date Established | Notes |
|-------|----------------|-----------------|-------|
| [e.g., Programme start date] | [DATE] | [DATE] | |
| [e.g., Target completion] | [DATE] | [DATE] | [Soft or hard deadline] |
| [e.g., Review cycle] | [Every 4 weeks] | [DATE] | |
| | | | |

---

## Rates and Constants

> Conversion rates, fixed ratios, constants used in calculations.

| Label | Value | Date Established | Notes |
|-------|-------|-----------------|-------|
| [e.g., GBP to USD rate] | [1.27] | [DATE] | [Approximate — update if critical] |
| [e.g., Hours per working day] | [X] | [DATE] | |
| [e.g., Sessions per week] | [X] | [DATE] | |
| | | | |

---

## Calculated Values

> Numbers derived from other numbers. Always show the formula.

| Label | Value | Formula | Date Established | Notes |
|-------|-------|---------|-----------------|-------|
| [e.g., Sessions remaining] | [00] | [Total sessions] - [Sessions completed] | [DATE] | [Recalculate each session] |
| [e.g., Weeks to completion] | [00] | [Sessions remaining] ÷ [Sessions per week] | [DATE] | |
| | | | | |

**Claude's rule for calculated values:** Recalculate from the canonical inputs above. Do not use the stored result if inputs have changed since the calculation was done.

---

## Deprecated Numbers

> Numbers that are no longer current. Keep these — they show how things changed.

| Label | Old Value | Replaced By | Date Deprecated | Reason |
|-------|-----------|-------------|----------------|--------|
| [e.g., Previous budget] | [£0,000] | [New canonical entry] | [DATE] | [Why it changed] |
| | | | | |

---

## When to Update This Document

Add a number when:
- You establish a budget, target, or metric
- You make a decision that involves a specific figure
- A calculated value is used more than once
- You find yourself explaining the same number to Claude repeatedly

Update a number when:
- The figure changes — move the old one to Deprecated
- A calculation's inputs change — recalculate and update

Do not update without dating the change.

---

## The Core Rule

**One number, one place, one truth.**

If Claude uses a figure not in this document — stop and add it before proceeding. If you're not sure of the number, establish it now. Vague numbers compound into wrong decisions.

> "Check CANONICAL-NUMBERS.md before using any figure."
