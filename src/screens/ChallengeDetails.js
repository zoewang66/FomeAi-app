import { StyleSheet, Text, View } from "react-native";
import DemoVideo from "../components/DemoVideo";
import DarkButton from "../components/Button-Dark";
import NavbarBottom from "../components/Navbar-bottom";
import NavbarTop from "../components/Navbar-top";

const styles = StyleSheet.create({
  challengeName: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Alice",
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    textDecorationLine: "underline",
    paddingBottom: 40,
    paddingTop: 20,
  },

  strengthDetailsContainer: {
    paddingTop: 30, //TBC
  },

  progressPath: {
    borderLeft: "2px solid black",
  },

  stepContainer: {
    flexDirection: "row",
    minHeight: 30,
    position: "relative", // Added relative positioning
  },

  stepLine: {
    width: 2,
    height: "550%",
    backgroundColor: "black",
    zIndex: 1,
    position: "absolute",
    left: 24.5,
  },

  stepIndicator: {
    position: "relative",
    width: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    aspectRatio: "1/1",
  },

  stepIndicatorText: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: "1/1",
    paddingTop: 2,
    color: "#fff",
    backgroundColor: "#262140",
    zIndex: 2,
  },

  setpName: {
    paddingBottom: 20,
    fontSize: 18,
    fontWeight: 400,
  },

  step: {
    flex: 1,
    justifyContent: "center",
  },

  buttonContainer: {
    paddingTop: 40,
    alignItems: "center",
  },
});

export default function ChallengeDetails({ data }) {
  return (
    <View>
      <Text style={styles.challengeName}>{data.challengeName}</Text>
      <View style={styles.ChallengeDetailsContainer}>
        <View style={styles.progressPath}>
          {data.steps.map((step, i) => (
            <View key={i}>
              <View style={styles.stepContainer}>
                <View style={styles.stepIndicator}>
                  {i < data.steps.length ? (
                    <View style={styles.stepLine}></View>
                  ) : null}
                  <Text style={styles.stepIndicatorText}>{i + 1}</Text>
                </View>
                <View style={styles.step}>
                  <Text style={styles.setpName}>{step.name}</Text>
                  <DemoVideo videoID={step.videoID} />
                </View>
              </View>
              <View style={styles.divider}></View>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <DarkButton buttonText="Next" />
      </View>
      <NavbarBottom />
    </View>
  );
}
