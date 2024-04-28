import { StyleSheet, Text, View, Image } from "react-native";
import NavbarTop from "../components/Navbar-top";
import NavbarBottom from "../components/Navbar-bottom";
import DemoVideo from "../components/DemoVideo";

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
    height: 670,
  },

  text: {
    fontSize: 18,
    fontStyle: "normal",
    textAlign: "center",
    fontWeight: 400,
    paddingTop: 20,
    paddingBottom: 20,
  },

  image: {
    paddingBottom: 35,
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
        <View style={styles.image}>
          <Image source={tutorialPic} />
        </View>

        <Text style={styles.text}>Tutorial Video</Text>
        <DemoVideo videoID="CN_RsGkRScM" />
      </View>
      <NavbarBottom />
    </View>
  );
}
