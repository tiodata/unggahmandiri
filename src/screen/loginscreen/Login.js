import React, {useState} from 'react';
import Logounikama from '../../../assets/images/logo.png';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ROUTES} from '../../constant/routes';
import Latar from '../../../assets/latar.png';
import {useNavigation} from '@react-navigation/native';

const Login = props => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState('');

  // const handleLogin = () => {
  //   if (username === '123' && password === '456') {
  //     setIsLoggedIn(true);
  //   } else {
  //     alert('Login gagal');
  //   }
  // };

  const handleHelp = () => {
    navigation.navigate(ROUTES.BANTUAN);
  };

  return (
    <View style={styles.container}>
      {/* Latar belakang */}
      <Image source={Latar} style={styles.backgroundImage} />
      <Image source={Logounikama} style={styles.unikama} />

      <Text style={styles.unikamaText}>
        Aplikasi <Text style={styles.blueText}>Unggah Mandiri</Text>Karya Ilmiah
      </Text>

      {/* Isi halaman login */}
      <View style={styles.loginContent}>
        <Text selectable={false} style={styles.header}>
          Sign in to
        </Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.UPLOAD)}
          activeOpacity={0.7}
          style={styles.loginBtn}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleHelp}>
          <Text style={styles.bantuan}>Bantuan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  loginContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '75%',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '40%', // Atur tinggi sesuai kebutuhan Anda, misalnya '60%'
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: '#3435AA',
    fontWeight: 'bold', // Set fontWeight to 'bold'
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    fontWeight: '500',
    backgroundColor: '#C0C0C0',
    fontSize: 12,
  },
  unikama: {
    position: 'absolute',
    top: '2%',
    width: '30%',
    height: '20%',
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  /* Gaya untuk teks aplikasi dan mandiri */
  unikamaText: {
    color: '#000000', // unggah mandiri
    position: 'absolute',
    top: '20%',
    fontSize: 17,
  },
  blueText: {
    color: 'blue', //karya ilmiah
    fontSize: 17,
  },

  bantuan: {
    color: 'blue',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  loginBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
  },
});
