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
import LeaderBoard from "./src/screens/Leaderboard";
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
      <LeaderBoard leaderboardProps={leaderboardProps}/>
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
const leaderboardProps = [
  {
    name: "Jesse",
    score: 97,
    position: 1,
    image: require("./imgs/number1.png"),
  },
  {
    name: "Zoe",
    score: 85,
    position: 2,
    image: require("./imgs/number2.png"),
  },
  {
    name: "Dylan",
    score: 80,
    position: 3,
    image: require("./imgs/number3.png"),
  },
  {
    name: "Bob",
    score: 78,
    position: 4,
    image: require("./imgs/number4.png"),
  },
  {
    name: "Sasha",
    score: 77,
    position: 5,
    image: require("./imgs/number5.png"),
  },
  {
    name: "Leo",
    score: 72,
    position: 6,
    image: require("./imgs/number6.png"),
  },
  {
    name: "Jason",
    score: 69,
    position: 7,
    image: require("./imgs/number7.png"),
  },
  {
    name: "Loretta",
    score: 65,
    position: 8,
    image: require("./imgs/number8.png"),
  },
  {
    name: "Chris",
    score: 64,
    position: 9,
    image: require("./imgs/number9.png"),
  },
  {
    name: "Tiffany",
    score: 62,
    position: 10,
    image: require("./imgs/number10.png"),
  },
];


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#4A7AD1",
  },
});
