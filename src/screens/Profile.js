<<<<<<< Updated upstream
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export function Profile(props) {
  const profileInformation = {
    name: "John Doe",
    email: "johndoe@example.com",
    profilePic: require("./path_to_profile_pic.jpg"),
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Image
          source={profileInformation.profilePic}
          style={styles.profilePic}
        />
        <Text style={styles.name}>{profileInformation.name}</Text>
        <Text style={styles.email}>{profileInformation.email}</Text>
      </View>
      <View style={styles.optionsContainer}>
        <Text style={styles.option}>Info</Text>
        <Text style={styles.option}>Notification Settings</Text>
        <Text style={styles.option}>Payment</Text>
        <Text style={styles.option}>Support</Text>
        <Text style={styles.option}>Contact</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  profileInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: "#888",
  },
  optionsContainer: {
    width: "100%",
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    fontSize: 16,
  },
});
=======
import { View, Text, StyleSheet } from "react-native";
import NavbarBottom from "../components/Navbar-bottom";
import NavbarTop from "../components/Navbar-top";
>>>>>>> Stashed changes
