---
name: roadmapping
description: How to manage the ROADMAP.md file — adding initiatives, archiving completed work, and writing implementation strategies. Use this skill whenever multi-step work needs planning or an initiative is being added.
---

# Roadmapping

## Overview

`docs/ROADMAP.md` is the living planning document for the codebase. It tracks **active and planned** work. Completed initiatives are archived to `CHANGELOG.md` and then **removed** from the roadmap to keep context lean.

This skill covers how to structure initiatives, when to prune, and how to write implementation strategies.

*IMPORTANT: When roadmapping, don't start implementation until the user approves and asks to implement.

## File Structure

```
docs/ROADMAP.md      ← Active/planned work only
CHANGELOG.md         ← Completed work (reverse-chronological)
```

## When to Add a Roadmap Initiative

Add an initiative whenever a user request involves:
- Multi-step implementation across multiple files/components
- Architectural decisions that need recorded rationale
- New feature work with dependencies between steps
- Refactors that change existing patterns

Do **not** add initiatives for single-file fixes, typo corrections, or trivial changes.

When you start creating a new roadmap entry, scan the existing roadmap file and clear it out based on the rules in the archiving section below. This is to safely remove orphaned roadmaps that have been complete but not cleaned up.

## Initiative Format

Add new initiatives **above** the `<!-- Add new initiatives above this line -->` marker:

```markdown
## YYYY-MM-DD — Initiative Title

**Goal:** One-sentence description of the desired end state.

**Current state:**
- What exists today and why it's insufficient.

**Target state:**
- Concrete description of the end result.

**Key decisions:**
- Decision 1 — rationale
- Decision 2 — rationale

### Implementation Strategy

Narrative explanation of the approach: what changes, in what order,
and why that ordering matters. Reference specific files and namespaces.
Mention risks and edge cases.

### Tasks

- [ ] **Step N — Short description** (YYYY-MM-DD)
  One-sentence detail.
```

### Guidelines

- **Date** is the date the initiative was added (ISO 8601).
- **Goal** states the "why" not just the "what".
- **Current state** gives future readers context.
- **Target state** describes the end result concretely.
- **Key decisions** records architectural choices and their rationale so they don't need to be rediscovered. Include alternatives that were considered and rejected.
- **Implementation Strategy** is a narrative section (not just tasks) that explains the approach, ordering rationale, and edge cases. This is where the "how" lives.
- **Tasks** are ordered implementation steps. Each gets a date when added. Update status as work progresses: `[-]` started, `[x]` done.

## Archiving Completed Initiatives

**CRITICAL:** Once an initiative is fully completed (all tasks `[x]`) and its changelog entry has been written:

1. **Remove the entire initiative section** from `docs/ROADMAP.md`
2. The changelog entry in `CHANGELOG.md` serves as the permanent historical record

This prevents the roadmap from growing unboundedly. Agents should not need to load completed planning context into every session.

### When to Archive

- All tasks are marked `[x]`
- A corresponding `CHANGELOG.md` entry exists
- The user confirms the work is complete (or tests pass)

### What to Keep

- Only keep initiatives that are `[ ]` planned, `[-]` in progress, or `[!]` blocked
- The header, goal, decisions, and strategy sections stay until archival — they provide context for in-progress work

## Writing an Implementation Strategy

The strategy section is the most valuable part of the roadmap for future sessions. It should answer:

1. **What is the sequencing?** Which steps depend on which? Why this order?
2. **What are the touch points?** Which files/namespaces change?
3. **What are the risks?** What could break? What needs careful handling?
4. **What patterns are being followed?** Reference existing codebase patterns.
5. **What was decided and why?** Summarize key design decisions so they don't need to be re-debated.

Keep it concise but complete — a future agent reading only this section should be able to implement the work without re-researching the codebase.

## Status Legend

```
[ ] planned
[-] in progress
[x] done
[!] blocked
```
