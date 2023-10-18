import React, {useEffect, useState} from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  BackHandler,
  Image,
  TouchableOpacity,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {Picker} from '@react-native-picker/picker';
import Axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob';
import RNFS from 'react-native-fs';
import Latar from '../../../assets/latar.png';
import Dropdown from 'react-native-modal-dropdown';

const Upload = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedFile, setSelectedFile] = useState({});
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  /// fungsi tombol kembali hardware = keluar aplikasi
  // const backAction = () => {
  //   if (navigation.isFocused()) {
  //     Alert.alert(
  //       'Hold on!',
  //       'You are already logged in. Do you want to log out?',
  //       [
  //         {
  //           text: 'Cancel',
  //           onPress: () => null,
  //           style: 'cancel',
  //         },
  //         {
  //           text: 'Log Out',
  //           onPress: () => {
  //             navigation.navigate('Login');
  //           },
  //         },
  //       ],
  //     );
  //     return true;
  //   }
  // };

  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', backAction);
  //   return () =>
  //     BackHandler.removeEventListener('hardwareBackPress', backAction);
  // }, [navigation]);

  const handleOptionSelect = option => {
    setSelectedOption(option);
  };

  const handleUpload = async () => {
    try {
      let result = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf],
      });

      if (selectedOption !== null) {
        setSelectedFile({...selectedFile, [selectedOption]: result});
        console.log(result);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the upload', err);
      } else {
        console.log(err);
      }
    }
  };

  ///fungsi download pdf
  const handleDownload = async () => {
    if (selectedOption !== null) {
      const fileResult = selectedFile[selectedOption];

      if (fileResult) {
        try {
          const sourceUri = fileResult.uri;
          const targetPath = `${RNFS.DocumentDirectoryPath}/${fileResult.name}`;

          await RNFS.copyFile(sourceUri, targetPath);

          const response = await Axios.get(targetPath, {
            responseType: 'blob',
          });

          // ...
        } catch (error) {
          console.error('Terjadi kesalahan saat mengunduh file:', error);
        }
      }
    }
  };

  ///fungsi untuk save
  const handleSave = () => {
    console.log('Input 1:', input1);
    console.log('Input 2:', input2);
    console.log('Input 3:', input3);
    Alert('Tersimpan');
  };

  const renderText = () => {
    if (selectedOption !== null) {
      const fileResult = selectedFile[selectedOption];

      return (
        <View>
          {fileResult && (
            <Text style={styles.ketFile}>
              File yang dipilih: {fileResult.name}
            </Text>
          )}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleUpload}>
              <Text style={styles.uploadButton}>UPLOAD FILE</Text>
            </TouchableOpacity>
            {fileResult && (
              <TouchableOpacity onPress={handleDownload}>
                <Text style={styles.downloadButton}>DOWNLOAD FILE</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Latar} style={styles.backgroundImage} />
      {input1 !== '' && <Text style={styles.inputText}>Input 1</Text>}
      <TextInput
        placeholder="Input 1"
        value={input1}
        onChangeText={text => setInput1(text)}
        style={[styles.input]}
        placeholderTextColor="gray"
      />
      {input2 !== '' && <Text style={styles.inputText}>Input 2</Text>}
      <TextInput
        placeholder="Input 2"
        value={input2}
        onChangeText={text => setInput2(text)}
        style={[styles.input]}
        placeholderTextColor="gray"
      />
      {input3 !== '' && <Text style={styles.inputText}>Input 3</Text>}
      <TextInput
        placeholder="Input 3"
        value={input3}
        onChangeText={text => setInput3(text)}
        style={[styles.input]}
        placeholderTextColor="gray"
      />
      <Button title="Simpan" onPress={handleSave} />
      <View>
        <Dropdown
          options={[
            'Pilihan satu dua tiga empat lima enam tujuh lapan sembilan',
            'Pilihan 2',
            'Pilihan 3',
            'Pilihan 4',
            'Pilihan 5',
            'Pilihan 6',
          ]}
          initialScrollIndex={null}
          onSelect={(idx, value) => handleOptionSelect(value)}
          defaultValue="Pilih opsi"
          style={styles.dropdown}
          dropdownStyle={styles.dropdownOptions}
          dropdownTextStyle={styles.dropdownText}
          textStyle={styles.dropdownText}
        />
      </View>
      {renderText()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'left',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 5,
  },
  uploadButton: {
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  downloadButton: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  dropdown: {
    width: 'auto',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 800,
    backgroundColor: 'lightgray',
    padding: 8,
    paddingRight: 8,
  },
  dropdownOptions: {
    width: 'auto',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'lightgray',
  },
  dropdownText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'left',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginTop: 8,
    color: 'black',
    backgroundColor: 'lightgray',
  },
  inputText: {
    marginTop: 8,
    color: 'black',
    textShadowColor: 'white',
    textShadowOffset: {width: -1, height: -1},
    textShadowRadius: 20,
  },
  ketFile: {
    marginTop: 8,
    color: 'black',
    backgroundColor: 'white',
    padding: 12,
    opacity: 0.9,
  },
  logoutButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 0,
  },
});
export default Upload;
