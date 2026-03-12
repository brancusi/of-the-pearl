(ns amp.ui.section-header
  "Lightweight section header — venue-style eyebrow + display heading.

   Stacked layout:
     pink accent line  ─────
     SMALL LABEL           ← eyebrow text
     pink accent line  ─────
     HEADING               ← section title

   Use this for narrative / content pages (artist, venue, blog, etc.).
   Budget sections keep their own `section-block` with numbered eyebrows."
  (:require
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

;; Heading def — same treatment as venue-display: a slightly smaller
;; base size so multi-word titles don't overflow narrow viewports.
(def section-display
  (s/cx s/font-display s/weight-semibold s/uppercase-
        "leading-none text-3xl sm:text-5xl md:text-7xl"
        s/text-primary))

(defnc section-eyebrow
  "Stacked pink-line / label / pink-line eyebrow."
  [{:keys [text]}]
  (d/div {:class "mb-6 flex flex-col gap-2 items-start"}
         (d/div {:class (s/cx s/divider-accent "w-8")})
         (d/p {:class (s/cx s/label-muted)} text)
         (d/div {:class (s/cx s/divider-accent "w-8")})))

(defnc section-header
  "Complete section header block — eyebrow + title, with standard padding.
   Wraps children below the header."
  [{:keys [eyebrow title children]}]
  (d/div {:class (s/cx s/section-pt s/section-pb)}
         (d/div {:class (s/cx "px-4" s/text-primary)}
                (when eyebrow
                  ($ section-eyebrow {:text eyebrow}))
                (d/h2 {:class section-display} title))
         (d/div {:class (s/cx s/text-xl s/text-primary)}
                children)))
