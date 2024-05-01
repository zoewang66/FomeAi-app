import { StyleSheet, Text, View, Image } from "react-native";
import NavbarBottom from "../components/Navbar-bottom";
import DarkButton from "../components/Button-Dark";
import HomePage from "./HomePage";

const congratsPic = require("../../assets/Congratulations.png");

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

export default function Congratulations({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <NavbarTop /> */}
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
        <DarkButton
          buttonText="Back To Home"
          navigation={navigation}
          goTo="Home"
        />
      </View>
      <NavbarBottom />
    </View>
  );
}
