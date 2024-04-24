import React from "react";
import {View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView} from 'react-native';


const logoImg = require("../../../FomeAi-app/assets/FOME-logo-blue.png")
const picture = require("../../../FomeAi-app/assets/Welcome-img.png")


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7F8F6', 
    },

    scrollViewContent: {
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

    button: {
        width: 180,
        height: 60,
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 40,
        elevation: 3,
        backgroundColor: '#4A7AD1',
        marginBottom: 40,
      },

      buttonText: {
        fontSize: 24,
        lineHeight: 20,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        paddingTop: 10,
      },

});


const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Image source={logoImg} style={styles.logo}/>
            <Image source={picture} style={styles.pic} />
            <Text style={styles.text}>Ready for your Fitness Journey?</Text>
            <TouchableOpacity style={styles.button}>
               <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
            </ScrollView>
            
        </View>
    );
};

export default WelcomeScreen;
