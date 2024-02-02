import React from 'react'
import { Text, View } from 'react-native'
import PriceBadge from '../PriceBadge'
import styles from './Price.style'

const PriceContainer = ({ saving, title, price, boldPrice }) => {
  return (
    <View>
      {saving && <PriceBadge title={saving} />}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.priceContainer}>
        {price && <Text style={styles.lightPrice}>{price}</Text>}
        <Text style={styles.boldPrice}>{boldPrice}</Text>
      </View>
    </View>
  )
}

export default PriceContainer
