import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function FacialRecAccepted({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Exito</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.content}>Verificacion biometrica completada</Text>
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
    backgroundColor: 'rgba(17,34,68,1)',
    alignItems: 'center',
  },
  body: {
    flex: 9,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    fontWeight: '300',
  },
  content: {
    fontSize: 20,
  },
});

export default FacialRecAccepted;
