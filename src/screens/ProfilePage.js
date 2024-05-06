import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import profilePicLogo from "../../assets/imgs/profilePicLogo.png";
import notification from "../../assets/imgs/notification.png";
import payment from "../../assets/imgs/payment.png";
import support from "../../assets/imgs/support.png";
import about from "./imgs/about.png";
import NavbarBottom from "../components/Navbar-bottom";

export default function ProfilePage({ navigation }) {
  const profileInformation = {
    name: "Dylan J",
    email: "dylan@example.com",
    profilePic: require("../../assets/imgs/profilePic.png"),
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>My Information</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Image source={notification} style={styles.icon} />
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Notifications</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Image source={payment} style={styles.icon} />
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Payment</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Image source={support} style={styles.icon} />
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Support</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Image source={about} style={styles.icon} />
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>About Us</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <NavbarBottom />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    color: "red",
  },
  optionsContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexGrow: 1,
    alignItems: "center",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionTextContainer: {
    flex: 1,
    maxWidth: 150,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    alignSelf: "center",
    flexShrink: 1,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    alignSelf: "center",
  },
  logoutButton: {
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#4A7AD1",
    borderRadius: 5,
    width: 100,
    alignSelf: "center",
    marginTop: 10,
  },
  logoutText: {
    color: "#4A7AD1",
    fontSize: 18,
  },
  arrow: {
    marginLeft: 10,
    fontSize: 16,
  },
});
