import { Linking, Text, TouchableOpacity } from 'react-native'
import styles from './Link.style'
const Link = ({ url, title }) => {
  return (
    <TouchableOpacity testID="link" onPress={() => Linking.openURL(url)}>
      <Text testID="link-title" style={styles.link}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Link
