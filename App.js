import React from "react";
import WelcomeScreen from "./src/screens/Welcome";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import Tutorial from "./src/screens/Tutorial";

export default function App() {
  return (
    // <WelcomeScreen />
    <SafeAreaView style={styles.safeArea}>
      <Tutorial />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#E4EBEE",
  },
});
