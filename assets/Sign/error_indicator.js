import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ErrorSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            stroke="#D63C41"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        />
        <Path
            stroke="#D63C41"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.25 11.25H12v5.25h.75"
        />
        <Path
            fill="#D63C41"
            d="M12 9a1.125 1.125 0 1 0 0-2.25A1.125 1.125 0 0 0 12 9Z"
        />
    </Svg>
)
export default ErrorSVG
