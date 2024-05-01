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
const picture = require("../../../FomeAi-app/assets/StrengthTest.png");

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const StrengthAssessmentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={logoImg} style={styles.logo} />
        <Text style={styles.text}>Strength Text</Text>
        <Text style={styles.subText}>push-ups, planks, plank jacks</Text>
        <Image source={picture} style={styles.pic} />
        <LightButton
          buttonText={"Next"}
          navigation={navigation}
          goTo="StrengthSkill"
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
  },
  text: {
    fontSize: windowWidth > 375 ? 45 : 38,
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 15,
  },
  subText: {
    fontSize: windowWidth > 375 ? 20 : 15,
    fontWeight: "normal",
    paddingTop: 10,
    paddingBottom: windowWidth > 375 ? 50 : 30,
  },
  pic: {
    width: windowWidth > 375 ? "85%" : "75%",
    height: undefined,
    aspectRatio: 278 / 156, // Adjust aspect ratio based on picture dimensions
    marginBottom: windowHeight > 667 ? 40 : 35, // Adjust margin for larger screens
  },
});

export default StrengthAssessmentScreen;
