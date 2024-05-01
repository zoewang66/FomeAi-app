import { View, Text, Image, StyleSheet } from "react-native";


export default function AssessStart({navigation}){
    const currentTime = new Date().getHours();
    let greeting;

    if (currentTime < 12) {
      greeting = "Good Morning";
    } else if (currentTime < 18) {
      greeting = "Good Afternoon";
    } else {
      greeting = "Good Evening";
    }

    const userName = "Dylan";
    return (
        <View style={styles.container}>
          <NavbarTop />
          <View style={styles.contentContainer}>
            <Text style={styles.greetingText}>{greeting}!</Text>
            <Text style={styles.userName}>{userName}</Text>
            {hasChallenge ? (
              <HomeHasExercise navigation={navigation} />
            ) : (
              <HomeNoExercise navigation={navigation} />
            )}
          </View>
          <NavbarBottom />
        </View>
      );
}