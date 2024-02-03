import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import RadioButton from './RadioButton'
import styles from './Radio.style'

jest.mock('../../../assets/svg/checkIcon.svg', () => () => (
  <div testID="check-icon" />
))

describe('Radio', () => {
  it('renders custom radio component', () => {
    const comp = render(<RadioButton />).toJSON()
    expect(comp).toMatchSnapshot()
  })

  it('renders with initial state', () => {
    const { getByTestId } = render(<RadioButton isEnabled={false} />)
    const radioButton = getByTestId('radio-button')
    expect(radioButton).toBeTruthy()
  })

  it('toggles isEnabled state when pressed', () => {
    const setIsEnabledMock = jest.fn()
    const { getByTestId } = render(
      <RadioButton isEnabled={false} setIsEnabled={setIsEnabledMock} />
    )
    const radioButton = getByTestId('radio-button')
    fireEvent.press(radioButton)
    expect(setIsEnabledMock).toHaveBeenCalledWith(expect.any(Function))
  })

  it('renders with color for false state', () => {
    const setIsEnabledMock = jest.fn()
    const { getByTestId } = render(
      <RadioButton isEnabled={false} setIsEnabled={setIsEnabledMock} />
    )
    const radioButtonStyle = getByTestId('radio-button-style').props.style
    expect(radioButtonStyle).toMatchObject(styles.radioButtonUnselected)
  })

  it('renders with color for true state', () => {
    const setIsEnabledMock = jest.fn()
    const { getByTestId } = render(
      <RadioButton isEnabled={true} setIsEnabled={setIsEnabledMock} />
    )
    const radioButtonStyle = getByTestId('radio-button-style').props.style
    expect(radioButtonStyle).toMatchObject(styles.radioButtonSelected)
  })
})
