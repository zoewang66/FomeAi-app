import React from "react";
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import DarkButton from "../components/Button-Dark";


const logoImg = require("../../../FomeAi-app/assets/FOME-logo-blue.png")
const picture = require("../../../FomeAi-app/assets/Welcome-img.png")


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#E7F8F6', 
        alignItems: 'center', 
        textAlign: 'center',
    },

    
    text: {
        fontSize: 33,
        fontWeight: 'bold',
        padding: 40,
        textAlign: 'center',
    
    },
    logo: {
        width: 308, 
        height: 105, 
        resizeMode: 'contain',
        marginTop: 50,
        margin: 40,
    },
    pic: {
        width: 300,
        height: 330,
        padding: 30,
        margin: 35,
        alignItems: 'center',
    },

    
});


const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={logoImg} style={styles.logo}/>
            <Image source={picture} style={styles.pic} />
            <Text style={styles.text}>Ready for your Fitness Journey?</Text>
            <DarkButton buttonText={"Get Started"}/>
            <StatusBar style="auto" />
        </View>
    );
};

export default WelcomeScreen;
