import { StyleSheet, Text, View, Image } from "react-native";
import NavbarTop from "../components/Navbar-top";
import NavbarBottom from "../components/Navbar-bottom";
import DarkButton from "../components/Button-Dark";

const congratsPic = require("../../assets/Congratulations.png");

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
    fontSize: 25,
    fontStyle: "normal",
    textAlign: "center",
    fontWeight: 400,
    paddingTop: 30,
  },

  buttonContainer: {
    alignItems: "center",
  },
});

export default function Congratulations() {
  return (
    <View>
      <NavbarTop />
      <View style={styles.contentContainer}>
        <View>
          <Image source={congratsPic} />
        </View>
        <Text style={styles.text}>
          Congratulations! You are Done. We’ll Notify you when Results are
          Ready..
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <DarkButton buttonText="Back To Home" />
      </View>
      <NavbarBottom />
    </View>
  );
}
