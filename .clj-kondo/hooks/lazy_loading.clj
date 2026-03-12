(ns hooks.lazy-loading
  (:require [clj-kondo.hooks-api :as api]))

(defn lazy-component [{:keys [node]}]
  ;; `lazy-component` expects a namespaced symbol like `some.ns/component`.
  ;; That symbol is *data* for `shadow.lazy/loadable`, but clj-kondo will try to
  ;; resolve it and can emit unresolved namespace/var warnings.
  ;;
  ;; For linting purposes we can safely replace the whole expression with `nil`.
  ;; This avoids false positives while keeping real compile-time checking in
  ;; `shadow-cljs` (which will still fail if the module/namespace is wrong).
  {:node (with-meta (api/token-node 'nil) (meta node))})
