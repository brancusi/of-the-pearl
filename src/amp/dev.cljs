(ns amp.dev
  "A place to add preloads for developer tools!"
  (:require
   [helix.experimental.refresh :as r]
   [amp.utils.window :as w]))

;; inject-hook! needs to run on application start.
;; For ease, we run it at the top level.
;; This function adds the react-refresh runtime to the page
(r/inject-hook!)

;; ── First-paint overflow detection ──────────────────────────────────
;; Fires the overflow checker at several intervals after load / hot-reload
;; to catch transient horizontal scroll caused by components before they
;; fully initialise (e.g. embla carousel flex container).
(defn check-first-paint-overflow!
  "Run overflow checks at 0, 100, 500, 1000 and 3000 ms to catch
   first-paint overflow."
  []
  (js/console.log "📏 Running first-paint overflow checks…")
  (w/check-horizontal-overflow!)
  (js/setTimeout #(w/check-horizontal-overflow!) 100)
  (js/setTimeout #(w/check-horizontal-overflow!) 500)
  (js/setTimeout #(w/check-horizontal-overflow!) 1000)
  (js/setTimeout #(w/check-horizontal-overflow!) 3000))

;; Run on initial load
(check-first-paint-overflow!)

;; shadow-cljs allows us to annotate a function name with `:dev/after-load`
;; to signal that it should be run after any code reload. We call the `refresh!`
;; function, which will tell react to refresh any components which have a
;; signature created by turning on the `:fast-refresh` feature flag.
(defn ^:dev/after-load refresh []
  (r/refresh!)
  (check-first-paint-overflow!))