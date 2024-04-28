import React from "react";
import WelcomeScreen from "./src/screens/Welcome";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import ChallengeProgressBar from "./src/components/ChallengeProgressBar";

export default function App() {
  return (
    <WelcomeScreen />
    // <SafeAreaView style={styles.safeArea}>
    //   <ChallengeProgressBar />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#E4EBEE",
  },
});
