import 'react-native-gesture-handler';
import PassportReader from 'react-native-passport-reader'
import { StyleSheet, View, Text, Button, ActivityIndicator } from "react-native";
import React, { Component, useState } from "react";

function Processing({ navigation, route }) {
    const { documentNumber } = route.params;
    const { dateOfBirth } = route.params;
    const { dateOfExpiry } = route.params;

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


async function cancel(navigation) {
    await PassportReader.cancel();
    navigation.navigate('EnterData');
}

async function scan(docNum, dateBirth, dateExp, navigation) {

    const {
        firstName,
        lastName,
        gender,
        issuer,
        nationality,
        photo
    } = await PassportReader.scan({
        documentNumber: docNum,
        dateOfBirth: dateBirth,
        dateOfExpiry: dateExp
    });

    const { base64, width, height } = photo;

    navigation.navigate("NfcResults", {
        firstName:firstName,
        lastName:lastName,
        gender:gender, 
        issuer:issuer, 
        nationality:nationality,
        photo:photo, 
        base64:base64, 
        width:width, 
        height:height
    });
}



export default Processing;






