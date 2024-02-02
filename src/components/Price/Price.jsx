import React, { useState } from 'react'
import { View } from 'react-native'
import styles from './Price.style'
import RadioButton from '../Radio'
import PriceContainer from './PriceContainer'
const Price = ({ title, saving, price, boldPrice, theme, selected }) => {
  const [isEnabled, setIsEnabled] = useState(selected)
  return (
    <View
      style={[
        styles.container,
        theme === 'primary' ? styles.primaryBorder : styles.secondaryBorder,
      ]}
    >
      <PriceContainer
        saving={saving}
        title={title}
        price={price}
        boldPrice={boldPrice}
      />
      <RadioButton isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
    </View>
  )
}

export default Price
