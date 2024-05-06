import * as React from "react"
import Svg, { Circle } from "react-native-svg"
const UnActiveSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        {...props}
    >
        <Circle cx={16} cy={16} r={16} fill="#EBEFF5" />
    </Svg>
)
export default UnActiveSVG
