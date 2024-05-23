import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import DarkButton from "../components/Button-Dark";
import { useRef, useState, useEffect } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const SignUp = () => {
  const navigation = useNavigation();

  const scrollViewRef = useRef(null);
  const [selectedGender, setSelectedGender] = useState("");
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [statusBarHeight, setStatusBarHeight] = useState(0);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gymAffiliation, setGymAffiliation] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [gymAffiliationError, setGymAffiliationError] = useState("");

  useEffect(() => {
    const height = getStatusBarHeight();
    setStatusBarHeight(height);
  }, []);
  const scrollToPasswordInput = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  // Handles signup process through to mysql2 api (through local host)
  function handleSignUp() {
    return fetch(API_URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res.error) {
          if (res.message === "User already exists!") {
            alert("User already exists! Please choose a different username.");
          } else {
            console.error("Error:", res.message);
          }
        } else {
          console.log("User created!");
          navigation.navigate("SignIn");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle network errors or other unexpected errors
        alert("An error occurred. Please try again later.");
      });
  }

  const togglePicker = () => {
    setPickerVisible(!isPickerVisible);
  };

  const validateForm = () => {
    let isValid = true;

    // Validate username
    if (username === "") {
      setUsernameError("Username is required");
      isValid = false;
    } else {
      setUsernameError("");
    }

    // Validate email
    if (email === "" || !email.includes("@")) {
      setEmailError("Please enter a valid email");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validate password
    if (password === "") {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    // Validate age
    if (age >= "80" || age <= "0") {
      setAgeError("Age is invalid");
      isValid = false;
    } else if (age === "") {
      setAgeError("Age is required");
      isValid = false;
    } else {
      setAgeError("");
    }

    // Validate gym affiliation
    if (gymAffiliation === "") {
      setGymAffiliationError("Gym affiliation is required");
      isValid = false;
    } else {
      setGymAffiliationError("");
    }

    if (isValid) {
      navigation.navigate("AssessStart");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "null"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <StatusBar barStyle="auto" />
      <SafeAreaView>
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.greeting}>Welcome</Text>
          <Text style={styles.info}>
            Please help us to know more about you!
          </Text>

          <View style={styles.form}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              onChangeText={(text) => setUsername(text)}
              onFocus={scrollToPasswordInput}
            />
            <Text style={styles.errorText}>{usernameError}</Text>

            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="email@example.com"
              onChangeText={(text) => setEmail(text)}
              onFocus={scrollToPasswordInput}
              keyboardType="email-address"
            />
            <Text style={styles.errorText}>{emailError}</Text>

            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              onFocus={scrollToPasswordInput}
            />
            <Text style={styles.errorText}>{passwordError}</Text>

            <View style={styles.inputGroup}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Gender</Text>
                <TouchableOpacity
                  onPress={togglePicker}
                  style={styles.pickerHeader}
                >
                  <Text style={styles.pickerHeaderText}>
                    {selectedGender ? selectedGender : "Select Gender"}
                  </Text>
                </TouchableOpacity>

                {isPickerVisible && (
                  <ScrollView
                    style={styles.pickerContainer}
                    contentContainerStyle={styles.pickerContent}
                  >
                    <Picker
                      selectedValue={selectedGender}
                      onValueChange={(itemValue, itemIndex) => {
                        setSelectedGender(itemValue);
                        togglePicker();
                      }}
                      style={styles.picker}
                    >
                      <Picker.Item label="Male" value="Male" />
                      <Picker.Item label="Female" value="Female" />
                      <Picker.Item label="Other" value="Other" />
                    </Picker>
                  </ScrollView>
                )}
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Age</Text>
                <TextInput
                  style={[styles.input, styles.largeInput]}
                  placeholder="Age"
                  onChangeText={(text) => setAge(text)}
                  onFocus={scrollToPasswordInput}
                  keyboardType="numeric"
                />
                <Text style={styles.errorText}>{ageError}</Text>
              </View>
            </View>
            <Text style={styles.label}>Gym Affiliation</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your gym affiliation"
              onChangeText={(text) => setGymAffiliation(text)}
              onFocus={scrollToPasswordInput}
            />
            <Text style={styles.errorText}>{gymAffiliationError}</Text>
          </View>
          <DarkButton
            buttonText="Sign Up"
            navigation={navigation}
            goTo="AssessStart"
          />
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4EBEE",
    paddingTop: StatusBar.currentHeight,
  },
  statusBar: {
    backgroundColor: "#4A7AD1",
  },
  content: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    width: "100%",
  },
  errorText: {
    color: "red",
  },
  greeting: {
    fontSize: windowHeight > 667 ? 37 : 26,
    color: "black",
    fontWeight: "bold",
    paddingTop: 25,
    textAlign: "center",
  },
  info: {
    fontSize: windowHeight > 667 ? 28 : 22,
    color: "black",
    textAlign: "center",
  },

  text: {
    fontSize: windowHeight > 667 ? 24 : 21,
    fontWeight: "bold",
    paddingTop: windowHeight > 667 ? 30 : 20,
    paddingBottom: windowHeight > 667 ? 30 : 28,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  form: {
    width: windowWidth > 375 ? "87%" : "100%",
    height: undefined,
    marginStart: windowWidth > 375 ? 20 : 85,
    marginTop: windowWidth > 375 ? 30 : 20,
  },
  inputGroup: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    width: windowWidth > 375 ? "95%" : "87%",
  },
  inputContainer: {
    flex: 1,
  },
  label: {
    fontSize: windowWidth > 375 ? 20 : 16,
    marginBottom: 1,
    fontWeight: "bold",
  },
  input: {
    width: windowWidth > 375 ? "88%" : "75%",
    borderColor: "black",
    backgroundColor: "white",
    borderWidth: 1,
    marginBottom: 8,
    padding: 10,
    borderRadius: 3,
  },
  pickerContainer: {
    maxHeight: 130, // Adjust the max height as needed
    borderWidth: 1,
    borderColor: "#264C92",
    borderRadius: 3,
    marginBottom: 8,
    marginTop: 0, // No top margin
  },
  pickerContent: {
    paddingTop: 0, // No padding on top
  },
  pickerHeader: {
    width: "90%",
    paddingVertical: 9,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 3,
    marginBottom: 8,
    backgroundColor: "white",
  },
  pickerHeaderText: {
    fontSize: 13,
  },
  picker: {
    width: "100%",
  },
});

export default SignUp;
