import React, {useState} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {Picker} from '@react-native-picker/picker'; // Import Picker dari paket yang benar

const Upload = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleOptionSelect = option => {
    setSelectedOption(option);
  };

  const handleUpload = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });

      setSelectedFile(result);

      console.log(result.uri, result.type, result.name, result.size);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Pemilihan file dibatalkan');
      } else {
        throw err;
      }
    }
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => handleOptionSelect(itemValue)}>
        <Picker.Item label="Pilih opsi" value={null} />
        <Picker.Item label="Pilihan 1" value={1} />
        <Picker.Item label="Pilihan 2" value={2} />
        <Picker.Item label="Pilihan 3" value={3} />
        <Picker.Item label="Pilihan 4" value={4} />
        <Picker.Item label="Pilihan 5" value={5} />
        <Picker.Item label="Pilihan 6" value={6} />
      </Picker>

      {selectedOption && (
        <View>
          <Button title="Upload File" onPress={handleUpload} />
          {selectedFile && <Text>File yang dipilih: {selectedFile.name}</Text>}
        </View>
      )}
    </View>
  );
};
export default Upload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
