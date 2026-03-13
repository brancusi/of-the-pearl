# Changelog

## 2026-03-13 — Shopify Storefront API Client

**Rationale:** The site needs to query product data from the Shopify storefront for merchandise/donation pages. The `@shopify/storefront-api-client` npm package was already installed but had no integration code.

**Summary:** Added a thin Shopify Storefront API service layer following the existing Firebase service pattern — `goog-define` config constants, `defonce` client initialization, and a promise-based query interface.

### Changes

- Added `shopify-store-domain` and `shopify-storefront-token` `goog-define` constants to `src/otp/config.cljs`.
- Created `src/otp/services/shopify.cljs` with `query` (generic GraphQL) and `product-by-handle` (convenience) functions.
- Added `closure-defines` for Shopify config to the `:app` dev build in `shadow-cljs.edn`.

### Migration Notes

- Replace the placeholder values in `shadow-cljs.edn` closure-defines (`YOUR_STORE.myshopify.com` and `YOUR_STOREFRONT_ACCESS_TOKEN`) with real Shopify credentials before testing queries.

<!-- Append new entries above this line -->
