import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Badge from '../components/Badge'
const LandingLatestScreen = ({ onButtonClick }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header onPress={onButtonClick} />
      <ScrollView style={styles.body}>
        <Badge />
      </ScrollView>
      <Text style={styles.text}>Landing</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  body: {
    padding: 16,
  },
  text: {
    fontFamily: 'Inter-Regular',
  },
})

export default LandingLatestScreen
