import type { Meta, StoryObj } from '@storybook/react';

import { JobCardSkeleton } from '@/components/JobCardSkeleton';

const meta = {
  title: 'Components/JobCardSkeleton',
  component: JobCardSkeleton,
  tags: ['autodocs']
} satisfies Meta<typeof JobCardSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className='w-[1024px]'>
      <JobCardSkeleton />
    </div>
  )
};
