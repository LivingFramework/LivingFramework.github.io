# Modern Claude Note

**Purpose:** Explain how these Claude/Cowork templates should be understood now that Claude and other AI tools increasingly include projects, files, memory, connectors, agents, and workspace-style features.

---

## What Changed

The original templates were written for a moment when long-horizon AI work often meant restarting from a cold chat and manually reloading context every session.

That is no longer the whole picture.

Modern Claude usage may involve:

- project spaces or folders
- uploaded files
- persistent instructions
- memory or preference features
- connected tools and data sources
- scheduled or autonomous work
- agentic file editing
- desktop, web, and mobile workflows

These features reduce some old friction. They do **not** eliminate the need for governance.

---

## What Still Needs Governance

Native AI memory is convenient, but it is not automatically authoritative.

For serious work, you still need explicit answers to questions like:

- Which file is the source of truth?
- Which numbers are approved and current?
- Which decisions are active, superseded, or still open?
- What should Claude challenge rather than accept?
- What happens when Claude works from stale context?
- How do automated or background actions get reconciled with live sessions?
- How do you recover after file, numeric, or reasoning drift?

LC-OS templates provide that governance layer.

---

## The Modern Rule

Use native Claude features for convenience.

Use LC-OS artefacts for authority.

Claude project files, memory, connectors, and workspace features can help Claude access context. But the authoritative record should still be explicit, reviewable, and updateable by the human.

A good modern setup does not require pasting every file into every session. It requires making sure Claude is working from the current authoritative state.

---

## What This Means for These Templates

The templates are still useful, but their role changes:

| Old framing | Modern framing |
|---|---|
| Claude has no memory, so use these files. | Claude may have project memory/files, but explicit governance still protects serious work. |
| Paste the Running Document every session. | Ensure Claude has access to the current authoritative project state. Paste only when needed. |
| Use all templates for long collaboration. | Choose the lightest template set that matches the risk and complexity of the work. |
| Cowork is the assumed environment. | Cowork is one supported environment; the core governance works across Claude interfaces. |
| Templates are a fixed system. | Templates are modular controls that can be adopted, simplified, or retired as needed. |

---

## Recommended Modern Posture

Do not over-govern casual work.

Do govern work that is:

- long-running
- high-stakes
- numerical
- research-heavy
- client-facing
- emotionally or relationally sensitive
- multi-file or multi-version
- spread across tools, sessions, or agents

The question is not: “Should I use LC-OS?”

The better question is: “How much governance does this work need?”

Use the adoption levels in `ADOPTION_LEVELS.md` to decide.

---

## Bottom Line

The templates are not obsolete.

The old assumption that every session starts from zero is obsolete.

The modern version of LC-OS for Claude is risk-calibrated governance: native AI features for convenience, explicit artefacts for reliability, and repair protocols when reality drifts.