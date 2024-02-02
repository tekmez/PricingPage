import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import Badge from '../components/Badge'
import List from '../components/List'
import BrowserIcon from '../../assets/svg/browserIcon.svg'
import FolderIcon from '../../assets/svg/folderIcon.svg'
import GoogleIcon from '../../assets/svg/googleIcon.svg'
import FreeTrial from '../components/FreeTrial'
import { PriceList } from '../components/Price'
import Button from '../components/Button'
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
    <View>
      <StatusBar style="light" />
      <Header onPress={onButtonClick} />
      <View style={styles.body}>
        <Badge />
        <List data={premiumBoxes} />
        <FreeTrial />
        <PriceList />
        <Button title="7 Day Trial and Plan" theme="secondary" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    padding: 16,
    gap: 8,
  },
})

export default LandingLatestScreen
