import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { Text, Button } from '@ui-kitten/components'

const RegisterOrSignup = (props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.closeWindowContainer}>
                <Ionicons onPress={() => props.navigation.goBack()} name="close-circle-outline" size={23} color="#e52613" />
            </View>

            <View style={styles.titleBox}>
                <Text category="h3" style={styles.title} status="info">ZhZola<Text category="h3" style={styles.altText} status="danger">Shop</Text></Text>
                <Text style={styles.subtitle}>Kupujte iz udobnosti vašeg doma!</Text>
            </View>

            <View style={styles.btnContainer}>
                <View style={styles.btnWrapper}>
                    <Button style={styles.btn} status="danger" onPress={() => props.navigation.navigate('AuthenticateRoot', {mode: 'Registracija'})}>REGISTRACIJA</Button>
                </View>
                <View style={styles.btnWrapper}>
                    <Button style={styles.btn} status="info" onPress={() => props.navigation.navigate('AuthenticateRoot', {mode: 'Prijava'})}>PRIJAVA</Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
       backgroundColor: '#fff'
    },
    closeWindowContainer: {
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    titleBox: {
        alignItems: 'center'
    },
    title: {},
    altText: {},
    subtitle: {
        fontSize: 12,
        color: '#999',
    },
    btnContainer: {
        height: 550,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    btnWrapper: {
        width: '90%',
        marginBottom: 5
    },
    btn: {
        borderWidth: 0,
        borderRadius: 0
    }
})

export default RegisterOrSignup
