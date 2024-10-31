import type { Meta, StoryObj } from "@storybook/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionTriggerWithIcon,
} from "@/components/Accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: 'The `WithIcon` component cannot receive prop `asChild`.',
      },
    },
  },
  args: {
    type: 'single'
  },
  argTypes: {
    type: { control: 'inline-radio', options: ['single', 'multiple'] }
  }
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-full flex flex-col justify-center p-10 bg-background">
      <strong>FAQ</strong>
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>How can I stay motivated?</AccordionTrigger>
          <AccordionContent>
            Set clear goals, break tasks into smaller steps, and reward yourself for progress. Surround yourself with supportive people and keep track of your achievements.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What are some quick ways to reduce stress?</AccordionTrigger>
          <AccordionContent>
            Try deep breathing exercises, take short breaks, practice mindfulness, or engage in physical activity. Even a brief walk can help clear your mind.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How can I save money effectively?</AccordionTrigger>
          <AccordionContent>
            Create a budget, track your expenses, and set savings goals. Cut unnecessary costs and look for discounts or deals when shopping.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const WithIcon: Story = {
  render: (args) => (
    <div className="w-full flex flex-col justify-center p-10 bg-background">
      <strong>FAQ</strong>
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTriggerWithIcon>What is the purpose of the privacy policy?</AccordionTriggerWithIcon>
          <AccordionContent>
            The privacy policy outlines how we collect, use, and protect your personal information. It helps you understand your rights regarding your data and how we ensure its security.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTriggerWithIcon>How can I reset my password</AccordionTriggerWithIcon>
          <AccordionContent>
            To reset your password, go to the login page and click on "Forgot Password?" Follow the prompts to enter your email address, and you will receive a link to create a new password.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTriggerWithIcon>What payment methods do you accept?</AccordionTriggerWithIcon>
          <AccordionContent>
            We accept various payment methods, including credit cards, PayPal, and bank transfers. Please check our payment page for the most up-to-date options.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
