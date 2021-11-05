import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // saving error
        console.log(e)
    }
}

export const setAuthorizationHeader = async (token) => {
    try {
        const JWT = `Bearer ${token}`
        await AsyncStorage.setItem('token', JWT)
        axios.defaults.headers.common['Authorization'] = JWT
    } catch (e) {
        console.log(e)
    }
}
