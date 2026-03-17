---
name: storybook-story
description: "Create a Storybook story for a ClojureScript Helix component using the storybook:create scaffold script first. Use when: adding a story, creating a story, stubbing a story, building a Storybook story for a component, running storybook:create, or doing a storybook:create dry-run."
---

# Create a Storybook Story

Workflow for adding a new component to the project's Storybook setup.

Default approach: use the Storybook scaffold CLI to generate the three required file changes, then customize the generated story args and controls.

## Architecture Overview

```
storybook-src/
  otp/storybook/
    adapter.cljs      ← wrap-component helper (already exists, don't edit)
    stories.cljs      ← Registry: imports components, exports wrapped versions
  stories/
    *.stories.js      ← One CSF file per component (JS, not CLJS)

shadow-cljs.edn       ← :storybook build :exports map must list every export
```

**Data flow:** Helix `defnc` component → `wrap-component` (passes JS props through via `React.createElement`) → ESM named export → imported by `.stories.js` → Storybook renders it.

## Procedure

### Step 1 — Read the target component

Read the component's source file to extract:

1. **Namespace** and **var name** (e.g., `otp.ui.button/main-button`)
2. **Props map** — the `{:keys [...]}` destructuring in the `defnc` signature
3. **Prop types** — infer from usage in the body:
   - String props: rendered as text, or used with `str`
   - Keyword props: used in `case`, `get`, `condp`, or as map keys (e.g., `:size`, `:color`)
   - Boolean props: used in `when`, `if`, `not`
   - Function props: used as callbacks (`on-click`, `on-change`)
   - Children: the special `children` prop
4. **Keyword prop values** — collect the concrete keyword values from `case` branches, map lookups, or `condp` clauses. These become `options` arrays in the story's `argTypes`.

### Step 2 — Dry-run the scaffold CLI first

Run the generator in preview mode:

```bash
npm run storybook:create -- --component <namespace/component-var> --dry-run
```

Required input:
- `--component` in the format `namespace/var-name` (example: `otp.ui.button/main-button`)

Optional inputs:
- `--title "<Category>/<ComponentName>"`
- `--category <Category>` (default: `UI`)
- `--story-file <FileName.stories.js>`
- `--extension js|jsx` (default: `js`)

If dry-run output looks correct, continue to Step 3.

### Step 3 — Generate the scaffold

Run without `--dry-run`:

```bash
npm run storybook:create -- --component <namespace/component-var>
```

The script will do the mechanical wiring automatically:
- Add a wrapped export to `storybook-src/otp/storybook/stories.cljs`
- Add that export to `shadow-cljs.edn` under `:storybook -> :modules -> :stories -> :exports`
- Create a starter story file in `storybook-src/stories/`

The script aborts safely if:
- Story file already exists
- Export already exists in either wiring file
- Expected structures are missing

### Step 4 — Customize the generated `.stories.js` or `.stories.jsx`

Open the generated story and fill in `argTypes` and `Default.args` using the component analysis from Step 1.

Use Component Story Format (CSF) with this structure:

```js
import { MyComponent } from "cljs-out/stories.js";

export default {
  title: "<Category>/<ComponentName>",
  component: MyComponent,
  argTypes: {
    // ... see argTypes rules below
  },
};

export const Default = {
  args: {
    // ... default prop values
  },
};
```

#### Title categories

Pick the most appropriate category prefix for the `title` field:

| Category | When to use |
|----------|-------------|
| `UI/` | Reusable elements: buttons, toggles, inputs, labels |
| `Sections/` | Page sections: hero, team, curators, artist blocks |
| `Layout/` | Navigation, overlays, page wrappers |
| `Elements/` | Domain-specific elements: budget tables, lazy images |

#### argTypes rules

Map each prop from the `{:keys [...]}` destructuring to a Storybook control:

| Prop type | argType | Example |
|-----------|---------|---------|
| String | `{ control: "text" }` | `title: { control: "text" }` |
| Boolean | `{ control: "boolean" }` | `show-icon: { control: "boolean" }` |
| Keyword (enum) | `{ control: "select", options: [...] }` | `size: { control: "select", options: ["xs", "sm", "md"] }` |
| Number | `{ control: "number" }` | `count: { control: "number" }` |
| Function | Omit from argTypes | Callbacks like `on-click` — use `{ action: "clicked" }` only if you want to log them |
| Children | Omit from argTypes | Passed as `children` — create a separate story variant instead |

**Critical:** Keyword props (`:pink`, `:xs`, etc.) are passed from Storybook as **strings** (`"pink"`, `"xs"`). List the string versions (without colons) in the `options` array. The Helix component receives these as strings via the JS props object.

#### Story variants

Create one `Default` story with typical props, then add variants that exercise interesting states:
- Alternative enum values (e.g., `Small`, `SlateColor`)
- Missing optional props (e.g., `WithoutEyebrow`)
- Boolean toggles (e.g., `Disabled`, `Loading`)
- Child content (e.g., `WithChildren`)

Only use `.jsx` extension and `render` functions when a story needs custom JSX composition (e.g., rendering a different component from the same import, or wrapping in a layout).

### Step 5 — Validate

1. Ensure scaffold command completed without errors.
2. Ensure the shadow-cljs `:storybook` build compiles: check for 0 warnings.
3. If watchers are running, wait for `[:storybook] Build completed`.
4. Verify the new story appears in the Storybook sidebar.

## Complete Example

For a component at `otp.ui.button/main-button` with props `{:keys [title on-click size color bg-opacity additional-classes children]}`:

Generate the scaffold:

```bash
npm run storybook:create -- --component otp.ui.button/main-button --title "UI/Button"
```

Then customize the generated story file (for example `storybook-src/stories/Button.stories.js`):

```js
import { MainButton } from "cljs-out/stories.js";

export default {
  title: "UI/Button",
  component: MainButton,
  argTypes: {
    title: { control: "text" },
    size: {
      control: "select",
      options: ["xs", "sm", "md"],
    },
    color: {
      control: "select",
      options: ["pink", "slate"],
    },
  },
};

export const Default = {
  args: {
    title: "Explore!",
    size: "md",
    color: "pink",
  },
};

export const Small = {
  args: {
    title: "Learn More",
    size: "sm",
    color: "pink",
  },
};
```

## Manual Fallback (when script cannot be used)

If the scaffold script is unavailable, apply the three wiring steps manually:

1. In `storybook-src/otp/storybook/stories.cljs`, add the namespace require and `^:export` wrapped component.
2. In `shadow-cljs.edn`, add the export under the Storybook `:exports` map.
3. Create `storybook-src/stories/<ComponentName>.stories.js` (or `.jsx`) and fill in `argTypes` and `args`.

Naming convention for export names:
- `main-button` -> `MainButton`
- `section-header` -> `SectionHeader`
- `lazy-image` -> `LazyImage`

## Prop-Type Pitfalls

- **Keywords become strings.** The adapter passes JS props directly to the Helix component. Storybook sends `"pink"` not `:pink`. If the component uses `case` on keywords (e.g., `(case size :xs ...)`) it will fall through to the default. The component may need to accept either — but don't modify the component in this workflow; note it as a known limitation.
- **`children` is React children.** Don't add a `children` argType. Instead create a story variant with `args: { children: "Some text" }`.
- **Callbacks.** Use `{ action: "onClicked" }` in argTypes if you want the Actions panel to log clicks.
