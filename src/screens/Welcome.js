import React from "react";
import {View, Text, StyleSheet, StatusBar} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E7F8F6', 
    },
    text: {
        fontSize: 35,
        fontWeight: 'bold',
    },
});

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ready for your Fitness Level?</Text>
            <StatusBar style="auto" />
        </View>
    );
};

export default WelcomeScreen;
