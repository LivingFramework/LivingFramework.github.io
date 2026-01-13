# Canonical Numbers

> The single source of numeric truth. Claude references this — never reconstructs.

Numbers drift differently than text. When Claude reconstructs a number from memory, it often looks plausible but is subtly wrong. Over time, these errors compound.

This file prevents that.

---

## How To Use

1. Every number that matters goes here
2. Claude must reference this file for any numeric work
3. If a number isn't in this file, it's not canonical
4. Update numbers here FIRST, then reference them elsewhere

**Prompt to enforce:**

> "For any calculations or numeric references, use CANONICAL-NUMBERS.md as the source. Do not reconstruct numbers from memory or other files. If a number isn't in that file, flag it as NON-CANONICAL."

---

## Financial Numbers

<!-- Budgets, prices, costs, revenue — anything money-related -->

| Item | Value | Currency | As Of | Notes |
|------|-------|----------|-------|-------|
| [Item name] | [Number] | [USD/GBP/EUR] | [Date] | [Context] |
| | | | | |

---

## Project Numbers

<!-- Quantities, counts, targets, metrics -->

| Item | Value | Unit | As Of | Notes |
|------|-------|------|-------|-------|
| [Item name] | [Number] | [Unit] | [Date] | [Context] |
| | | | | |

---

## Dates & Deadlines

<!-- Key dates that drive decisions -->

| Event | Date | Status | Notes |
|-------|------|--------|-------|
| [Event name] | [Date] | Active / Complete / Moved | [Context] |
| | | | |

---

## Conversion Rates & Constants

<!-- Fixed values used in calculations -->

| Item | Value | Source | As Of |
|------|-------|--------|-------|
| [e.g., USD/GBP rate] | [Number] | [Source] | [Date] |
| | | | |

---

## Calculated Values

<!-- Derived numbers — show the formula and inputs -->

| Item | Formula | Result | Last Calculated |
|------|---------|--------|-----------------|
| [Item name] | [e.g., A × B] | [Number] | [Date] |
| | | | |

---

## Deprecated Numbers

<!-- Old values kept for reference — clearly marked as not current -->

| Item | Old Value | Replaced By | Date Deprecated |
|------|-----------|-------------|-----------------|
| [Item name] | [Old number] | [New number or N/A] | [Date] |
| | | | |

---

## Rules

1. **One source** — if it's not here, it's not canonical
2. **Date everything** — numbers without dates are untrusted
3. **Show your work** — calculated values include the formula
4. **Deprecate, don't delete** — old numbers move to Deprecated section
5. **Claude references, never reconstructs** — enforce this explicitly

