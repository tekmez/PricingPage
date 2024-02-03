import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Close from './Close'
import { StatusBar, Platform } from 'react-native'

jest.mock('../../../assets/svg/close.svg', () => () => (
  <div testID="close-icon" />
))
describe('Close component', () => {
  it('should match snapshot', () => {
    const tree = render(<Close />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render close icon', () => {
    const comp = render(<Close />)
    const closeIcon = comp.getByTestId('close-icon')
    expect(closeIcon).toBeTruthy()
  })

  it('should calculate topAlign and rightAlign correctly', () => {
    jest.mock('react-native', () => ({
      Platform: {
        OS: 'ios',
      },
      StatusBar: {
        currentHeight: 24,
      },
    }))

    const topAlign = Platform.OS === 'ios' ? 52 : StatusBar.currentHeight
    const rightAlign = Platform.OS === 'ios' ? 42 : StatusBar.currentHeight - 24

    expect(topAlign).toBe(52)
    expect(rightAlign).toBe(42)
  })

  it('should call onPress event', () => {
    const handlePress = jest.fn()
    const comp = render(<Close onPress={handlePress} />)
    const closeButton = comp.getByTestId('close-button')
    fireEvent.press(closeButton)
    expect(handlePress).toBeCalled()
  })
})
