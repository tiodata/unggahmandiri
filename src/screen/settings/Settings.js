import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ROUTES} from '../../constant/routes';
import Latar from '../../../assets/latar.png';

const Settings = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Image source={Latar} style={styles.backgroundImage} />

      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES.LOGIN)}
        style={styles.button}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 17,
    margin: 10,
    borderRadius: 5,
    fontSize: 18,
    width: 180,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
