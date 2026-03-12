(ns amp.utils.lazy-loading)

(defmacro lazy-component [the-sym]
  `(amp.utils.lazy-loading/lazy-component* (shadow.lazy/loadable ~the-sym)))