import React from 'react'
import { render } from '@testing-library/react-native'
import PriceBadge from './PriceBadge'

describe('Price Badge', () => {
  it('should match snapshot', () => {
    const comp = render(<PriceBadge />).toJSON()
    expect(comp).toMatchSnapshot()
  })

  it('should render correctly', () => {
    const testTite = 'Price Badge'
    const comp = render(<PriceBadge title={testTite} />)
    const priceBadgeTitle = comp.getByTestId('price-title').children[0]
    expect(priceBadgeTitle).toBe(testTite)
  })
})
