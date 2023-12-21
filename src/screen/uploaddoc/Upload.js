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
  Modal,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {Picker} from '@react-native-picker/picker';
import Axios from 'axios';
import RNFS from 'react-native-fs';
import Latar from '../../../assets/latar.png';
import imageSukses from '../../../assets/centang.jpg';
import imageTolak from '../../../assets/silang.jpg';
import imageMenunggu from '../../../assets/loading.mp4';
import Dropdown from 'react-native-modal-dropdown';

const Upload = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedFile, setSelectedFile] = useState({});
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const backAction = () => {
    if (navigation.isFocused()) {
      Alert.alert('Peringatan!', 'Anda yakin ingin keluar?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Log Out',
          onPress: () => {
            navigation.navigate('Login');
          },
        },
      ]);
      return true;
    }
  };

  const handleOptionSelect = option => {
    setSelectedOption(option);
  };

  const options = [
    {
      label: 'Abstrak (format pdf)',
      status: 'menunggu',
    },
    {
      label: 'Laporan – Bagian Awal (Cover s/d Daftar Lampiran format pdf)',
      status: 'sukses',
    },
    {
      label: 'Laporan – Bagian Inti (Pendahuluan s/d Penutup format pdf)',
      status: 'tolak',
    },
    {label: 'Laporan - Bagian Akhir (Daftar Pustaka - Lampiran)', status: ''},
    {label: 'Artikel Jurnal (.doc/.docx)', status: ''},
    {
      label:
        '	Kelengkapan bukti-bukti *Surat Keterangan Hasil Cek Plagiarisme, Persetujuan Publikasi Tugas Akhir',
      status: '',
    },
  ];

  const handleOptionSelectInternal = value => {
    console.log('Selected option:', value);
    setIsModalVisible(false);
    handleOptionSelect(value); // Pass the selected value to the parent component
  };
  const getStatusColor = status => {
    const colorMap = {
      menunggu: 'yellow',
      sukses: 'green',
      tolak: 'red',
      // Add more status-color mappings as needed
    };

    return colorMap[status] || 'lightgray'; // Default color if status is not found in the mapping
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

  const handleDeleteFile = () => {
    if (selectedOption !== null) {
      setSelectedFile({...selectedFile, [selectedOption]: null});
    }
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleSave = () => {
    console.log('Judul Skripsi:', input1);
    console.log('Dosen pembimbing I:', input2);
    console.log('Dosen pembimbing II:', input3);
    alert('Data terupload');
  };

  const renderText = () => {
    if (selectedOption !== null) {
      const fileResult = selectedFile[selectedOption];
      let status = '';

      if (fileResult) {
        const option = options.find(opt => opt.label === selectedOption);
        status = option ? option.status : 'menunggu';
      }

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
              <TouchableOpacity onPress={handleDeleteFile}>
                <Text style={styles.deleteButton}>DELETE FILE</Text>
              </TouchableOpacity>
            )}
          </View>
          {fileResult && (
            <TouchableOpacity onPress={handleDownload}>
              <Text style={styles.downloadButton}>DOWNLOAD FILE</Text>
            </TouchableOpacity>
          )}
          {fileResult && (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.ketFile}>Status Validasi:</Text>
              {status === 'sukses' ? (
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.statusText}>Sukses</Text>
                  <Image source={imageSukses} style={styles.statusStyle} />
                </View>
              ) : null}
              {status === 'tolak' ? (
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.statusText}>Tolak</Text>
                  <Image source={imageTolak} style={styles.statusStyle} />
                </View>
              ) : null}
              {status !== 'sukses' && status !== 'tolak' ? (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.ketFile}> Menunggu...</Text>
                  <Image source={imageMenunggu} style={styles.statusStyle} />
                </View>
              ) : null}
            </View>
          )}
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Latar} style={styles.backgroundImage} />
      {input1 !== '' && <Text style={styles.inputText}>Judul Skripsi :</Text>}
      <TextInput
        placeholder="Judul Skripsi"
        value={input1}
        onChangeText={text => setInput1(text)}
        style={[styles.input]}
        placeholderTextColor="gray"
      />
      {input2 !== '' && (
        <Text style={styles.inputText}>Dosen pembimbing I :</Text>
      )}
      <TextInput
        placeholder="Dosen pembimbing I"
        value={input2}
        onChangeText={text => setInput2(text)}
        style={[styles.input]}
        placeholderTextColor="gray"
      />
      {input3 !== '' && (
        <Text style={styles.inputText}>Dosen pembimbing II :</Text>
      )}
      <TextInput
        placeholder="Dosen pembimbing II"
        value={input3}
        onChangeText={text => setInput3(text)}
        style={[styles.input]}
        placeholderTextColor="gray"
      />
      <Button title="Simpan" onPress={handleSave} />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Text style={styles.dropdownText}>
            {selectedOption
              ? `Sekarang memilih: ${selectedOption}`
              : 'Upload dokumen anda'}
          </Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}>
          <View style={styles.modalContainer}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.option,
                  {backgroundColor: getStatusColor(option.status)},
                ]}
                onPress={() => handleOptionSelectInternal(option.label)}>
                <Text style={styles.optionText}>{option.label}</Text>
                {option.status && (
                  <Text
                    style={{
                      ...styles.statusText,
                      color: getStatusColor(option.status),
                    }}>
                    {option.status}
                  </Text>
                )}
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>

      {renderText()}
      <View style={styles.logoutButtonContainer}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
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
  deleteButton: {
    backgroundColor: 'red',
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
    color: 'white',
    textShadowColor: 'dark',
    textShadowOffset: {width: -1, height: -1},
    textShadowRadius: 20,
    fontWeight: 'bold',
  },
  ketFile: {
    marginTop: 8,
    color: 'black',
    backgroundColor: 'white',
    padding: 12,
    opacity: 0.7,
  },
  logoutButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 0,
  },
  statusStyle: {
    position: 'absolute',
    width: 25,
    height: 25,
    backgroundColor: 'transparent',
  },

  dropdownText: {
    fontSize: 16,
    color: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust the alpha value for opacity
    padding: 10, // Add padding as needed
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  option: {
    padding: 10,
    marginVertical: 5,
    width: 200,
    borderRadius: 5,
  },
  optionText: {
    fontSize: 16,
    color: 'white',
  },
  closeText: {
    fontSize: 16,
    color: 'red',
    marginTop: 20,
  },
});

export default Upload;
