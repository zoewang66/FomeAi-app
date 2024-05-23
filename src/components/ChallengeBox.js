import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  challenge_box: {
    width: "100%",
    height: undefined,
    aspectRatio: 310 / 132,
    borderRadius: 20,
    backgroundColor: "rgba(146, 163, 253, 0.2)",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  content_Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: 10,
  },

  textColumn: {
    flex: 1, // Occupy available space in row
    paddingLeft: 10,
  },

  iconColumn: {
    paddingRight: 20,
    paddingLeft: 10,
  },

  challenge_name: {
    width: 200,
    color: "#1D1617", // or use var(--Black-color, #1D1617) if you're using CSS variables
    fontFamily: "Arial",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 21, // No need to specify 'px' in React Native
  },

  challenge_info: {
    width: 140,
    color: "#7B6F72", // or use var(--gray-1, #7B6F72) if you're using CSS variables
    fontFamily: "Arial",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 20,
    paddingBottom: 10,
  },

  view_more_button: {
    borderRadius: 15,
    width: 97,
    height: 37,
    backgroundColor: "#fff",
    marginLeft: 15,
  },

  view_more_button_text: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: "#264C92",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 15,
  },

  challenge_icon: {
    width: 90.54,
    height: 89.09,
    resizeMode: "contain",
    paddingLeft: 10,
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
