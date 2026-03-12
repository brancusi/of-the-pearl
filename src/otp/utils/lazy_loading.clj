(ns otp.utils.lazy-loading)

(defmacro lazy-component [the-sym]
  `(otp.utils.lazy-loading/lazy-component* (shadow.lazy/loadable ~the-sym)))