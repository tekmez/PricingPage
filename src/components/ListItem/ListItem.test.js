import React from 'react'
import { render } from '@testing-library/react-native'
import ListItem from './ListItem'

describe('List Item', () => {
  it('should match snapshot', () => {
    const iconName = 'test-icon'
    const title = 'Test Title'
    const description = 'Test Description'
    const { toJSON } = render(
      <ListItem icon={iconName} title={title} description={description} />
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render title correctly', () => {
    const testTitle = 'Test Title'
    const comp = render(<ListItem title={testTitle} />)
    const titleText = comp.getByTestId('list-item-title').children[0]
    expect(titleText).toBe(testTitle)
  })

  it('should render description correctly', () => {
    const testDescription = 'Test Description'
    const comp = render(<ListItem description={testDescription} />)
    const descriptionText = comp.getByTestId('list-item-description')
      .children[0]
    expect(descriptionText).toBe(testDescription)
  })

  it('should render icon correctly', () => {
    const iconName = 'test-icon'
    const comp = render(<ListItem icon={iconName} />)
    const icon = comp.getByTestId('list-item-icon').children[0]
    expect(icon).toBe(iconName)
  })
})
