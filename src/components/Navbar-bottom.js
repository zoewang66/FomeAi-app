import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Exercise from '../../../FomeAi-app/assets/Icons/Exercise';
import Home from '../../../FomeAi-app/assets/Icons/Home';
import LeaderBoard from '../../../FomeAi-app/assets/Icons/Leaderboard';
import Profile from '../../../FomeAi-app/assets/Icons/Profile';


export default function NavbarBottom() {
  const navigation = useNavigation(); 

    return (
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
            <Home style={styles.icon} />
            <Text style={styles.text}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('LeaderBoard')}>
            <LeaderBoard style={styles.icon} />
            <Text style={styles.text}>LeaderBoard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Exercise')}>
            <Exercise style={styles.icon} />
            <Text style={styles.text}>Exercise</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
            <Profile style={styles.icon} />
            <Text style={styles.text}>Profile</Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#000',
      height: 71,
      width: '100%',
      borderRadius: 8,
    },
    navItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      width: 18,
      height: 18,
    },
    text: {
        color: '#4A7AD1',
        textAlign: 'center',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 14,
    },
  });

