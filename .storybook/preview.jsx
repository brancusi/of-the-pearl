import React from "react";
import "../resources/css/tailwind.css";

/** @type { import('storybook').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#0f172a" }, // slate-900
        { name: "light", value: "#f8fafc" }, // slate-50
      ],
    },
  },
  decorators: [
    (Story) => {
      // Wrap every story in dark mode to match the site's dark-first design
      return (
        <div className="dark bg-slate-900 min-h-screen p-8">
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
