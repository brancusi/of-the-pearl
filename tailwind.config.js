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
        // Display — Source Sans Pro (Typekit). Headings, titles, nav.
        // Previously Neue Haas Grotesk Display; unified to Source Sans Pro Feb 2026.
        display: ["source-sans-pro", "Helvetica", "Arial", "sans-serif"],

        // Body — Source Sans Pro (Typekit). Prose body copy, descriptions.
        body: ["source-sans-pro", "Helvetica", "Arial", "sans-serif"],

        // Data — Source Code Pro (Adobe Typekit). Labels, numbers, code, eyebrows.
        "fira-code": ["source-code-pro", "monospace"],

        // Override Tailwind's default mono to use Source Code Pro everywhere
        mono: ["source-code-pro", "monospace"],

        // Keep Inter as sans fallback (unused in design system, but safe default)
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
    screens,
  },
  plugins: [require("@tailwindcss/forms")],
};

// Export the screens object so you can import it in your React components
module.exports.screens = screens;
