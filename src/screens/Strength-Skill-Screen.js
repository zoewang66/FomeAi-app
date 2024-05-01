import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  StatusBar,
} from "react-native";
import LightButton from "../components/Button-Light";

const logoImg = require("../../../FomeAi-app/assets/FOME-logo-blue.png");

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const StrengthSkillScreen = ({ navigation }) => {
  const level = "Intermediate";

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={logoImg} style={styles.logo} />
        <Text style={styles.text}>Good Job!</Text>
        <Text style={styles.subText}>
          Your Strength Fitness Level is{" "}
          <Text style={styles.level}>{level}!</Text>{" "}
        </Text>
        <LightButton
          buttonText={"Back To Home"}
          style={styles.buttontext}
          navigation={navigation}
          goTo="Home"
        />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4EBEE",
  },
  content: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    width: "100%",
  },
  logo: {
    width: windowWidth > 375 ? "85%" : "80%",
    height: undefined,
    aspectRatio: 308 / 105,
    marginTop: windowWidth > 375 ? 50 : 40,
    marginBottom: windowWidth > 375 ? 120 : 80,
  },
  text: {
    fontSize: windowWidth > 375 ? 45 : 38,
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 15,
  },
  subText: {
    width: windowWidth > 375 ? "85%" : "80%",
    fontSize: windowWidth > 375 ? 25 : 20,
    fontWeight: "normal",
    paddingTop: 10,
    paddingBottom: windowWidth > 375 ? 80 : 60,
  },
  level: {
    color: "red",
  },
});

export default StrengthSkillScreen;
