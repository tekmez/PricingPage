import React from 'react'
import { Dimensions, View } from 'react-native'
import Close from './Close'
import HeaderLogo from '../../assets/svg/headerLogo.svg'

const Header = ({ onPress }) => {
  const originalWidth = 393
  const originalHeight = 160
  const aspectRatio = originalWidth / originalHeight
  const windowWidth = Dimensions.get('window').width
  return (
    <View>
      <HeaderLogo width={windowWidth} height={190} aspectRatio={aspectRatio} />
      <Close onPress={onPress} />
    </View>
  )
}

export default Header
