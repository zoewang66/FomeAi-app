import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import NavbarTop from "../components/Navbar-top";
import NavbarBottom from "../components/Navbar-bottom";
import DemoVideo from "../components/DemoVideo";
import DarkButton from "../components/Button-Dark";
import { useNavigation } from "@react-navigation/native";
import Camera from "./Camera";
import { Button } from "react-native";

const tutorialPic = require("../../assets/Tutorial.png");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E4EBEE",
  },

  contentContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    width: 310,
    flexShrink: 0,
    paddingLeft: 70,
    height: 600,
    backgroundColor: "#E4EBEE",
  },

  text: {
    fontSize: 18,
    fontStyle: "normal",
    textAlign: "center",
    fontWeight: 400,
    paddingTop: 30,
    paddingBottom: 30,
  },

  buttonContainer: {
    alignItems: "center",
  },
});

export default function Tutorial({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <NavbarTop /> */}
      <View style={styles.contentContainer}>
        <Text style={styles.text}>
          Adjust your Camera and We Can Record your Movement!
        </Text>
        <View>
          <Image source={tutorialPic} />
        </View>
        <Text style={styles.text}>Tutorial Video</Text>
        <DemoVideo videoID="CN_RsGkRScM" />
      </View>
      <View style={styles.buttonContainer}>
        <DarkButton
          buttonText="Start"
          navigation={navigation}
          goTo="Exercise"
        />
      </View>

      <NavbarBottom />
    </View>
  );
}
