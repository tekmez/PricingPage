import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 8,
    gap: 12,
  },
  container: {
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  primaryBorder: {
    borderWidth: 1,
    borderColor: '#E7E8E9',
  },
  secondaryBorder: {
    borderWidth: 2,
    borderColor: '#FF0000',
  },
  title: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#717578',
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  priceContainer: {
    flexDirection: 'row',
    gap: 6,
  },
  lightPrice: {
    fontSize: 12,
    color: '#717578',
    fontFamily: 'Inter-Regular',
    lineHeight: 16,
  },
  boldPrice: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Inter-Bold',
    lineHeight: 16,
  },
})

export default styles
