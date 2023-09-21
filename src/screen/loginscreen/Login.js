import React, { useState } from 'react';
import Logounikama from '../../../assets/logo.png';
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
                Aplikasi <Text style={styles.blueText}> Unggah  Mandiri </Text> Karya Ilmiah
            </Text>


            {/* Isi halaman login */}
            <View style={styles.loginContent}>
                <Text selectable={false} style={styles.header}>Sign in to</Text>
                <View style={styles.inpcontainer}>

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
                </View>
                <Button title="Sign in" onPress={handleLogin} style={styles.tombolmasuk} />
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
        backgroundColor: 'rgba(128, 128, 128, 0.5)', // Warna abu-abu dengan transparansi
    },
    loginContent: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 27,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
        marginTop: 55,
        justifyContent: 'center',
        flexDirection: 'column',
        height: '55%', // Atur tinggi sesuai kebutuhan Anda, misalnya '60%'
    },
    header: {
        fontSize: 24,
        paddingTop: 10,
        marginBottom: 20,
        color: '#3435AA',
        fontWeight: 'bold', // Set fontWeight to 'bold'
    },
    input: {
        width: '90%',
        height: 45,
        borderWidth: 2,
        marginBottom: 15,
        padding: 9,
        fontWeight: '600',
        backgroundColor: '#C0C0C0',
        fontSize: 12,
        
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ganti warna dan opacity sesuai keinginan Anda
        color: '#FFFFFF', // Warna teks
        position: 'absolute',
        top: '18%',
        fontSize: 22,
        padding: 8, // Atur padding sesuai kebutuhan Anda
        borderRadius: 9,
    },
    blueText: {
        color: 'blue', //karya ilmiah
        fontSize: 17,
    },

    bantuan: {
        color: 'blue',
        fontSize: 20,
        textDecorationLine: 'underline',
        marginTop: 15,


    },
    tombolmasuk:{
        paddingTop:20,
    },
    inpcontainer: {
        width:'100%',
        marginBottom: 17,
    },




});


export default Login;
