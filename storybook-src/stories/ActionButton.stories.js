import { ActionButton } from "cljs-out/stories.js";

export default {
  title: "UI/ActionButton",
  component: ActionButton,
  argTypes: {
    title: { control: "text" },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    "bg-color": { control: "color" },
    "text-color": { control: "color" },
    strikethrough: { control: "boolean" },
    "arrow-offset-x": { control: { type: "number", step: 1 } },
    "arrow-offset-y": { control: { type: "number", step: 1 } },
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#1a1a1a" },
        { name: "light", value: "#f5f5f5" },
      ],
    },
  },
};

export const Default = {
  args: {
    title: "don't shop",
    size: "md",
    "bg-color": "#FFFFFF",
    "text-color": "#2B2B2B",
    strikethrough: true,
  },
};

export const NoStrikethrough = {
  args: {
    title: "explore",
    size: "md",
    "bg-color": "#FFFFFF",
    "text-color": "#2B2B2B",
    strikethrough: false,
  },
};

export const Small = {
  args: {
    title: "don't shop",
    size: "sm",
    "bg-color": "#FFFFFF",
    "text-color": "#2B2B2B",
    strikethrough: true,
  },
};

export const Large = {
  args: {
    title: "don't shop",
    size: "lg",
    "bg-color": "#FFFFFF",
    "text-color": "#2B2B2B",
    strikethrough: true,
  },
};

export const DarkVariant = {
  args: {
    title: "don't shop",
    size: "md",
    "bg-color": "#2B2B2B",
    "text-color": "#FFFFFF",
    strikethrough: true,
  },
};

export const PinkAccent = {
  args: {
    title: "discover",
    size: "md",
    "bg-color": "#f9a8d4",
    "text-color": "#2B2B2B",
    strikethrough: true,
  },
};
