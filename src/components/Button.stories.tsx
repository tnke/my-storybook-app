import React from "react";
import { Story, Meta } from "@storybook/react";

import Button, { ButtonProps } from "./Button";

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const Close = Template.bind({});

Close.args = {
  text: "Close",
};
