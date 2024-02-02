import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    gap: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderColor: '#E7E8E9',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 20,
  },
  description: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Inter-Regular',
    fontWeight: '400',
    color: '#717578',
  },
})
export default styles
