import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import NavbarBottom from "../components/Navbar-bottom";
import DemoVideo from "../components/DemoVideo";
import DarkButton from "../components/Button-Dark";
import { useNavigation } from "@react-navigation/native";
import Camera from "./Camera";

const tutorialPic = require("../../assets/Tutorial.png");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4EBEE",
    justifyContent: "space-around",
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
    height: 580,
    backgroundColor: "#E4EBEE",
  },

  text: {
    fontSize: 20,
    fontStyle: "normal",
    textAlign: "center",
    fontWeight: 400,
    paddingTop: 30,
    paddingBottom: 20,
  },

  buttonContainer: {
    paddingTop: 10,
    alignItems: "center",
  },
});

export default function Tutorial({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
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
            onPress={() => navigation.navigate("Camera")}
            
          />
        </View>
      </ScrollView>
      <NavbarBottom />
    </View>
  );
}
