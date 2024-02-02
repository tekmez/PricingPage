import { Text, View } from 'react-native'
import ShieldIcon from '../../../assets/svg/shieldIcon.svg'
import styles from './Payment.style'
const Payment = () => {
  return (
    <View style={styles.container}>
      <ShieldIcon width={16} height={16} />
      <Text style={styles.text}>NO PAYMENT NOW</Text>
    </View>
  )
}

export default Payment
