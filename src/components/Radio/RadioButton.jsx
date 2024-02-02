import React, { useState } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import styles from './Radio.style'
import CheckIcon from '../../../assets/svg/checkIcon.svg'
const RadioButton = () => {
  const [isEnabled, setIsEnabled] = useState(false)

  const onSelect = () => {
    setIsEnabled((previousState) => !previousState)
  }
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.radioButtonContainer}>
        <View
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
