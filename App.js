import React from "react";
import { View, StyleSheet } from "react-native";
import WelcomeScreen from "./src/screens/Welcome";
import SignUp from "./src/screens/Sign-up";
import SignIn from "./src/screens/Sign-in";
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
import ScoreResult from "./src/screens/ScoreResult";
import ProfilePage from "./src/screens/ProfilePage";
import { UserProvider } from "./src/components/UserContext";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <UserProvider>
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
          <Stack.Screen
            name="StrengthResultScreen"
            component={StrengthResultScreen}
          />
          <Stack.Screen
            name="StrengthSkillScreen"
            component={StrengthSkillScreen}
          />
          <Stack.Screen
            name="CardioAssessment"
            component={CardioAssessmentScreen}
          />
          <Stack.Screen
            name="CardioResultScreen"
            component={CardioResultScreen}
          />
          <Stack.Screen
            name="CardioSkillScreen"
            component={CardioSkillScreen}
          />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="ChallengeDetails" component={ChallengeDetails} />
          <Stack.Screen name="Tutorial" component={Tutorial} />
          <Stack.Screen name="Camera" component={TriggerCamera} />
          <Stack.Screen name="Exercise" component={ExercisePage} />
          <Stack.Screen name="Congratulation" component={Congratulations} />
          <Stack.Screen name="Score" component={ScoreResult} />
          <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
          <Stack.Screen name="Profile" component={ProfilePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
