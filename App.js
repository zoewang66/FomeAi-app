import React from "react";
import WelcomeScreen from "./src/screens/Welcome";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import SignIn from "./src/screens/Sign-in";
import SignUp from "./src/screens/Sign-up";
import Tutorial from "./src/screens/Tutorial";
import ChallengeDetails from "./src/screens/ChallengeDetails";
import StrengthChallenge from "../FomeAi-app/assets/TestData/StrengthChallenge";
import ChallengeSelection from "./src/screens/Exercise";
import Camera from "./src/screens/Camera";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
<<<<<<< Updated upstream
import Congratulations from "./src/screens/Congratulation";
import CardioAssessmentScreen from "./src/screens/Cardio-Assessment";
import StrengthAssessmentScreen from "./src/screens/Strength-Assessment";
=======
import Exercise from "./src/screens/Exercise";
>>>>>>> Stashed changes

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StrengthAssessmentScreen />
      {/* <ChallengeSelection /> */}
    </SafeAreaView>
    // <SignIn />
    // <SignUp />
<<<<<<< Updated upstream
    // <SafeAreaView style={styles.safeArea}>
    //   <Congratulations />
      /* //   <NavigationContainer>
=======
    <SafeAreaView style={styles.safeArea}>
      <Exercise />
      {/* //   <NavigationContainer>
>>>>>>> Stashed changes
    //     <Stack.Navigator>
    //       <Stack.Screen name={"Tutorial"} component={Tutorial} />
    //       <Stack.Screen */
      /* //         name={"Camera"}
    //         component={Camera}
    //         options={{ */
      /* //           headerShown: false,
    //         }}
    //       />
    //     </Stack.Navigator> */
      /* //   </NavigationContainer> */
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#4A7AD1",
  },
});
