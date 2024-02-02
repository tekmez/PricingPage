import React from 'react'
import { Text, View } from 'react-native'
import styles from './Footer.style'
import Link from '../Link'
const Footer = () => {
  const footerLinks = [
    {
      title: 'Privacy Policy',
      url: 'https://www.google.com',
    },
    {
      title: 'Terms of Service',
      url: 'https://www.google.com',
    },
    {
      title: 'Restore',
      url: 'https://www.google.com',
    },
  ]
  return (
    <View style={styles.container}>
      {footerLinks.map((link, index) => (
        <React.Fragment key={index}>
          <Link url={link.url} title={link.title} />
          {index < footerLinks.length - 1 && (
            <Text style={styles.link}> - </Text>
          )}
        </React.Fragment>
      ))}
    </View>
  )
}

export default Footer
