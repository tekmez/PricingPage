import React from 'react'
import Price from './Price'
import { View } from 'react-native'
import styles from './Price.style'
const PriceList = () => {
  const prices = [
    {
      title: 'YEARLY ACCESS',
      saving: 'SAVE %89',
      price: '$0,11/day',
      boldPrice: '$39.99/year',
      theme: 'primary',
      selected: false,
    },
    {
      title: '30-DAY FREE TRIAL',
      saving: '',
      price: '',
      boldPrice: 'then $6.99/week',
      theme: 'secondary',
      selected: true,
    },
  ]
  return (
    <View style={styles.listContainer}>
      {prices.map((price, index) => (
        <Price key={index} {...price} />
      ))}
    </View>
  )
}

export default PriceList
