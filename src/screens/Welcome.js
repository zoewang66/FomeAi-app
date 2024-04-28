import React from "react";
import {View, Text, StyleSheet, StatusBar, Image, Dimensions} from 'react-native';
import DarkButton from "../components/Button-Dark";


const logoImg = require("../../../FomeAi-app/assets/FOME-logo-blue.png")
const picture = require("../../../FomeAi-app/assets/Welcome-img.png")

const windowHeight = Dimensions.get("window").height
const screenHeight = Dimensions.get("screen").height

console.log('Window Height:', windowHeight)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexShrink: 1,
        flexDirection: 'column',
        backgroundColor: '#E7F8F6', 
        alignItems: 'center', 
        textAlign: 'center',
        height: windowHeight,
    },

    
    text: {
        fontSize: windowHeight > 667 ? 33 : 28,
        fontWeight: 'bold',
        paddingVertical: 20,
        textAlign: 'center',
    
    },
    logo: {
        width: '80%', 
        height: 100, 
        height: undefined,
        aspectRatio: 308 / 50,
        resizeMode: 'contain',
        marginTop: 50,
        marginBottom: 20,
    },
    pic: {
        width: '80%',
        height: undefined,
        aspectRatio: 330 / 360,
        marginBottom: 25,
        alignItems: 'center',
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
