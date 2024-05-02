import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const CrowdLendingSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={111}
        height={48}
        fill="none"
        {...props}
    >
        <Circle cx={89} cy={24} r={22} fill="#00B28C" opacity={0.4} />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.467}
            d="m82.583 31.333.098-.628c.176-1.13.855-2.13 1.922-2.542 1.195-.462 2.917-.966 4.75-.966 1.832 0 3.555.504 4.749.966 1.067.413 1.746 1.411 1.922 2.542l.098.628M89.353 24.188a3.76 3.76 0 1 0 0-7.521 3.76 3.76 0 0 0 0 7.521Z"
        />
        <Circle cx={22} cy={24} r={22} fill="#00B28C" opacity={0.4} />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.467}
            d="m15.583 31.333.098-.628c.176-1.13.855-2.13 1.922-2.542 1.194-.462 2.917-.966 4.75-.966 1.832 0 3.555.504 4.749.966 1.067.413 1.746 1.411 1.922 2.542l.098.628M22.353 24.188a3.76 3.76 0 1 0 0-7.521 3.76 3.76 0 0 0 0 7.521Z"
        />
        <Circle cx={55} cy={24} r={24} fill="#00B28C" />
        <Path
            fill="#fff"
            d="M64.754 25.63h-.123l-8.923 1.724-3.077-1.23 4.061-1.047c.493-.123.862-.554.862-1.046s-.43-.985-.985-1.046l-3.692.061a3.59 3.59 0 0 1-1.6-.37c-.923-.43-1.785-.676-2.585-.676-.615 0-1.292.123-1.723.308-.417.208-1.1.726-1.672 1.142a.713.713 0 0 0-.297.576v4.94a1 1 0 0 0 .837.987l9.624 1.585c.124.062.431.062.554.062.37 0 .677-.062.985-.185l8.246-3.63c.554-.247.8-.862.616-1.416a1.216 1.216 0 0 0-1.108-.738Z"
        />
        <Circle
            cx={59.5}
            cy={18.5}
            r={2.8}
            fill="#fff"
            stroke="#6ED4BE"
            strokeWidth={0.6}
        />
    </Svg>
)
export default CrowdLendingSVG
