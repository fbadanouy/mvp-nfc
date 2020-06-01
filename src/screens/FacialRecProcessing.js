import 'react-native-gesture-handler';
import {View, Text, ActivityIndicator, Alert} from 'react-native';
import React from 'react';
import {compareFaces} from '../functions/conectionApi';
import {commonStyles} from '../styles/commonStyles';

function FacialRecProcessing({navigation, route}) {
  const {ciPhoto} = route.params;
  const {facePhoto} = route.params;
  compareFacesCaller(ciPhoto, facePhoto, navigation);
  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.header}>
        <Text style={commonStyles.title}>Processing</Text>
      </View>
      <View style={commonStyles.body}>
        <Text style={commonStyles.content}>
          Estamos verificando su identidad
        </Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    </View>
  );
}

function compareFacesCaller(ciPhoto, facePhoto, navigation) {
  compareFaces(
    ciPhoto.base64.replace('data:image/jpeg;base64,', ''),
    facePhoto,
    result => {
      if (result.comparacion) {
        navigation.navigate('FacialRecAccepted');
      } else {
        Alert.alert('Error', 'Usted no es el propietario de la cedula');
        navigation.navigate('EnterData');
      }
    },
  );
}

export default FacialRecProcessing;
