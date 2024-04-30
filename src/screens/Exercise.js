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

  challenge_box: {
    paddingTop: 30,
    paddingBottom: 30,
  },

  upcoming_exercise_container: {
    paddingBottom: 120,
  },

  upcoming_exercise: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default function Exercise() {
  const hasChallenge = false;
  return hasChallenge ? <ChallengeProgress /> : <ChallengeSelection />;
}

function ChallengeSelection() {
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

function ChallengeProgress() {
  return (
    <View>
      <NavbarTop />
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Your Challenge Progress</Text>
        <ChallengeProgressBar />
        <Text style={styles.text}>Upcoming Exercises</Text>
        <View style={styles.upcoming_exercise_container}>
          <View style={styles.upcoming_exercise}>
            <UpcomingExercise
              name="Push-Ups"
              exercise_icon={require("../../assets/Push-Ups.jpg")}
            />
          </View>
          <View style={styles.upcoming_exercise}>
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
