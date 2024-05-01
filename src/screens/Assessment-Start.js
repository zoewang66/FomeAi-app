import { View, Text, Dimensions, StyleSheet, Image, ScrollView } from "react-native";
import NavbarBottom from "../components/Navbar-bottom";
import LightButton from "../components/Button-Light";

const picture1 = require("../../../FomeAi-app/assets/Strength-choose.png");
const picture2 = require("../../../FomeAi-app/assets/Cardio-choose.png");

const windowHeight = Dimensions.get("window").height
const windowWidth = Dimensions.get("window").width

export default function AssessStart({navigation}){
    const currentTime = new Date().getHours();
    let greeting;

    if (currentTime < 12) {
      greeting = "Good Morning";
    } else if (currentTime < 18) {
      greeting = "Good Afternoon";
    } else {
      greeting = "Good Evening";
    }

    const userName = "Dylan";
    return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.greetingText}>{greeting}!</Text>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.subText}>
            Choose the Exercise Type to Assess your Fitness Level
          </Text>
          <View style={styles.card}>
            <Image source={picture1} style={styles.picture1} />
            <View style={styles.cardContent}>
              <Text style={styles.title}>Strength</Text>
              <View style={styles.button}>
                <LightButton buttonText={"Choose"} />
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <Image source={picture2} style={styles.picture2} />
            <View style={styles.cardContent}>
              <Text style={styles.title}>Strength</Text>
              <View style={styles.button}>
                <LightButton buttonText={"Choose"} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <NavbarBottom />
    </View>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
      backgroundColor: "#E4EBEE",
      flex: 1,
    },
  
    contentContainer: {
      display: "flex",
      alignItems: "center",
      alignContent: "center",
      flexDirection: "column",
      width: '100%',
      flexShrink: 0,
      paddingLeft: 40,
      minHeight: windowHeight,
      paddingTop: windowHeight > 667 ? 40 : 25,
      paddingBottom: 60,
    },
  
    greetingText: {
      alignSelf: "flex-start",
      fontSize: 45,
    },
  
    userName: {
      alignSelf: "flex-start",
      fontSize: 43,
      color: "#F90A0A",
      paddingBottom: 20,
    },
    subText: {
        fontSize: windowWidth > 375 ? 20 : 18,
        fontWeight: 'normal',
        paddingTop: 20,
        paddingEnd: 10,
        paddingBottom: windowWidth > 375 ? 70 : 60,
        alignSelf: "flex-start",
    },
    card: {
        width: windowWidth > 375 ? '87%' : '85%',
        alignSelf: 'flex-start',
        backgroundColor: '#264C92',
        borderRadius: 8,
        padding: 10,
        marginVertical: 20,
        shadowColor: '#264C92',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      picture1: {
        width: '100%',
        height: undefined,
        aspectRatio: 224/159,
      },
      picture2: {
        width: '100%',
        height: undefined,
        aspectRatio: 225/151,
      },
      title: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        paddingTop: 35,
      },
      button: {
        paddingTop: 32,
      }
}); 
