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
            fontSize: 17,
            lineHeight: 25,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
            textAlign: 'center',
            paddingHorizontal: 10,
            paddingVertical: 10,
        },

        button: {
            width: '50%',
            height: 50,
            borderRadius: 15,
            backgroundColor: '#4A7AD1',
            borderWidth: 1,
            borderColor: '#4A7AD1',
            marginBottom: 40,
          },
    
    }
)

