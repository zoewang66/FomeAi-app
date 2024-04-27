import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Home = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#264C92"
      d="M9.398 1.29a.563.563 0 0 0-.796 0l-6.75 6.75a.56.56 0 0 0-.165.398v7.874c0 .311.252.563.563.563h5.063c.31 0 .562-.252.562-.562v-4.5h2.25v4.5c0 .31.252.562.563.562h5.062c.31 0 .563-.252.563-.562V8.438c0-.15-.06-.293-.165-.398l-1.523-1.523V2.812a.56.56 0 0 0-.562-.562h-1.126a.56.56 0 0 0-.562.563v1.454zM2.813 15.75V8.67L9 2.484l6.188 6.188v7.079H11.25v-4.5a.56.56 0 0 0-.562-.562H7.312a.56.56 0 0 0-.562.562v4.5z"
    />
  </Svg>
);
export default Home;
