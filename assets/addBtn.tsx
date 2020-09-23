import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function SvgComponent() {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 12.5V22h3v-9.5H22v-3h-9.5V0h-3v9.5H0v3h9.5z"
        fill="#3498db"
      />
    </Svg>
  );
}
