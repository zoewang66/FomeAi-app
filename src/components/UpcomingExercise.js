import { TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  upcoming_exercise_box: {
    width: 308,
    height: 80,
    borderRadius: 16,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },

  content_Container: {
    flexDirection: "row", // Arrange items horizontally
    // justifyContent: "space-between", // Space items evenly
    width: "100%", // Occupy full width of the box
    alignItems: "center",
  },

  iconColumn: {
    paddingLeft: 30, // Add padding for right column
  },

  textColumn: {
    paddingLeft: 15,
  },

  exercise_icon: {
    width: 49,
    height: 50,
    paddingTop: 15,
    resizeMode: "contain",
  },

  exercise_name: {
    color: "#264C92",
    fontSize: 12,
    fontWeight: 500,
    fontStyle: "normal",
    lineHeight: 18,
  },
});

export default function UpcomingExercise({ name, exercise_icon }) {
  return (
    <TouchableOpacity style={styles.upcoming_exercise_box}>
      <View style={styles.content_Container}>
        <View style={styles.iconColumn}>
          <Image source={exercise_icon} style={styles.exercise_icon}></Image>
        </View>
        <View style={styles.textColumn}>
          <Text style={styles.exercise_name}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
