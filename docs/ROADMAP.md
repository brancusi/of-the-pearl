# Roadmap

## 2026-03-14 — Storybook Story Scaffold CLI

**Goal:** Reduce repetitive Storybook wiring by generating the standard CLJS/Storybook integration files from one command.

**Current state:**

- Adding a new story requires manually updating three places: `storybook-src/otp/storybook/stories.cljs`, `shadow-cljs.edn` exports, and a new `storybook-src/stories/*.stories.js` file.
- The process is mechanical and easy to drift (missed export, naming mismatch, or wrong story filename).

**Target state:**

- A single CLI command scaffolds Storybook integration for a Helix component.
- The command appends the wrapped component export in `stories.cljs`, updates the `:storybook` `:exports` map in `shadow-cljs.edn`, and creates a starter CSF story file.
- The tool supports dry-run mode for safe review.

### Tasks

- [x] **Step 1 — Create Storybook scaffold script** (2026-03-14)
      Add a Node CLI that accepts a component var path and generates the required Storybook wiring.
- [x] **Step 2 — Add npm script for the CLI** (2026-03-14)
      Expose the tool as `npm run storybook:create`.
- [x] **Step 3 — Validate the CLI runs** (2026-03-14)
      Run the script in `--help`/`--dry-run` mode to confirm argument parsing and non-destructive flow.

## 2026-03-13 — Storybook Integration for Component Development

**Goal:** Add Storybook as a component development and visual review tool so UI elements can be built, tested, and documented in isolation — without running the full app.

**Current state:**

- No component dev environment exists. To see a component, you must run the full app and navigate to the page containing it.
- The project uses Helix (`defnc` macro) which produces standard React function components. This makes Storybook integration straightforward since no React wrapper translation is needed.
- UI components live in `src/otp/ui/` and page-level sections in `src/otp/pages/`. Styling uses centralized Tailwind tokens from `otp.styles`.

**Target state:**

- Storybook 9 installed and configured with a React/Vite builder.
- A `:storybook` shadow-cljs build (`:npm-module` target) compiles selected components to JS modules consumable by Storybook.
- A thin Helix adapter (`otp.storybook.adapter`) bridges Helix components for Storybook's CSF (Component Story Format).
- Example stories exist for `main-button` and `section-header` demonstrating the pattern.
- `npx shadow-cljs watch storybook` + `npx storybook dev` starts the component dev environment.
- Tailwind config scans Storybook output for class names.

**Key decisions:**

- **Direct Storybook integration (no storybook-cljs dependency)** — Helix components are already React function components; the only bridge needed is `js->clj` on incoming props. The `storybook-cljs` library (factorhouse) adds complexity (tagged-JSON, build hooks shelling out to npx, generated JS files) that's unnecessary for Helix. It's also very young (9 stars, 1 contributor). We maintain a ~10-line adapter instead.
- **`:npm-module` target** — shadow-cljs compiles CLJS namespaces to CommonJS/ESM modules that Storybook can import directly. This is the standard approach for consuming CLJS from JS tools.
- **Stories in `storybook-src/stories/`** — keeps dev-only story code separate from production source, excluded from production builds.
- **Standard CSF stories** — story files use Storybook's native Component Story Format, giving full addon/tooling compatibility.

### Tasks

- [x] **Step 1 — Initialize Storybook and install npm dependencies** (2026-03-13)
      Run `npx storybook@latest init --type react` and install required packages.
- [x] **Step 2 — Add :storybook build to shadow-cljs.edn** (2026-03-13)
      Configure `:npm-module` target, entries, and output directory.
- [x] **Step 3 — Write Helix adapter** (2026-03-13)
      Create `storybook-src/otp/storybook/adapter.cljs` with component wrapping utility.
- [x] **Step 4 — Create example stories** (2026-03-13)
      Add CSF stories for `main-button` and `section-header`.
- [x] **Step 5 — Configure Tailwind and Storybook preview** (2026-03-13)
      Update Tailwind content paths and Storybook preview to load CSS and dark mode.
- [x] **Step 6 — Add npm scripts** (2026-03-13)
      Add `storybook:dev` and `storybook:build` convenience scripts.
- [x] **Step 7 — Validate end-to-end** (2026-03-13)
      Compile storybook build and verify no errors.

<!-- Add new initiatives above this line -->

## 2026-03-13 — Shopify Storefront API Integration

**Goal:** Add a Shopify Storefront API client so the site can query and display product data (and eventually support checkout) from the Shopify storefront.

**Current state:**

- `@shopify/storefront-api-client` is installed (`^1.0.10`) but unused.
- No Shopify-related code exists in the project.
- External service integrations follow the `defonce`-initialized singleton pattern (see `otp.services.firebase`).
- Configuration constants use `goog-define` in `otp.config` with values injected at compile time via `shadow-cljs.edn` closure-defines or build hooks.

**Target state:**

- A `otp.services.shopify` namespace that initializes a Storefront API client once and exposes a clean, promise-based query interface.
- Shopify store domain and Storefront Access Token configured via `goog-define` constants in `otp.config`, with dev defaults and release-time overrides in `shadow-cljs.edn`.
- A test query (e.g. fetch a product by handle) that validates the integration works end-to-end.
- The module loads in the `:main` bundle so it's available to all page views.

**Key decisions:**

- **Use `@shopify/storefront-api-client` directly** — it provides a typed GraphQL client purpose-built for the Storefront API. No need for a generic GraphQL lib or raw axios calls.
- **`goog-define` for credentials** — consistent with the existing `git-hash` pattern. The Storefront Access Token is a _public_ token (it's embedded in every storefront's HTML), so it's safe to include in client-side code. No secrets are exposed.
- **Service namespace in `otp.services.shopify`** — follows the established pattern alongside `firebase.cljs` and `router.cljs`.
- **Promise-based API, not callback-based** — the Shopify client returns Promises natively. We'll return Promises from our wrapper and let consumers use `.then`/`.catch` or async hooks as needed.
- **No new state/reducer actions yet** — product data will be fetched directly in components via hooks. Reducer actions can be added later when caching or global cart state is needed.

### Implementation Strategy

The integration is three layers deep: **config → service → usage**.

**Layer 1 — Config.** Add two `goog-define` constants to `otp.config`: `shopify-store-domain` and `shopify-storefront-token`. These get default dev values and can be overridden in `shadow-cljs.edn` closure-defines for release builds. This keeps credentials out of source while following the existing `git-hash` pattern.

**Layer 2 — Service.** Create `otp.services.shopify` that:

1. Imports `createStorefrontApiClient` from `@shopify/storefront-api-client`.
2. Initializes the client via `defonce` using the config constants.
3. Exposes a `query` function that takes a GraphQL query string (and optional variables map) and returns a Promise resolving to keywordized Clojure data.
4. Exposes a `product-by-handle` convenience function as the first concrete query.

**Layer 3 — Test usage.** Create a `use-shopify-product` hook (or a temporary REPL test) that calls `product-by-handle` and logs the result. This validates the full pipeline: config → client init → GraphQL request → response parsing.

The ordering matters: config must exist before the service can reference it, and the service must exist before any component can use it.

### Tasks

- [x] **Step 1 — Add Shopify config constants** (2026-03-13)
      Add `shopify-store-domain` and `shopify-storefront-token` via `goog-define` in `otp.config`.

- [x] **Step 2 — Create `otp.services.shopify` namespace** (2026-03-13)
      Initialize the Storefront API client, expose a generic `query` fn and a `product-by-handle` convenience fn.

- [x] **Step 3 — Add dev closure-defines** (2026-03-13)
      Add default Shopify config to `:app` build's `:closure-defines` in `shadow-cljs.edn` so the client initializes in dev.

- [x] **Step 4 — Compile and release validation** (2026-03-13)
      Both dev compile and `npm run release` pass cleanly with no new warnings.

- [ ] **Step 5 — Validate release build** (2026-03-13)
      Run `npm run release` to confirm the new code compiles cleanly under `:advanced` optimizations.
