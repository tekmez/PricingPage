import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import CustomButton from './Button'
import styles from './Button.style'

describe('Touchable Button', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<CustomButton title="Click me" />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render correctly', () => {
    const testTitle = 'Click me'
    const comp = render(<CustomButton title={testTitle} />)
    const buttonText = comp.getByTestId('button-title').children[0]
    expect(buttonText).toBe(testTitle)
  })

  it('should call onPress event', () => {
    const handlePress = jest.fn()
    const comp = render(<CustomButton onPress={handlePress} />)
    fireEvent.press(comp.getByTestId('button-touchable'))
    expect(handlePress).toBeCalled()
  })

  it('should render given theme style', () => {
    const testTheme = 'secondary'
    const comp = render(<CustomButton theme={testTheme} />)
    const buttonStyle = comp.getByTestId('button-touchable').props.style
    expect(buttonStyle).toMatchObject(styles[testTheme].button)
  })
})
