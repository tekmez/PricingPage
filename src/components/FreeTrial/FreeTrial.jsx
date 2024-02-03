import { Text, View } from 'react-native'
import styles from './FreeTrial.style'
import CustomSwitch from '../Switch'
const FreeTrial = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text testID="free-trial-light-title" style={styles.lightText}>
          not sure yet ?
        </Text>
        <Text testID="free-trial-regular-title" style={styles.regularText}>
          Enable Free Trial
        </Text>
      </View>
      <CustomSwitch />
    </View>
  )
}

export default FreeTrial
