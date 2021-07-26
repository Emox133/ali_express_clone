import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from '@ui-kitten/components'
import {Ionicons} from '@expo/vector-icons'

const Signup = ({navigate}) => {
    return (
        <View>
            <View style={styles.inputContainer}>
                <View style={styles.inputFlexContainer}>
                    <View style={styles.iconCnt}>
                        <Ionicons style={styles.inputIcon} name="person-circle-outline" size={23} color="#000" />
                    </View>
                    <Input placeholder="Ime" style={styles.input} />
                </View>
                <View style={styles.inputFlexContainer}>
                    <View style={styles.iconCnt}>
                        <Ionicons style={styles.inputIcon} name="mail-outline" size={23} color="#000" />
                    </View>
                    <Input placeholder="E-mail" style={styles.input} />
                </View>
                <View style={styles.inputFlexContainer}>
                    <View style={styles.iconCnt}>
                        <Ionicons style={styles.inputIcon} name="lock-closed-outline" size={23} color="#000" />
                    </View>
                    <Input textContentType="password" placeholder="Lozinka" style={styles.input} />
                </View>
                <View style={styles.inputFlexContainer}>
                    <View style={styles.iconCnt}>
                        <Ionicons style={styles.inputIcon} name="lock-closed-outline" size={23} color="#000" />
                    </View>
                    <Input placeholder="Potvrdite lozinku" style={styles.input} />
                </View>
            </View>
            <View style={styles.btnContainer}>
                <Button style={styles.btn} status="danger">NAPRAVI RAČUN</Button>
            </View>
            <Text style={{textAlign: 'center', marginTop: 10, color: '#999'}}>Registrujući se na ZhZola Shop potvrđujete da se slažete sa <Text status="info">našim uvijetima</Text> i <Text status="info">načinom poslovanja.</Text></Text>
            <Text style={{textAlign: 'center', marginTop: 10}} onPress={() => navigate.navigate('AuthenticateRoot', {mode: 'Prijava'})}>Već imate račun? <Text status="info">Prijavite se</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        paddingRight: 10,
        position: 'relative'
    },
    inputFlexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    input: {
        width: '85%',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#999'
    },
    iconCnt: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        width: '100%',
        alignItems: 'center'
    },
    btn: {
        width: '80%',
        alignItems: 'center'
    }
})

export default Signup
