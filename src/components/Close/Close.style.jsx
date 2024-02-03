import { StyleSheet, Platform } from 'react-native'
const topAlign = Platform.OS === 'ios' ? 52 : StatusBar.currentHeight
const rightAlign = Platform.OS === 'ios' ? 42 : StatusBar.currentHeight - 24
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: topAlign,
    right: rightAlign,
  },
})

export default styles
