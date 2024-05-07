import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import DemoVideo from "../components/DemoVideo";
import DarkButton from "../components/Button-Dark";
import NavbarBottom from "../components/Navbar-bottom";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4EBEE",
    justifyContent: "space-around",
  },
  challengeName: {
    color: "#000",
    textAlign: "center",
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "400",
    textDecorationLine: "underline",
    paddingBottom: 10,
    paddingTop: 20,
    backgroundColor: "#E4EBEE",
  },
  strengthDetailsContainer: {
    paddingTop: 20, //TBC
  },
  stepContainer: {
    flexDirection: "row",
    minHeight: 30,
    position: "relative",
  },
  stepLine: {
    width: 2,
    height: "530%",
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
    aspectRatio: 1,
  },
  stepIndicatorText: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1, // Changed to aspectRatio: 1
    paddingTop: 2,
    color: "#fff",
    backgroundColor: "#262140",
    zIndex: 2,
  },
  setpName: {
    paddingBottom: 20,
    fontSize: 18,
    fontWeight: "400", // Changed to "400"
  },
  step: {
    flex: 1,
    justifyContent: "flex-start",
  },
  videoContainer: {
    flexWrap: "wrap",
    width: "100%",
    alignItems: "flex-start",
  },
  buttonContainer: {
    paddingTop: 10,
    alignItems: "center",
  },
});

export default function ChallengeDetails({ navigation }) {
  const data = {
    challengeName: "Strength Challenge",
    steps: [
      {
        name: "Push-Ups",
        videoID: "0pkjOk0EiAk",
      },
      {
        name: "Plank",
        videoID: "sZxrs3C209k",
      },
    ],
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.challengeName}>{data.challengeName}</Text>
        <View style={styles.strengthDetailsContainer}>
          <View>
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
                    <View style={styles.videoContainer}>
                      <DemoVideo
                        videoID={step.videoID}
                        style={styles.videoStyle}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.divider}></View>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <DarkButton
            buttonText="Next"
            navigation={navigation}
            goTo="Tutorial"
          />
        </View>
      </ScrollView>
      <NavbarBottom />
    </View>
  );
}
