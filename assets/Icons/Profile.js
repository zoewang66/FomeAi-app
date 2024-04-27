import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Profile = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <G fill="#264C92">
      <Path d="M12.375 6.75a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0" />
      <Path
        fillRule="evenodd"
        d="M0 9a9 9 0 1 1 18 0A9 9 0 0 1 0 9m9-7.875a7.875 7.875 0 0 0-6.152 12.792c.8-1.289 2.557-2.667 6.152-2.667s5.352 1.378 6.152 2.667A7.875 7.875 0 0 0 9 1.125"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default Profile;