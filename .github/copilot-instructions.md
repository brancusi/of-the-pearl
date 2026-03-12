# Copilot Agent Instructions — Armenian Pavilion 2026 Website

## Project Summary

Website for the Armenian Pavilion at the 2026 Venice Biennale. Single-page app built with **ClojureScript** (shadow-cljs) using the **Helix** React wrapper, styled with **Tailwind CSS 3**, deployed to **Netlify**. Features include a landing page with GSAP scroll animations, a 3D mockup viewer (Three.js via threeagent), a budget view, and a CMS integration (Sanity). No automated tests or CI pipelines exist.

## Runtimes & Versions

| Tool | Version |
|------|---------|
| Node.js | v24+ (LTS or current) |
| Java (OpenJDK) | 23+ |
| shadow-cljs | 3.3.5 (npm) |
| ClojureScript | 1.12.134 |
| Tailwind CSS | 3.2.4 |
| React | 19.2.0 |

## Build Commands

**Always run `npm install` before any build command if `node_modules/` is missing.**

### Development

```bash
npm install          # Install Node dependencies (required first)
npm run dev          # Starts shadow-cljs watch + PostCSS watch + asset watchers in parallel
```
Dev server: `http://localhost:4200/`. shadow-cljs nREPL on port 8777.

The `dev` script runs these in parallel via `run-p`: shadow-cljs watch `:app`, PostCSS watcher, and file copy watchers for data/fonts/images/misc.

### Production Build (static assets only, no ClojureScript)

```bash
npm run build        # Copies data/fonts/images to public/ and builds PostCSS
```

### Release Build (full production bundle)

```bash
npm run release      # Full pipeline: clean → shadow-cljs release → PostCSS → copy assets → update HTML hashes
```
Takes ~15–20 seconds. Outputs to `release/` directory. The shadow-cljs `:release` build uses `:advanced` optimizations. Expect **1 warning** (medley.core/abs redef) — this is benign and expected.

### Validating a Change

There are no automated tests. To validate:
1. Run `npm run release` — it must complete without errors (the single medley redef warning is expected).
2. Check that `release/js/main.*.js` was generated.
3. For CSS-only changes, `npm run build` is sufficient.

## Project Layout

```
src/amp/                  # All application source (ClojureScript)
  core.cljs               # App entry point — init! function, React root mount
  config.cljs             # goog-define constants (sanity-endpoint, git-hash)
  styles.cljs             # Centralized Tailwind design tokens (cx helper, typography, colors)
  dev.cljs                # Dev-only preloads (react-refresh, overflow checks)
  views/                  # Top-level route views (landing, budget, mockup, etc.)
  components/
    sections/             # Page sections (hero, artist, curators, team, etc.)
    elements/             # Reusable elements (lazy-image, video, budget tables)
    threejs/              # 3D mockup viewer (threeagent scene, geometry, objects)
    navs/                 # Navigation components
    ui/                   # Buttons, toggles, overlays
    fragments/            # Small reusable fragments
  hooks/                  # Custom React hooks (scroll, resize, intersection, etc.)
  providers/              # React context providers (main-provider.cljs)
  reducers/               # useReducer-based state (multimethod dispatch via api.cljs)
  services/               # Router (reitit) and Firebase realtime DB
  lib/                    # defnc macro (wraps helix.core/defnc with fast-refresh)
  utils/                  # Helpers: lazy-loading macro, GSAP utils, math, axios, debug
  api/                    # Sanity CMS queries (cms.cljs)

dev/                      # Dev-only namespaces (preloaded via shadow-cljs :preloads)
  user.cljs               # Entry: starts donut/system
  system.cljs             # Dev system config (logging)

build/                    # Build helpers
  git_hash.clj            # shadow-cljs build hook — injects git hash into closure-defines
  update-html.js          # Post-release: rewrites index.html with hashed JS filename

resources/                # Static assets (copied to public/ or release/ by npm scripts)
  css/tailwind.css        # Tailwind entry point with @font-face and custom CSS
  data/                   # GeoJSON and EDN data files
  fonts/fira/             # FiraCode variable font (woff2) — REMOVED Feb 2026
  images/                 # Site images (graphics, icons, portraits, QR codes)

public/                   # Dev output directory (served at localhost:4200)
release/                  # Production output directory (deployed to Netlify)
```

### Key Configuration Files

| File | Purpose |
|------|---------|
| `shadow-cljs.edn` | ClojureScript build config — defines `:app` (dev) and `:release` builds, module splitting, build hooks |
| `deps.edn` | Clojure/ClojureScript dependencies (Helix, Reagent, threeagent, reitit, donut/system) |
| `package.json` | Node dependencies and all npm scripts |
| `tailwind.config.js` | Tailwind: dark mode via `"class"`, custom font families (display, mono), `@tailwindcss/forms` plugin |
| `postcss.config.js` | PostCSS plugins: tailwindcss, autoprefixer, cssnano (production only) |
| `.clj-kondo/config.edn` | Linter config with custom hooks for `lazy-component` and `for-indexed` macros, lint-as rules for helix/defnc |

## Architecture Patterns

### Component Definition

Always use the project's `defnc` macro (not `helix.core/defnc` directly):
```clojure
(:require [amp.lib.defnc :refer [defnc]])

(defnc my-component [{:keys [title]}]
  (d/div title))
```
This wraps helix's `defnc` with `:fast-refresh true` by default.

### Styling

Use design tokens from `amp.styles` (`s/` alias). Combine classes with `s/cx`:
```clojure
(:require [amp.styles :as s])
(d/h2 {:class (s/cx s/heading-display s/text-primary)} title)
```
The site is **dark-first** (`<html class="dark">`). See `.github/skills/styles/SKILL.md` for the full design system.

### State Management

- Global state: `useReducer` via `amp.providers.main-provider/use-main-state` → returns `[state dispatch!]`
- Reducer methods: multimethods in `amp.reducers.api/main-reducer`, implementations in `amp.reducers.main-methods/`
- New reducer actions: add a `defmethod` in `main_methods/core.cljs` (or a new file, but require it from `requires.cljs`)

### Routing

Reitit frontend router in `amp.services.router`. Routes defined inline. Views are lazy-loaded via `amp.utils.lazy-loading/lazy-component` macro (wraps `shadow.lazy`).

### Module Splitting

shadow-cljs splits code into modules: `main`, `landing-view`, `budget-view`, `mockup-view`, `video-background`. The module-loader handles async loading. When adding a new top-level view, add an entry to both the `:app` and `:release` builds in `shadow-cljs.edn`.

### NPM Interop

JS libraries are consumed directly via shadow-cljs npm integration:
```clojure
(:require ["gsap" :refer [gsap]]
          ["react" :as react]
          ["three" :as three])
```

### Three.js / 3D Mockups

The 3D mockup viewer uses `threeagent` (Reagent-style reactive scene graph). Source in `src/amp/components/threejs/`. See `.github/skills/threejs-dsl/SKILL.md` for the full DSL reference.

## Common Pitfalls

- **Do not use `helix.core/defnc` directly** — always use `amp.lib.defnc/defnc` for fast-refresh support.
- **The medley redef warning during release builds is expected** — do not try to fix it.
- **`npm run dev` requires a running JVM** — shadow-cljs starts its own, or connects to an existing nREPL server.
- **Tailwind content scanning in production** scans `release/js/main.*.js` — run `shadow:release` before `postcss:release` (the `release` npm script handles ordering).
- **No test suite exists** — validate changes by ensuring `npm run release` completes successfully.
- **File naming**: ClojureScript uses underscores in filenames but hyphens in namespace names (e.g., `landing_view.cljs` → `amp.views.landing-view`).

## Trust These Instructions

Use these instructions as the primary reference. Only search the codebase if the information here is incomplete or found to be incorrect during execution.
