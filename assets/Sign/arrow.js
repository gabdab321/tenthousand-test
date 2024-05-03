import * as React from "react"
const ArrowSVG = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke="#06070A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m15.436 5-6.873 7 6.873 7"
        />
    </svg>
)
export default ArrowSVG
