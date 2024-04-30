import { View } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";

export default function ChallengeProgressBar() {
  const progressStepsStyle = {
    activeStepIconBorderColor: "#3C80E6",
    activeLabelColor: "black",
    activeStepNumColor: "white",
    activeStepIconColor: "#3C80E6",
    completedStepIconColor: "#3C80E6",
    completedProgressBarColor: "#3C80E6",
    completedCheckColor: "#3C80E6",
    completedCheckColor: "white",
    progressBarColor: "#3C80E6",
    disabledStepIconColor: "lightgray",
  };

  const textColor = {
    color: "black",
  };

  const nextBtnStyle = {
    display: "none",
  };

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <ProgressSteps {...progressStepsStyle}>
        <ProgressStep nextBtnStyle={nextBtnStyle} />
        <ProgressStep nextBtnStyle={nextBtnStyle} />
        <ProgressStep nextBtnStyle={nextBtnStyle} />
        <ProgressStep nextBtnStyle={nextBtnStyle} />
      </ProgressSteps>
    </View>
  );
}
