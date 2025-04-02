// Button-Dark.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

export default function DarkButton(props) {
  // Destructure the props. onPress is optional.
  const { buttonText, navigation, goTo, onPress } = props;

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress ? onPress : () => navigation.navigate(goTo)}
      >
        <Text style={styles.text}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  text: {
    fontSize: windowHeight > 667 ? 26 : 20,
    lineHeight: 35,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textAlign: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  button: {
    width: windowHeight > 667 ? "70%" : "55%",
    borderRadius: 15,
    backgroundColor: "#4A7AD1",
    borderWidth: 1,
    borderColor: "#4A7AD1",
    marginBottom: windowHeight > 667 ? 20 : 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
