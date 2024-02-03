import React from 'react'
import { render } from '@testing-library/react-native'
import List from './List'
const mockData = [
  { id: 1, icon: 'icon1', title: 'Title 1', description: 'Description 1' },
  { id: 2, icon: 'icon2', title: 'Title 2', description: 'Description 2' },
  { id: 3, icon: 'icon3', title: 'Title 3', description: 'Description 3' },
]
describe('List', () => {
  it('should match snapshot', () => {
    const comp = render(<List />).toJSON()
    expect(comp).toMatchSnapshot()
  })
  it('renders correctly with mock data', () => {
    const { getByTestId, getAllByTestId } = render(<List data={mockData} />)
    const listComponent = getByTestId('list')
    const listItemComponents = getAllByTestId('list-item-container')
    expect(listComponent).toBeTruthy()
    expect(listItemComponents.length).toBe(mockData.length)
  })

  it('renders ListItem components with correct data', () => {
    const { getAllByTestId } = render(<List data={mockData} />)
    const listItemComponents = getAllByTestId('list-item-container')

    const iconComponents = getAllByTestId(`list-item-icon`)
    const titleComponents = getAllByTestId(`list-item-title`)
    const descriptionComponents = getAllByTestId(`list-item-description`)

    listItemComponents.forEach((item, index) => {
      const icon = iconComponents[index].children[0]
      const title = titleComponents[index].children[0]
      const description = descriptionComponents[index].children[0]

      expect(icon).toBe(mockData[index].icon)
      expect(title).toBe(mockData[index].title)
      expect(description).toBe(mockData[index].description)
    })
  })

  it('renders ItemSeparatorComponent between ListItem components', () => {
    const { getAllByTestId } = render(<List data={mockData} />)
    const separatorComponents = getAllByTestId('list-separator')

    expect(separatorComponents.length).toBe(mockData.length - 1)
  })
})
