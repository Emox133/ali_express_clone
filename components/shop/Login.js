import React, {useState} from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Text, Input, Button } from '@ui-kitten/components'
import {Ionicons} from '@expo/vector-icons'
import Loader from './../utils/Loader'
import axios from 'axios'
import {useData} from './../../context/DataContext'

const Login = ({navigate}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})

    const {loading, setLoading} = useData()

    const handleSubmit = () => {
        const data = {
            email,
            password
        }

        setLoading(true)
        axios.post('/users/login', data).then(res => {
            setLoading(false)
            if(res.status === 201) {
                Alert.alert('Dobrodošli nazad', 'Dobrodošli nazad na Zh Zola shop.', [{text: 'Ok', style: 'default'}])
                navigate.navigate('Products')
            }
        }).catch(err => {
            setLoading(false)
            setErrors({
                message: err.response.data.message
            })
            // console.log(err.response.data.message)
        })
    }

    return (
        !loading ?
        <View>
            <View style={styles.inputContainer}>
                <View style={styles.inputFlexContainer}>
                    <View style={styles.iconCnt}>
                        <Ionicons style={styles.inputIcon} name="mail-outline" size={23} color="#000" />
                    </View>
                    <View style={styles.inputBox}>
                        <Input onChangeText={(val) => setEmail(val)} placeholder="E-mail" style={styles.input} />
                        <Text category="label" status="danger">{errors.message && errors.message}</Text>
                    </View>
                </View>
                <View style={styles.inputFlexContainer}>
                    <View style={styles.iconCnt}>
                        <Ionicons style={styles.inputIcon} name="lock-closed-outline" size={23} color="#000" />
                    </View>
                    <View style={styles.inputBox}>
                        <Input secureTextEntry onChangeText={(val) => setPassword(val)} placeholder="Lozinka" style={styles.input} />
                        <Text category="label" status="danger">{errors.message && errors.message}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.btnContainer}>
                <Button onPress={() => handleSubmit()} style={styles.btn} status="danger">PRIJAVA</Button>
            </View>
            <Text style={{textAlign: 'center', marginTop: 10}} onPress={() => navigate.navigate('AuthenticateRoot', {mode: 'Registracija'})}>Nemate račun? <Text status="info">Registrujte se</Text></Text>
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
        width: '100%'
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

export default Login
