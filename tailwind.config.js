const defaultTheme = require("tailwindcss/defaultTheme");

const screens = {
  ...defaultTheme.screens,
};

module.exports = {
  darkMode: "class",
  content:
    process.env.NODE_ENV == "production"
      ? ["./release/js/main.*.js", "./src/**/*.cljs", "./src/**/*.cljc"]
      : ["./src/**/*.cljs", "./src/**/*.cljc"],
  theme: {
    extend: {
      fontFamily: {
        // Display — OCR-B Std (Typekit). Large titles, hero headings.
        display: ["ocr-b-std", "monospace"],

        // Body — IBM Plex Mono (Typekit). Prose body copy, descriptions, nav.
        body: ["ibm-plex-mono", "monospace"],

        // Mono — IBM Plex Mono. Labels, numbers, code, eyebrows, data.
        mono: ["ibm-plex-mono", "monospace"],

        // Keep Inter as sans fallback (unused in design system, but safe default)
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "10xl": ["10rem", {}],
        "11xl": ["12rem", {}],
        "12xl": ["14rem", {}],
      },
      width: Object.fromEntries(
        Array.from({ length: 23 }, (_, i) => [
          `${i + 1}/24`,
          `${(((i + 1) / 24) * 100).toFixed(6)}%`,
        ]),
      ),
    },
    screens,
  },
  plugins: [require("@tailwindcss/forms")],
};

// Export the screens object so you can import it in your React components
module.exports.screens = screens;
