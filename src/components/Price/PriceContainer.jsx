import React from 'react'
import { Text, View } from 'react-native'
import PriceBadge from '../PriceBadge'
import styles from './Price.style'

const PriceContainer = ({ saving, title, price, boldPrice }) => {
  return (
    <View>
      {saving && <PriceBadge title={saving} />}
      <Text testID="price-container-title" style={styles.title}>
        {title}
      </Text>
      <View style={styles.priceContainer}>
        {price && (
          <Text testID="light-price-title" style={styles.lightPrice}>
            {price}
          </Text>
        )}
        <Text testID="bold-price-title" style={styles.boldPrice}>
          {boldPrice}
        </Text>
      </View>
    </View>
  )
}

export default PriceContainer
