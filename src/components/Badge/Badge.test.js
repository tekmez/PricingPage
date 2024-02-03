import React from 'react'
import { render } from '@testing-library/react-native'
import Badge from './Badge'
import styles from './Badge.style'
jest.mock('../../../assets/svg/youtubeIcon.svg', () => () => (
  <div testID="youtube-icon" />
))

describe('Badge component', () => {
  it('should match snapshot', () => {
    const tree = render(<Badge />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render correctly', () => {
    const comp = render(<Badge />)
    const badgeTitle = comp.getByTestId('badge-title').children[0]
    expect(badgeTitle).toBe('Youtube Premium')
  })

  it('should render style', () => {
    const comp = render(<Badge />)
    const badgeStyle = comp.getByTestId('badge-container').props.style
    expect(badgeStyle).toMatchObject(styles.container)
  })
})
