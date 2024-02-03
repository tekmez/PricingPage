import React from 'react'
import { FlatList, View } from 'react-native'
import styles from './List.style'
import ListItem from '../ListItem'
const List = ({ data }) => {
  return (
    <FlatList
      data={data}
      testID="list"
      renderItem={({ item }) => (
        <ListItem
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      )}
      keyExtractor={(item) => item.id}
      style={styles.container}
      ItemSeparatorComponent={
        <View
          testID="list-separator"
          style={{
            height: 1,
            backgroundColor: '#E7EAF4',
            marginHorizontal: 10,
          }}
        />
      }
    />
  )
}

export default List
