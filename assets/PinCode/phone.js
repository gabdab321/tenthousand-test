import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const PhoneSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Rect
            width={12}
            height={18}
            x={6}
            y={3}
            stroke="#00A36D"
            strokeWidth={1.6}
            rx={2.593}
        />
        <Path
            stroke="#00A36D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.6}
            d="M14.666 17.666H9.333"
        />
    </Svg>
)
export default PhoneSVG
