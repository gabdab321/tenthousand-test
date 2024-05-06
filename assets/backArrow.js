import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BackArrowSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            stroke="#606773"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m15.436 5-6.873 7 6.873 7"
        />
        <Path
            stroke="#606773"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m15.436 5-6.873 7 6.873 7"
        />
    </Svg>
)
export default BackArrowSVG
