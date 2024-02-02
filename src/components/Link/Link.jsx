import { Linking, Text, TouchableOpacity } from 'react-native'
import styles from './Link.style'
const Link = ({ url, title }) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(url)}>
      <Text style={styles.link}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Link
