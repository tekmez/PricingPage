import React from 'react'
import { Text, View } from 'react-native'
import styles from './Footer.style'
import Link from '../Link'
const Footer = ({ data }) => {
  return (
    <View testID="footer-container" style={styles.container}>
      {data?.map((link, index) => (
        <React.Fragment key={index}>
          <Link url={link.url} title={link.title} />
          {index < data.length - 1 && <Text style={styles.link}> - </Text>}
        </React.Fragment>
      ))}
    </View>
  )
}

export default Footer
