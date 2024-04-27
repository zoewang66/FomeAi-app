import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Vector = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={11}
    fill="none"
    {...props}
  >
    <Path
      fill="#CDFFF9"
      fillRule="evenodd"
      d="M10.282.37q.106.057.163.13a.25.25 0 0 1 .058.154.25.25 0 0 1-.058.153.5.5 0 0 1-.163.13l-8.47 4.519 8.47 4.518c.141.075.22.177.22.284s-.079.208-.22.283a1.16 1.16 0 0 1-.53.117c-.2 0-.39-.042-.532-.117l-9-4.802a.5.5 0 0 1-.163-.13A.25.25 0 0 1 0 5.456q0-.08.057-.154a.5.5 0 0 1 .163-.13l9-4.802a1 1 0 0 1 .244-.087 1.3 1.3 0 0 1 .575 0c.09.02.174.05.243.087"
      clipRule="evenodd"
    />
  </Svg>
);
export default Vector;
