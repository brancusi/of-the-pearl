import { MainButton } from "cljs-out/stories.js";

export default {
  title: "UI/Button",
  component: MainButton,
  argTypes: {
    title: { control: "text" },
    size: {
      control: "select",
      options: ["xs", "sm", "md"],
    },
    color: {
      control: "select",
      options: ["pink", "slate"],
    },
  },
};

export const Default = {
  args: {
    title: "Explore",
    size: "md",
    color: "pink",
  },
};

export const Small = {
  args: {
    title: "Learn More",
    size: "sm",
    color: "pink",
  },
};

export const ExtraSmall = {
  args: {
    title: "View",
    size: "xs",
    color: "slate",
  },
};

export const SlateColor = {
  args: {
    title: "Read More",
    size: "md",
    color: "slate",
  },
};

export const WithChildren = {
  args: {
    children: "Custom Child Content",
    size: "md",
    color: "pink",
  },
};
