import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from '@/components/Logo';

const meta = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'number' },
    variant: { control: false }
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 100,
  }
};

export const Short: Story = {
  args: {
    width: 24,
    variant: 'short'
  }
};
