import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Badge from '../components/Badge'
import List from '../components/List'
import BrowserIcon from '../../assets/svg/browserIcon.svg'
import FolderIcon from '../../assets/svg/folderIcon.svg'
import GoogleIcon from '../../assets/svg/googleIcon.svg'

const LandingLatestScreen = ({ onButtonClick }) => {
  const premiumBoxes = [
    {
      id: 1,
      icon: <BrowserIcon width={24} height={24} />,
      title: 'Ad-Free Browsing',
      description: 'Dorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      icon: <FolderIcon width={24} height={24} />,
      title: 'Downloads',
      description: 'Morem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      icon: <GoogleIcon width={24} height={24} />,
      title: 'Co-watch with Google Meet',
      description: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ]
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header onPress={onButtonClick} />
      <View style={styles.body}>
        <Badge />
        <List data={premiumBoxes} />
      </View>
      <Text style={styles.text}>Landing</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  body: {
    padding: 16,
    gap: 8,
  },
  text: {
    fontFamily: 'Inter-Regular',
  },
})

export default LandingLatestScreen
