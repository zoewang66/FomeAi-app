import { View } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";

export default function ChallengeProgressBar() {
  const container = {
    flex: 1,
    paddingBottom: 0,
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
    disabledStepIconColor: "lightgray",
  };

  const textColor = {
    color: "black",
  };

  const nextBtnStyle = {
    display: "none",
  };

  return (
    <View style={container}>
      <ProgressSteps {...progressStepsStyle}>
        <ProgressStep nextBtnStyle={nextBtnStyle} />
        <ProgressStep nextBtnStyle={nextBtnStyle} />
        <ProgressStep nextBtnStyle={nextBtnStyle} />
        <ProgressStep nextBtnStyle={nextBtnStyle} />
      </ProgressSteps>
    </View>
  );
}
