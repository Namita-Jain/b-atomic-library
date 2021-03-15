import * as React from 'react'
import { shallow } from 'enzyme'
import { CustomButton } from './CustomButton'

describe('Custom Button Test', () => {
  it('Should render a button', () => {
    const button = shallow(<CustomButton id='btn'>Button</CustomButton>).find(
      'button'
    )
    expect(button.length).toBe(1)
  })
})
