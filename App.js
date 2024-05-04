import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import WelcomeScreen from "./src/screens/Welcome";
import SignUp from "./src/screens/Sign-Up";
import SignIn from "./src/screens/Sign-In";
import AssessStart from "./src/screens/Assess-Start";
import StrengthAssessmentScreen from "./src/screens/Strength-Assessment-Screen";
import StrengthResultScreen from "./src/screens/Strength-Result";
import StrengthSkillScreen from "./src/screens/Strength-Skill-Screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CardioAssessmentScreen from "./src/screens/Cardio-Assessment";
import HomePage from "./src/screens/HomePage";
import ExercisePage from "./src/screens/ExercisePage";
import ChallengeDetails from "./src/screens/ChallengeDetails";
import Tutorial from "./src/screens/Tutorial";
import TriggerCamera from "./src/screens/Camera";
import Congratulations from "./src/screens/Congratulation";
import CardioResultScreen from "./src/screens/Cardio-Result";
import CardioSkillScreen from "./src/screens/Cardio-Skills";
import LeaderBoard from "./src/screens/Leaderboard";
import NavbarBottom from "./src/components/Navbar-bottom";
import Profile from "./assets/Icons/Profile";
import { Header } from "react-native/Libraries/NewAppScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AssessStart" component={AssessStart} />
        <Stack.Screen
          name="StrengthAssessment"
          component={StrengthAssessmentScreen}
        />
        <Stack.Screen name="StrengthSkill" component={StrengthResultScreen} />
        <Stack.Screen name="StrengthResult" component={StrengthSkillScreen} />
        <Stack.Screen
          name="CardioAssessment"
          component={CardioAssessmentScreen}
        />
        <Stack.Screen name="CardioSkill" component={CardioResultScreen} />
        <Stack.Screen name="CardioResult" component={CardioSkillScreen} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="ChallengeDetails" component={ChallengeDetails} />
        <Stack.Screen name="Tutorial" component={Tutorial} />
        <Stack.Screen name="Camera" component={TriggerCamera} />
        <Stack.Screen name="Exercise" component={ExercisePage} />
        <Stack.Screen name="Congratulation" component={Congratulations} />
      </Stack.Navigator>
      {/* <NavbarBottom /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
