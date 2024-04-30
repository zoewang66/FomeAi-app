import React from "react";
import WelcomeScreen from "./src/screens/Welcome";
import { View, Text, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native";
import SignIn from "./src/screens/Sign-in";
import SignUp from "./src/screens/Sign-up";
import CardioAssessmentScreen from "./src/screens/Cardio-Assessment";
import StrengthAssessmentScreen from "./src/screens/Strength-Assessment";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StrengthAssessmentScreen />
      {/* <ChallengeSelection /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#4A7AD1",
  },
});
