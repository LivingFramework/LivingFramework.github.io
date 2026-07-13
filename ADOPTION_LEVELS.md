# Adoption Levels

**Purpose:** Help users choose the right amount of Claude/Cowork governance for the work they are doing.

Most people do not need the full template set on day one. Start light. Add structure when risk, complexity, or drift makes it necessary.

---

## Level 0 — Native Claude Only

Use Claude's built-in project, file, memory, and workspace features without extra LC-OS templates.

**Use this when:**

- the task is short-lived
- mistakes are low-cost
- no important numbers are involved
- you do not need traceability
- you are exploring, drafting, brainstorming, or doing one-off work

**Typical setup:**

- Claude chat
- project files if helpful
- brief instruction prompt

**Do not over-engineer.** LC-OS is not needed for every interaction.

---

## Level 1 — Light Governance

Use the minimum durable structure.

**Use this when:**

- work spans multiple sessions
- you want continuity
- decisions need to be remembered
- project files or memory may become stale

**Use:**

- `RUNNING-DOCUMENT.md`
- optional `SESSION-START-PROTOCOL.md`

**Modern rule:**

Claude does not always need the Running Document pasted into the chat. It needs access to the current authoritative project state, whether through a project file, uploaded document, shared folder, or pasted context.

---

## Level 2 — Governed Work

Add explicit truth and repair controls.

**Use this when:**

- numbers matter
- file versions matter
- mistakes would cost time, money, reputation, or trust
- Claude is helping with planning, research, finance, strategy, or client work

**Use:**

- `RUNNING-DOCUMENT.md`
- `CANONICAL-NUMBERS.md`
- `FAILURE-RECOVERY.md`
- `SESSION-START-PROTOCOL.md`

**Core posture:**

Use Claude's native workspace for access and convenience. Use these files to define what is authoritative.

---

## Level 3 — Partnership Governance

Add collaboration rules, challenge, and truth discipline.

**Use this when:**

- Claude is acting as a serious thinking partner
- you want honest critique, not agreeable execution
- trust, tone, confidence, or emotional dynamics matter
- you are working through strategic or personal decisions

**Use:**

- Level 2 files
- `PARTNERSHIP-AGREEMENT.md`
- `TRUTH-PROTOCOL.md`

**Core posture:**

The goal is not to make Claude more human. The goal is to make the collaboration explicit enough that honesty, challenge, and repair survive over time.

---

## Level 4 — Cowork / Agentic Workflow Governance

Use the full structure for autonomous, scheduled, multi-file, or high-stakes workflows.

**Use this when:**

- Cowork or another agent can read, edit, or create files
- scheduled/background tasks are running
- outputs must be auditable
- multiple tools, folders, or data sources are involved
- rollback matters

**Use:**

- Level 3 files
- `FOLDER-STRUCTURE.md`
- task/update logs such as `Claude_Session_Updates.md`
- archive/versioning conventions

**Core posture:**

Agentic work needs stronger boundaries than chat. A capable agent working from the wrong file can create more damage than a weak assistant asking for help.

---

## Quick Decision Table

| Work type | Suggested level |
|---|---|
| One-off prompt, draft, brainstorm | Level 0 |
| Multi-session writing or planning | Level 1 |
| Research, strategy, finance, operations | Level 2 |
| Honest critique / thinking partnership | Level 3 |
| Cowork file editing, scheduled tasks, autonomous workflows | Level 4 |

---

## The Principle

Use the lightest structure that protects the work.

If governance feels like bureaucracy, simplify it.

If drift, confusion, file mistakes, or agreeable nonsense are recurring, add structure.