# Changelog

## 2026-03-13 — Storybook 10 Upgrade & ESM Fix

**Rationale:** Storybook 8's `:npm-module` (CommonJS) output was incompatible with Vite's ESM-only import system, causing "does not provide an export" errors. After switching to `:esm`, Vite's per-file cache-busting timestamps caused Google Closure's `goog.module()` to fire twice, producing "Namespace already declared" errors.
**Summary:** Upgraded to Storybook 10.2.19, switched shadow-cljs `:storybook` build to `:esm` target, and added a custom Vite plugin that bundles CLJS output into a single ESM module via esbuild to prevent double-loading.

### Changes

- Upgraded Storybook packages from v8 to v10.2.19 (`storybook`, `@storybook/react`, `@storybook/react-vite`).
- Removed v8-only packages now merged into core (`@storybook/addon-essentials`, `@storybook/blocks`, `@storybook/test`).
- Changed `:storybook` build target from `:npm-module` to `:esm` with explicit `:exports` map in `shadow-cljs.edn`.
- Renamed `.storybook/main.js` → `.storybook/main.mjs` and converted to ESM (`import` instead of `require`).
- Updated story imports to use named ESM imports (`import { MainButton } from "cljs-out/stories.js"`).
- Removed `@storybook/addon-essentials` from addons config (merged into core in v10).
- Added `vite-plugin-cljs-bundle` in `.storybook/main.mjs` — resolves `cljs-out/stories.js` imports to a virtual module that esbuild bundles into a single ESM chunk, with file-watcher integration for HMR.

---

## 2026-03-13 — Storybook Integration for Component Development

**Rationale:** No isolated component development environment existed. Viewing a component required running the full app and navigating to the page containing it.
**Summary:** Added Storybook 8 with a React/Vite builder, a thin Helix adapter, and example stories for `main-button` and `section-header`. Uses direct Storybook integration (no `storybook-cljs` dependency) since Helix components are already React function components.

### Changes

- Installed Storybook 8 npm packages (`@storybook/react`, `@storybook/react-vite`, `@storybook/addon-essentials`, `@storybook/blocks`, `@storybook/test`, `storybook`, `vite`).
- Created `.storybook/main.js` — Storybook config pointing to stories in `dev-src/stories/` with a Vite alias for CLJS output.
- Created `.storybook/preview.jsx` — dark-mode decorator and Tailwind CSS import.
- Added `:storybook` build to `shadow-cljs.edn` — `:npm-module` target outputting to `.storybook/cljs-out/`.
- Added `"dev-src"` to `:dev` alias `:extra-paths` in `deps.edn`.
- Created `dev-src/otp/storybook/adapter.cljs` — wraps Helix components for Storybook by converting JS props to Clojure maps.
- Created `dev-src/otp/storybook/stories.cljs` — entry namespace exporting wrapped components (`MainButton`, `SectionHeader`, `SectionEyebrow`).
- Created `dev-src/stories/Button.stories.js` and `dev-src/stories/SectionHeader.stories.jsx` — CSF stories with controls.
- Added `shadow:storybook`, `storybook:dev`, `storybook:build` npm scripts to `package.json`.
- Updated `tailwind.config.js` to scan `dev-src/**/*.cljs` in dev mode.
- Added `.storybook/cljs-out/` and `storybook-static/` to `.gitignore`.

### Migration Notes

- Run `npm install` to install new Storybook dev dependencies.
- To use Storybook: run `npm run shadow:storybook` in one terminal, then `npm run storybook:dev` in another. Storybook UI at `http://localhost:6006`.
- To add a new component to Storybook: (1) export a wrapped version from `dev-src/otp/storybook/stories.cljs`, (2) create a `.stories.js` file in `dev-src/stories/` that imports it.

<!-- Append new entries above this line -->

**Rationale:** The site needs to query product data from the Shopify storefront for merchandise/donation pages. The `@shopify/storefront-api-client` npm package was already installed but had no integration code.

**Summary:** Added a thin Shopify Storefront API service layer following the existing Firebase service pattern — `goog-define` config constants, `defonce` client initialization, and a promise-based query interface.

### Changes

- Added `shopify-store-domain` and `shopify-storefront-token` `goog-define` constants to `src/otp/config.cljs`.
- Created `src/otp/services/shopify.cljs` with `query` (generic GraphQL) and `product-by-handle` (convenience) functions.
- Added `closure-defines` for Shopify config to the `:app` dev build in `shadow-cljs.edn`.

### Migration Notes

- Replace the placeholder values in `shadow-cljs.edn` closure-defines (`YOUR_STORE.myshopify.com` and `YOUR_STOREFRONT_ACCESS_TOKEN`) with real Shopify credentials before testing queries.

<!-- Append new entries above this line -->
