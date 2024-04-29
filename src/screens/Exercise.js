import ChallengeBox from "../components/ChallengeBox";
import { View, Text, StyleSheet } from "react-native";
import NavbarBottom from "../components/Navbar-bottom";
import NavbarTop from "../components/Navbar-top";

const styles = StyleSheet.create({
  contentContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    width: 310,
    flexShrink: 0,
    paddingLeft: 70,
    height: 680,
  },

  text: {
    color: "#472938",
    // fontFamily: 'Alice',
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    paddingTop: 20,
  },

  challenge_box: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default function ChallengeSelection() {
  return (
    <View>
      <NavbarTop />
      <View style={styles.contentContainer}>
        <Text style={styles.text}>What Do You Want to Test</Text>
        <View style={styles.challenge_box}>
          <ChallengeBox
            challenge_name="Cardio Challenge"
            challenge_info="4 Exercises | 6mins"
            challenge_icon={require("../../assets/Cardio_Challenge_Icon.png")}
          />
        </View>

        <View style={styles.challenge_box}>
          <ChallengeBox
            style={styles.challenge_box}
            challenge_name="Strength Challenge"
            challenge_info="4 Exercises | 6mins"
            challenge_icon={require("../../assets/Strength_Challenge_Icon.png")}
          />
        </View>

        <View style={styles.challenge_box}>
          <ChallengeBox
            style={styles.challenge_box}
            challenge_name="Hybrid Challenge"
            challenge_info="4 Exercises | 6mins"
            challenge_icon={require("../../assets/Hybrid_Challenge_Icon.png")}
          />
        </View>
      </View>
      <NavbarBottom />
    </View>
  );
}
