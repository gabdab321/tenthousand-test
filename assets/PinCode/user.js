import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const UserSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
        fill="none"
        {...props}
    >
        <Circle cx={25} cy={25} r={24} fill="#F2FAF7" stroke="#E9F7F2" />
        <Path
            stroke="#009E81"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.6}
            d="m18 33 .107-.686c.192-1.233.933-2.322 2.096-2.773 1.303-.504 3.182-1.054 5.182-1.054 1.999 0 3.878.55 5.18 1.054 1.165.451 1.906 1.54 2.098 2.773l.106.686M25.385 25.205a4.103 4.103 0 1 0 0-8.205 4.103 4.103 0 0 0 0 8.205Z"
        />
    </Svg>
)
export default UserSVG
