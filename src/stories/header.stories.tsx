import Header from "@/components/layout/header";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
  title: "layout/header",
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {};
