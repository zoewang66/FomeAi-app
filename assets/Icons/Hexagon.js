import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const Hexagon = ({ children }) => {
  return (
    <View style={styles.container}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={47}
        height={41}
        fill="none"
        viewBox="0 0 47 41"
      >
      <Path
        d="M3.63962 22.1165C3.28925 21.5277 3.11407 21.2331 3.04551 20.9201C2.98483 20.643 2.98483 20.3569 3.04551 20.0799C3.11407 19.7668 3.28925 19.4722 3.63962 18.8834L12.1272 4.61658C12.4776 4.02766 12.6527 3.7332 12.8978 3.51904C13.1147 3.32956 13.3702 3.18641 13.6477 3.09891C13.9613 3 14.3117 3 15.0124 3H31.9875C32.6884 3 33.0386 3 33.3524 3.09891C33.6298 3.18641 33.8852 3.32956 34.1022 3.51904C34.3473 3.7332 34.5224 4.02766 34.8728 4.61658L43.3603 18.8834C43.7108 19.4722 43.8859 19.7668 43.9544 20.0799C44.0152 20.3569 44.0152 20.643 43.9544 20.9201C43.8859 21.2331 43.7108 21.5277 43.3603 22.1165L34.8728 36.3834C34.5224 36.9723 34.3473 37.2667 34.1022 37.4809C33.8852 37.6704 33.6298 37.8135 33.3524 37.901C33.0386 38 32.6884 38 31.9875 38H15.0124C14.3117 38 13.9613 38 13.6477 37.901C13.3702 37.8135 13.1147 37.6704 12.8978 37.4809C12.6527 37.2667 12.4776 36.9723 12.1272 36.3834L3.63962 22.1165Z" 
        fill="#DBFFA2"
        stroke="black" 
        stroke-width="5" 
        stroke-linejoin="round"
      />
      </Svg>
      <View style={styles.textContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 47,
    height: 41,
    marginTop: 3,
  },
  textContainer: {
    position: "absolute",
    top: "40%",
    left: "49%",
    transform: [{ translateX: -10 }, { translateY: -6 }],
  },
});

export default Hexagon;

