import 'react-native-gesture-handler';
import { StyleSheet, View, Text, TextInput, Image, Button } from "react-native";
import React, { Component, useState } from "react";
// { scan, cancel, isSuppo }

function NfcResults({ navigation, route }) {
    const {
        firstName,
        lastName,
        gender,
        issuer,
        nationality,
        photo,
        base64,
        width,
        height} = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>NFC Results</Text>
            </View>
            <View style={styles.body}>

                <Text>Nombres</Text>
                <TextInput style={styles.inputs}
                    editable={false}
                    defaultValue={firstName} />

                <Text>Apellidos</Text>
                <TextInput style={styles.inputs}
                    editable={false}
                    defaultValue={lastName} />

                <Text>Genero</Text>
                <TextInput style={styles.inputs}
                    editable={false}
                    defaultValue={gender} />

                <Text>Issuer</Text>
                <TextInput style={styles.inputs}
                    editable={false}
                    defaultValue={issuer} />

                <Text>Nacionalidad</Text>
                <TextInput style={styles.inputs}
                    editable={false}
                    defaultValue={nationality} />

                <Text>Genero</Text>
                <TextInput style={styles.inputs}
                    editable={false}
                    defaultValue={gender} />
                <Image source={{ uri: photo.base64 }} 
                style={{alignSelf:'center', width:'25%', height:'25%', resizeMode: 'contain'}}/>
            </View>
            <View style={styles.buttons} />

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'flex-start'
    },
    body: {
        flex: 5
    },
    inputs: {
        backgroundColor: 'gray'
    },
    buttons: {
        flex: 1
    }

});

export default NfcResults;



