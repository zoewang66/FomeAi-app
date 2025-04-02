import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import NavbarBottom from "../components/Navbar-bottom";
import ChallengeBox from "../components/ChallengeBox";
import ChallengeProgressBar from "../components/ChallengeProgressBar";
import UpcomingExercise from "../components/UpcomingExercise";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#E4EBEE",
    justifyContent: "space-around",
    paddingBottom: 110,
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
    paddingLeft: 35,
    height: 680,
  },
  greetingText: {
    alignSelf: "flex-start",
    fontSize: 35,
    paddingTop: 50,
  },
  userName: {
    alignSelf: "flex-start",
    fontSize: 35,
    color: "#3C80E6",
    paddingBottom: 20,
  },
  message: {
    alignSelf: "flex-start",
    paddingTop: 10,
    paddingBottom: 25,
    fontSize: 16,
  },
  challengeBox: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  hasExerciseText: {
    color: "#472938",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 25,
    paddingTop: 20,
  },
  upcomingExercise: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default function HomePage({ navigation }) {
  const [hasChallenge, setHasChallenge] = useState(false);

  useEffect(() => {
    const getUserStatus = async () => {
      try {
        const value = await AsyncStorage.getItem("isNewUser");
        // Set hasChallenge to true only if value is "true"
        setHasChallenge(value === "true");
      } catch (error) {
        console.error("Error retrieving user status", error);
      }
    };

    getUserStatus();
  }, []);

  const currentTime = new Date().getHours();
  let greeting;

  if (currentTime <= 12) {
    greeting = "Good Morning";
  } else if (currentTime <= 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  const userName = "Zoe W";

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.greetingText}>{greeting}!</Text>
        <Text style={styles.userName}>{userName}</Text>
        {hasChallenge ? (
          <HomeHasExercise navigation={navigation} />
        ) : (
          <HomeNoExercise navigation={navigation} />
        )}
      </ScrollView>
      <View style={styles.navbarWrapper}>
        <NavbarBottom />
      </View>
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

function HomeHasExercise({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        navigate={navigation}
        onPress={() => navigation.navigate("Score")}
      >
        <Image source={require("../../assets/WeeklyScore.png")} />
      </TouchableOpacity>
      <Text style={styles.hasExerciseText}>Your Challenge Progress</Text>
      <ChallengeProgressBar />
      <Text style={styles.hasExerciseText}>Upcoming Exercises</Text>
      <View style={styles.container}>
        <View style={styles.upcomingExercise}>
          <UpcomingExercise
            name="Push-Ups"
            navigation={navigation}
            exercise_icon={require("../../assets/Push-Ups.jpg")}
          />
        </View>
        <View style={styles.upcomingExercise}>
          <UpcomingExercise
            name="Plank"
            navigation={navigation}
            exercise_icon={require("../../assets/Plank_Icon.jpg")}
          />
        </View>
      </View>
    </View>
  );
}
