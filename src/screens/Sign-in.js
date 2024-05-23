
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  StatusBar,
} from "react-native";
import DarkButton from "../components/Button-Dark";
import { useRef } from "react";
import { useNavigation } from '@react-navigation/native';
import HomePage from "./HomePage";

const logoImg = require("../../../FomeAi-app/assets/FOME-logo-blue.png");
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const SignIn = () => {

  const navigation = useNavigation();

  const API_URL = "http://10.88.54.124:3001/users/login";

  const scrollViewRef = useRef(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    return fetch(API_URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((res) => {
        console.log(`User logged in as ${username}`);
        Alert.alert(`Logged in as ${username}`);
        navigation.navigate("HomePage"); // navigates to home page upon successful login
      })
      .catch((error) => {
        console.error("Error:", error);
        Alert.alert(
          "Login Error",
          "Invalid username or password. Please try again."
        );
      });
    };


  const scrollToPasswordInput = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "null"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Image source={logoImg} style={styles.logo} />
        <TouchableOpacity
          navigate={navigation}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.text1}>Haven't have an Account?</Text>
        </TouchableOpacity>
        <View style={styles.form}>
          <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              onFocus={scrollToPasswordInput}
              onChangeText={setUsername}
            />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            onFocus={scrollToPasswordInput}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.text2}>Forgot password?</Text>
        </TouchableOpacity>
        <DarkButton
          buttonText={"Sign in"}
          onPress={handleLogin}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4EBEE",
  },
  content: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    width: "100%",
  },
  logo: {
    width: windowWidth > 375 ? "80%" : "75%",
    height: undefined,
    aspectRatio: 308 / 105,
    marginTop: windowWidth > 375 ? 50 : 30,
  },
  text1: {
    fontSize: windowHeight > 667 ? 24 : 22,
    color: "red",
    paddingTop: 50,
    textAlign: "center",
  },

  text2: {
    fontSize: windowHeight > 667 ? 24 : 21,
    fontWeight: "bold",
    paddingTop: windowHeight > 667 ? 60 : 40,
    paddingBottom: windowHeight > 667 ? 100 : 50,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  form: {
    width: windowWidth > 375 ? "80%" : "90%",
    height: undefined,
    marginStart: windowWidth > 375 ? 20 : 70,
    marginTop: 50,
  },
  label: {
    fontSize: windowWidth > 375 ? 20 : 16,
    marginBottom: 7,
    fontWeight: "bold",
  },
  input: {
    width: windowWidth > 375 ? "90%" : "80%",
    borderColor: "black",
    backgroundColor: "white",
    borderWidth: 1,
    marginBottom: 18,
    padding: 10,
    borderRadius: 3,
  },
});

export default SignIn;