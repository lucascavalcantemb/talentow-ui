import { composeStory, type Meta, type StoryObj } from '@storybook/react';

import { JobCard } from '@/components/JobCard';
import { Accordion, AccordionContent, AccordionItem } from '@/components/Accordion';
import JobCardContentMeta, { Default as JobCardContentStory } from '@/stories/JobCardContent.stories';

const JobCardContent = composeStory(JobCardContentStory, JobCardContentMeta);

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
        component: 'The `JobCard` component should be accompanied by the `JobCardContent` component, which provides detailed information about the job offer. To render other content, it must be inside the `AccordionContent` component.',
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
        <AccordionItem value="item-1" className='mb-2 border-none'>
          <JobCard {...args} />
        </AccordionItem>
      </Accordion>
    </div>
  )
};

export const WithJobCardContent: Story = {
  name: 'With JobCardContent',
  render: (args) => (
    <div className='w-[1024px]'>
      <Accordion type='single'>
        <AccordionItem value="item-1" className='mb-2 border-none'>
          <JobCard {...args} />
          <JobCardContent isAccordion />
        </AccordionItem>
      </Accordion>
    </div>
  )
};

export const AnotherContent: Story = {
  name: 'Another Content',
  render: (args) => (
    <div className='w-[1024px]'>
      <Accordion type='single'>
        <AccordionItem value="item-1" className='mb-2 border-none'>
          <JobCard {...args} />
          <AccordionContent asChild>
            <div className="flex w-full items-start justify-between gap-5 rounded-md rounded-t-none border-2 bg-card px-8 py-10">
              Other Content
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
};
