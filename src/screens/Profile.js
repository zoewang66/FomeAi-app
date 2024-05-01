<<<<<<< Updated upstream
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import profilePicLogo from "./imgs/profilePicLogo.png";
import notification from "./imgs/notification.png";
import payment from "./imgs/payment.png";
import support from "./imgs/support.png";
import about from "./imgs/about.png";

export function Profile() {
  const profileInformation = {
    name: "Dylan J",
    email: "dylan@example.com",
    profilePic: require("./imgs/profilePic.png"),
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
        <TouchableOpacity style={styles.optionContainer}>
          <Image source={profilePicLogo} style={styles.icon} />
          <Text style={styles.option}>My Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Image source={notification} style={styles.icon} />
          <Text style={styles.option}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Image source={payment} style={styles.icon} />
          <Text style={styles.option}>Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Image source={support} style={styles.icon} />
          <Text style={styles.option}>Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Image source={about} style={styles.icon} />
          <Text style={styles.option}>About Us</Text>
        </TouchableOpacity>
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
    marginTop: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "red",
  },
  email: {
    fontSize: 16,
    color: "#888",
    color: "red",
  },
  optionsContainer: {
    width: "100%",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  option: {
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 40,
  },
});

=======
import { View, Text, StyleSheet } from "react-native";
import NavbarBottom from "../components/Navbar-bottom";
import NavbarTop from "../components/Navbar-top";
>>>>>>> Stashed changes
