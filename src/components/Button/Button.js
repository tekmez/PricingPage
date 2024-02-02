import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Button.style'

const Button = ({ onPress, title, theme = 'primary' }) => {
  return (
    <TouchableOpacity style={styles[theme].button} onPress={onPress}>
      <Text style={styles[theme].buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button
