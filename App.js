import React from "react";
import WelcomeScreen from "./src/screens/Welcome";
import { ChallengeBox } from "./src/components/ChallengeBox";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    // <WelcomeScreen />
    <SafeAreaView style={styles.safeArea}>
      <ChallengeBox
        exercise_title="Cardio Challenge"
        exercise_info="4 Exercises | 6mins"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
