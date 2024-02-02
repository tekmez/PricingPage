import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#FFF5F5',
    borderWidth: 2,
    borderColor: '#FF0000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lightText: {
    fontFamily: 'Inter-Medium',
    color: '#717578',
    fontSize: 12,
    lineHeight: 16,
  },
  regularText: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    lineHeight: 20,
  },
})

export default styles
