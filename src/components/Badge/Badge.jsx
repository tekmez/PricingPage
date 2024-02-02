import React from 'react'
import { View, Text } from 'react-native'
import styles from './Badge.style'
import YoutubeIcon from '../../../assets/svg/youtubeIcon.svg'
const Badge = () => {
  return (
    <View style={styles.container}>
      <YoutubeIcon width={20} height={20} />
      <Text style={styles.text}>Youtube Premium</Text>
    </View>
  )
}

export default Badge
