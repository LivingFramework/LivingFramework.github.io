# Canonical Numbers

> The single source of numeric truth for this collaboration.

Modern Claude can access more files and context than earlier chat workflows, but numbers still drift when they live in multiple places: chats, project memory, screenshots, spreadsheets, documents, or old versions.

This document defines the authoritative numbers. Claude may use native memory or project files to find context, but approved figures live here or in a clearly named linked source.

**Rule:** If a number is not in this document or an explicitly linked authoritative source, Claude must flag that and ask before using it.

---

## How to Use This Document

**Human:** Add numbers here as they become established. Date each entry. Mark deprecated numbers when they change; do not silently delete them.

**Claude:** Before using figures in calculations, plans, claims, or deliverables, check this file or the linked authoritative source. Do not reconstruct numbers from memory or old chat context.

**Context check prompt:**
> "Use CANONICAL-NUMBERS.md as the authoritative source for figures. If a figure is missing, stale, or conflicts with another source, stop and ask."

---

## Authority Rules

1. One number, one authoritative location.
2. Every important number needs a source, date, or status.
3. If numbers conflict, do not average, infer, or choose the plausible one.
4. Deprecated numbers stay visible in the Deprecated section.
5. Calculated values must show the formula and inputs.
6. Native Claude memory never overrides this document.

---

## Financial Numbers

> Budget figures, prices, costs, revenue, income.

| Label | Value | Date established | Source / notes | Status |
|---|---|---|---|---|
| [e.g., Monthly operating budget] | [£0,000] | [DATE] | [Source] | Active |
| [e.g., Target monthly revenue] | [£0,000] | [DATE] | [Phase/milestone] | Active |
| | | | | |

---

## Project Numbers

> Counts, targets, metrics, quantities.

| Label | Value | Date established | Source / notes | Status |
|---|---|---|---|---|
| [e.g., Total curriculum sessions] | [72] | [DATE] | [Programme name] | Active |
| [e.g., Target word count] | [00,000] | [DATE] | [Document] | Active |
| | | | | |

---

## Dates and Deadlines

> Fixed dates, milestones, deadlines, durations.

| Label | Date / Duration | Date established | Notes | Status |
|---|---|---|---|---|
| [e.g., Programme start date] | [DATE] | [DATE] | [Notes] | Active |
| [e.g., Review cycle] | [Every 4 weeks] | [DATE] | [Notes] | Active |
| | | | | |

---

## Rates and Constants

> Conversion rates, fixed ratios, assumptions used in calculations.

| Label | Value | Date established | Source / notes | Status |
|---|---|---|---|---|
| [e.g., GBP to USD rate] | [1.27] | [DATE] | [Approximate or source] | Active / Needs update |
| [e.g., Hours per working day] | [X] | [DATE] | [Assumption] | Active |
| | | | | |

---

## Calculated Values

> Numbers derived from other numbers. Always show the formula.

| Label | Value | Formula | Inputs checked date | Notes | Status |
|---|---|---|---|---|---|
| [e.g., Sessions remaining] | [00] | [Total sessions] - [Sessions completed] | [DATE] | [Notes] | Active |
| | | | | | |

**Claude's rule for calculated values:** Recalculate from canonical inputs if any input has changed. Do not reuse an old result just because it appears in memory or a prior session.

---

## Linked Authoritative Sources

> Use this when the true source of numeric truth is a spreadsheet, database, dashboard, or external document.

| Source | What it governs | Access method | Last checked | Notes |
|---|---|---|---|---|
| [Spreadsheet/file/link] | [Budget / schedule / metrics] | [Project file / connector / manual] | [DATE] | [Notes] |
| | | | | |

---

## Deprecated Numbers

> Numbers that are no longer current. Keep them for traceability and rollback.

| Label | Old value | Replaced by | Date deprecated | Reason |
|---|---|---|---|---|
| [e.g., Previous budget] | [£0,000] | [New canonical entry] | [DATE] | [Why it changed] |
| | | | | |

---

## When to Update This Document

Add or update when:

- a budget, target, date, or metric is established
- a number appears in a deliverable
- a calculation is used more than once
- a linked spreadsheet or source changes
- Claude uses or proposes a number not already canonical
- you find yourself explaining the same figure repeatedly

Do not update without dating the change.

---

## The Core Rule

**One number, one place, one truth.**

If Claude uses a figure not in this document or an explicit linked source, stop and add it before proceeding.