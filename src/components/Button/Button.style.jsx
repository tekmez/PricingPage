import { StyleSheet } from 'react-native'

const styles = {
  primary: StyleSheet.create({
    button: {
      backgroundColor: '#40A2E3',
      paddingVertical: 12,
      paddingHorizontal: 50,
      borderRadius: 8,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
      fontFamily: 'Inter-Regular',
    },
  }),
  secondary: StyleSheet.create({
    button: {
      backgroundColor: '#333333',
      paddingVertical: 12,
      paddingHorizontal: 100,
      borderRadius: 8,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center',
      fontFamily: 'Inter-Regular',
    },
  }),
}

export default styles
