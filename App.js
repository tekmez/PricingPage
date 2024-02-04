import HomeScreen from './src/screens/HomeScreen'
import { useState } from 'react'
import LandingLatestScreen from './src/screens/LandingLatestScreen'
import { loadFonts } from './src/utils/FontLoader'

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home')
  const [fontsLoaded, fontError] = loadFonts()
  if (!fontsLoaded && !fontError) {
    return null
  }
  const handleButtonClick = () => {
    if (currentScreen === 'Home') setCurrentScreen('LandingLatestScreen')
    else setCurrentScreen('Home')
  }
  const CurrentComponent =
    currentScreen === 'Home' ? HomeScreen : LandingLatestScreen
  return <CurrentComponent onButtonClick={handleButtonClick} />
}
