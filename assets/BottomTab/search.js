import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SearchSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={27}
        height={27}
        fill="none"
        {...props}
    >
        <Path
            fill={props.color}
            fillRule="evenodd"
            d="M5.063 12.88a7.903 7.903 0 1 1 15.806 0 7.903 7.903 0 0 1-15.806 0Zm7.903-9.59a9.59 9.59 0 0 0 0 19.181 9.552 9.552 0 0 0 6.16-2.239l3.085 3.085a.844.844 0 1 0 1.193-1.193l-3.086-3.085a9.552 9.552 0 0 0 2.238-6.158 9.59 9.59 0 0 0-9.59-9.591Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default SearchSVG
