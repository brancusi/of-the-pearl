(ns amp.pages.mockup.page
  (:require
   [amp.pages.mockup.copy-link :refer [copy-link-button]]
   [amp.pages.mockup.footer :refer [mockup-footer]]
   [amp.pages.mockup.hud :refer [mockup-hud]]
   [amp.pages.mockup.objects :as objects]
   [amp.pages.mockup.parts-panel :refer [parts-panel]]
   [amp.pages.mockup.scene :as scene]
   [amp.pages.mockup.selection-info :refer [selection-info-bar]]
   [amp.pages.mockup.renderers.manual-formation :as mf]
   [amp.pages.mockup.renderers.simple-stack-formation :as ssf]
   [amp.hooks.use-atom-state :refer [use-atom-state]]
   [amp.lib.defnc :refer [defnc]]
   [amp.state.provider :refer [use-main-state]]
   [amp.services.firebase :refer [listen-to-edn]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [threeagent.core :as th]))

;; ============ HOT-RELOADABLE STATE ============
;; These defonce atoms persist across hot reloads

(defonce controls-atom (atom nil))
(defonce context-atom (atom nil))
(defonce resize-fn-atom (atom nil))
(defonce container-atom (atom nil))
(defonce canvas-listeners-atom (atom nil))
(defonce wireframe-atom (th/atom false))
(defonce ground-plane-atom (th/atom true))
(defonce parts-panel-atom (atom false))
(defonce mockup-data-atom (th/atom nil))
(defonce camera-state-atom (atom {:position nil :target nil}))
(defonce selected-block-atom (th/atom nil))

;; Convenience map for passing atoms to scene functions
(def scene-atoms
  {:controls controls-atom
   :context context-atom
   :resize-fn resize-fn-atom
   :canvas-listeners canvas-listeners-atom
   :selected-block selected-block-atom
   :camera-state camera-state-atom})

;; Dev/REPL override — when non-nil, root returns this directly
(defonce scene-override-atom (th/atom nil))

;; Call this function to render arbitrary elements from the REPL
;; Example: (render-elements [:object {:position [0 0 -4]} [:box {:dims [1 1 1] :material {:color "green"}}]])
(defn render-elements [elements]
  (reset! scene-override-atom elements))

;; ============ RENDERER REGISTRY ============
;; Maps renderer keywords to hydration functions.
;; Each fn takes (mockup-data opts) where mockup-data is the full Firebase map
;; and opts is {:wireframe? :show-ground? :selection}.
;; Each renderer extracts the keys it needs from mockup-data.
;; New formation types register here.

(def renderer-registry
  (atom {:simple-stack-formation ssf/render
         :manual-formation       mf/render}))

(defn register-renderer!
  "Register a hydration function under the given keyword.
   The function should have the signature (fn [data opts] ...) and
   return a threeagent scene tree."
  [k renderer-fn]
  (swap! renderer-registry assoc k renderer-fn))

;; Root component render function — fully derived from reactive atoms.
;; Reading wireframe-atom, ground-plane-atom, and mockup-data-atom here
;; means threeagent automatically re-renders when any of them change.
(defn root []
  (if-let [override @scene-override-atom]
    override
    (let [data @mockup-data-atom
          wireframe? @wireframe-atom
          show-ground? @ground-plane-atom
          selection @selected-block-atom]
      (if data
        (let [renderer-key (keyword (or (:renderer data) :simple-stack-formation))
              renderer-fn  (get @renderer-registry renderer-key)]
          (if renderer-fn
            (renderer-fn data
                         {:wireframe? wireframe?
                          :show-ground? show-ground?
                          :selection selection})
            (do (js/console.warn "Unknown renderer:" (pr-str renderer-key))
                [:object])))
        [:object]))))

(defn toggle!
  "Toggle a boolean atom's value."
  [a]
  (swap! a not))

(defn setup-scene! [^js container]
  (scene/setup-scene! container
                      {:root-fn root
                       :entity-types objects/custom-entity-types}
                      scene-atoms))

(defn cleanup-scene! []
  (scene/cleanup-scene! scene-atoms))

(defn set-camera-position!
  ([[x y z]] (scene/set-camera-position! [x y z] scene-atoms))
  ([[x y z] opts] (scene/set-camera-position! [x y z] opts scene-atoms)))

(defn display-firebase-data
  [{:keys [camera] :as mockup-data}]
  (reset! scene-override-atom nil) ;; Clear any REPL override
  (reset! mockup-data-atom mockup-data)
  (set-camera-position! (:position camera) {:target (:target camera)}))

;; No watchers needed — root derives the scene directly from the reactive
;; atoms (wireframe-atom, ground-plane-atom, mockup-data-atom), so threeagent
;; automatically re-renders when any of them change.

(defnc mockup-view
  [_]

  (let [[state _] (use-main-state)
        piece-id (get-in state [:current-route :query-params :piece])
        container-ref (hooks/use-ref nil)
        wireframe? (use-atom-state wireframe-atom)
        ground-plane? (use-atom-state ground-plane-atom)
        panel-open? (use-atom-state parts-panel-atom)
        [hud-open? set-hud-open!] (hooks/use-state true)
        mockup-data (use-atom-state mockup-data-atom)
        selected-block (use-atom-state selected-block-atom)]

    (hooks/use-layout-effect
     []
     (when-let [^js container @container-ref]
       ;; Store container reference for hot reload
       (reset! container-atom container)
       ;; Setup scene if not already done
       (when-not @context-atom
         (setup-scene! container)))
     ;; Don't cleanup on unmount during dev - let hot reload preserve state
     js/undefined)

    ;; Setup firebase listener to the current piece id.
    (hooks/use-effect
     [piece-id]
     (listen-to-edn piece-id display-firebase-data))

    (d/div
     {:class "relative w-screen h-screen"}
     (d/canvas {:class "fixed inset-0 z-10"
                :style {:touch-action "none"}
                :ref container-ref})
     ;; HUD
     ($ mockup-hud {:title (or (:name mockup-data) "Untitled")
                    :mockup-data mockup-data
                    :hud-open? hud-open?
                    :wireframe? wireframe?
                    :ground-plane? ground-plane?
                    :on-toggle-hud #(set-hud-open! (not hud-open?))
                    :on-toggle-wireframe #(toggle! wireframe-atom)
                    :on-toggle-ground #(toggle! ground-plane-atom)
                    :on-toggle-parts-panel #(toggle! parts-panel-atom)})
     ;; Copy link button
     ($ copy-link-button {:piece-id piece-id})
     ;; Parts panel
     ($ parts-panel {:open? panel-open?
                     :mockup-data mockup-data
                     :on-close #(toggle! parts-panel-atom)})
     ;; Selected block info bar
     ($ selection-info-bar {:selection selected-block})
     ;; Footer
     ($ mockup-footer))))

;; Shadow-cljs hot reload hooks
(defn ^:dev/before-load stop []
  (js/console.log "Stopping for hot reload...")
  ;; Tear down scene so it gets rebuilt with updated entity types & click handler
  (cleanup-scene!))

(defn ^:dev/after-load start []
  (js/console.log "Hot reload — reinitializing scene...")
  ;; Reset renderer registry so updated render fns are picked up
  (reset! renderer-registry {:simple-stack-formation ssf/render
                             :manual-formation       mf/render})
  (when-let [^js container @container-atom]
    (setup-scene! container)))
