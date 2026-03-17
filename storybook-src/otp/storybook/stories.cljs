(ns otp.storybook.stories
  "Entry namespace for the :storybook shadow-cljs build.
   Requires all component namespaces that stories need, making them
   available as npm-module exports in .storybook/cljs-out/."
  (:require
   [otp.storybook.adapter :as adapter]
   [otp.ui.action-button :as action-button]
   [otp.ui.button :as button]
   [otp.ui.section-header :as section-header]))

;; Re-export wrapped components so JS story files can import them.
;; Each ^:export becomes a named export from the compiled npm module.

(def ^:export MainButton
  (adapter/wrap-component button/main-button))

(def ^:export SectionHeader
  (adapter/wrap-component section-header/section-header))

(def ^:export SectionEyebrow
  (adapter/wrap-component section-header/section-eyebrow))

(def ^:export ActionButton
  (adapter/wrap-component action-button/action-button))
