import 'react-native-gesture-handler';
import PassportReader from 'react-native-passport-reader';
import {StyleSheet, View, Text, Button, ActivityIndicator} from 'react-native';
import React, {Component, useState} from 'react';

function Processing({navigation, route}) {
  const {documentNumber} = route.params;
  const {dateOfBirth} = route.params;
  const {dateOfExpiry} = route.params;

  scan(documentNumber, dateOfBirth, dateOfExpiry, navigation);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Processing</Text>
      </View>
      <View style={styles.body}>
        <Text>Por favor no aleje el telefono de su documento de identidad</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
      <View style={styles.buttons}>
        <Button
          title="Cancelar"
          color="rgba(7,201,219,1)"
          onPress={() => cancel(navigation)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'flex-start',
  },
  body: {
    flex: 5,
  },
  inputs: {
    backgroundColor: 'gray',
  },
  buttons: {
    flex: 1,
  },
});

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
    // base64,
    // width,
    // height
  } = await PassportReader.scan({
    documentNumber: docNum,
    dateOfBirth: dateBirth,
    dateOfExpiry: dateExp,
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
