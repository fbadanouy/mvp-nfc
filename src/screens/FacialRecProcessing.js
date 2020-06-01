import 'react-native-gesture-handler';
import {StyleSheet, View, Text, ActivityIndicator, Alert} from 'react-native';
import React from 'react';
import {compareFaces} from '../functions/conectionApi';

function FacialRecProcessing({navigation, route}) {
  const {ciPhoto} = route.params;
  const {facePhoto} = route.params;
  compareFacesCaller(ciPhoto, facePhoto, navigation);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Processing</Text>
      </View>
      <View style={styles.body}>
        <Text>Estamos verificando su identidad</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    </View>
  );
}

function compareFacesCaller(ciPhoto, facePhoto, navigation) {
  compareFaces(ciPhoto.base64.split(',')[1], facePhoto, result => {
    if (result.comparacion) {
      navigation.navigate('FacialRecAccepted');
    } else {
      Alert.alert('Error', 'Usted no es el propietario de la cedula');
      navigation.navigate('EnterData');
    }
  });
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

export default FacialRecProcessing;
