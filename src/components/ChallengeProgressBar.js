import { View } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { windowHeight } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ChallengeProgressBar() {
  const navigation = useNavigation();
  const container = {
    flex: 1,
    paddingBottom: 180,
    maxHeight: 80,
  };

  const progressStepsStyle = {
    activeStepIconBorderColor: "#3C80E6",
    activeLabelColor: "red",
    activeStepNumColor: "white",
    activeStepIconColor: "#3C80E6",
    completedStepIconColor: "red",
    completedProgressBarColor: "#3C80E6",
    completedCheckColor: "#3C80E6",
    completedCheckColor: "white",
    progressBarColor: "black",
    disabledStepIconColor: "gray",
  };

  // Styles to mimic your LightButton (for "Next")
  const lightNextBtnStyle = {
    width: 140,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#4A7AD1",
    marginBottom: 40,
  };

  const lightNextBtnTextStyle = {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#4A7AD1",
    textAlign: "center",
    paddingTop: 12,
  };

  // Styles to mimic your DarkButton (for "Done")
  const darkNextBtnStyle = {
    width: windowHeight > 667 ? "70%" : "55%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#4A7AD1",
    borderWidth: 1,
    borderColor: "#4A7AD1",
    marginBottom: windowHeight > 667 ? 20 : 40,
  };

  const darkNextBtnTextStyle = {
    fontSize: windowHeight > 667 ? 26 : 20,
    lineHeight: 35,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textAlign: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
  };

  return (
    <View style={container}>
      <ProgressSteps {...progressStepsStyle}>
        {/* Use LightButton styles for the first three steps */}
        <ProgressStep
          nextBtnStyle={lightNextBtnStyle}
          nextBtnTextStyle={lightNextBtnTextStyle}
        />
        <ProgressStep
          nextBtnStyle={lightNextBtnStyle}
          nextBtnTextStyle={lightNextBtnTextStyle}
        />
        <ProgressStep
          nextBtnStyle={lightNextBtnStyle}
          nextBtnTextStyle={lightNextBtnTextStyle}
        />
        {/* Use DarkButton style for the final step */}
        <ProgressStep
          nextBtnStyle={darkNextBtnStyle}
          nextBtnTextStyle={darkNextBtnTextStyle}
        />
      </ProgressSteps>
    </View>
  );
}
