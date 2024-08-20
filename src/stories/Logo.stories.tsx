import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from '@/components/Logo';

const meta = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' }
  }
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: '',
    width: 100,
    height: 26
  }
};
