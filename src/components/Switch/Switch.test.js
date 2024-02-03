import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import CustomSwitch from './Switch'

describe('CustomSwitch', () => {
  it('renders custom switch component', () => {
    const comp = render(<CustomSwitch />).toJSON()
    expect(comp).toMatchSnapshot()
  })

  it('renders with initial state', () => {
    const { getByTestId } = render(<CustomSwitch />)
    const switchElement = getByTestId('custom-switch')
    expect(switchElement.props.value).toBe(true)
  })

  it('toggles switch state when pressed', () => {
    const { getByTestId } = render(<CustomSwitch />)
    const switchElement = getByTestId('custom-switch')
    expect(switchElement.props.value).toBe(true)
    fireEvent(switchElement, 'onValueChange', false)
    expect(switchElement.props.value).toBe(false)
  })
})
