(ns amp.ui.threejs-slide
  "Self-contained Three.js slide for use inside carousels / galleries.
   Spins up a lightweight threeagent instance with orbit controls inside
   the slide container, using the simple-stack-formation renderer.

   Lifecycle
   ---------
   1. Slide is visible but inactive → shows an interstitial overlay with an
      'Interact' activation button.
   2. User clicks activate → Three.js scene mounts, parent carousel is
      frozen (via :on-lock callback), the button becomes an ✕ close icon.
   3. User clicks ✕  → scene tears down, carousel unlocks (via :on-unlock).
   4. Slide scrolls away → automatically tears down & resets to step 1."
  (:require ["three" :as THREE]
            ["three/addons/controls/OrbitControls.js" :refer [OrbitControls]]
            [amp.pages.mockup.objects :as objects]
            [amp.pages.mockup.scene :as scene]
            [amp.pages.mockup.renderers.simple-stack-formation :as ssf]
            [amp.ui.icons :refer [XMarkIcon CubeIcon]]
            [amp.ui.button :refer [main-button]]
            [amp.ui.overlays :refer [caption-overlay]]
            [amp.lib.defnc :refer [defnc]]
            [amp.styles :as s]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [threeagent.core :as th]))

;; ---------------------------------------------------------------------------
;; Helpers
;; ---------------------------------------------------------------------------

(defn- setup-mini-scene!
  "Creates a lightweight Three.js scene inside a *fresh wrapper div*
   appended to `container`. Using a wrapper avoids threeagent's internal
   context cache (keyed by DOM root) which would otherwise return a stale
   context with a disposed renderer on re-mount.
   Returns a teardown function."
  [^js container scene-data camera-opts]
  (let [;; Fresh wrapper so threeagent never sees a repeated DOM root
        wrapper (.createElement js/document "div")
        _       (do (set! (.. wrapper -style -width) "100%")
                    (set! (.. wrapper -style -height) "100%")
                    (set! (.. wrapper -style -position) "relative")
                    (.appendChild container wrapper))

        ;; Reactive atom driving threeagent
        data-atom  (th/atom scene-data)

        ;; Root fn — reads from the atom so threeagent re-renders on change
        root-fn    (fn []
                     (let [data @data-atom]
                       (if data
                         (ssf/render data {:wireframe?   false
                                           :show-ground? true
                                           :selection    nil})
                         [:object])))

        ;; Render into wrapper (never the same DOM root twice)
        ctx        (th/render root-fn wrapper
                              {:antialias    true
                               :shadow-map   {:enabled true
                                              :type    THREE/PCFSoftShadowMap}
                               :entity-types objects/custom-entity-types})

        ^js renderer (:threejs-renderer ctx)
        ^js camera   (:threejs-default-camera ctx)
        ^js canvas   (:canvas ctx)
        ^js scene    (:threejs-scene ctx)

        ;; --- Force canvas to fill the wrapper --------------------------------
        _ (do (set! (.. canvas -style -width) "100%")
              (set! (.. canvas -style -height) "100%")
              (set! (.. canvas -style -display) "block")
              (set! (.. canvas -style -position) "absolute")
              (set! (.. canvas -style -inset) "0"))

        ;; --- Sky + renderer via shared scene helpers -------------------------
        sky-state-atom (atom (scene/setup-sky! scene))
        _         (scene/setup-renderer-defaults! renderer camera @sky-state-atom)

        ;; --- Camera position (frustum already set by setup-renderer-defaults!) --
        {:keys [position target]
         :or   {position [250 250 250]
                target   [10 60 0]}} camera-opts

        _ (let [^js p (.-position camera)]
            (.set p (nth position 0) (nth position 1) (nth position 2)))

        ;; --- Fit to container ------------------------------------------------
        resize! (fn []
                  (let [w  (.-clientWidth container)
                        h  (.-clientHeight container)]
                    (when (and (pos? w) (pos? h))
                      (.setSize renderer w h false)
                      (set! (.-aspect camera) (/ w h))
                      (.updateProjectionMatrix camera))))
        _ (resize!)

        ;; --- Orbit controls --------------------------------------------------
        ^js controls (OrbitControls. camera canvas)
        _ (do (set! (.-enableDamping controls) true)
              (set! (.-dampingFactor controls) 0.05)
              (set! (.-enablePan controls) true)
              (set! (.-screenSpacePanning controls) true)
              (set! (.-autoRotate controls) true)
              (set! (.-autoRotateSpeed controls) 1.0)
              (let [^js t (.-target controls)]
                (.set t (nth target 0) (nth target 1) (nth target 2)))
              (.update controls))

        ;; --- Animation loop: controls + sun orbit + shadows ------------------
        raf-id  (atom nil)
        shadow-configured? (atom false)
        animate (fn animate []
                  (reset! raf-id (js/requestAnimationFrame animate))
                  (.update controls)
                  ;; Configure shadow camera once on first frame
                  (when-not @shadow-configured?
                    (objects/configure-shadow-camera! scene)
                    (reset! shadow-configured? true))
                  ;; Detect theme change and update sky preset live
                  (let [current-mode (if (scene/dark-mode?) :dark :light)
                        sky @sky-state-atom]
                    (when (not= current-mode (:mode sky))
                      (reset! sky-state-atom
                              (scene/update-sky! sky renderer current-mode))))
                  ;; Animate sun via shared helper
                  (scene/animate-sun! @sky-state-atom scene))
        _       (animate)

        ;; --- Resize observer -------------------------------------------------
        observer (js/ResizeObserver. (fn [_] (resize!)))
        _        (.observe observer container)]

    ;; Return teardown fn
    (fn teardown []
      (when-let [id @raf-id]
        (js/cancelAnimationFrame id))
      (.disconnect observer)
      (.dispose controls)
      ;; Stop threeagent animation loop and dispose the WebGL renderer
      (.setAnimationLoop renderer nil)
      (.dispose renderer)
      ;; Remove the wrapper so the DOM is clean for the next mount
      (when (.-parentNode wrapper)
        (.removeChild container wrapper)))))

;; ---------------------------------------------------------------------------
;; React component
;; ---------------------------------------------------------------------------

(defnc threejs-slide
  "An interactive Three.js slide for carousels / galleries.

   Props
   -----
   :scene-data   — map for simple-stack-formation renderer (:data, :lighting …)
   :camera       — {:position [x y z] :target [x y z]}
   :caption      — optional caption string
   :credit       — optional credit string
   :active?      — boolean; true when this is the currently-visible slide
   :on-lock      — fn; called when the user activates interactive mode
   :on-unlock    — fn; called when the user deactivates interactive mode
   :lazy-image-parent-styles — class string for caption-overlay styling"
  [{:keys [scene-data camera caption credit active? on-lock on-unlock
           lazy-image-parent-styles]}]
  (let [container-ref (hooks/use-ref nil)
        teardown-ref  (hooks/use-ref nil)

        ;; interactive? — user has explicitly activated the 3D scene
        ;; NOTE: default true for testing — set back to false when done
        [interactive? set-interactive!] (hooks/use-state true)

        ;; --- mount / unmount scene ------------------------------------------
        mount-scene!
        (hooks/use-callback
         [scene-data camera]
         (fn []
           (when-let [^js el @container-ref]
             ;; Tear down any leftover instance first
             (when-let [td @teardown-ref]
               (td)
               (reset! teardown-ref nil))
             (let [td (setup-mini-scene! el scene-data camera)]
               (reset! teardown-ref td)))))

        unmount-scene!
        (hooks/use-callback
         :always
         (fn []
           (when-let [td @teardown-ref]
             (td)
             (reset! teardown-ref nil))))

        ;; --- activation handlers --------------------------------------------
        activate!
        (hooks/use-callback
         [on-lock]
         (fn []
           (set-interactive! true)
           (when on-lock (on-lock))))

        deactivate!
        (hooks/use-callback
         [on-unlock]
         (fn []
           (set-interactive! false)
           (when on-unlock (on-unlock))))]

    ;; Mount scene when the user activates, unmount when they deactivate
    (hooks/use-effect
     [interactive?]
     (if interactive?
       (mount-scene!)
       (unmount-scene!))
     ;; Cleanup on unmount
     (fn [] (unmount-scene!)))

    ;; If the slide scrolls away while interactive, deactivate automatically
    (hooks/use-effect
     [active?]
     (when (and (not active?) interactive?)
       (deactivate!))
     js/undefined)

    (d/div {:class "relative w-full h-full select-none"}

           ;; Three.js canvas container (always present, populated when interactive)
           (d/div {:ref   container-ref
                   :class "w-full h-full"
                   :style {:touch-action "none"}})

           ;; --- Interstitial overlay (shown when NOT interactive) ---------------
           (when-not interactive?
             (d/div {:class    "absolute inset-0 z-20 flex flex-col
                                items-center justify-center overflow-hidden
                                bg-black/50 cursor-pointer"
                     :on-click activate!}

                    ;; Centered activation panel — generous padding to clear nav arrows
                    (d/div {:class "flex flex-col items-center gap-3 sm:gap-4 px-16 sm:px-20"}

                           ;; Cube icon — prominent on all sizes
                           (d/div {:class "w-12 h-12 sm:w-16 sm:h-16
                                           border border-pink-300/50
                                           flex items-center justify-center"}
                                  ($ CubeIcon {:class "w-6 h-6 sm:w-8 sm:h-8 text-pink-300"}))

                           ;; "Interactive 3D" label
                           (d/p {:class (s/cx s/eyebrow "text-pink-300")}
                                "Interactive 3D")

                           ;; "Tap to explore" CTA — large & visible
                           (d/p {:class (s/cx s/font-display s/weight-medium s/uppercase-
                                              "tracking-wider text-base sm:text-lg"
                                              "text-slate-300 mt-1")}
                                "Tap to explore")

                           ;; Caption + credit — hidden on mobile to avoid clipping
                           (when (or caption credit)
                             (d/div {:class "mt-1 hidden sm:flex flex-col items-center gap-0.5"}
                                    (when caption
                                      (d/p {:class (s/cx s/label "text-slate-300 text-center")}
                                           caption))
                                    (when credit
                                      (d/p {:class (s/cx s/label "text-slate-500 text-center")}
                                           credit)))))))

           ;; --- Close button (shown when interactive) --------------------------
           (when interactive?
             (d/div
              ;; Close button — top-right, site-wide main-button in slate
              (d/div {:class "absolute top-3 right-3 z-30"}
                     ($ main-button
                        {:on-click            deactivate!
                         :size                :sm
                         :color               :slate
                         :additional-classes  "cursor-pointer"}
                        ($ XMarkIcon {:class "w-3.5 h-3.5"})
                        (d/span "Exit Interaction")))

              ;; Caption / credit overlays — same style as image slides
              (when caption
                ($ caption-overlay {:position      :tl
                                    :rotation      90
                                    :parent-styles lazy-image-parent-styles}
                   (d/span {:class "italic text-xs"} caption)))
              (when credit
                ($ caption-overlay {:position      :bl
                                    :parent-styles lazy-image-parent-styles}
                   (d/span {:class "italic text-xs"} credit))))))))
