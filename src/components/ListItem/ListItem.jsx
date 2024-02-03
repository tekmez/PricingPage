import React from 'react'
import { View, Text } from 'react-native'
import styles from './ListItem.style'
const ListItem = ({ icon, title, description }) => {
  return (
    <View testID="list-item-container" style={styles.container}>
      <View testID="list-item-icon" style={styles.iconContainer}>
        {icon}
      </View>
      <View testID="list-item-info" style={styles.infoContainer}>
        <Text testID="list-item-title" style={styles.title}>
          {title}
        </Text>
        <Text testID="list-item-description" style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  )
}

export default ListItem
