import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const BronzeHexagon = ({ children }) => {
  return (
    <View style={styles.container}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={55}
        height={49}
        fill="#C0C0C0"
        viewBox="0 0 55 49"
      >
        <Path
          d="M3.76796 26.6507C3.34729 25.9222 3.13696 25.5577 3.05464 25.1704C2.98179 24.8277 2.98179 24.4736 3.05464 24.1309C3.13696 23.7437 3.34729 23.3792 3.76796 22.6507L13.9586 5C14.3792 4.2714 14.5895 3.9071 14.8838 3.64215C15.1442 3.40773 15.4509 3.23062 15.7841 3.12237C16.1607 3 16.5813 3 17.4227 3H37.8038C38.6453 3 39.0658 3 39.4425 3.12237C39.7755 3.23062 40.0823 3.40773 40.3428 3.64215C40.637 3.9071 40.8473 4.2714 41.268 5L51.4585 22.6507C51.8793 23.3792 52.0895 23.7437 52.1718 24.1309C52.2448 24.4736 52.2448 24.8277 52.1718 25.1704C52.0895 25.5577 51.8793 25.9222 51.4585 26.6507L41.268 44.3014C40.8473 45.0299 40.637 45.3941 40.3428 45.6591C40.0823 45.8937 39.7755 46.0707 39.4425 46.1789C39.0658 46.3014 38.6453 46.3014 37.8038 46.3014H17.4227C16.5813 46.3014 16.1607 46.3014 15.7841 46.1789C15.4509 46.0707 15.1442 45.8937 14.8838 45.6591C14.5895 45.3941 14.3792 45.0299 13.9586 44.3014L3.76796 26.6507Z"
          fill="#CD7F32"
          stroke="black"
          strokeWidth="5"
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
    width: 55,
    height: 49,
    marginTop: 3,
  },
  textContainer: {
    position: "absolute",
    top: "40%",
    left: "49%",
    transform: [{ translateX: -10 }, { translateY: -6 }],
  },
});

export default BronzeHexagon;

