import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';

const Admin = () => {
  const [filePath, setFilePath] = useState('');

  const pickFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      setFilePath(res.uri);
      console.log("File Uploaded"); 
      Alert.alert("File Uploaded"); 
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        console.error('Error while picking the file', err);
      }
    }
  };
  
  const readFile = async () => {
    try {
      const content = await RNFS.readFile(filePath, 'base64');
      console.log('File content:', content);
      // Handle the file content as needed
    } catch (err) {
      console.error('Error while reading the file', err);
    }
  };

  return (
    <View style={{ flex: 1,backgroundColor:'pink', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 20 }}>Uploaded File: {filePath}</Text>
      <Button title="Pick Excel File" onPress={pickFile} />
      {filePath ? (
        <Button title="Read File" onPress={readFile} />
      ) : null}
    </View>
  );
};

export default Admin;
