import { useFonts } from 'expo-font'

export const loadFonts = () => {
  return useFonts({
    'Inter-Regular': require('../../assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('../../assets/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('../../assets/fonts/Inter-Medium.ttf'),
  })
}
