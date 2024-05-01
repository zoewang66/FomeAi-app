import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Vector from "../../assets/Icons/Vector";
import Ring from "../../assets/Icons/Ring";

export default function NavbarTop() {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem}>
        <Vector style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.centerItem}></View>
      <TouchableOpacity style={styles.navItem}>
        <Ring style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#4A7AD1",
    borderWidth: 1,
    borderColor: "#4A7AD1",
    height: 55,
    width: "100%",
    paddingHorizontal: 30,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  centerItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 25,
    height: 25,
  },
});
