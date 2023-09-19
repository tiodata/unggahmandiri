import React, { useState } from 'react';
import Logounikama from '../../../assets/images/logo.png';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Latar from '../../../assets/latar.png';



const Login = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        //Di sini Anda dapat menambahkan logika otentikasi, misalnya memeriksa kredensial di server.
        // Contoh sederhana: jika username dan password sesuai, arahkan ke halaman beranda.
        if (username === '123' && password === '456') {
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
                Aplikasi <Text style={styles.blueText}>masuk</Text>Karya Ilmiah
            </Text>


            {/* Isi halaman login */}
            <View style={styles.loginContent}>
                <Text selectable={false} style={styles.header}>Sign in to</Text>
                <TextInput
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                    style={styles.input}
                />
                <Button title="Sign ini" onPress={handleLogin} />
                <TouchableOpacity onPress={handleHelp}>
                    <Text style={styles.bantuan}>Bantuan</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const backgroundImage = require('../../../assets/images/background.jpg'); // Ganti dengan gambar latar belakang yang Anda inginkan

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
        color: '#000000',// unggah mandiri
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





});


export default Login;
