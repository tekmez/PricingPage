import React from 'react'
import { TouchableOpacity } from 'react-native'
import CloseIcon from '../../../assets/svg/close.svg'
import styles from './Close.style'

const Close = ({ onPress }) => {
  return (
    <TouchableOpacity
      testID="close-button"
      style={styles.container}
      onPress={onPress}
    >
      <CloseIcon width={36} height={36} />
    </TouchableOpacity>
  )
}

export default Close
