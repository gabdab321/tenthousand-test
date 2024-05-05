import * as React from "react"
import Svg, { Path } from "react-native-svg"
const LogoutSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            stroke="#009E81"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.6}
            d="M14.349 7.366v-.882A3.484 3.484 0 0 0 10.864 3H6.255a3.484 3.484 0 0 0-3.483 3.484v10.524a3.484 3.484 0 0 0 3.483 3.484h4.619a3.475 3.475 0 0 0 3.475-3.474v-.892M20.772 11.746H9.387M18.003 8.99l2.769 2.755-2.769 2.758"
        />
    </Svg>
)
export default LogoutSVG
