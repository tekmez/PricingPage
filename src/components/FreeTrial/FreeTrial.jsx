import { Text, View } from 'react-native'
import styles from './FreeTrial.style'
import CustomSwitch from '../Switch'
const FreeTrial = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.lightText}>not sure yet ?</Text>
        <Text style={styles.regularText}>Enable Free Trial</Text>
      </View>
      <CustomSwitch />
    </View>
  )
}

export default FreeTrial
