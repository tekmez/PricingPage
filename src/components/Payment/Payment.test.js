import React from 'react'
import { render } from '@testing-library/react-native'
import Payment from './Payment'
jest.mock('../../../assets/svg/shieldIcon.svg', () => () => (
  <div testID="shield-icon" />
))
describe('Payment', () => {
  it('should match snapshot', () => {
    const comp = render(<Payment />).toJSON()
    expect(comp).toMatchSnapshot()
  })

  it('should render correctly', () => {
    const comp = render(<Payment />)
    const paymentTitle = comp.getByTestId('payment-title').children[0]
    expect(paymentTitle).toBe('NO PAYMENT NOW')
  })
})
