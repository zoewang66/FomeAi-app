import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import LightButton from "../components/Button-Light";

const logoImg = require("../../../FomeAi-app/assets/FOME-logo-blue.png");

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const StrengthResultScreen = ({ navigation }) => {
  const [selectedOptions, setSelectedOptions] = useState([
    [],
    [],
    [],
    [],
    [], // Initialize with empty arrays for each question
  ]);

  const handleOptionSelect = (questionIndex, option) => {
    setSelectedOptions((prevState) => {
      const updatedOptions = [...prevState];
      const index = updatedOptions[questionIndex].indexOf(option);
      if (index === -1) {
        updatedOptions[questionIndex].push(option);
      } else {
        updatedOptions[questionIndex].splice(index, 1);
      }
      return updatedOptions;
    });
  };

  const renderOption = (
    questionIndex,
    optionText1,
    optionText2,
    optionRowStyle
  ) => {
    const isSelected1 =
      selectedOptions[questionIndex] &&
      selectedOptions[questionIndex].includes(optionText1);
    const isSelected2 =
      selectedOptions[questionIndex] &&
      selectedOptions[questionIndex].includes(optionText2);

    return (
      <View
        style={[styles.optionRow, optionRowStyle]}
        key={`${questionIndex}-${optionText1}-${optionText2}`}
      >
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => handleOptionSelect(questionIndex, optionText1)}
        >
          <View style={[styles.roundDot, isSelected1 && styles.blueDot]} />
          <Text style={styles.optionText}>{optionText1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => handleOptionSelect(questionIndex, optionText2)}
        >
          <View style={[styles.roundDot, isSelected2 && styles.blueDot]} />
          <Text style={styles.optionText}>{optionText2}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={logoImg} style={styles.logo} />
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            1. How many push-ups can you do in one set?
          </Text>
        </View>
        <View style={styles.optionsContainer}>
          {renderOption(0, "Less than 10", "10-20", styles.optionRow)}
          {renderOption(0, "21-30", "More than 30", styles.optionRow)}
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            2. How long can you hold a plank position without dropping?
          </Text>
        </View>
        <View style={styles.optionsContainer}>
          {renderOption(1, "Less than 30s", "30s - 60s", styles.optionRow)}
          {renderOption(1, "61s - 90s", "More than 90s", styles.optionRow)}
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            3. How do you feel after doing a set of lunges?
          </Text>
        </View>
        <View style={styles.optionOneRowContainer}>
          {renderOption(
            2,
            "Exhausted and unable to continue",
            "A bit fatigued but can do more",
            styles.optionOneRow
          )}
          {renderOption(
            2,
            "Energized and ready for more exercise",
            "I have not tried lunges before",
            styles.optionOneRow
          )}
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            4. Have you tried plank jacks before?
          </Text>
        </View>
        <View style={styles.optionOneRowContainer}>
          {renderOption(
            3,
            "Yes, and I can do them with ease",
            "Yes, but they are challenging for me",
            styles.optionOneRow
          )}
          {renderOption(
            3,
            "No, but I am willing to try",
            "No, and I am not interested in trying",
            styles.optionOneRow
          )}
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            5. How frequently do you engage in strength training exercises like
            push-ups, planks, lunges, or plank jacks?
          </Text>
        </View>
        <View style={styles.optionOneRowContainer}>
          {renderOption(
            4,
            "Rarely or never",
            "Occasionally, maybe once a week",
            styles.optionOneRow
          )}
          {renderOption(
            4,
            "Regularly, 2-3 times a week",
            "Very frequently, almost every day",
            styles.optionOneRow
          )}
        </View>
        <View style={styles.button}>
          <LightButton
            buttonText={"Submit"}
            navigation={navigation}
            goTo="StrengthResult"
          />
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4EBEE",
  },
  content: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    width: "100%",
  },
  logo: {
    width: windowWidth > 375 ? "85%" : "80%",
    height: undefined,
    aspectRatio: 308 / 105,
    marginTop: windowWidth > 375 ? 50 : 40,
  },
  questionContainer: {
    width: windowWidth > 375 ? "85%" : "86%",
  },
  questionText: {
    fontSize: windowWidth > 375 ? 25 : 20,
    fontWeight: "normal",
    paddingTop: 20,
    paddingBottom: 15,
  },
  optionText: {
    fontSize: windowWidth > 375 ? 18 : 15,
    fontWeight: "normal",
    paddingTop: 5,
    paddingBottom: 5,
  },
  optionsContainer: {
    width: windowWidth > 375 ? "85%" : "80%",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "55%",
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  optionOneRowContainer: {
    flexDirection: "column",
    width: "100%",
  },
  optionOneRow: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    paddingLeft: windowWidth > 375 ? "8%" : "9%",
  },
  roundDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "white",
    marginRight: 8,
    borderWidth: 1,
    borderColor: "black",
  },
  blueDot: {
    backgroundColor: "#3C80E6",
  },
  button: {
    marginTop: 60,
  },
});

export default StrengthResultScreen;
