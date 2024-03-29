import React, { useState } from 'react'
import { Switch } from 'react-native'

const CustomSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(true)

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState)
  }

  return (
    <Switch
      testID="custom-switch"
      trackColor={{ false: '#767577', true: '#21D840' }}
      thumbColor="#fff"
      ios_backgroundColor="#767577"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  )
}

export default CustomSwitch
