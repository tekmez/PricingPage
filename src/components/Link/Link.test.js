import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Link from './Link'
import { Linking } from 'react-native'

describe('Link component', () => {
  it('should match snapshot', () => {
    const comp = render(<Link />).toJSON()
    expect(comp).toMatchSnapshot()
  })

  it('should render correctly', () => {
    const testText = 'Click me'
    const comp = render(<Link title={testText} />)
    const linkText = comp.getByTestId('link-title').children[0]
    expect(linkText).toBe(testText)
  })

  it('should open url on press', () => {
    const testUrl = 'https://www.google.com'
    jest.spyOn(Linking, 'openURL')
    const comp = render(<Link url={testUrl} />)
    const link = comp.getByTestId('link')
    fireEvent.press(link)
    expect(Linking.openURL).toBeCalledWith(testUrl)
  })
})
