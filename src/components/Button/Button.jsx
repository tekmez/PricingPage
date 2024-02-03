import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Button.style'

const CustomButton = ({ onPress, title, theme = 'primary' }) => {
  return (
    <TouchableOpacity
      testID="button-touchable"
      style={styles[theme].button}
      onPress={onPress}
    >
      <Text testID="button-title" style={styles[theme].buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton
