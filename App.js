import HomeScreen from './src/screens/HomeScreen'
import { useState } from 'react'
import LandingLatestScreen from './src/screens/LandingLatestScreen'
import { useFonts } from 'expo-font'

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home')
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
  })
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
