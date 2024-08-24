import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from '@/components/Skeleton';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs']
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className='w-[768px] bg-card p-5 rounded flex flex-col gap-2'>
      <Skeleton className='w-1/3 h-8' />
      <Skeleton className='w-2/3 h-8' />
    </div>
  )
};
