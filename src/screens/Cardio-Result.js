import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import LightButton from "../components/Button-Light";
import NavbarTop from "../components/Navbar-top";

const logoImg = require("../../../FomeAi-app/assets/FOME-logo-blue.png");

const windowHeight = Dimensions.get("window").height
const windowWidth = Dimensions.get("window").width



const CardioResultScreen = () => {

    const [selectedOptions, setSelectedOptions] = useState([
        [], [], [], [], [] // Initialize with empty arrays for each question
    ]);

    const handleOptionSelect = (questionIndex, option) => {
        setSelectedOptions((prevState) => {
            const updatedOptions = [...prevState];
            const index = updatedOptions[questionIndex].indexOf(option);
            if (index === -1) {
                updatedOptions[questionIndex].push(option);
            } else {
                updatedOptions[questionIndex].splice(index, 1);
            }
            return updatedOptions;
        });
    };
    

    const renderOption = (questionIndex, optionText1, optionText2, optionRowStyle) => {
        const isSelected1 = selectedOptions[questionIndex] && selectedOptions[questionIndex].includes(optionText1);
        const isSelected2 = selectedOptions[questionIndex] && selectedOptions[questionIndex].includes(optionText2);
    
        return (
            <View style={[styles.optionRow, optionRowStyle]} key={`${questionIndex}-${optionText1}-${optionText2}`}>
                <TouchableOpacity
                    style={styles.optionContainer}
                    onPress={() => handleOptionSelect(questionIndex, optionText1)}
                >
                    <View style={[styles.roundDot, isSelected1 && styles.blueDot]} />
                    <Text style={styles.optionText}>{optionText1}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.optionContainer}
                    onPress={() => handleOptionSelect(questionIndex, optionText2)}
                >
                    <View style={[styles.roundDot, isSelected2 && styles.blueDot]} />
                    <Text style={styles.optionText}>{optionText2}</Text>
                </TouchableOpacity>
            </View>
        );
    };
    

    return (
        <View style={styles.container}>
            <NavbarTop />
            <ScrollView 
                contentContainerStyle={styles.content}>
                <Image source={logoImg} style={styles.logo} />
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>1. What is your preferred cardio activity?</Text>
                </View>
                <View style={styles.optionsContainer}>
                    {renderOption(0, 'Running', 'Cycling', styles.optionRow)}
                    {renderOption(0, 'Swimming', 'Jumping Jacks', styles.optionRow)}
                </View>
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>2. How long can you sustain your chosen cardio activity without taking a break?</Text>
                </View>
                <View style={styles.optionsContainer}>
                    {renderOption(1, '< 10 minutes', '10-20 minutes', styles.optionRow)}
                    {renderOption(1, '21-30 minutes', '> 30 minutes', styles.optionRow)}
                </View>
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>3. How would you describe the intensity of your cardio workouts?</Text>
                </View>
                <View style={styles.optionOneRowContainer}>
                    {renderOption(2, 'Low intensity, mostly leisurely pace', 'Moderate intensity, breaking a sweat but not too challenging', styles.optionOneRow)}
                    {renderOption(2, 'High intensity, pushing my limits and feeling breathless', 'I do not engage in cardio workouts', styles.optionOneRow)}
                </View>
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>4. How often do you engage in cardio exercises per week?</Text>
                </View>
                <View style={styles.optionOneRowContainer}>
                    {renderOption(3, 'Rarely or never', '1-2 times a week', styles.optionOneRow)}
                    {renderOption(3, '3-4 times a week', 'Almost every day', styles.optionOneRow)}
                </View>
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>5. Have you noticed improvements in your cardiovascular fitness over the past few months?</Text>
                </View>
                <View style={styles.optionOneRowContainer}>
                    {renderOption(4, '< 10 minutes', '10-20 minutes', styles.optionOneRow)}
                    {renderOption(4, '21-30 minutes', '> 30 minutes', styles.optionOneRow)}
                </View>
                <View style={styles.button}>
                    <LightButton  buttonText={"Submit"} onPress={() => navigation.navigate('SignIn')}/>
                </View>
                
                <StatusBar style="auto" />    
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#E4EBEE',
        },
        content: {
            flexGrow: 1,
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingBottom: 20,
            width: '100%',
        },
        logo: {
            width: windowWidth > 375 ? '85%' : '80%',
            height: undefined,
            aspectRatio: 308 / 105,
            marginTop: windowWidth > 375 ? 50 : 40,
        },
        questionContainer:{
            width: windowWidth > 375 ? '85%' : '86%',
        },
        questionText: {
            fontSize: windowWidth > 375 ? 25 : 20,
            fontWeight: 'normal',
            paddingTop: 20,
            paddingBottom: 15,
        },
        optionText: {
            fontSize: windowWidth > 375 ? 18 : 15,
            fontWeight: 'normal',
            paddingTop: 5,
            paddingBottom: 5,
        },
        optionsContainer: {
            width: windowWidth > 375 ? '85%' : '80%',
        },
        optionContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '55%', 
        },
        optionRow: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
        },
        optionOneRowContainer: {
            flexDirection: 'column',
            width: '100%', 
        },
        optionOneRow:{
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%', 
            paddingLeft: windowWidth > 375 ? '8%' : '9%',
        },
        roundDot: {
            width: 12,
            height: 12,
            borderRadius: 6,
            backgroundColor: 'white',
            marginRight: 8,
            borderWidth: 1,
            borderColor: 'black',
        },
        blueDot: {
            backgroundColor: '#3C80E6',
        },
        button:{
            marginTop: 60,
        },
    }
)

export default CardioResultScreen;
