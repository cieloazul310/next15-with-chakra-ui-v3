import type { Meta, StoryObj } from "@storybook/react";
import { YouTube } from "@/components/shortcodes/youtube";

const meta: Meta<typeof YouTube> = {
  title: "components/youtube",
  component: YouTube,
};

export default meta;
type Story = StoryObj<typeof YouTube>;

export const Basic: Story = {
  args: {
    src: "YfpRm-p7qlY",
  },
};

export const InputURL: Story = {
  args: {
    src: "https://www.youtube.com/watch?v=zNUI-Kd3dYs&list=LL&index=34&pp=gAQBiAQB",
  },
};

export const InvalidURL: Story = {
  args: {
    src: "https://radiko.jp/",
  },
};
