import type { Meta, StoryObj } from "@storybook/react";

import { Popover, PopoverTrigger, PopoverContent } from "@/components/Popover";

const meta = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-full flex justify-center mt-10">
      <Popover>
        <PopoverTrigger>Click here!</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </div>
  ),
};
