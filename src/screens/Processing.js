import 'react-native-gesture-handler';
import PassportReader from 'react-native-passport-reader';
import {View, Text, Button, ActivityIndicator, Alert} from 'react-native';
import React from 'react';
import {commonStyles} from '../styles/commonStyles';

function Processing({navigation, route}) {
  const {documentNumber} = route.params;
  const {dateOfBirth} = route.params;
  const {dateOfExpiry} = route.params;

  scan(documentNumber, dateOfBirth, dateOfExpiry, navigation);

  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.header}>
        <Text style={commonStyles.title}>Processing</Text>
      </View>
      <View style={commonStyles.body}>
        <Text style={commonStyles.content}>
          Por favor no aleje el telefono de su documento de identidad
        </Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
      <View style={commonStyles.buttons}>
        <Button
          title="Cancelar"
          color="rgba(7,201,219,1)"
          onPress={() => cancel(navigation)}
        />
      </View>
    </View>
  );
}

async function cancel(navigation) {
  await PassportReader.cancel();
  navigation.navigate('EnterData');
}

async function scan(docNum, dateBirth, dateExp, navigation) {
  const {
    mrz,
    nombre,
    apellido,
    fechaNacimiento,
    fechaVencimiento,
    numeroDocumento,
    tipoDocumento,
    codigoDocumento,
    estado,
    nacionalidad,
    genero,
    numeroPersonal,
    dataOpcional1,
    dataOpcional2,
    photo,
  } = await PassportReader.scan({
    documentNumber: docNum,
    dateOfBirth: dateBirth,
    dateOfExpiry: dateExp,
  }).catch(function(err) {
    Alert.alert('Error', 'Error leyendo la cedula');
    console.log(err);
    navigation.navigate('EnterData');
  });

  const {base64, width, height} = photo;

  navigation.navigate('NfcResults', {
    mrz: mrz,
    nombre: nombre,
    apellido: apellido,
    fechaNacimiento: fechaNacimiento,
    fechaVencimiento: fechaVencimiento,
    numeroDocumento: numeroDocumento,
    tipoDocumento: tipoDocumento,
    codigoDocumento: codigoDocumento,
    estado: estado,
    nacionalidad: nacionalidad,
    genero: genero,
    numeroPersonal: numeroPersonal,
    dataOpcional1: dataOpcional1,
    dataOpcional2: dataOpcional2,
    photo: photo,
  });
}

export default Processing;
