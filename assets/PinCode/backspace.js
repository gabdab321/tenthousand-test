import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BackspaceSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={23}
        height={17}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            d="M10.714 6.025a.75.75 0 0 1 1.061-1.06l2.475 2.474 2.475-2.475a.75.75 0 1 1 1.06 1.061L15.31 8.5l2.475 2.475a.75.75 0 1 1-1.06 1.06L14.25 9.562l-2.475 2.475a.75.75 0 1 1-1.06-1.061L13.188 8.5l-2.475-2.475Z"
        />
        <Path
            fill="#000"
            fillRule="evenodd"
            d="M7.621.879 0 8.5l7.621 7.621A3 3 0 0 0 9.743 17H20a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H9.743A3 3 0 0 0 7.62.879ZM20 15.7H9.743a1.7 1.7 0 0 1-1.202-.498L1.838 8.5l6.703-6.702A1.7 1.7 0 0 1 9.743 1.3H20A1.7 1.7 0 0 1 21.7 3v11a1.7 1.7 0 0 1-1.7 1.7Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default BackspaceSVG
