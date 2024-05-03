import * as React from "react"
import Svg, {Path} from "react-native-svg";
const ArrowSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={100}
        height={100}
        fill="none"
        {...props}
    >
        <Path
            stroke="#06070A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m15.436 5-6.873 7 6.873 7"
        />
    </Svg>
)
export default ArrowSVG
