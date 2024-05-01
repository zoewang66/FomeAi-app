import { View, Text, Image, StyleSheet } from "react-native";
import NavbarBottom from "../components/Navbar-bottom";
import ChallengeBox from "../components/ChallengeBox";
import ChallengeProgressBar from "../components/ChallengeProgressBar";
import UpcomingExercise from "../components/UpcomingExercise";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E4EBEE",
  },

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

  greetingText: {
    alignSelf: "flex-start",
    fontSize: 35,
  },

  userName: {
    alignSelf: "flex-start",
    fontSize: 45,
    color: "#F90A0A",
    paddingBottom: 20,
  },

  message: {
    alignSelf: "flex-start",
    paddingTop: 10,
    paddingBottom: 25,
    fontSize: 15,
  },

  challengeBox: {
    paddingTop: 10,
    paddingBottom: 10,
  },

  hasExerciseText: {
    color: "#472938",
    // fontFamily: 'Alice',
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    paddingTop: 20,
  },

  upcomingExercise: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});

const hasChallenge = false;

export default function HomePage({ navigation }) {
  const currentTime = new Date().getHours();
  let greeting;

  if (currentTime < 12) {
    greeting = "Good Morning";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  const userName = "Dylan";

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.greetingText}>{greeting}!</Text>
        <Text style={styles.userName}>{userName}</Text>
        {hasChallenge ? (
          <HomeHasExercise navigation={navigation} />
        ) : (
          <HomeNoExercise navigation={navigation} />
        )}
      </View>
      <NavbarBottom />
    </View>
  );
}

function HomeNoExercise({ navigation }) {
  return (
    <View>
      <Text style={styles.message}>
        Pick One Challenge to Start Your Journey!
      </Text>
      <View style={styles.trendingChallengeContainer}>
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
    </View>
  );
}

function HomeHasExercise() {
  return (
    <View>
      <Image source={require("../../assets/WeeklyScore.png")} />
      <Text style={styles.hasExerciseText}>Your Challenge Progress</Text>
      <ChallengeProgressBar />
      <Text style={styles.hasExerciseText}>Upcoming Exercises</Text>
      <View>
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
  );
}
