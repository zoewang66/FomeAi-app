import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function LightButton({ buttonText, navigation, goTo }) {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate({ name: goTo })}
      >
        <Text style={styles.text}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#4A7AD1",
    textAlign: "center",
    paddingTop: 12,
  },

  button: {
    width: 140,
    height: 50,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#4A7AD1",
    marginBottom: 40,
  },
});
