import React from 'react'
import { render } from '@testing-library/react-native'
import PriceContainer from './PriceContainer'

describe('Price Container', () => {
  it('should match snapshot', () => {
    const comp = render(<PriceContainer />).toJSON()
    expect(comp).toMatchSnapshot()
  })

  it('should render correctly without saving', () => {
    const title = 'Price Container'
    const price = '4.00'
    const boldPrice = '5.00'
    const comp = render(
      <PriceContainer title={title} price={price} boldPrice={boldPrice} />
    )

    const priceTitle = comp.getByTestId('price-container-title').children[0]
    const priceText = comp.getByTestId('light-price-title').children[0]
    const boldPriceText = comp.getByTestId('bold-price-title').children[0]

    expect(priceTitle).toBe(title)
    expect(priceText).toBe(price)
    expect(boldPriceText).toBe(boldPrice)
  })

  it('should render correctly with saving', () => {
    const title = 'Price Container'
    const price = '4.00'
    const boldPrice = '5.00'
    const saving = '1.00'
    const comp = render(
      <PriceContainer
        title={title}
        price={price}
        boldPrice={boldPrice}
        saving={saving}
      />
    )
    const priceTitle = comp.getByTestId('price-title').children[0]
    expect(priceTitle).toBe(saving)
  })
})
