import ChallengeBox from "../components/ChallengeBox";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import NavbarBottom from "../components/Navbar-bottom";
import ChallengeProgressBar from "../components/ChallengeProgressBar";
import UpcomingExercise from "../components/UpcomingExercise";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4EBEE",
    justifyContent: "space-around",
    paddingBottom: 50,
  },

  navbarWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  contentContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    width: 350,
    flexShrink: 0,
    paddingLeft: 40,
    height: 680,
  },

  text: {
    color: "#3C80E6",
    fontSize: 26,
    fontStyle: "normal",
    fontWeight: "400",
    paddingTop: 20,
  },

  challengeBox: {
    paddingTop: 25,
    paddingBottom: 20,
  },

  upcomingExerciseContainer: {
    paddingBottom: 250,
  },

  upcomingExercise: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});

const hasChallenge = false;

export default function ExercisePage({ navigation }) {
  return hasChallenge ? (
    <ChallengeProgress navigation={navigation} />
  ) : (
    <ChallengeSelection navigation={navigation} />
  );
}

function ChallengeSelection({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>What Do You Want to Test</Text>
          <View style={styles.challengeBox}>
            <ChallengeBox
              challenge_name="Cardio Challenge"
              challenge_info="4 Exercises | 6mins"
              challenge_icon={require("../../assets/Cardio_Challenge_Icon.png")}
              navigation={navigation}
            />
          </View>

          <View style={styles.challengeBox}>
            <ChallengeBox
              style={styles.challengeBox}
              challenge_name="Strength Challenge"
              challenge_info="4 Exercises | 6mins"
              challenge_icon={require("../../assets/Strength_Challenge_Icon.png")}
              navigation={navigation}
            />
          </View>

          <View style={styles.challengeBox}>
            <ChallengeBox
              style={styles.challengeBox}
              challenge_name="Hybrid Challenge"
              challenge_info="4 Exercises | 6mins"
              challenge_icon={require("../../assets/Hybrid_Challenge_Icon.png")}
              navigation={navigation}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.navbarWrapper}>
        <NavbarBottom />
      </View>
    </View>
  );
}

function ChallengeProgress({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Your Challenge Progress</Text>
        <ChallengeProgressBar />
        <Text style={styles.text}>Upcoming Exercises</Text>
        <View style={styles.upcomingExerciseContainer}>
          <View style={styles.upcomingExercise}>
            <UpcomingExercise
              name="Push-Ups"
              exercise_icon={require("../../assets/Push-Ups.jpg")}
              navigation={navigation}
            />
          </View>
          <View style={styles.upcomingExercise}>
            <UpcomingExercise
              name="Plank"
              exercise_icon={require("../../assets/Plank_Icon.jpg")}
              navigation={navigation}
            />
          </View>
        </View>
      </View>
      {/* </ScrollView> */}

      <NavbarBottom />
    </View>
  );
}
