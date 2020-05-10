import 'react-native-gesture-handler';
import PassportReader from 'react-native-passport-reader'
import { StyleSheet, View, Text, TextInput, Image, Button } from "react-native";
import React, { Component, useState } from "react";
// { scan, cancel, isSuppo }

function EnterData() {
  const [dateOfBirth, setDateOfBirth] = useState('0');
  const [dateOfExpiry, setDateOfExpiry] = useState('0');
  const [documentNumber, setDocumentNumber] = useState('0');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>NFC Reader</Text>
      </View>
      <View style={styles.body}>
        <Text>Fecha de nacimiento 'AAmmdd'</Text>
        <TextInput styles={styles.inputs}
          onChangeText={value => setDateOfBirth(value)}>
        </TextInput>
        <Text>Fecha de vencimiento 'AAmmdd'</Text>
        <TextInput style={styles.inputs}
          onChangeText={value => setDateOfExpiry(value)}>
        </TextInput>
        <Text>Codigo de documento</Text>
        <TextInput style={styles.inputs}
          onChangeText={value => setDocumentNumber(value)}>
        </TextInput>
      </View>
      <View style={styles.buttons}>
      <Button
        title="Leer Cedula"
        color="rgba(7,201,219,1)"
        onPress={() =>
          navigation.navigate('Processing', {
            dateOfBirth: this.dateOfBirth,
            dateOfExpiry: this.dateOfExpiry,
            documentNumber: this.documentNumber
          })
        }
      />
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header:{
    flex:1,
    backgroundColor: 'green',
    alignItems: 'flex-start'
  },
  body:{
    flex: 5
  },
  inputs:{
    backgroundColor: 'gray'
  },
  buttons:{
    flex: 1
  }
  
});

export default EnterData;