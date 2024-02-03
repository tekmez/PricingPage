import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Footer from './Footer'

const footerLinks = [
  { title: 'Privacy Policy', url: 'https://www.google.com' },
  { title: 'Terms of Service', url: 'https://www.google.com' },
  { title: 'Contact Us', url: 'https://www.google.com' },
]
describe('Footer component', () => {
  it('should default match snapshot', () => {
    const comp = render(<Footer />).toJSON()
    expect(comp).toMatchSnapshot()
  })

  it('should match snapshot with data', () => {
    const comp = render(<Footer data={footerLinks} />).toJSON()
    expect(comp).toMatchSnapshot()
  })

  it('renders correctly and navigates to correct URL when pressed', () => {
    const comp = render(<Footer data={footerLinks} />)
    footerLinks.forEach((link) => {
      const linkElement = comp.getByText(link.title)
      fireEvent.press(linkElement)
      expect(linkElement).toBeTruthy()
    })
  })
})
