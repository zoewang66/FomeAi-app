import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  challenge_box: {
    width: 310,
    height: 132,
    borderRadius: 20,
    backgroundColor: "rgba(146, 163, 253, 0.2)",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  content_Container: {
    flexDirection: "row", // Arrange items horizontally
    justifyContent: "space-between", // Space items evenly
    width: "100%", // Occupy full width of the box
    paddingTop: 10,
  },

  textColumn: {
    flex: 1, // Occupy available space in row
    paddingLeft: 10,
  },

  iconColumn: {
    paddingRight: 20, // Add padding for right column
  },

  challenge_name: {
    width: 200,
    color: "#1D1617", // or use var(--Black-color, #1D1617) if you're using CSS variables
    fontFamily: "Arial",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 21, // No need to specify 'px' in React Native
  },

  challenge_info: {
    width: 136,
    color: "#7B6F72", // or use var(--gray-1, #7B6F72) if you're using CSS variables
    fontFamily: "Arial",
    // fontFamily: "Poppins",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 18, // No need to specify 'px' in React Native
    paddingBottom: 10,
  },

  view_more_button: {
    borderRadius: 50,
    width: 97,
    height: 37,
    backgroundColor: "#fff",
  },

  view_more_button_text: {
    paddingLeft: 20,
    paddingTop: 10,
    color: "#264C92",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 15,
  },

  challenge_icon: {
    width: 90.54,
    height: 89.09,
    // flexShrink: 0,
    resizeMode: "contain",
  },
});

export default function ChallengeBox({
  navigation,
  challenge_name,
  challenge_info,
  challenge_icon,
}) {
  return (
    <View style={styles.challenge_box}>
      <View style={styles.content_Container}>
        <View style={styles.textColumn}>
          <Text style={styles.challenge_name} numberOfLines={1}>
            {challenge_name}
          </Text>
          <Text style={styles.challenge_info}>{challenge_info}</Text>
          <ViewMoreButton navigation={navigation} goTo="ChallengeDetails" />
        </View>
        <View style={styles.iconColumn}>
          <Image source={challenge_icon} style={styles.challenge_icon} />
        </View>
      </View>
    </View>
  );
}

function ViewMoreButton({ navigation, goTo }) {
  return (
    <TouchableOpacity
      style={styles.view_more_button}
      onPress={() => navigation.navigate({ name: goTo })}
    >
      <Text style={styles.view_more_button_text}>View More</Text>
    </TouchableOpacity>
  );
}
