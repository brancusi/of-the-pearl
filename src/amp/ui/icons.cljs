(ns amp.ui.icons
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]))

(defnc ChevronRightIcon [{:keys [class]}]
  ($ "svg"
     {:xmlns "http://www.w3.org/2000/svg"
      :fill "none"
      :viewBox "0 0 24 24"
      :strokeWidth 1.5
      :stroke "currentColor"
      :class class}
     ($ "path"
        {:strokeLinecap "round"
         :strokeLinejoin "round"
         :d "m8.25 4.5 7.5 7.5-7.5 7.5"})))

(defnc DocumentIcon [{:keys [class]}]
  ($ "svg"
     {:xmlns "http://www.w3.org/2000/svg"
      :fill "none"
      :viewBox "0 0 24 24"
      :strokeWidth 1.5
      :stroke "currentColor"
      :class class}
     ($ "path"
        {:strokeLinecap "round"
         :strokeLinejoin "round"
         :d "M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"})))

(defnc CollapseIcon [{:keys [class]}]
  ($ "svg"
     {:xmlns "http://www.w3.org/2000/svg"
      :fill "none"
      :viewBox "0 0 24 24"
      :strokeWidth 1.5
      :stroke "currentColor"
      :class class}
     ($ "path"
        {:strokeLinecap "round"
         :strokeLinejoin "round"
         :d "M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"})))

(defnc ExpandIcon [{:keys [class]}]
  ($ "svg"
     {:xmlns "http://www.w3.org/2000/svg"
      :fill "none"
      :viewBox "0 0 24 24"
      :strokeWidth 1.5
      :stroke "currentColor"
      :class class}
     ($ "path"
        {:strokeLinecap "round"
         :strokeLinejoin "round"
         :d "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"})))

(defnc ArrowLoopIcon [{:keys [class]}]
  ($ "svg"
     {:xmlns "http://www.w3.org/2000/svg"
      :fill "none"
      :viewBox "0 0 24 24"
      :strokeWidth 1.5
      :stroke "currentColor"
      :class class}
     ($ "path"
        {:strokeLinecap "round"
         :strokeLinejoin "round"
         :d "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"})))


(defnc InformationCircle [{:keys [class]}]
  ($ "svg"
     {:xmlns "http://www.w3.org/2000/svg"
      :fill "none"
      :viewBox "0 0 24 24"
      :strokeWidth 1.5
      :stroke "currentColor"
      :class class}
     ($ "path"
        {:strokeLinecap "round"
         :strokeLinejoin "round"
         :d "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"})))

(defnc SpeakerWaveIcon [props]
  ($ "svg"
     {:xmlns "http://www.w3.org/2000/svg"
      :fill "none"
      :viewBox "0 0 24 24"
      :strokeWidth 1.5
      :stroke "currentColor"
      & props}
     ($ "path"
        {:strokeLinecap "round"
         :strokeLinejoin "round"
         :d "M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"})))

(defnc SpeakerXMarkIcon [props]
  ($ "svg"
     {:xmlns "http://www.w3.org/2000/svg"
      :fill "none"
      :viewBox "0 0 24 24"
      :strokeWidth 1.5
      :stroke "currentColor"
      & props}
     ($ "path"
        {:strokeLinecap "round"
         :strokeLinejoin "round"
         :d "M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"})))



(defnc ArrowUpRightIcon [props]
  ($ "svg"
     {:xmlns "http://www.w3.org/2000/svg"
      :fill "none"
      :viewBox "0 0 24 24"
      :strokeWidth 1.5
      :stroke "currentColor"
      & props}
     ($ "path"
        {:strokeLinecap "round"
         :strokeLinejoin "round"
         :d "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"})))


(defnc ArrowRightIcon [props]
  ($ "svg"
     {:xmlns "http://www.w3.org/2000/svg"
      :fill "none"
      :viewBox "0 0 24 24"
      :strokeWidth 1.5
      :stroke "currentColor"
      & props}
     ($ "path"
        {:strokeLinecap "round"
         :strokeLinejoin "round"
         :d "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"})))

(defnc ArrowTurnRightUp
  [props]
  ($ "svg"
     {:xmlns "http://www.w3.org/2000/svg"
      :fill "none"
      :viewBox "0 0 24 24"
      :strokeWidth 1.5
      :stroke "currentColor"
      :class "size-6"
      & props}
     ($ "path"
        {:strokeLinecap "round"
         :strokeLinejoin "round"
         :d "m11.99 7.5 3.75-3.75m0 0 3.75 3.75m-3.75-3.75v16.499H4.49"})))

(defnc XMarkIcon
  [{:keys [class]}]
  ($ "svg"
     {:xmlns "http://www.w3.org/2000/svg"
      :fill "none"
      :viewBox "0 0 24 24"
      :strokeWidth 1.5
      :stroke "currentColor"
      :class class}
     ($ "path"
        {:strokeLinecap "round"
         :strokeLinejoin "round"
         :d "M6 18 18 6M6 6l12 12"})))

(defnc CubeIcon [{:keys [class]}]
  ($ "svg"
     {:xmlns "http://www.w3.org/2000/svg"
      :fill "none"
      :viewBox "0 0 24 24"
      :strokeWidth 1.5
      :stroke "currentColor"
      :class class}
     ($ "path"
        {:strokeLinecap "round"
         :strokeLinejoin "round"
         :d "m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"})))

(defnc MapPinIcon [{:keys [class]}]
  ($ "svg"
     {:xmlns "http://www.w3.org/2000/svg"
      :fill "none"
      :viewBox "0 0 24 24"
      :strokeWidth 1.5
      :stroke "currentColor"
      :class class}
     ($ "path"
        {:strokeLinecap "round"
         :strokeLinejoin "round"
         :d "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"})
     ($ "path"
        {:strokeLinecap "round"
         :strokeLinejoin "round"
         :d "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"})))
