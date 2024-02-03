import React from 'react'
import { render } from '@testing-library/react-native'
import FreeTrial from './FreeTrial'

jest.mock('../Switch', () => {
  return jest.fn().mockImplementation(() => {
    return null
  })
})

describe('FreeTrial', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<FreeTrial />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const comp = render(<FreeTrial />)

    // Test light title
    const lightTitle = comp.getByTestId('free-trial-light-title')
    expect(lightTitle).toBeTruthy()
    expect(lightTitle.props.children).toBe('not sure yet ?')

    // Test regular title
    const regularTitle = comp.getByTestId('free-trial-regular-title')
    expect(regularTitle).toBeTruthy()
    expect(regularTitle.props.children).toBe('Enable Free Trial')
  })
})
