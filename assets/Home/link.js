import * as React from "react"
import Svg, { Path } from "react-native-svg"
const LinkSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            stroke={props.stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15.375 7.875H18a4.125 4.125 0 0 1 0 8.25h-2.625M8.625 16.125H6a4.125 4.125 0 1 1 0-8.25h2.625"
        />
        <Path
            stroke={props.stroke}
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M9.5 12H15"
        />
    </Svg>
)
export default LinkSVG
