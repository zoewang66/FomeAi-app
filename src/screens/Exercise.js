import ChallengeBox from "../components/ChallengeBox";
import { View, Text, StyleSheet } from "react-native";
import NavbarBottom from "../components/Navbar-bottom";
import NavbarTop from "../components/Navbar-top";
import ChallengeProgressBar from "../components/ChallengeProgressBar";
import UpcomingExercise from "../components/UpcomingExercise";

const styles = StyleSheet.create({
  contentContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    width: 350,
    flexShrink: 0,
    paddingLeft: 50,
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

  challengeBox: {
    paddingTop: 30,
    paddingBottom: 30,
  },

  upcomingExerciseContainer: {
    paddingBottom: 120,
  },

  upcomingExercise: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});

const hasChallenge = false;

export default function Exercise() {
  return hasChallenge ? <ChallengeProgress /> : <ChallengeSelection />;
}

function ChallengeSelection() {
  return (
    <View>
      <NavbarTop />
      <View style={styles.contentContainer}>
        <Text style={styles.text}>What Do You Want to Test</Text>
        <View style={styles.challengeBox}>
          <ChallengeBox
            challenge_name="Cardio Challenge"
            challenge_info="4 Exercises | 6mins"
            challenge_icon={require("../../assets/Cardio_Challenge_Icon.png")}
          />
        </View>

        <View style={styles.challengeBox}>
          <ChallengeBox
            style={styles.challengeBox}
            challenge_name="Strength Challenge"
            challenge_info="4 Exercises | 6mins"
            challenge_icon={require("../../assets/Strength_Challenge_Icon.png")}
          />
        </View>

        <View style={styles.challengeBox}>
          <ChallengeBox
            style={styles.challengeBox}
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

function ChallengeProgress() {
  return (
    <View>
      <NavbarTop />
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Your Challenge Progress</Text>
        <ChallengeProgressBar />
        <Text style={styles.text}>Upcoming Exercises</Text>
        <View style={styles.upcomingExerciseContainer}>
          <View style={styles.upcomingExercise}>
            <UpcomingExercise
              name="Push-Ups"
              exercise_icon={require("../../assets/Push-Ups.jpg")}
            />
          </View>
          <View style={styles.upcomingExercise}>
            <UpcomingExercise
              name="Plank"
              exercise_icon={require("../../assets/Plank_Icon.jpg")}
            />
          </View>
        </View>
      </View>
      <NavbarBottom />
    </View>
  );
}
