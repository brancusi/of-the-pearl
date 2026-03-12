---
name: clojure-interactive-dev
description: Interactive Clojure development using Calva Backseat Driver REPL tools — evaluation, symbol lookup, structural editing, and REPL-driven workflow.
---

# Clojure Interactive Development

This skill teaches how to use the Calva Backseat Driver tools for interactive Clojure development with a live REPL.

## Available REPL Tools

### Core evaluation

- **`clojure_evaluate_code`** — Evaluate Clojure code in the connected REPL. Requires `code`, `namespace`, and `replSessionKey` (use `"clj"` for this project).
- **`clojure_list_sessions`** — List active REPL sessions to discover available `replSessionKey` values.
- **`clojure_repl_output_log`** — Read recent REPL output (stdout, stderr, tap> output). Check this regularly during development to see application logs and tap> debug output flowing to Portal.

### Symbol & documentation lookup

- **`clojure_symbol_info`** — Look up a symbol's docstring, argument list, source file, and type. Use this to understand functions before calling them.
- **`clojuredocs_info`** — Look up Clojure core (and core-adjacent) symbols on clojuredocs.org for docs, examples, and see-also references.

### Structural editing

- **`replace_top_level_form`** — Replace an existing top-level form with new code. Includes automatic bracket balancing and formatting. Use for modifying existing functions/defs.
- **`insert_top_level_form`** — Insert a new top-level form at a specific location. Includes automatic bracket balancing and formatting. Use for adding new functions/defs.
- **`clojure_balance_brackets`** — Fix bracket balance in a code string. Use when constructing complex forms.
- **`clojure_create_file`** — Create a new Clojure file with properly balanced brackets.
- **`clojure_append_code`** — Append code to the end of a Clojure file with automatic bracket balancing.

## Interactive Development Workflow

### REPL-first approach

Always follow the REPL-first workflow for Clojure development:

1. **Understand** — Use `clojure_symbol_info` and `clojure_evaluate_code` to explore existing code and data shapes before making changes.
2. **Experiment** — Evaluate small expressions in the REPL to test hypotheses and understand behavior.
3. **Implement** — Use structural editing tools (`replace_top_level_form`, `insert_top_level_form`) to make changes.
4. **Verify** — Evaluate the changed code in the REPL to confirm it works with real data.

### Evaluation best practices

- Always specify the correct `namespace` when evaluating. Use the namespace of the file being worked on.
- Use `replSessionKey: "clj"` for all evaluations in this project.
- For exploring a namespace, evaluate `(dir some.namespace)` or `(ns-publics 'some.namespace)`.
- To see a function's source: `(clojure.repl/source some-fn)`.
- To test functions, evaluate them with real or sample data rather than guessing at behavior.
- When evaluating code that requires specific namespaces, include a `(require '[...])` form first.