import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function DarkButton({buttonText}){
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
            fontSize: 24,
            lineHeight: 35,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
            textAlign: 'center',
            paddingTop: 14,
        },

        button: {
            width: 203,
            height: 67,
            borderRadius: 20,
            backgroundColor: '#4A7AD1',
            borderWidth: 1,
            borderColor: '#4A7AD1',
            marginBottom: 40,
          },
    
    }
)

