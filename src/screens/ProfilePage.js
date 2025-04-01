import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import NavbarBottom from "../components/Navbar-bottom";
import LightButton from "../components/Button-Light";
import ProfileInfo from "../../assets/Icons/ProfileInfo";
import Notification from "../../assets/Icons/Notification";
import Payment from "../../assets/Icons/Payment";
import Chat from "../../assets/Icons/Chat";
import Contact from "../../assets/Icons/Contact";
import Arrow from "../../assets/Icons/Arrow";

const windowHeight = Dimensions.get("window").height;

export default function ProfilePage({ navigation }) {
  const profileInformation = {
    name: "Zoe W",
    email: "zoe@example.com",
    profilePic: require("../../assets/imgs/profilePic.png"),
  };

  return (
    <View style={styles.container}>
      <ScrollView>
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
            <View style={styles.icon}>
              <ProfileInfo style={styles.icon} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>My Information</Text>
            </View>
            <Arrow />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <View style={styles.icon}>
              <Notification />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Notifications</Text>
            </View>
            <Arrow />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <View style={styles.icon}>
              <Payment style={styles.icon} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Payment</Text>
            </View>
            <Arrow />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <View style={styles.icon}>
              <Chat />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Support</Text>
            </View>
            <Arrow />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <View style={styles.icon}>
              <Contact />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>About Us</Text>
            </View>
            <Arrow />
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton}>
            <LightButton
              style={styles.logoutButton}
              buttonText={"Logout"}
              navigation={navigation}
              goTo="SignIn"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.navbarWrapper}>
        <NavbarBottom />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-around",
    width: "100%",
  },
  profileInfo: {
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 30,
  },
  navbarWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
    color: "red",
  },
  email: {
    fontSize: 19,
    color: "red",
  },
  optionsContainer: {
    width: "100%",
    height: windowHeight > 679 ? "90%" : "57%",
    justifyContent: "space-around",
    flexGrow: 1,
    alignItems: "center",
  },
  optionContainer: {
    height: 55,
    width: "80%",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionTextContainer: {
    flex: 1,
    width: "85%",
    height: 45,
  },
  optionText: {
    fontSize: 23,
    marginLeft: 20,
    alignSelf: "flex-start",
    flexShrink: 1,
  },
  icon: {
    width: 29,
    height: 29,
    alignSelf: "center",
  },
  arrow: {
    marginLeft: 10,
    alignSelf: "center",
  },
  logoutButton: {
    marginTop: windowHeight > 679 ? 0 : 10,
    alignSelf: "center",
  },
});
