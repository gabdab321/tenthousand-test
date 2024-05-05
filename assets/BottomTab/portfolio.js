import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const PortfolioSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={27}
        height={27}
        fill="none"
        {...props}
    >
        <Rect
            width={19.375}
            height={15.069}
            x={5.063}
            y={8.201}
            stroke={props.color}
            strokeWidth={1.688}
            rx={3.375}
        />
        <Path
            stroke={props.color}
            strokeLinecap="round"
            strokeWidth={1.8}
            d="M12.596 14.66H16.9"
        />
        <Path
            stroke={props.color}
            strokeWidth={1.8}
            d="M10.445 7.448v-.98a2.25 2.25 0 0 1 2.25-2.25h4.111a2.25 2.25 0 0 1 2.25 2.25v.98"
        />
    </Svg>
)
export default PortfolioSVG
