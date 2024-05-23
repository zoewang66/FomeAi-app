
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const No3 = ({ children }) => {
  return (
    <View style={styles.container}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={20}
        fill="none"
        viewBox="-2 0 40 20"
      >
        <Path
          d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" 
          fill="#CD7F32"
          stroke="black"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </Svg>
      <View style={styles.textContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    left: 20,
    width: 20,
    height: 20,
  },
  textContainer: {
    position: "absolute",
    top: "27%",
    left: "70%",
    transform: [{ translateX: -10 }, { translateY: -6 }],
  },
});

export default No3;

