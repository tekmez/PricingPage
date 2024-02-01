import React from 'react'
import { Button, View } from 'react-native'
import HeaderLogo from './SvgComponents/HeaderLogo'
import CloseIcon from './SvgComponents/CloseIcon'

const Header = ({ onPress }) => {
  return (
    <View>
      <HeaderLogo />
      <CloseIcon onPress={onPress} />
    </View>
  )
}

export default Header
