import React from 'react'
import { Platform, StatusBar, StyleSheet, TouchableOpacity } from 'react-native'
import CloseIcon from '../../../assets/svg/close.svg'

const topAlign = Platform.OS === 'ios' ? 52 : StatusBar.currentHeight
const rightAlign = Platform.OS === 'ios' ? 42 : StatusBar.currentHeight - 24
const Close = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <CloseIcon width={36} height={36} />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: topAlign,
    right: rightAlign,
  },
})

export default Close
