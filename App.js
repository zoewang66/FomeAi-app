import React from "react";
import WelcomeScreen from "./src/screens/Welcome";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import { ChallengeBox } from "./src/components/ChallengeBox";
import UpcomingExercise from "./src/components/UpcomingExercise";

export default function App() {
  return (
    <WelcomeScreen />
    // <SafeAreaView style={styles.safeArea}>
    //   <UpcomingExercise name="Push-Ups" />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#E4EBEE",
  },
});
