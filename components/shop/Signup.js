import React, { useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Text, Input, Button } from '@ui-kitten/components'
import { Ionicons } from '@expo/vector-icons'
import axios from 'axios'
import Loader from './../utils/Loader'
import {useData} from './../../context/DataContext'
import { setAuthorizationHeader } from '../utils/StoreData'

const Signup = ({ navigate }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState({})

    const {loading, setLoading, setAuthenticated} = useData()

    const handleSubmit = () => {
        const data = {
            name,
            email,
            password,
            confirmPassword
        }

        setLoading(true)
        axios.post('/users/signup', data).then(res => {
            setLoading(false)
            // console.log(res.data)
            if(res.status === 201) {
                setAuthorizationHeader(res.data.token)
                setAuthenticated(true)
                Alert.alert('Registracija uspješna', 'Uspješno ste se registrovali na ZhZola Shop.', [{text: 'Ok', style: 'default'}])
                navigate.navigate('Products')
            }
        }).catch(err => {
            setLoading(false)
            setErrors(err.response.data.error.errors)
            // console.log(err.response.data.error.errors)
        })
    }

    return (
        !loading ?
        <View>
            <View style={styles.inputContainer}>
                <View style={styles.inputFlexContainer}>
                    <View style={styles.iconCnt}>
                        <Ionicons style={styles.inputIcon} name="person-circle-outline" size={23} color="#000" />
                    </View>
                    <View style={styles.inputBox}>
                        <Input onChangeText={(val) => setName(val)} placeholder="Ime" style={styles.input} />
                        <Text category="label" status="danger">{errors.name && errors.name.message}</Text>
                    </View>
                </View>
                <View style={styles.inputFlexContainer}>
                    <View style={styles.iconCnt}>
                        <Ionicons style={styles.inputIcon} name="mail-outline" size={23} color="#000" />
                    </View>
                    <View style={styles.inputBox}>
                        <Input onChangeText={(val) => setEmail(val)} placeholder="E-mail" style={styles.input} />
                        <Text category="label" status="danger">{errors.email && errors.email.message}</Text>
                    </View>
                </View>
                <View style={styles.inputFlexContainer}>
                    <View style={styles.iconCnt}>
                        <Ionicons style={styles.inputIcon} name="lock-closed-outline" size={23} color="#000" />
                    </View>
                    <View style={styles.inputBox}>
                        <Input secureTextEntry onChangeText={(val) => setPassword(val)} placeholder="Lozinka" style={styles.input} />
                        <Text category="label" status="danger">{errors.password && errors.password.message}</Text>
                    </View>
                </View>
                <View style={styles.inputFlexContainer}>
                    <View style={styles.iconCnt}>
                        <Ionicons style={styles.inputIcon} name="lock-closed-outline" size={23} color="#000" />
                    </View>
                    <View style={styles.inputBox}>
                        <Input secureTextEntry onChangeText={(val) => setConfirmPassword(val)} placeholder="Potvrdite lozinku" style={styles.input} />
                        <Text category="label" status="danger">{errors.confirmPassword && errors.confirmPassword.message}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.btnContainer}>
                <Button onPress={() => handleSubmit()} style={styles.btn} status="danger">NAPRAVI RAČUN</Button>
            </View>
            <Text style={{ textAlign: 'center', marginTop: 10, color: '#999' }}>Registrujući se na ZhZola Shop potvrđujete da se slažete sa <Text status="info">našim uvijetima</Text> i <Text status="info">načinom poslovanja.</Text></Text>
            <Text style={{ textAlign: 'center', marginTop: 10 }} onPress={() => navigate.navigate('AuthenticateRoot', { mode: 'Prijava' })}>Već imate račun? <Text status="info">Prijavite se</Text></Text>
        </View> : <Loader />
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
    inputBox: {
        width: '100%',
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
