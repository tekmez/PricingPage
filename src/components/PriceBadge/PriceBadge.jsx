import { Text, View } from 'react-native'
import styles from './PriceBadge.style'
const PriceBadge = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default PriceBadge
