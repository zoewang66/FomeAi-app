import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function ButtonInCamera({ title, onPress, icon, color }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Entypo name={icon} size={28} color={color ? color : "#4A7AD1"} />
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 3,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    paddingLeft: 5,
  },
  text: {
    marginTop: 3,
    fontWeight: "bold",
    fontSize: 16,
    color: "#4A7AD1",
    paddingLeft: 8,
    paddingRight: 8,
  },
});
