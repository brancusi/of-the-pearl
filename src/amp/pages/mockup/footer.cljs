(ns amp.pages.mockup.footer
  "Fixed footer for the mockup viewer."
  (:require [amp.lib.defnc :refer [defnc]]
            [helix.dom :as d]))

(defnc mockup-footer
  "Fixed bottom footer with copyright text."
  [_props]
  (d/footer {:class "z-20 fixed bottom-0 left-0 right-0 py-2 px-4"}
            (d/p {:class "text-xs font-mono"}
                 "© Armenian Pavilion Venice Biennale Arte 2026")))
