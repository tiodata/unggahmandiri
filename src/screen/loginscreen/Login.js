import React, {useState} from 'react';
import Logounikama from '../../../assets/logo.png';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Latar from '../../../assets/latar.png';
import Icon from 'react-native-vector-icons/FontAwesome'; // Replace 'FontAwesome' with your desired icon pack (e.g., 'FontAwesome', 'MaterialIcons', etc.)
import Topiwisuda from '../../../assets/topiwisuda.png';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    //Di sini Anda dapat menambahkan logika otentikasi, misalnya memeriksa kredensial di server.
    // Contoh sederhana: jika username dan password sesuai, arahkan ke halaman beranda.
    if (username === '' && password === '') {
      navigation.navigate('Upload');
    } else {
      alert('Login gagal');
    }
  };

  const handleHelp = () => {
    // Tambahkan logika yang diperlukan untuk membuka halaman bantuan di sini.
    alert('Tampilkan halaman bantuan');
  };

  return (
    <View style={styles.container}>
      {/* Latar belakang */}
      <Image source={Latar} style={styles.backgroundImage} />
      <Image source={Logounikama} style={styles.unikama} />

      <Text style={styles.unikamaText}>
        Aplikasi <Text style={styles.blueText}> Unggah Mandiri </Text>Karya
        Ilmiah
      </Text>

      {/* Isi halaman login */}
      <View style={styles.loginContent}>
        <Text selectable={false} style={styles.header}>
          Sign in to
        </Text>
        <View style={styles.inpcontainer}>
          <View style={styles.inputIcon}>
            <Icon name="user" size={20} color="#333" style={styles.icon} />
            <TextInput
              placeholder="Username"
              value={username}
              onChangeText={text => setUsername(text)}
              style={styles.input}
            />
          </View>
          <View style={styles.inputIcon}>
            <Icon name="lock" size={20} color="#333" style={styles.icon} />
            {/* EyeShowHidePass */}
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={!showPassword}
              style={styles.inputP}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Icon name="eye" size={15} color="#333" style={styles.eye} />
              ) : (
                <Icon
                  name="eye-slash"
                  size={15}
                  color="#333"
                  style={styles.eye}
                />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.kotak} onPress={handleLogin}>
            <Text style={styles.signin}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleHelp}>
            <Text style={styles.bantuan}>Bantuan</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Element paling bawah */}
      <View style={styles.bottomdesign}>
        <Image source={Topiwisuda} style={styles.wisudatopi} />
      </View>
    </View>
  );
};

///styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signin: {
    color: 'white',
    fontSize: 20,
    backgroundColor: 'rgba(0, 20, 0, 0.7)',
    width: '100%',
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 4,
    justifyContent: 'center',
    borderRadius: 10,
  },
  kotak: {
    width: 200,
    marginBottom: 5,
    // backgroundColor: 'pink', // Ganti dengan warna yang Anda inginkan
    borderRadius: 5,
    padding: 5,
    height: 50,
    marginTop: 5,
    // backgroundColor: 'rgba(120, 120, 120, 0.9)', // Warna abu-abu dengan transparansi
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(128, 128, 128, 0.5)', // Warna abu-abu dengan transparansi
  },
  loginContent: {
    backgroundColor: 'rgba(170, 170, 170, 0.6)',
    padding: 20,
    borderRadius: 58,
    alignItems: 'center',
    width: '70%',
    marginTop: 55,
    justifyContent: 'center',
    flexDirection: 'column',
    height: '56%', // Atur tinggi sesuai kebutuhan Anda, misalnya '60%'
  },
  header: {
    fontSize: 25,
    paddingTop: 20,
    marginBottom: 10,
    color: 'white',
    fontWeight: 'bold', // Set fontWeight to 'bold'
  },

  unikama: {
    position: 'absolute',
    top: '1%',
    maxWidth: '',
    width: 100,
    height: 100,
    marginTop: 0,
    // backgroundColor: 'transparent',
    zIndex: 1,
  },
  /* Gaya untuk teks aplikasi dan mandiri */
  unikamaText: {
    backgroundColor: 'rgba(0, 20, 0, 0.5)', // Ganti warna dan opacity sesuai keinginan Anda
    color: 'white', // Warna teks
    position: 'absolute',
    top: '18%',
    fontSize: 15,
    padding: 10, // Atur padding sesuai kebutuhan Anda
    borderRadius: 9,
  },
  blueText: {
    color: '#FFA07A', //karya ilmiah
    fontSize: 20,
  },
  bantuan: {
    color: '#00FF7F',
    fontSize: 25,
    textDecorationLine: 'underline',
    marginTop: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  tombolmasuk: {
    paddingTop: 25,
  },
  inpcontainer: {
    width: '96%',
    marginBottom: 19,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'orange',
  },

  icon: {
    color: 'black',
    marginRight: 6,
  },
  input: {
    width: '100%',
    // backgroundColor: 'red',
    alignContent: 'center',
    borderBottomRightRadius: 80,
    borderTopRightRadius: 80,
  },
  inputP: {
    width: '91%',
    paddingRight : 8,
    // backgroundColor: 'red',
    alignContent: 'center',
    // borderBottomRightRadius: 80,ds
    // borderTopRightRadius: 80,
  },
  inputIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    maxWidth: '100%', // Menggunakan '100%' agar sesuai dengan lebar parent
    borderWidth: 3,
    borderRadius: 80,
    height: 45,
    // backgroundColor: 'rgba(200, 200, 200, 0.5)',
    backgroundColor: 'pink',
    paddingLeft: 10,
    paddingRight: 20, // Menambahkan paddingRight untuk memberi ruang pada ikon eye
  },
  eye: {
    // backgroundColor: 'yellow',
    right: 5, // Tambahkan ini
    color: 'black',
    marginLeft: 'auto', // Memindahkan ikon eye ke kanan
    width: 20,
    height: 20,
    // backgroundColor: 'yellow',
  },
  bottomdesign: {
    backgroundColor: ' rgba(255, 128, 0, 0.4)',
    width: '100%',
    height: 110,
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wisudatopi: {
    height: 120,
    width: 120,
  },
});
export default Login;
