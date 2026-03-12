(ns amp.ui.video-background
  (:require
   ["@mux/mux-player-react$default" :as MuxPlayer]
   [amp.ui.icons :refer [SpeakerWaveIcon SpeakerXMarkIcon]]

   [amp.lib.defnc :refer [defnc]]
   [applied-science.js-interop :as j]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defnc video-background
  [{:keys [should-play? allow-audio? playback-id]
    :or  {allow-audio? true}}]

  (let [video-ref (hooks/use-ref "video-ref")
        [audio-muted? set-audio-muted!] (hooks/use-state true)
        #_#_[is-playback-ready? set-is-playback-ready!] (hooks/use-state false)

        toggle-audio (hooks/use-callback
                      [video-ref audio-muted?]
                      (fn
                        [_]
                        (set-audio-muted! (not audio-muted?))))

        #_#_canplay-handler (fn []
                              (js/window.alert "Can Play!")
                              (set-is-playback-ready! true))]

    #_(hooks/use-effect
       [video-ref]
       (when @video-ref
         (let [ready-state (j/get @video-ref :readyState)]

           (.addEventListener @video-ref "error" (fn [e]
                                                   (tap> {:error e})
                                                   (js/window.alert "Video Playback Error:" e)))

           ;;  Playback is ready
           (if (= ready-state 4)
             (set-is-playback-ready! true)
             (.addEventListener @video-ref "canplay" canplay-handler)))

         (fn []
           (.removeEventListener @video-ref "canplay" canplay-handler))))

    (hooks/use-effect
     [should-play?]
     (if should-play?
       (.play @video-ref)
       (when (not (j/get @video-ref :paused))
         (.pause @video-ref))))

    #_(hooks/use-effect
       [video-ref]
       (.play @video-ref))


    (d/div {:class "w-full h-full relative overflow-hidden background-video"}
           #_(d/div {:ref video-ref
                     :class "w-full h-full object-cover"}
                    "Hi")
           ($ MuxPlayer
              {:playbackId playback-id
               :ref video-ref
               :class "w-full h-full object-cover"
               :muted audio-muted?
               :loop true
               :playsInline ""
               :autoPlay should-play?
               :streamType "on-demand"
               :preferplayback "mse"})

           (when allow-audio?
             (d/div {:class "p-2 cursor-pointer absolute right-4 bottom-4 flex middle hover:text-white text-slate-300"
                     :on-click toggle-audio}
                    ($ (if audio-muted?
                         SpeakerWaveIcon
                         SpeakerXMarkIcon)
                       {:className "w-6 h-6"}))))))
