import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Exercise = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <G fill="#264C92">
      <Path d="M10.688 1.688a1.688 1.688 0 1 1-3.376 0 1.688 1.688 0 0 1 3.375 0M6.75 6.188 1.648 5.69a.598.598 0 0 1 .075-1.19h14.555a.598.598 0 0 1 .074 1.19l-5.102.497v3.938l.508 7.223a.602.602 0 0 1-1.185.196l-1.3-6.328c-.071-.284-.475-.284-.546 0l-1.3 6.328a.602.602 0 0 1-1.185-.196l.508-7.223z" />
    </G>
  </Svg>
);
export default Exercise;

