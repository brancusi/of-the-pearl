---
name: styles
description: Visual styling reference for the Armenian Pavilion 2026 site — design tokens, typography, color palette, component patterns, spacing conventions, and anti-patterns.
---

# Style Guide — Armenian Pavilion 2026

Reference for visual styling across the Armenian Pavilion website.
Covers the design system: typography, color palette, component patterns, spacing, and anti-patterns.

---

## Philosophy

Modern, minimalist, tech/art. The aesthetic is **mathematical structure meets fine art** — geometric precision, clean grids, pattern and repetition. Two typefaces: one humanist sans-serif (Source Sans Pro) for all text — display headings, titles, nav, and prose body copy — and one monospaced (Source Code Pro) for data/labels. Weight is kept **light to medium** — the typeface does the work, not the boldness. Prose emphasis is through **brightness, not color** — white against slate-300 body text. Color accents (pink) are reserved for interactive elements only (buttons, hover states, CTAs). Body copy is always justified. Information density over decoration. Data-forward, quietly confident.

---

## Typography

### Two-Font System

The site uses exactly two typefaces. Both `font-display` and `font-body` resolve to Source Sans Pro (unified Feb 2026; Neue Haas Grotesk Display was removed). The semantic split between display and body tokens is preserved for clarity, but they render identically.

| Token / Class  | Typeface         | Source        | Role                                                      |
| -------------- | ---------------- | ------------- | --------------------------------------------------------- |
| `font-display` | Source Sans Pro  | Adobe Typekit | Headings, titles, names, navigation                       |
| `font-body`    | Source Sans Pro  | Adobe Typekit | Prose body text (justified)                               |
| `font-mono`    | Source Code Pro  | Adobe Typekit | Labels, eyebrows, numbers, dates, financial figures, code |

**Style tokens** (in `amp.styles`):

- `s/font-display` → `"font-display"` → Source Sans Pro
- `s/font-body` → `"font-body"` → Source Sans Pro
- `s/font-data` → `"font-mono"` → Source Code Pro
- `s/font-prose` → alias for `s/font-body`
- `s/font-ui` → alias for `s/font-data`

**Rules:**

- Headings and titles: **always** `font-display`
- Prose body text: **always** `font-body` (justified via `text-justify`)
- Numbers, financial figures, dates: **always** `font-mono`
- Labels, eyebrows, badges, tags: **always** `font-mono`
- Navigation links: `font-display`
- Never use `font-sans`, `font-helvetica`, `font-futura-book`, `neue-haas-grotesk-display`, `FiraCode` — these are dead config

### Scale

| Role              | Style Token         | Resolves To                                                                          |
| ----------------- | ------------------- | ------------------------------------------------------------------------------------ |
| **Page title**    | `s/heading-page`    | `font-display font-semibold uppercase text-3xl sm:text-4xl lg:text-6xl`              |
| **Section title** | `s/heading-display` | `font-display font-semibold uppercase leading-none text-4xl sm:text-5xl md:text-7xl` |
| **Section head**  | `s/heading-section` | `font-display font-medium uppercase tracking-wider text-xl`                          |
| **Small heading** | `s/heading-sm`      | `font-display font-medium uppercase tracking-wide text-sm sm:text-base`              |
| **Eyebrow**       | `s/eyebrow`         | `font-mono font-semibold uppercase tracking-[0.15em] text-[10px]`                    |
| **Label**         | `s/label`           | `font-mono uppercase tracking-[0.15em] text-[0.6rem]`                                |
| **Lead body**     | `s/body-lg`         | `font-body font-normal text-lg text-secondary text-justify leading-relaxed`          |
| **Body base**     | `s/body-base`       | `font-body font-normal text-base text-secondary text-justify leading-relaxed`        |
| **Body small**    | `s/body-sm`         | `font-body font-normal text-sm text-muted text-justify leading-relaxed`              |
| **Financial fig** | `s/value-base`      | `font-mono font-semibold text-base`                                                  |
| **Tag / badge**   | `s/label-sm`        | `font-mono font-semibold uppercase tracking-wider text-[9px]`                        |

### Key Rules

- All numbers and financial figures: **always** `font-mono` (`s/font-data`)
- Headings: **always** `font-display` via style tokens (`s/heading-*`)
- Prose body text: `font-body` via `s/body-*` tokens (always justified)
- Highlighted terms in prose: **brightness only** — `font-medium text-white` (via `s/em-strong`). No colored accents in prose.
- Dollar amounts in prose: `font-mono font-medium text-white` (via `s/value-currency`)
- Inline in components: prefer `s/font-display`, `s/font-body`, or `s/font-data` over raw class strings
- Weight ceiling: `font-bold` (700) for hero titles only. All other headings: `font-semibold` (600) or `font-medium` (500). No `font-extrabold`.

---

## Color Palette

### Background

| Token             | Usage                              |
| ----------------- | ---------------------------------- |
| `bg-black`        | Primary background (timeline, etc) |
| `bg-slate-900`    | Card / row background              |
| `bg-slate-900/60` | Alternating row                    |
| `bg-slate-950`    | Deep emphasis (totals footer)      |
| `bg-slate-800/50` | Hover state                        |
| `bg-slate-800/40` | Expanded description background    |

### Pastel Accent Colors

These are the **core** accent colors. Pink is **interactive-only** (buttons, hover states, CTAs, dividers) — never for inline prose emphasis.

| Color           | Tailwind           | Hex       | Meaning                                 |
| --------------- | ------------------ | --------- | --------------------------------------- |
| **Pink-300**    | `text-pink-300`    | `#f9a8d4` | Interactive: buttons, hover, CTA        |
| **Amber-300**   | `text-amber-300`   | `#fcd34d` | High priority / secondary data          |
| **Indigo-300**  | `text-indigo-300`  | `#a5b4fc` | Normal / financial figures              |
| **Emerald-400** | `text-emerald-400` | `#34d399` | Paid / success / "now"                  |
| **White**       | `text-white`       | `#ffffff` | Prose emphasis (names, terms via em-\*) |

### Text Hierarchy

| Level     | Class            | Usage                       |
| --------- | ---------------- | --------------------------- |
| Primary   | `text-slate-100` | Headings, important labels  |
| Secondary | `text-slate-200` | Sub-headings, values        |
| Body      | `text-slate-300` | Prose, descriptions         |
| Muted     | `text-slate-400` | Field labels, metadata      |
| Dim       | `text-slate-500` | Eyebrows, timestamps, hints |
| Ghost     | `text-slate-600` | Line numbers, separators    |

### Accent Lines & Borders

| Pattern                          | Usage                        |
| -------------------------------- | ---------------------------- |
| `bg-pink-500/70` (1px high)      | Section eyebrow accent line  |
| `border-pink-500/30`             | Expanded content left border |
| `border-pink-500/40`             | Totals separator             |
| `border-slate-800`               | Subtle horizontal dividers   |
| `border-dashed border-slate-700` | Timeline spine / connectors  |

---

## Component Patterns

### Section Block

The canonical section wrapper. Pink accent line + eyebrow + large title.

```clojure
(d/div {:class "mb-6 flex items-center gap-3"}
       (d/div {:class "h-px w-10 bg-pink-500/70"})
       (d/p {:class "font-mono text-[10px] font-bold tracking-[0.25em] uppercase text-slate-500"}
            "1. eyebrow"))
(d/h2 {:class "font-mono font-bold uppercase leading-none text-5xl md:text-7xl"}
      "Title")
```

Lives in: `amp.components.elements.budget.section-block`

### Written By

Reusable author attribution. Inline eyebrow pattern.

```clojure
($ written-by {:author "Name" :class "mb-4"})
```

Renders as: `WRITTEN BY  Name` — both in `font-mono text-[10px]`, label in `text-slate-500`, name in `text-slate-400`.

Lives in: `amp.components.elements.written-by`

### Expandable Text Area

Section with preview/expanded toggle. Wraps `section-block` + preview component + full-text component + optional footer.

```clojure
($ expandable-text-area-2
   {:section-hint "financials"
    :title "budget"
    :expand-button-label "Read more"
    :preview-text preview        ;; component
    :full-text details           ;; component
    :footer-text footer})        ;; optional component
```

Lives in: `amp.components.elements.expandable-text-area`

### Data Table Row (Expandable)

Budget table sections use this pattern:

- **Collapsed**: `font-mono`, title left (`uppercase tracking-wide text-slate-200`), amount right (`text-indigo-300`), chevron icon
- **Expanded**: `border-l-2 border-pink-500/30` left accent, description in `text-sm bg-slate-800/40 text-slate-400`, detail items as numbered list
- **Section totals**: `bg-slate-950`, total in `text-pink-300`, tax in `text-amber-300/80`
- **Close button**: `text-[10px] uppercase tracking-[0.25em] text-slate-500 hover:text-pink-300`

### Timeline Node (Cash Flow)

- Left gutter: circle marker (colored border, filled if pending, hollow if paid) + dashed vertical spine
- Horizontal dashed connector
- Content: date + priority badge + status badge, title, amount
- Paid items: `opacity-50`, `text-slate-500 line-through`, hollow circle

### Priority Tags

```clojure
;; Background
:critical "bg-pink-500/15"
:high     "bg-amber-400/15"
:normal   "bg-indigo-400/15"

;; Text
:critical "text-pink-300"
:high     "text-amber-300"
:normal   "text-indigo-300"
```

### Status Tags

```clojure
:paid    {:dot "bg-emerald-400/20" :text "text-emerald-400" :label "PAID"}
:pending {:dot "bg-slate-500/15"   :text "text-slate-500"   :label "DUE"}
```

---

## Hover & Interaction

| Element          | Hover                                          |
| ---------------- | ---------------------------------------------- |
| Nav links        | `hover:text-pink-300 transition-colors`        |
| Table rows       | `hover:bg-slate-800/50 transition-colors`      |
| Toggle buttons   | `hover:text-pink-300 transition-colors`        |
| Chevron rotation | `transition-transform rotate-90` when expanded |

---

## Spacing Conventions

- Section top padding: `pt-12`
- Content padding: `px-4`
- Between sections: handled by section-block's `pt-12`
- Between items in a list: `pb-4` or `pb-5` per item (flow layout, not absolute)
- Eyebrow to title gap: `mb-6`
- Summary stat blocks: `gap-4 flex-wrap` with `border-l-2 pl-3` per stat

---

## Animation (GSAP)

All animations use GSAP (registered in `amp.core/start`). Common patterns:

| Element        | Animation                                          |
| -------------- | -------------------------------------------------- |
| Timeline nodes | `.fromTo` opacity 0→1, x -20→0, staggered by index |
| Month headers  | `.fromTo` opacity 0→1, y 8→0                       |
| Summary rows   | `.fromTo` opacity 0→1, x -16→0                     |
| Now marker     | `.fromTo` opacity 0→1, scaleX 0→1, origin-left     |
| Summary header | `.fromTo` opacity 0→1, y -12→0                     |
| Spine          | `.fromTo` scaleY 0→1, origin-top                   |

Standard easing: `"power2.out"` or `"power3.out"`. Delays stagger at `0.05`–`0.06` per index.

Elements start with `opacity-0` in CSS and are revealed by GSAP.

---

## Anti-Patterns (Do NOT Use)

| Avoid                              | Use Instead                                       |
| ---------------------------------- | ------------------------------------------------- |
| `font-helvetica`                   | `font-display` or `font-body` (Source Sans Pro)    |
| `font-sans`                        | `font-display` for headings, `font-body` for prose |
| `font-futura-book`                 | `font-display` or `font-body`                      |
| `neue-haas-grotesk-display`        | Removed — use `font-display` (Source Sans Pro)     |
| Raw `"font-mono"` in components    | `s/font-data` token from `amp.styles`             |
| Raw `"font-futura"` in components  | `s/font-display` token from `amp.styles`          |
| Inline `:style {:font-family ...}` | Tailwind class via token                          |
| `font-extrabold` on headings       | `font-bold` max (hero only), else `font-semibold` |
| `font-bold` on section heads       | `font-medium` (`s/heading-section`)               |
| `font-semibold` + pink on names    | `font-medium` + `text-white` (`s/em-strong`)      |
| Pink/color in prose emphasis       | Brightness only: `s/em-strong` = white            |
| `text-xl` for all body text        | `text-lg` for lead, `text-base` for running prose |
| `bg-blue-*`                        | `bg-slate-900` / `bg-slate-950`                   |
| `border-blue-*`                    | `border-pink-500/*` or `border-slate-*`           |
| `text-blue-*`                      | Pastel palette (pink/amber/indigo/emerald)        |
| `text-pink-400`                    | `text-pink-300` (softer pastel)                   |
| `rounded-*`                        | No border radius                                  |
| `backdrop-blur-*`                  | Flat solid backgrounds                            |
| `bg-gradient-*`                    | Flat colors only                                  |
| `italic` for headings              | `uppercase tracking-wide`                         |
| Large `border-l-8`                 | `border-l-2`                                      |
| `text-2xl` for totals              | `text-lg` or `text-base` with `font-semibold`     |
| Bare `(d/p {}` with no class       | `(d/p {:class s/body-base}` or `s/body-lg`        |
| `s/text-xl` on wrapper divs        | `s/body-lg` / `s/body-base` on each `<p>` element |
| `s/weight-medium` for emphasis      | `s/em-strong` (brightness + weight)               |
| Raw `"text-white"` in prose         | `s/em-strong` or `s/text-inverse`                 |
| `"bg-black"` as page background    | `"grey-grad"` CSS class                           |
| Single-mode Tailwind color          | Dual-mode pair: `"text-color dark:text-color"`    |

---

## Dark / Light Mode Theming

### How It Works

The site uses Tailwind's **class-based dark mode** (`darkMode: "class"` in `tailwind.config.js`).  
The `<html>` element carries a `"dark"` class by default — dark mode is the primary experience.  
Removing the `"dark"` class switches the entire site to light mode.

In Tailwind's class strategy:
- **Bare classes** → light mode (when `<html>` has NO `"dark"` class)
- **`dark:` prefixed classes** → dark mode (when `<html class="dark">`)

### The Golden Rule: Never Use Single-Mode Colors

Every color you apply must work in **both** modes. This means:

```
❌  "text-white"              — invisible on white background in light mode
❌  "bg-slate-900"            — dark rectangle on light page
❌  "text-slate-300"          — too faint on light background
❌  "border-white/15"         — invisible in light mode

✅  "text-slate-900 dark:text-slate-100"   — or use s/text-primary
✅  "bg-white dark:bg-slate-900"           — or use s/bg-surface
✅  "text-slate-600 dark:text-slate-400"   — or use s/text-muted
✅  "border-slate-200 dark:border-white/15" — or use s/border-subtle
```

### Always Use Style Tokens

The `amp.styles` namespace provides dual-mode tokens for every common color role. **Always prefer tokens over raw Tailwind classes:**

| Need                 | Token              | Resolves to (light / dark)                         |
| -------------------- | ------------------ | -------------------------------------------------- |
| Primary text         | `s/text-primary`   | `text-slate-900  dark:text-slate-100`              |
| Secondary text       | `s/text-secondary` | `text-slate-700  dark:text-slate-300`              |
| Muted text           | `s/text-muted`     | `text-slate-600  dark:text-slate-400`              |
| Faint text           | `s/text-faint`     | `text-slate-500  dark:text-slate-500`              |
| Ghost text           | `s/text-ghost`     | `text-slate-400  dark:text-slate-600`              |
| Inverse text         | `s/text-inverse`   | `text-slate-950  dark:text-white`                  |
| Accent (pink)        | `s/text-accent`    | `text-pink-700   dark:text-pink-300`               |
| Value (indigo)       | `s/text-value`     | `text-indigo-600 dark:text-indigo-300`             |
| Success (green)      | `s/text-positive`  | `text-emerald-600 dark:text-emerald-300`           |
| Warning (amber)      | `s/text-warning`   | `text-amber-600  dark:text-amber-300`              |
| Danger (rose)        | `s/text-danger`    | `text-rose-600   dark:text-rose-400`               |
| Surface background   | `s/bg-surface`     | `bg-white        dark:bg-slate-900`                |
| Alt surface          | `s/bg-surface-alt` | `bg-slate-100/60 dark:bg-slate-800/60`             |
| Overlay background   | `s/bg-overlay`     | `bg-white/40     dark:bg-black/40`                 |
| Subtle border        | `s/border-subtle`  | `border-slate-200 dark:border-white/15`            |
| Accent border        | `s/border-accent`  | `border-pink-500/70 dark:border-pink-500/70`       |
| Divider line         | `s/divider-accent` | `h-px bg-pink-500/70`                              |

### Composed Tokens Are Already Dual-Mode

The heading and body tokens bundle the correct text color automatically:

| Token                | Includes Color    |
| -------------------- | ----------------- |
| `s/heading-display`  | `s/text-primary`  |
| `s/heading-page`     | `s/text-inverse`  |
| `s/heading-section`  | `s/text-primary`  |
| `s/heading-sm`       | `s/text-secondary`|
| `s/body-lg`          | `s/text-secondary`|
| `s/body-base`        | `s/text-secondary`|
| `s/body-sm`          | `s/text-muted`    |
| `s/em-strong`        | `s/text-inverse`  |
| `s/em-bold`          | `s/text-primary`  |
| `s/value-hero`       | `s/text-primary`  |
| `s/value-lg`         | `s/text-accent`   |
| `s/btn-text`         | dual-mode hover   |
| `s/link-subtle`      | dual-mode decor   |
| `s/nav-link`         | dual-mode hover   |

Because these tokens are pre-composed with dual-mode colors, **you rarely need to specify text color separately** on headings and body text. Only add an explicit `s/text-*` if overriding the default.

### Page-Level Setup

Every top-level page view must apply:

1. **`"grey-grad"`** — the page background (defined in `tailwind.css` with both `:is(.dark)` and light variants)
2. **`s/text-primary`** — establishes the default text color cascade for all descendants

```clojure
;; ✅ Correct page wrapper
(defnc my-page-view [_props]
  (d/div {:class (s/cx "min-h-screen grey-grad" s/text-primary)}
         ;; page content ...
         ))

;; ❌ Missing grey-grad — wrong backgrounds in both modes
(defnc my-page-view [_props]
  (d/div {:class (s/cx "min-h-screen" s/text-primary)}
         ;; ...
         ))

;; ❌ Missing text-primary — text color relies on browser default
(defnc my-page-view [_props]
  (d/div {:class "min-h-screen grey-grad"}
         ;; ...
         ))
```

### Section-Level Best Practices

Sections **do not** set their own opaque background — they inherit from the page-level `grey-grad`. Use spacing tokens for vertical rhythm:

```clojure
;; ✅ Section wrapper
(d/div {:class s/section-pb}
       (d/div {:class "px-4"}
              (d/p {:class (s/cx s/heading-section "pb-4")} "Section Title")
              (d/div {:class "space-y-6"}
                     (d/p {:class s/body-lg} "Lead paragraph ...")
                     (d/p {:class s/body-base} "Running prose ..."))))

;; ❌ Section with its own bg-* — breaks the visual flow
(d/div {:class "bg-slate-900 pb-16"}  ;; Don't do this
       ...)
```

### Emphasis in Prose

Inline emphasis uses **brightness, not color** — via `s/em-strong`:

```clojure
;; ✅ Correct emphasis
(d/p {:class s/body-base}
     "The " (d/span {:class s/em-strong} "Arsenale") " is a historic complex.")

;; ❌ Weight-only emphasis — no brightness shift, invisible in some modes
(d/p {:class s/body-base}
     "The " (d/span {:class s/weight-medium} "Arsenale") " is a historic complex.")

;; ❌ Color emphasis in prose — violates design philosophy
(d/p {:class s/body-base}
     "The " (d/span {:class "text-pink-300"} "Arsenale") " is a historic complex.")
```

### Interactive Elements (Buttons, Links, CTAs)

Interactive elements are the **only** place where pink accent color is allowed. Always provide dual-mode pairs:

```clojure
;; ✅ Filled CTA button — pink bg is correctly dual-mode, white text is intentional
(d/a {:class (s/cx s/font-display s/weight-medium
                   "inline-flex items-center justify-center gap-2"
                   "px-6 py-3 text-sm uppercase tracking-wider"
                   "bg-pink-600 dark:bg-pink-500 text-white"
                   "hover:bg-pink-700 dark:hover:bg-pink-400"
                   "transition-colors duration-200")}
     "Call to Action")

;; ✅ Text-style CTA link — accent color with dual-mode pairs
(d/a {:class (s/cx s/font-display s/weight-medium
                   "text-sm uppercase tracking-wider"
                   "text-pink-600 dark:text-pink-300"
                   "hover:text-pink-700 dark:hover:text-pink-200"
                   "transition-colors duration-200")}
     "See more →")

;; ✅ Subtle secondary link using tokens
(d/a {:class (s/cx s/font-display s/weight-medium
                   "text-sm uppercase tracking-wider"
                   s/text-faint
                   "hover:text-pink-600 dark:hover:text-pink-300"
                   "transition-colors duration-200")}
     "Open in Maps ↗")
```

### When You Must Use Raw Tailwind Colors

If no token exists for your exact need, **always write the dual-mode pair**:

```clojure
;; Custom background for a tag/badge
"bg-slate-900/90 dark:bg-white/10"

;; Custom divider
"divide-slate-200/50 dark:divide-white/10"

;; Custom role label color
"text-amber-600 dark:text-amber-300/70"
```

### Quick Checklist for New Components

Before shipping a new component, verify:

- [ ] Every `text-*` class has a `dark:text-*` counterpart (or uses an `s/` token)
- [ ] Every `bg-*` class has a `dark:bg-*` counterpart (or uses an `s/` token / `grey-grad`)
- [ ] Every `border-*` class has a `dark:border-*` counterpart (or uses `s/border-subtle`)
- [ ] No bare `(d/p {}` — every text element has at least `s/body-base` or `s/body-lg`
- [ ] Page wrappers include `"grey-grad"` and `s/text-primary`
- [ ] Emphasis uses `s/em-strong` (not `s/weight-medium` alone)
- [ ] Pink is used only on interactive elements, never in prose emphasis
- [ ] Spacing uses `s/section-pt` / `s/section-pb` tokens, not raw `pb-16`

---

## File Map

| File                                    | Purpose                         |
| --------------------------------------- | ------------------------------- |
| `elements/budget/section_block.cljs`    | Section wrapper (eyebrow+title) |
| `elements/written_by.cljs`              | Author attribution              |
| `elements/expandable_text_area.cljs`    | Preview/expand toggle wrapper   |
| `elements/budget/budget_table.cljs`     | Expandable cost table           |
| `elements/budget/cost_breakdown.cljs`   | Budget prose + table            |
| `elements/budget/cash_flow.cljs`        | Timeline component              |
| `elements/budget/non_profit.cljs`       | Donation / bank details         |
| `elements/budget/about.cljs`            | About section with gallery      |
| `elements/budget/committe.cljs`         | Committee members + gallery     |
| `elements/budget/location_section.cljs` | Venue details + map             |
| `sections/budget_section.cljs`          | Budget page aggregator          |
| `sections/press_release.cljs`           | Press release section           |
