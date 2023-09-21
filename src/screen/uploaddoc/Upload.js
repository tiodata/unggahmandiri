import React, { handleBackPress, useEffect } from 'react';
import { View, Button, StyleSheet, Text, TextInput, Alert, BackHandler} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { Picker } from '@react-native-picker/picker';




const UploadPdf = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [input1, setInput1] = React.useState('');
  const [input2, setInput2] = React.useState('');
  const [input3, setInput3] = React.useState('');

  const backAction = () => {
    if (navigation.isFocused()) {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        {
          text: "YES",
          onPress: () => {
            // Kembali ke halaman sebelumnya
            navigation.goBack();
          }
        }
      ]);
    ;
      return true;
    }
    };
    
    useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
     }, [handleBackPress]);

    
  
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleUpload = async () => {
    try {
      if (selectedOption === 1) {
        result1 = await DocumentPicker.pickSingle({type: [DocumentPicker.types.pdf]})
        setSelectedFile(result1);
        console.log(result1);
      } else if (selectedOption === 2) {
        result2 = await DocumentPicker.pickSingle({type: [DocumentPicker.types.pdf]})
        setSelectedFile(result2);
        console.log(result2);
      } else if (selectedOption === 3) {
        result3 = await DocumentPicker.pickSingle({type: [DocumentPicker.types.pdf]})
        setSelectedFile(result3);
        console.log(result3);
      } else if (selectedOption === 4) {
        result4 = await DocumentPicker.pickSingle({type: [DocumentPicker.types.pdf]})
        setSelectedFile(result4);
        console.log(result4);
      } else if (selectedOption === 5) {
        result6 = await DocumentPicker.pickSingle({type: [DocumentPicker.types.pdf]})
        setSelectedFile(result5);
        console.log(result5);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("User cancelled the upload", err);
      } else {
        console.log(err);
      }
    }
  }
  
  


  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleSave = () => {
    console.log('Input 1:', input1);
    console.log('Input 2:', input2);
    console.log('Input 3:', input3);
    alert('Tersimpan');
  };
  const renderText = () => {
    if (selectedOption === 1) {
      return (
        <View>
          <Button title="Upload File" onPress={handleUpload} />
          {selectedFile && (
            <Text style={styles.inputText}>File yang dipilih: {result1.name}</Text>
          )}
          {selectedFile && (
            <Button
              title="Download Selected File"
              onPress={() => {
                // Implementasi pengunduhan file disini
              }}
            />
          )}
        </View>
      );
    } else if (selectedOption === 2) {
      // Kasus kedua (implementasi sama seperti kasus 1)
      return (
        <View>
          <Button title="Upload File" onPress={handleUpload} />
          {selectedFile && (
            <Text style={styles.inputText}>File yang dipilih: {result2.name}</Text>
          )}
          {selectedFile && (
            <Button
              title="Download Selected File"
              onPress={() => {
                // Implementasi pengunduhan file disini
              }}
            />
          )}
        </View>
      );
    } else if (selectedOption === 3) {
      // Kasus ketiga (implementasi sama seperti kasus 1)
      return (
        <View>
          <Button title="Upload File" onPress={handleUpload} />
          {selectedFile && (
            <Text style={styles.inputText}>File yang kamu dipilih: {selectedFile.name}</Text>
          )}
          {selectedFile && (
            <Button
              title="Download Selected File"
              onPress={() => {
                // Implementasi pengunduhan file disini
              }}
            />
          )}
        </View>
      );
    } else if (selectedOption === 4) {
      // Kasus keempat (implementasi sama seperti kasus 1)
      return (
        <View>
          <Button title="Upload File" onPress={handleUpload} />
          {selectedFile && (
            <Text style={styles.inputText}>File yang dipilih: {selectedFile.name}</Text>
          )}
          {selectedFile && (
            <Button
              title="Download Selected File"
              onPress={() => {
                // Implementasi pengunduhan file disini
              }}
            />
          )}
        </View>
      );
    } else if (selectedOption === 5) {
      // Kasus kelima (implementasi sama seperti kasus 1)
      return (
        <View>
          <Button title="Upload File" onPress={handleUpload} />
          {selectedFile && (
            <Text style={styles.inputText}>File yang dipilih: {selectedFile.name}</Text>
          )}
          {selectedFile && (
            <Button
              title="Download Selected File"
              onPress={() => {
                // Implementasi pengunduhan file disini
              }}
            />
          )}
        </View>
      );
    } else {
      return null; // Kasus lainnya
    }
  }
  
  
  return (
    <View>
      {/* Input 1 */}
      {input1 !== '' && <Text style={styles.inputText}>Input 1</Text>}
      <TextInput
        placeholder="Input 1"
        value={input1}
        onChangeText={(text) => setInput1(text)}
        style={[styles.input]}
        placeholderTextColor="gray"
      />

      {/* Input 2 */}
      {input2 !== '' && <Text style={styles.inputText}>Input 2</Text>}
      <TextInput
        placeholder="Input 2"
        value={input2}
        onChangeText={(text) => setInput2(text)}
        style={[styles.input]}
        placeholderTextColor="gray"
      />

      {/* Input 3 */}
      {input3 !== '' && <Text style={styles.inputText}>Input 3</Text>}
      <TextInput
        placeholder="Input 3"
        value={input3}
        onChangeText={(text) => setInput3(text)}
        style={[styles.input]}
        placeholderTextColor="gray"
      />

      <Button title="Simpan" onPress={handleSave} />

      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue) => handleOptionSelect(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Pilih opsi" value={null} />
        <Picker.Item label="Pilihan 1" value={1} />
        <Picker.Item label="Pilihan 2" value={2} />
        <Picker.Item label="Pilihan 3" value={3} />
        <Picker.Item label="Pilihan 4" value={4} />
        <Picker.Item label="Pilihan 5" value={5} />
        <Picker.Item label="Pilihan 6" value={6} />
      </Picker>
      {renderText()}
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    color: 'purple',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginTop: 8,
    color: 'black',
  },
  inputText: {
    marginTop: 8,
    color: 'black',
  },
});

export default UploadPdf;
