import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function LightButton({buttonText}){
    return(
        <View>
            <TouchableOpacity style={styles.button}>
               <Text style={styles.text}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create(
    {    
        text: {
            fontSize: 16,
            lineHeight: 20,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: '#4A7AD1',
            textAlign: 'center',
            paddingTop: 12,
        },

        button: {
            width: 110,
            height: 50,
            alignItems: 'center',
            borderRadius: 10,
            elevation: 3,
            backgroundColor: '#FFFFFF',
            borderWidth: 1,
            borderColor: '#4A7AD1',
            marginBottom: 40,
          },
    
    }
)