import React from "react";
import {View, Text, StyleSheet, StatusBar, Image, Dimensions} from 'react-native';
import DarkButton from "../components/Button-Dark";


const logoImg = require("../../../FomeAi-app/assets/FOME-logo-blue.png")
const picture = require("../../../FomeAi-app/assets/Welcome-img.png")

const windowHeight = Dimensions.get("window").height
const windowWidth = Dimensions.get("window").width


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E4EBEE',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: windowWidth > 375 ? windowWidth * 0.1 : 20, 
    },
    text: {
      fontSize: windowHeight > 667 ? 30 : 26, 
      fontWeight: 'bold',
      paddingVertical: 30,
      textAlign: 'center',
    },
    logo: {
      width: windowWidth > 375 ? '85%' : '70%', 
      height: undefined,
      aspectRatio: 308 / 105, 
      marginBottom: windowHeight > 667 ? 30 : 20, 
      marginTop: windowHeight > 667 ? 20 : 40,
    },
    pic: {
      width: windowWidth > 375 ? '95%' : '75%', 
      height: undefined,
      aspectRatio: 300 / 330, // Adjust aspect ratio based on picture dimensions
      marginBottom: windowHeight > 667 ? 30 : 20, // Adjust margin for larger screens
    },
  });


const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={logoImg} style={styles.logo}/>
            <Image source={picture} style={styles.pic} />
            <Text style={styles.text}>Ready for your Fitness Journey?</Text>
            <DarkButton buttonText={"Get Started"} onPress={() => navigation.navigate('SignIn')}/>
            <StatusBar style="auto" />
        </View>
    );
};

export default WelcomeScreen;
