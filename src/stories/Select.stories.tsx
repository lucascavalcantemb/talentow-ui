import type { Meta, StoryObj } from "@storybook/react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import { SelectSeparator } from "@radix-ui/react-select";

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-full flex justify-center mt-10">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select your contry" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>North America</SelectLabel>
            <SelectItem value="united-states">United States</SelectItem>
            <SelectItem value="canada">Canada</SelectItem>
            <SelectItem value="mexico">Mexico</SelectItem>
            <SelectSeparator className="h-[1px] bg-foreground my-2" />
            <SelectLabel>South America</SelectLabel>
            <SelectItem value="brazil">Brazil</SelectItem>
            <SelectItem value="argentina">Argentina</SelectItem>
            <SelectItem value="chile">Chile</SelectItem>
            <SelectSeparator className="h-[1px] bg-foreground my-2" />
            <SelectLabel>Europe</SelectLabel>
            <SelectItem value="united-kingdom">United Kingdom</SelectItem>
            <SelectItem value="germany">Germany</SelectItem>
            <SelectItem value="france">France</SelectItem>
            <SelectSeparator className="h-[1px] bg-foreground my-2" />
            <SelectLabel>Africa</SelectLabel>
            <SelectItem value="nigeria">Nigeria</SelectItem>
            <SelectItem value="egypt">Egypt</SelectItem>
            <SelectItem value="south-africa">South Africa</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};
