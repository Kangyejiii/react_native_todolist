import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent() {
  return (
    <Svg width={15} height={20} viewBox="0 0 15 20" fill="none">
      <Path
        opacity={0.3}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.21 1.286h3c.435 0 .79.385.79.857v2.143H0V2.143c0-.472.355-.857.79-.857h3l.828-.9C4.816.129 5.132 0 5.448 0h4.105c.315 0 .592.129.829.386l.829.9zM2.688 20c-1.123 0-2.005-.917-2.005-2.083V5h13.636v12.917c0 1.166-.882 2.083-2.005 2.083H2.687z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgComponent;
