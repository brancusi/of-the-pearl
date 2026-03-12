---
name: docs-and-changelog
description: Workflow for maintaining the project roadmap, task list, and changelog. Use this skill whenever a change request involves multiple steps, architectural decisions, or refactors.
---

# Docs & Changelog Workflow

## Overview

Media Maniac maintains two living documents that track what is being done and what has been done:

| Document | Path | Purpose |
|----------|------|---------|
| **Roadmap** | `docs/ROADMAP.md` | Planned and in-progress work with rationale, current state, target state, and dated task checklists |
| **Changelog** | `CHANGELOG.md` | Completed work in reverse-chronological order with rationale, summary, and migration notes |

## When to Use This Skill

Activate this workflow whenever a user request involves:
- Multi-step refactors or architectural changes
- New feature implementation spanning multiple files/components
- Deprecation or removal of existing patterns
- Any work that a future developer would need context on

Do **not** use this for trivial bug fixes, typo corrections, or single-line changes.

## Workflow — Before Implementation

**Step 1: Update `docs/ROADMAP.md`**

Add a new dated initiative section **above** the `<!-- Add new initiatives above this line -->` marker:

```markdown
## YYYY-MM-DD — Initiative Title

**Goal:** One-sentence description of the desired end state.

**Current state:**
- Bullet list describing how things work today and why that's a problem.

**Target state:**
- Bullet list describing how things will work after this change.

### Tasks

- [ ] **Step N — Short description** (YYYY-MM-DD)
  One-sentence detail of what this step does.
```

Guidelines:
- **Date** is the date the initiative was added (ISO 8601: YYYY-MM-DD).
- **Goal** should state the "why" not just the "what".
- **Current state** gives future readers the context they need to understand the rationale — what exists, where the pain points are, which files are involved.
- **Target state** describes the end result concretely.
- **Tasks** are ordered implementation steps. Each gets a date when added. Update the checkbox and date as work progresses: `[-]` when started, `[x]` when done.

## Workflow — During Implementation

As each task is completed:
1. Mark it `[x]` in `docs/ROADMAP.md` and update the date to the completion date.
2. Continue to the next task.

## Workflow — After Implementation

**Step 2: Update `CHANGELOG.md`**

Add a new entry **above** the `<!-- Append new entries above this line -->` marker:

```markdown
## YYYY-MM-DD — Short Title

**Rationale:** Why this change was made — the problem that existed.
**Summary:** What changed at a high level — the solution adopted.

### Changes
- Bullet list of concrete file/namespace changes.

### Migration Notes
- Anything a developer needs to know or do after pulling this change.
  (e.g., "Run `clj -M:poly check` to verify", "Delete local .secrets.edn cache")
- If none, write "None — backward compatible."
```

Guidelines:
- **Date** is the date the work was completed.
- **Rationale** should be understandable without reading the roadmap — it's the standalone "why".
- **Changes** should reference specific files/namespaces that were added, modified, or deleted.
- **Migration Notes** should include any manual steps, breaking changes, or validation commands.

## Formatting Rules

- Always use ISO 8601 dates: `YYYY-MM-DD`.
- Roadmap entries stay in the file even after completion — they serve as historical record of planning.
- Changelog entries are reverse-chronological (newest first).
- Keep entries concise but complete. A future developer reading only the changelog entry should understand what happened and why.
- Do not duplicate the full task list in the changelog — summarize the outcome.

## File Locations

```
docs/
├── CHANGELOG.md    ← Completed changes (append after finishing work)
├── ROADMAP.md      ← Planning & task tracking (update before starting work)
└── pages/          ← Logseq pages (domain docs, not change tracking)
```

## Example Lifecycle

1. User requests: "Refactor job dependency injection to use Goose middleware"
2. **Before coding:** Add initiative to `docs/ROADMAP.md` with rationale, current/target state, and task checklist
3. **During coding:** Check off tasks as completed, updating dates
4. **After coding:** Add summary entry to `CHANGELOG.md`
5. Run `clj -M:poly check` and `clj -M:poly test :dev` to validate
