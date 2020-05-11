import 'react-native-gesture-handler';
// import { StyleSheet, View, Text, TextInput, Image, Button } from "react-native";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    TouchableOpacity,
    ListView
  } from 'react-native';
import React, { Component, useState } from "react";
// { scan, cancel, isSuppo }

function NfcResults({ navigation, route }) {
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
        base64,
        width,
        height} = route.params;

        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.headerContent}>
                            <Image style={styles.avatar} source={{uri: photo.base64}}/>
                            <Text style={styles.name}>{nombre+" "+apellido}</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <Text>Código MRZ</Text>
                    <TextInput style={styles.inputs}
                        editable={false}
                        defaultValue={mrz} />

                    <Text>Nombres</Text>
                    <TextInput style={styles.inputs}
                        editable={false}
                        defaultValue={nombre} />

                    <Text>Apellidos</Text>
                    <TextInput style={styles.inputs}
                        editable={false}
                        defaultValue={apellido} />

                    <Text>Genero</Text>
                    <TextInput style={styles.inputs}
                        editable={false}
                        defaultValue={genero} />

                    <Text>Estado (Issuing State)</Text>
                    <TextInput style={styles.inputs}
                        editable={false}
                        defaultValue={estado} />

                    <Text>Nacionalidad</Text>
                    <TextInput style={styles.inputs}
                        editable={false}
                        defaultValue={nacionalidad} />

                    <Text>Fecha de Nacimiento</Text>
                    <TextInput style={styles.inputs}
                        editable={false}
                        defaultValue={fechaNacimiento} />

                    <Text>Fecha de Vencimiento del Documento</Text>
                    <TextInput style={styles.inputs}
                        editable={false}
                        defaultValue={fechaVencimiento} />

                    <Text>Tipo de Documento</Text>
                    <TextInput style={styles.inputs}
                        editable={false}
                        defaultValue={tipoDocumento} />

                    <Text>Código de Documento</Text>
                    <TextInput style={styles.inputs}
                        editable={false}
                        defaultValue={codigoDocumento} />

                    <Text>Número de Documento</Text>
                    <TextInput style={styles.inputs}
                        editable={false}
                        defaultValue={numeroDocumento} />

                    <Text>Número Personal</Text>
                    <TextInput style={styles.inputs}
                        editable={false}
                        defaultValue={numeroPersonal} />

                    <Text>Data Opcioanl 1</Text>
                    <TextInput style={styles.inputs}
                        editable={false}
                        defaultValue={dataOpcional1} />

                    <Text>Data Opcioanl 2</Text>
                    <TextInput style={styles.inputs}
                        editable={false}
                        defaultValue={dataOpcional2} />
                </View>
            </ScrollView>
        );

    // return (
        
    
    // );
}

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#EE82EE",
    },
    headerContent:{
      padding:30,
      alignItems: 'center',
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "#FF6347",
      marginBottom:10,
    },
    icon:{
      width: 40,
      height: 40,
    },
    title:{
      fontSize:18,
      color:"#EE82EE",
      marginLeft:4
    },
    btn:{
      marginLeft: 'auto',
       width: 40,
      height: 40,
    },
    body: {
      backgroundColor :"#E6E6FA",
    },
    box: {
      padding:5,
      marginBottom:2,
      backgroundColor: '#FFFFFF',
      flexDirection: 'row',
      shadowColor: 'black',
      shadowOpacity: .2,
      shadowOffset: {
        height:1,
        width:-2
      },
      elevation:2
    },
    username:{
      color: "#20B2AA",
      fontSize:22,
      alignSelf:'center',
      marginLeft:10
    },
    buttons: {
        flex: 1
    },
    card:{
        backgroundColor: "#FFFFFF",
        borderRadius:10,
        padding:10,
        height:100,
        marginTop:10,
    },
    cardTittle:{
        color:"#808080",
        fontSize:22,
        marginBottom:5,
    }

  }); 

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },
//     header: {
//         flex: 1,
//         backgroundColor: 'green',
//         alignItems: 'flex-start',
//         height: 2
//     },
//     body: {
//         flex: 5
//     },
//     inputs: {
//         backgroundColor: 'gray'
//     },
//     buttons: {
//         flex: 1
//     }

// });

export default NfcResults;



