(ns otp.storybook.adapter
  "Thin adapter that bridges Helix components for Storybook.

   Helix's defnc produces plain React function components and accesses
   props via unchecked-get with string keys (matching keyword names).
   Storybook passes a JS object with string keys, so the props are
   already in the right shape — we just need to forward them via
   React.createElement."
  (:require
   ["react" :as react]))

(defn wrap-component
  "Wraps a Helix component so Storybook can render it.
   Passes the JS props object through directly — Helix's defnc already
   knows how to destructure string-keyed JS objects."
  [component]
  (fn [js-props]
    (react/createElement component js-props)))
