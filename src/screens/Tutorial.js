import { StyleSheet, Text, View, Image } from "react-native";
import NavbarTop from "../components/Navbar-top";
import NavbarBottom from "../components/Navbar-bottom";
import DemoVideo from "../components/DemoVideo";
import DarkButton from "../components/Button-Dark";

const tutorialPic = require("../../assets/Tutorial.png");

const styles = StyleSheet.create({
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

export default function Tutorial() {
  return (
    <View>
      <NavbarTop />
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
        <DarkButton buttonText="Start" />
      </View>

      <NavbarBottom />
    </View>
  );
}
