import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ProfileSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={27}
        height={27}
        fill="none"
        {...props}
    >
        <Path
            stroke={props.color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.688}
            d="m4.412 23.132.12-.772c.239-1.534 1.161-2.89 2.61-3.446 1.578-.605 3.832-1.256 6.228-1.256s4.65.65 6.227 1.256c1.45.556 2.371 1.912 2.61 3.446l.12.772M13.369 13.679a4.976 4.976 0 1 0 0-9.953 4.976 4.976 0 0 0 0 9.953Z"
        />
    </Svg>
)
export default ProfileSVG
