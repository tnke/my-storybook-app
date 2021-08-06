import React from "react";
import { Story, Meta } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";

import Notice, { NoticeProps } from "./Notice";

export default {
  component: Notice,
  title: "Components/Notice",
  parameters: {
    layout: "padded",
  },
} as Meta;

const Template: Story<NoticeProps> = (args) => <Notice {...args} />;

export const Neutral = Template.bind({});

Neutral.args = {
  title: "This is neutral",
  text:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien.",
  level: "neutral",
};

export const Warning = Template.bind({});

Warning.args = {
  title: "This is a warning",
  text:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien.",
  level: "warning",
};

export const Error = Template.bind({});

Error.args = {
  title: "This is an error",
  text:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien.",
  level: "error",
  onClose: linkTo("Components/Notice", "Warning"),
};

export const NoText = Template.bind({});

NoText.args = {
  title: "This has no text",
  level: "neutral",
};
