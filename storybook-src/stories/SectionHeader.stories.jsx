import { SectionHeader, SectionEyebrow } from "cljs-out/stories.js";

export default {
  title: "UI/SectionHeader",
  component: SectionHeader,
  argTypes: {
    eyebrow: { control: "text" },
    title: { control: "text" },
  },
};

export const Default = {
  args: {
    eyebrow: "About the Pavilion",
    title: "Armenian Pavilion 2026",
  },
};

export const WithoutEyebrow = {
  args: {
    title: "A Simpler Header",
  },
};

// ── Standalone eyebrow ────────────────────────────────────────

export const EyebrowOnly = {
  render: (args) => <SectionEyebrow {...args} />,
  args: {
    text: "Chapter One",
  },
};
