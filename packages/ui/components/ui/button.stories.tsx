import type { Meta, StoryObj } from '@storybook/react'
import {
  ChevronRightIcon,
  EnvelopeOpenIcon,
  ReloadIcon,
} from '@radix-ui/react-icons'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
  },

}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'default',
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const Destructive: Story = {
  args: {
    ...Primary.args,
    variant: 'destructive',
  },
}

export const Icon: Story = {
  args: {
    ...Primary.args,
    children: <ChevronRightIcon className="h-4 w-4" />,
    variant: 'outline',
    size: 'icon',
    'aria-label': 'Next',
  },
}

export const WithIcon: Story = {
  args: {
    ...Primary.args,
    children: (
      <>
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
      </>
    ),
  },
}

export const ButtonLoading: Story = {
  args: {
    ...Primary.args,
    disabled: true,
    children: (
      <>
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </>
    ),
  },
}
