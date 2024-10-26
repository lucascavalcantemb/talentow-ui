import type { Meta, StoryObj } from '@storybook/react';

import { JobCard } from '@/components/JobCard';
import { Accordion, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';

const meta = {
  title: 'Components/JobCard',
  component: JobCard,
  args: {
    textApply: 'Apply',
    jobOffer: {
      company: {
        logo: '',
        name: 'MB Labs',
      },
      contractType: 'PJ',
      modality: 'Remote',
      seniority: 'Senior',
      salary: '$ 5k',
      startDate: '2 weeks ago',
      title: 'Developer Node JS - Senior',
    }
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The `JobCard` component needs to be wrapped by `AccordionTrigger`, and the `asChild` prop should be set to `true` in the `AccordionTrigger`.',
      },
    },
  },
} satisfies Meta<typeof JobCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className='w-[1024px]'>
      <Accordion type='single'>
        <AccordionItem value="item-1" className='mb-2'>
          <AccordionTrigger className='w-full'>
            <JobCard {...args} />
          </AccordionTrigger>
        </AccordionItem>
      </Accordion>
    </div>
  )
};

