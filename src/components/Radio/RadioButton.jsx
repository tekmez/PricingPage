import React from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import styles from './Radio.style'
import CheckIcon from '../../../assets/svg/checkIcon.svg'
const RadioButton = ({ isEnabled, setIsEnabled }) => {
  const onSelect = () => {
    setIsEnabled((previousState) => !previousState)
  }
  return (
    <TouchableWithoutFeedback testID="radio-button" onPress={onSelect}>
      <View testID="radio-container" style={styles.radioButtonContainer}>
        <View
          testID="radio-button-style"
          style={
            isEnabled
              ? styles.radioButtonSelected
              : styles.radioButtonUnselected
          }
        >
          {isEnabled && <CheckIcon width={14} height={14} />}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default RadioButton
