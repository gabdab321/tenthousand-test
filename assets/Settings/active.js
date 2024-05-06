import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const ActiveSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        {...props}
    >
        <Circle cx={16} cy={16} r={16} fill="#00B28C" />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth={2}
            d="m10.667 15.474 4.15 3.854a.008.008 0 0 0 .01 0L22 12"
        />
    </Svg>
)
export default ActiveSVG
