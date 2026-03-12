# Clojure Docstring Guidelines

This reference distills guidance from:

- Martin Klepsch, "4 Small Steps Towards Awesome Clojure Docstrings"
- The community Clojure Style Guide documentation section
- Common Clojure API documentation practices used by cljdoc and Codox

## Primary Goal

Optimize for fast understanding.

A good docstring lets a developer answer these questions quickly:

- What does this var do?
- When should I call it?
- What do the arguments mean?
- What does it return?
- What are the edge cases, side effects, or invariants?
- What is the simplest correct example?

## Decision Heuristics

### No docstring or very short docstring

Use no docstring, or at most a single sentence, when all of the following are true:

- The function is private or highly local.
- The name is precise.
- The arg list is short and obvious.
- The behavior is visible from a tiny body.
- There are no meaningful side effects, caveats, or edge cases.

Example:

```clojure
(defn- clamp-zero [n]
  (max 0 n))
```

### Standard docstring

Use a brief docstring when the var is public or likely to appear in editor help, but its contract is still simple.

```clojure
(defn normalize-path
  "Normalizes `path` into a workspace-relative path string."
  [path]
  ...)
```

### Detailed docstring

Use a longer docstring when any of these apply:

- The function is a frequently used entry point.
- The function has multiple arities with meaningfully different behavior.
- The function accepts an options map.
- The return value is non-obvious.
- There are side effects, caching, lazy behavior, blocking behavior, or error cases.
- The function is a macro or otherwise affects evaluation.
- The function participates in a workflow that benefits from an example.

## Core Rules

### 1. Start with a real summary sentence

The first line should be a complete sentence with punctuation.

Good:

```clojure
(defn fetch-user
  "Fetches a user record by `user-id`."
  [store user-id]
  ...)
```

Bad:

```clojure
(defn fetch-user
  "fetch user by id"
  [store user-id]
  ...)
```

### 2. Backtick arguments and special keywords

This comes directly from Martin Klepsch's guidance and improves readability in editors and docs.

```clojure
(defn schedule-retry
  "Schedules `task` to run again after `delay-ms` milliseconds.
  When `:jitter?` is true, a small random offset is added before scheduling."
  [task delay-ms {:keys [jitter?]}]
  ...)
```

### 3. Link to related vars with `[[wikilinks]]`

Use wikilinks when readers will likely hop to neighboring APIs.

```clojure
(defn stop-listener!
  "Stops the listener associated with `listener-id`. See also [[start-listener!]]."
  [system listener-id]
  ...)
```

Use fully qualified links for other namespaces:

```clojure
"Builds a route tree compatible with [[reitit.core/router]]."
```

### 4. Include examples only when they reduce ambiguity

Do not add examples mechanically. Add them when a reader benefits from seeing the intended shape.

````clojure
(defn compile-route
  "Compiles a route definition into the internal matcher format.

  Example:
  ```clojure
  (compile-route [\"/artists/:id\" {:name :artist/show}])
  ;; => {:path \"/artists/:id\" :name :artist/show ...}
  ```"
  [route]
  ...)
````

### 5. Use tables for complex options maps

Tables are ideal for options maps with multiple keys and defaults.

```clojure
(defn build-router
  "Builds a router from `routes` and `opts`.

  Supported options in `opts`:

  | key | description |
  | --- | --- |
  | `:data` | Default route data merged into every branch. |
  | `:conflicts` | Conflict handler. Defaults to `:warn`. |
  | `:expand?` | When true, expands route forms before compilation. |
  | `:validate?` | When true, validates route data during construction. |"
  [routes opts]
  ...)
```

## What to Cover

### Arguments

Document positional arguments when their meaning is not already obvious from the name.

Good:

```clojure
"Returns the first route whose `pred` matches `request`."
```

Better when needed:

```clojure
"Returns the first route whose `pred` matches `request`.
`pred` is called with the normalized request map, not the raw Ring request."
```

### Return value

Mention the return shape when it is not self-evident.

```clojure
"Parses `input` and returns a map with `:status`, `:value`, and optional `:error`."
```

### Side effects and lifecycle behavior

Call out mutation, I/O, caching, subscriptions, network traffic, lazy execution, retries, and blocking behavior.

```clojure
"Writes `payload` to disk and returns the target path.
Throws `ex-info` when the parent directory cannot be created."
```

### Error behavior

Document thrown exceptions or invalid input behavior when it matters to callers.

```clojure
"Resolves `slug` to a published post.
Throws `ex-info` with `:type :post/not-found` when no published post matches `slug`."
```

### Multi-arity behavior

If arities differ only by defaulting, keep it brief. If semantics differ, say so explicitly.

```clojure
(defn load-image
  "Loads an image source.
  With one argument, uses default image options.
  With two arguments, `opts` may override resize and caching behavior."
  ([src]
   ...)
  ([src opts]
   ...))
```

### Macros

Document evaluation rules, binding forms, and body semantics.

```clojure
(defmacro with-timing
  "Evaluates `body`, logs the elapsed time, and returns the final body value.
  `label` is evaluated once before `body` executes."
  [label & body]
  ...)
```

## Escaping Quotes Correctly

Docstrings are string literals. Literal quote characters inside the string must be escaped as `\"`.

Good:

```clojure
(defn explain-mode
  "Returns `:draft` when `status` is \"draft\" and `:published` otherwise."
  [status]
  ...)
```

Bad:

```clojure
(defn explain-mode
  "Returns `:draft` when `status` is "draft" and `:published` otherwise."
  [status]
  ...)
```

If you do not need literal quotes in the prose, prefer backticks around symbols and keywords rather than quoting everything.

## Formatting Rules

- Place the docstring immediately after the var name.
- Indent multi-line docstrings by two spaces.
- Keep the first line short enough to work as a summary in editor UI.
- Use well-formed English sentences.
- Avoid leading or trailing whitespace inside the string.
- Prefer concise paragraphs over long walls of text.

## Recommended Templates

### Simple public function

```clojure
(defn slugify
  "Converts `s` into a URL-safe slug."
  [s]
  ...)
```

### Function with non-obvious behavior

```clojure
(defn resolve-preview
  "Resolves the preview payload for `document`.
  Returns `nil` when the document is unpublished or missing its preview fields."
  [document]
  ...)
```

### Options map template

````clojure
(defn start-worker!
  "Starts a worker process for `job`.

  Supported options in `opts`:

  | key | description |
  | --- | --- |
  | `:concurrency` | Maximum number of concurrent jobs. Defaults to `1`. |
  | `:retry-limit` | Maximum retry count before the job is marked failed. |
  | `:on-error` | Callback invoked with the thrown exception and job context. |

  Example:
  ```clojure
  (start-worker! job {:concurrency 4 :retry-limit 2})
  ```"
  [job opts]
  ...)
````

### Macro template

```clojure
(defmacro with-cache
  "Evaluates `body` with cache lookups enabled for `cache-key`.
  If a cached value exists, returns it without evaluating `body`."
  [cache-key & body]
  ...)
```

### Namespace template

```clojure
(ns my.app.routes
  "Route assembly and route data normalization for the frontend application.")
```

## Anti-Patterns

- Repeating the function name in different words without adding meaning.
- Explaining obvious code line by line.
- Documenting implementation details that callers should not rely on.
- Adding long examples for trivial functions.
- Failing to mention side effects or exceptional behavior.
- Forgetting to escape literal quote characters with `\"`.
- Putting the docstring after the arg vector instead of after the function name.

## Editing Checklist

- Does the docstring help a caller use the var correctly?
- Is the first line a clean summary sentence?
- Are important args, keywords, and vars wrapped in backticks?
- Are related vars linked with `[[wikilinks]]` when useful?
- Are literal quotes escaped as `\"`?
- Is the docstring proportional to the complexity of the API?
- Would a developer understand usage faster after reading it?
