import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Close from './Close'
jest.mock('../../../assets/svg/close.svg', () => () => (
  <div testID="close-icon" />
))
describe('Close component', () => {
  it('should match snapshot', () => {
    const tree = render(<Close />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should call onPress event', () => {
    const handlePress = jest.fn()
    const comp = render(<Close onPress={handlePress} />)
    const closeButton = comp.getByTestId('close-button')
    fireEvent.press(closeButton)
    expect(handlePress).toBeCalled()
  })
})
