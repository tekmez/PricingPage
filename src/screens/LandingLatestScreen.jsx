import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'

const LandingLatestScreen = ({ onButtonClick }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header onPress={onButtonClick} />
      <Text style={styles.text}>Landing</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontFamily: 'Inter-Regular',
  },
})

export default LandingLatestScreen
