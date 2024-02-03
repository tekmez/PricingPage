import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Price from './Price'
import styles from './Price.style'
jest.mock('../../../assets/svg/checkIcon.svg', () => () => (
  <div testID="check-icon" />
))
describe('Price Component', () => {
  const mockData = {
    title: 'Product Title',
    saving: 'Save 30%',
    price: '19.99',
    boldPrice: '14.99',
    theme: 'primary',
    selected: true,
  }

  it('should match snapshot', () => {
    const comp = render(<Price {...mockData} />).toJSON()
    expect(comp).toMatchSnapshot()
  })

  it('renders Price component with correct data', () => {
    const comp = render(<Price {...mockData} />)
    const priceContainer = comp.getByTestId('price-container')
    const priceTitle = comp.getByTestId('price-title').children[0]
    const priceText = comp.getByTestId('light-price-title').children[0]
    const boldPriceText = comp.getByTestId('bold-price-title').children[0]
    expect(priceContainer).toBeTruthy()
    expect(priceTitle).toBe(mockData.saving)
    expect(priceText).toBe(mockData.price)
    expect(boldPriceText).toBe(mockData.boldPrice)
  })

  it('should render check icon if selected', () => {
    const comp = render(<Price {...mockData} />)
    const checkIcon = comp.getByTestId('check-icon')
    expect(checkIcon).toBeTruthy()
  })

  it('should correct theme styles', () => {
    const comp = render(<Price {...mockData} />)
    const priceContainer = comp.getByTestId('price-container')
    expect(priceContainer.props.style[1]).toMatchObject(styles.primaryBorder)
  })

  it('should secondary theme styles', () => {
    const comp = render(<Price {...mockData} theme="secondary" />)
    const priceContainer = comp.getByTestId('price-container')
    expect(priceContainer.props.style[1]).toMatchObject(styles.secondaryBorder)
  })
})
