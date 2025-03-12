import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#FFDC00"
      d="M2.5 9c0-1.886 0-2.828.586-3.414C3.672 5 4.614 5 6.5 5h12c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414 0 .471 0 .707-.146.854-.147.146-.384.146-.854.146h-18c-.471 0-.707 0-.854-.146C2.5 9.707 2.5 9.47 2.5 9Zm0 9c0 1.886 0 2.828.586 3.414C3.672 22 4.614 22 6.5 22h12c1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414v-5c0-.471 0-.707-.146-.854C22.207 12 21.97 12 21.5 12h-18c-.471 0-.707 0-.854.146-.146.147-.146.384-.146.854v5Z"
    />
    <Path
      stroke="#FFDC00"
      strokeLinecap="round"
      strokeWidth={2}
      d="M7.5 3v3m10-3v3"
    />
  </Svg>
)
export default SvgComponent
