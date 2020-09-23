import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgComponent() {
  return (
    <Svg width="22" height="22" viewBox="0 0 28 28" fill="none">
      <Circle cx={14} cy={14} r={14} fill="#3498db" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.81 13.27l3.61 2.63L18.59 8 21 9.76c-5.42 6.95-2.56 3.29-7.98 10.24-2.03-1.46-3.99-2.93-6.02-4.39l1.81-2.34z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
