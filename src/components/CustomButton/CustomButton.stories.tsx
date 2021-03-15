import * as React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { CustomButton, ButtonProps } from './CustomButton'

export default {
  title: 'CustomButton',
  component: CustomButton,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<ButtonProps> = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({})
Primary.args = {
  classList: ['bwell-btns__primary'],
  children: 'Primary Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  classList: ['bwell-btns__secondary'],
  children: 'Secondary Button'
}

export const PrimarySmall = Template.bind({})
PrimarySmall.args = {
  classList: ['bwell-btns__primary', 'bwell-btns__primary-small'],
  children: 'Primary Small Button'
}

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  classList: ['bwell-btns__secondary', 'bwell-btns__secondary-small'],
  children: 'Secondary Small Button'
}
