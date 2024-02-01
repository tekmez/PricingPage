import React from 'react'
import { Platform, StatusBar, StyleSheet, TouchableOpacity } from 'react-native'
import Svg, { Path, ClipPath, Rect, Defs } from 'react-native-svg'
const topAlign = Platform.OS === 'ios' ? 52 : StatusBar.currentHeight
const rightAlign = Platform.OS === 'ios' ? 52 : StatusBar.currentHeight - 12
const CloseIcon = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Rect width="36" height="36" rx="18" fill="black" fillOpacity="0.08" />
        <Defs>
          <ClipPath id="clip0_1_513">
            <Rect
              width="11.2083"
              height="11.2083"
              fill="white"
              transform="translate(12.375 12.375)"
            />
          </ClipPath>
        </Defs>
        <Path
          d="M17.9756 19.3083L13.9756 23.3083C13.8881 23.396 13.7842 23.4656 13.6698 23.5131C13.5554 23.5605 13.4328 23.585 13.3089 23.585C13.1851 23.585 13.0624 23.5605 12.948 23.5131C12.8337 23.4656 12.7297 23.396 12.6423 23.3083C12.4711 23.1286 12.3756 22.8899 12.3756 22.6417C12.3756 22.3935 12.4711 22.1547 12.6423 21.975L16.6423 17.975L12.6423 13.975C12.554 13.8884 12.4848 13.7845 12.4389 13.6697C12.393 13.5549 12.3714 13.4319 12.3756 13.3083C12.3722 13.1848 12.3939 13.0619 12.4396 12.9471C12.4853 12.8323 12.5539 12.7281 12.6413 12.6407C12.7287 12.5533 12.8329 12.4847 12.9477 12.439C13.0625 12.3933 13.1854 12.3716 13.3089 12.375C13.4325 12.3708 13.5555 12.3924 13.6703 12.4383C13.7851 12.4842 13.889 12.5534 13.9756 12.6417L17.9756 16.6417L21.9756 12.6417C22.1073 12.5096 22.2752 12.4197 22.4581 12.3832C22.641 12.3468 22.8306 12.3654 23.0028 12.4368C23.1751 12.5082 23.3223 12.6292 23.4258 12.7843C23.5292 12.9395 23.5843 13.1219 23.5839 13.3083C23.5865 13.4324 23.5635 13.5557 23.5161 13.6704C23.4688 13.7851 23.3983 13.8888 23.3089 13.975L19.3089 17.975L23.3089 21.975C23.4857 22.1518 23.5851 22.3916 23.5851 22.6417C23.5851 22.8917 23.4857 23.1315 23.3089 23.3083C23.1321 23.4851 22.8923 23.5845 22.6423 23.5845C22.3922 23.5845 22.1524 23.4851 21.9756 23.3083L17.9756 19.3083Z"
          fill="white"
        />
      </Svg>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: topAlign,
    right: rightAlign,
  },
})

export default CloseIcon