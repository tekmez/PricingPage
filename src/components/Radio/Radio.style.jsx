import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonSelected: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000',
  },
  radioButtonUnselected: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E7E8E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default styles
