import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from '../components/Button'
const HomeScreen = ({ onButtonClick }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title="Landing Latest Screen" onPress={onButtonClick} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default HomeScreen
