(ns amp.hooks.use-toggle-animations
  (:require [applied-science.js-interop :as j]
            [helix.hooks :as hooks]
            ["gsap" :refer [gsap]]))

(defn use-toggle-animations
  [{:keys [target
           is-on?
           on-from
           on-to
           off-from
           off-to]
    :or {on-from {}
         off-from {}}}]
  (let [[current-transition set-current-transition!] (hooks/use-state nil)
        clear-tween! (hooks/use-callback
                      :once
                      (fn [target]
                        (.killTweensOf gsap @target)))

        clear-transition! (hooks/use-callback
                           :once
                           (fn []
                             (set-current-transition! nil)))

        on-handler (hooks/use-callback
                    [on-to on-from current-transition]
                    (fn [target]
                      (when-not (= current-transition :on)
                        (set-current-transition! :on)
                        (clear-tween! target)


                        (.fromTo gsap @target
                                 (clj->js on-from)
                                 (clj->js (assoc on-to :onComplete
                                                 clear-transition!))))))

        off-handler (hooks/use-callback
                     [off-from off-to current-transition]
                     (fn [target]
                       (when-not (= current-transition :off)
                         (set-current-transition! :off)
                         (clear-tween! target)
                         (.fromTo gsap @target
                                  (clj->js off-from)
                                  (clj->js (assoc off-to :onComplete
                                                  clear-transition!))))))]

    (hooks/use-layout-effect
     :once
     (when-not is-on?
       (.set gsap @target (clj->js off-to))))

    #_(when (= is-on? false)
        (off-handler target (assoc off :duration 0)))

    (hooks/use-layout-effect
     [target is-on?]
     (if is-on?
       (on-handler target)
       (off-handler target)))))

#_(defn use-toggle-animations

    [ref & {:keys [on off initial is-on?]
            :or {initial {}}}]
    (let [[is-on-state? set-is-on-state!] (hooks/use-state is-on?)
          on-handler (hooks/use-callback
                      [ref]
                      (fn []
                        (set-is-on-state! true)
                        (.to gsap @ref
                             (clj->js on))))
          off-handler (hooks/use-callback
                       [ref]
                       (fn []
                         (set-last-state! false)
                         (.to gsap @ref
                              (clj->js off))))]

      (hooks/use-effect
       [ref]
       (if is-on?
         (.to gsap @ref
              (clj->js (assoc on
                              :duration 0)))
         (.to gsap @ref
              (clj->js (assoc off
                              :duration 0)))))

      (hooks/use-effect
       [is-on? last-state]
       (if (= is-on? last-state)
         :noop
         (if is-on?
           (on-handler)
           (off-handler))))))