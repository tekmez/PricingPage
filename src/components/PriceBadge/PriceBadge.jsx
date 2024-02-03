import { Text, View } from 'react-native'
import styles from './PriceBadge.style'
const PriceBadge = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text testID="price-title" style={styles.title}>
        {title}
      </Text>
    </View>
  )
}

export default PriceBadge
