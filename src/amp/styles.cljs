(ns amp.styles
  "Centralized design-token system for the Armenian Pavilion 2026 site.

   Philosophy
   ----------
   • Atomic — each token is a single Tailwind class string you can
     compose with `str`, `clojure.string/join`, or Tailwind's own
     class merging.  No deep nesting; combine atoms to build molecules.
   • Dark-first — the site is dark by default.  Every color atom comes
     in a {:dark … :light …} pair via `mode`.  Flip between palettes
     site-wide by toggling the `dark` class on <html>.
   • Responsive — breakpoint-aware atoms (sm: / md: / lg:) are baked
     into the tokens that need them so components don't re-invent them.

   Usage
   -----
       (:require [amp.styles :as s])
       (d/p {:class (s/cx s/body-lg s/text-muted)} \"…\")
       (d/h2 {:class s/heading-display} title)

   Customization
   -------------
   Extend by adding new `def`s in this file.  Prefer composition:
       (def my-card-title (cx heading-sm text-accent))
   over creating a one-off class string in the component.")

;; ---------------------------------------------------------------------------
;; Helpers
;; ---------------------------------------------------------------------------

(defn cx
  "Concatenate class strings, filtering nils.  Like clsx / twMerge lite."
  [& classes]
  (->> classes
       (remove nil?)
       (interpose " ")
       (apply str)))

;; ---------------------------------------------------------------------------
;; Color mode – dark-first design tokens
;; ---------------------------------------------------------------------------
;; With `darkMode: "class"` in tailwind.config.js:
;;   bare class  = light mode  (when <html> has NO "dark" class)
;;   dark:class  = dark mode   (when <html class="dark">)
;;
;; The site ships with <html class="dark"> so dark is the default.
;; Remove "dark" from <html> to flip the whole site to light mode.
;; Tweak the light (bare) values below to taste.

;; --- Text colors ----------------------------------------------------------
(def text-primary    "text-slate-900  dark:text-slate-100")
(def text-secondary  "text-slate-700  dark:text-slate-300")
(def text-muted      "text-slate-600  dark:text-slate-400")
(def text-faint      "text-slate-500  dark:text-slate-500")
(def text-ghost      "text-slate-400  dark:text-slate-600")
(def text-inverse    "text-slate-950  dark:text-white")

;; --- Accent palette – semantic roles --------------------------------------
(def text-accent     "text-pink-700   dark:text-pink-300")
(def text-accent-50  "text-pink-700/50 dark:text-pink-300/50")
(def text-value      "text-indigo-600 dark:text-indigo-300")
(def text-positive   "text-emerald-600 dark:text-emerald-300")
(def text-positive-50 "text-emerald-600/50 dark:text-emerald-300/50")
(def text-warning    "text-amber-600  dark:text-amber-300")
(def text-warning-80 "text-amber-600/80 dark:text-amber-300/80")
(def text-warning-50 "text-amber-600/50 dark:text-amber-300/50")
(def text-danger     "text-rose-600   dark:text-rose-400")
(def text-error      "text-red-600    dark:text-red-400")

;; --- Backgrounds ----------------------------------------------------------
(def bg-surface      "bg-white        dark:bg-slate-900")
(def bg-surface-alt  "bg-slate-100/60 dark:bg-slate-800/60")
(def bg-overlay      "bg-white/40     dark:bg-black/40")
(def bg-page         "grey-grad")
(def bg-chrome       "bg-white dark:bg-slate-950")
(def bg-glass        "bg-white/75 dark:bg-slate-950/75 backdrop-blur-xl")
(def bg-footer       "bg-zinc-100 dark:bg-zinc-800")

;; --- Borders / dividers ---------------------------------------------------
(def border-subtle   "border-slate-200 dark:border-white/15")
(def border-glass    "border-b border-slate-200/30 dark:border-white/10")
(def border-accent   "border-pink-500/70 dark:border-pink-500/70")
(def divider-accent  "h-px bg-pink-500/70")

;; ---------------------------------------------------------------------------
;; Typography scale — atomic building blocks
;; ---------------------------------------------------------------------------
;; These are *atoms*: combine them freely to build any text style.

;; --- Font families --------------------------------------------------------
;; Two-font system: Source Sans Pro (display + body) + Source Code Pro (data/mono)
;; Neue Haas Grotesk Display was removed Feb 2026; both display and body
;; now resolve to Source Sans Pro via Tailwind config.
;; FiraCode was removed Feb 2026 in favour of Source Code Pro (Adobe Typekit).
(def font-display "font-display")              ;; Source Sans Pro — headings, titles, nav
(def font-body    "font-body")                  ;; Source Sans Pro — prose body copy
(def font-data    "font-mono")                  ;; Source Code Pro — labels, numbers, eyebrows, code
;; Aliases (all three resolve to Source Sans Pro; kept for semantic clarity)
(def font-ui      font-data)
(def font-prose   font-body)

;; --- Weights --------------------------------------------------------------
(def weight-normal    "font-normal")
(def weight-medium    "font-medium")
(def weight-semibold  "font-semibold")
(def weight-bold      "font-bold")
(def weight-extrabold "font-extrabold")

;; --- Tracking (letter-spacing) – three tiers only --------------------------
;; Consolidates the 6 inconsistent values found in the audit down to 3.
(def tracking-wide    "tracking-wide")          ;; 0.025em – modest
(def tracking-wider   "tracking-wider")         ;; 0.05em  – comfortable
(def tracking-label   "tracking-[0.15em]")      ;; 0.15em  – labels/eyebrows

;; --- Sizes ----------------------------------------------------------------
(def text-2xs  "text-[9px]")
(def text-xs   "text-[10px]")
(def text-xs+  "text-[11px]")
(def text-sm   "text-sm")                       ;; 14px
(def text-base "text-base")                     ;; 16px
(def text-lg   "text-lg")                       ;; 18px
(def text-xl   "text-xl")                       ;; 20px
(def text-2xl  "text-2xl")                      ;; 24px
(def text-3xl  "text-3xl")                      ;; 30px
(def text-4xl  "text-4xl")                      ;; 36px
(def text-5xl  "text-5xl")                      ;; 48px

;; --- Modifiers ------------------------------------------------------------
(def uppercase-    "uppercase")
(def italic-       "italic")
(def line-through- "line-through")
(def select-none-  "select-none")
(def nowrap-       "whitespace-nowrap")

;; ---------------------------------------------------------------------------
;; Composed text styles – the ready-to-use molecules
;; ---------------------------------------------------------------------------
;; Named after their *semantic role*, not their visual size.
;; Components should use these instead of ad-hoc class strings.

;; Headings -----------------------------------------------------------------
(def heading-display
  "The big section title (BUDGET, LOCATION, etc.)."
  (cx font-display weight-semibold uppercase- "leading-none"
      "text-4xl sm:text-5xl md:text-7xl"
      text-primary))

(def heading-page
  "Page-level H1."
  (cx font-display weight-semibold text-inverse
      "text-3xl sm:text-4xl lg:text-6xl"))

(def heading-section
  "Sub-section headings (TESA 41, WIRE TRANSFER, etc.)."
  (cx font-display weight-medium uppercase- tracking-wider text-xl text-primary))

(def heading-sm
  "Small heading used inside cards / tables."
  (cx font-display weight-medium uppercase- tracking-wide text-sm
      "sm:text-base" text-secondary))

;; Eyebrows / labels --------------------------------------------------------
(def eyebrow
  "Tiny uppercase caption above headings (\"3. financials\")."
  (cx font-ui weight-semibold uppercase- tracking-label text-2xl text-muted))

(def eyebrow-midlight
  "Tiny uppercase caption above headings (\"3. financials\")."
  (cx font-ui weight-semibold uppercase- tracking-label text-2xl " text-red-300"))


(def eyebrow-highlight
  "Tiny uppercase caption above headings (\"3. financials\")."
  (cx font-ui weight-semibold uppercase- tracking-label text-2xl " text-red-500"))

(def label
  "Info-grid label, aside text, date stamps."
  (cx font-ui uppercase- tracking-label "text-[0.6rem]"
      "opacity-40" nowrap- select-none-))

(def label-sm
  "Even smaller meta-labels (sublabels, badges)."
  (cx font-ui uppercase- tracking-wider text-2xs weight-semibold))

(def label-muted
  "Quieter version of the eyebrow for secondary use."
  (cx font-ui uppercase- tracking-wider text-xs weight-semibold text-muted))

;; Body / prose -------------------------------------------------------------
;; All body copy uses Source Sans Pro (font-body), justified, with a consistent
;; normal (400) weight. The only differentiator is size. Use s/em-strong or
;; s/em-bold for inline emphasis in prose — never change the base weight.
(def body-lg
  "Lead paragraph (press release, about, why-support). Slightly larger."
  (cx font-body text-lg weight-normal text-secondary "text-justify leading-relaxed"))

(def body-base
  "Standard reading text."
  (cx font-body text-base weight-normal text-secondary "text-justify leading-relaxed"))

(def body-sm
  "Smaller detail text (descriptions, footnotes)."
  (cx font-body text-sm weight-normal text-muted "text-justify leading-relaxed"))

(def body-closing
  "Closing italic aphorism."
  (cx font-body italic- weight-normal text-lg text-primary "text-justify leading-relaxed"))

;; Emphasis -----------------------------------------------------------------
(def em-strong
  "Brightness emphasis for names/terms in prose — no color, just weight + white."
  (cx weight-medium text-inverse))

(def em-bold
  "Medium-weight emphasis in primary color."
  (cx weight-medium text-primary))

(def em-italic
  "Italic emphasis."
  italic-)

;; Values / numbers ---------------------------------------------------------
(def value-hero
  "Big hero number (target total)."
  (cx font-ui weight-bold "tracking-tight" text-3xl text-primary))

(def value-lg
  "Large numeric values (grand totals)."
  (cx font-ui weight-semibold text-lg text-accent))

(def value-base
  "Standard numeric values."
  (cx font-ui weight-semibold text-base))

(def value-sm
  "Small numeric values in tables."
  (cx font-ui weight-semibold text-sm text-value))

(def value-currency
  "Inline currency figures in prose."
  (cx font-ui weight-bold text-inverse))

;; Interactive elements -----------------------------------------------------
(def link-subtle
  "Underlined link with soft decoration."
  "underline underline-offset-2 decoration-slate-500/40 dark:decoration-white/30 hover:decoration-slate-800/80 dark:hover:decoration-white/80 transition-all")

(def link-hover-accent
  "Hover color transition for interactive links."
  "hover:text-pink-600 dark:hover:text-pink-300 transition-colors")

(def btn-text
  "Text-style button / toggle."
  (cx font-ui weight-semibold uppercase- tracking-label text-xs
      text-faint link-hover-accent))

;; Person / credit blocks ---------------------------------------------------
(def person-name
  "Display name in curator/artist cards. Uppercase blocky treatment."
  (cx font-display weight-bold uppercase- tracking-wider
      "text-lg sm:text-xl leading-relaxed" text-inverse))

(def person-name-lg
  "Larger display name (artist section, curator section headings)."
  (cx font-display weight-bold uppercase- tracking-wider
      "text-2xl sm:text-3xl leading-relaxed" text-inverse))

(def person-role
  "Role / title label beneath a person's name."
  (cx font-display weight-medium text-xs uppercase- "tracking-[0.2em]" text-warning))

(def written-by-label
  "The 'BY' prefix in written-by attribution."
  (cx font-display weight-medium "text-[14px]" uppercase- tracking-label text-faint))

(def written-by-name
  "Author name in written-by attribution."
  (cx font-display weight-medium text-xl text-muted))

;; Footer micro-headings ----------------------------------------------------
(def footer-heading
  "Small uppercase label above footer columns (Quick Links, Get in Touch, etc.)."
  (cx "text-[10px]" weight-medium uppercase- "tracking-[0.2em]" text-accent-50))

;; Navigation ---------------------------------------------------------------
(def nav-link
  "Section navigation links."
  (cx font-display text-xl uppercase- tracking-wider
      "hover:text-pink-600 dark:hover:text-pink-300 transition-colors"))

;; ---------------------------------------------------------------------------
;; Layout helpers — responsive containers
;; ---------------------------------------------------------------------------

(def content-column
  "Centered column that caps width on large screens (matches budget layout)."
  "w-full lg:w-8/12 min-w-0")

(def content-column-container
  "Flex wrapper that centers the content-column."
  "w-full max-w-full overflow-x-hidden flex justify-center")

(def container-prose
  "Readable width + horizontal padding."
  "px-4 max-w-prose")

(def section-pt
  "Standard top padding entering a content section."
  "pt-12 sm:pt-14")

(def section-pb
  "Standard bottom padding leaving a content section."
  "pb-10 sm:pb-12")

;; ---------------------------------------------------------------------------
;; Page shell — universal page wrapper
;; ---------------------------------------------------------------------------

(def page-shell
  "Universal page wrapper: min-height, page background, nav clearance, default text color.
   Every routed page (except landing) should apply this to its outermost div."
  (cx "min-h-screen pt-14" bg-page text-primary))

;; ---------------------------------------------------------------------------
;; Info-grid (press release header, general info, etc.)
;; ---------------------------------------------------------------------------

(def info-grid
  "Two-column label→value grid. Stacks on mobile."
  (cx "flex flex-col gap-4 border-l-2 pl-5" border-subtle))

(def info-row
  "Single row in the info-grid. Grid on sm+ so values align flush-left."
  "flex flex-col sm:grid sm:grid-cols-[8rem_1fr] sm:gap-4 sm:items-baseline")
