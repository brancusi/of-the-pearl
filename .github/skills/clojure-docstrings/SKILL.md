---
name: clojure-docstrings
description: "Write and revise Clojure docstrings for defn, defmacro, ns, protocol methods, and public APIs. Use when documenting heavily used functions, complex arg lists, options maps, multi-arity functions, or behavior that is not obvious from the name alone. Avoid over-documenting tiny self-explanatory helpers."
argument-hint: "Describe the vars or namespaces that need docstrings, and whether you want terse, standard, or detailed documentation."
---

# Clojure Docstrings

Write docstrings that help a developer understand usage quickly.

This skill is for documenting behavior, inputs, outputs, constraints, side effects, and examples when those details are not obvious from the code. It is not for padding simple helpers with redundant prose.

## When to Use

- Adding or revising docstrings for public functions, macros, namespaces, protocols, or methods.
- Documenting frequently used functions where readers need to understand usage fast.
- Explaining complex positional arguments, multi-arity behavior, options maps, or side effects.
- Improving cljdoc and Codox output with Markdown, examples, links, and tables.
- Auditing a namespace to decide which vars deserve detailed docs and which should stay terse.

## Do Not Over-Document

- Skip docstrings for tiny private helpers when the name, args, and body are already obvious.
- Use a one-line summary for simple functions whose behavior is clear but still worth surfacing in tooling.
- Reserve longer docstrings for high-traffic APIs, edge-case-heavy behavior, non-obvious return values, stateful functions, macros, and functions with richer call contracts.

## Procedure

1. Read the var name, arg list, arities, and body before writing anything.
2. Decide whether the form needs no docstring, a one-line summary, or a structured multi-paragraph docstring.
3. Start with a complete first sentence that tools can show as a summary.
4. Describe arguments and options only where the call contract is not obvious.
5. Wrap argument names, keywords, and referenced vars in backticks.
6. Use `[[wikilinks]]` for related vars when cross-navigation helps.
7. Add a short example only when usage is not obvious from the signature.
8. Use Markdown tables for complex options maps.
9. Escape literal quote characters inside docstrings as `\"`.
10. Keep the result grammatically clean, concise, and aligned with the surrounding code style.

## Required Rules

- Prefer docstrings over `:doc` metadata when the form supports them.
- Place the docstring immediately after the function or var name.
- Make the first line a complete, capitalized sentence ending with punctuation.
- Indent multi-line docstrings by two spaces.
- Do not start or end docstrings with extra whitespace.
- Use Markdown deliberately, not decoratively.
- Document positional arguments with backticks.
- Reference related vars with backticks or `[[wikilinks]]`.
- Escape embedded quotes inside the string with backslashes, for example `\"quoted text\"`.

## Recommended Shapes

- Simple API: one sentence.
- Moderate complexity: summary plus one short paragraph about arguments or return value.
- Complex options map: summary, behavior notes, options table, example.
- Multi-arity function: summary plus one bullet or paragraph per arity if behavior differs materially.
- Macro: document evaluation behavior and the shape of the body, not just the happy path output.

## Reference

See [docstring-guidelines](./references/docstring-guidelines.md) for templates, examples, escaping rules, and decision heuristics.