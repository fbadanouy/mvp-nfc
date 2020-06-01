import 'react-native-gesture-handler';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {commonStyles} from '../styles/commonStyles';

function EnterData({navigation}) {
  const [dateOfBirthInput, setDateOfBirth] = useState('0');
  const [dateOfExpiryInput, setDateOfExpiry] = useState('0');
  const [documentNumberInput, setDocumentNumber] = useState('0');

  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.header}>
        <Text style={commonStyles.title}>NFC Reader</Text>
      </View>
      <View style={commonStyles.body}>
        <Text style={commonStyles.content}>Fecha de nacimiento 'AAmmdd'</Text>
        <TextInput
          style={commonStyles.inputs}
          keyboardType="number-pad"
          onChangeText={value => setDateOfBirth(value)}
        />
        <Text style={commonStyles.content}>Fecha de vencimiento 'AAmmdd'</Text>
        <TextInput
          style={commonStyles.inputs}
          keyboardType="number-pad"
          onChangeText={value => setDateOfExpiry(value)}
        />
        <Text style={commonStyles.content}>Codigo de documento</Text>
        <TextInput
          style={commonStyles.inputs}
          onChangeText={value => setDocumentNumber(value)}
        />
      </View>
      <View style={commonStyles.buttons}>
        <Button
          title="Leer Cedula"
          color="rgba(7,201,219,1)"
          onPress={() =>
            navigation.navigate('Processing', {
              dateOfBirth: dateOfBirthInput,
              dateOfExpiry: dateOfExpiryInput,
              documentNumber: documentNumberInput,
            })
          }
        />
      </View>
    </View>
  );
}

export default EnterData;
