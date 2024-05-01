import React from "react";
import WelcomeScreen from "./src/screens/Welcome";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import SignIn from "./src/screens/Sign-in";
import SignUp from "./src/screens/Sign-up";
import Tutorial from "./src/screens/Tutorial";
import ChallengeDetails from "./src/screens/ChallengeDetails";
import StrengthChallenge from "../FomeAi-app/assets/TestData/StrengthChallenge";
import ChallengeSelection from "./src/screens/ExercisePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CardioAssessmentScreen from "./src/screens/Cardio-Assessment";
import StrengthAssessmentScreen from "./src/screens/Strength-Assessment";
import Camera from "./src/screens/Camera";
import ExercisePage from "./src/screens/ExercisePage";
import HomePage from "./src/screens/HomePage";
import Congratulations from "./src/screens/Congratulation";
import CardioResultScreen from "./src/screens/Cardio-Result";
import StrengthResultScreen from "./src/screens/Strength-Result";
import StrengthSkillScreen from "./src/screens/Strength-Skills";
import NavbarBottom from "./src/components/Navbar-bottom";
import CardioSkillScreen from "./src/screens/Cardio-Skills";
import AssessStart from "./src/screens/Assessment-Start";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    // <SafeAreaView style={styles.safeArea}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="ChallengeDetails" component={ChallengeDetails} />
        <Stack.Screen name="Tutorial" component={Tutorial} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Exercise" component={ExercisePage} />
        <Stack.Screen name="Congratulation" component={Congratulations} />
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
    //   <StrengthAssessmentScreen />
    //   {/* <ChallengeSelection /> */}
    // </SafeAreaView>
    // <SignIn />
    // <SignUp />
    
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
