import React from "react";
import WelcomeScreen from "./src/screens/Welcome";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import ChallengeDetails from "./src/screens/ChallengeDetails";
import data from "./assets/TestData/StrengthChallenge";

export default function App() {
  return (
    // <WelcomeScreen />
    <SafeAreaView style={styles.safeArea}>
      <ChallengeProgressBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#E4EBEE",
  },
});
