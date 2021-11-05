import React, {useEffect, useCallback} from 'react'
import axios from 'axios'
import { StyleSheet, View } from 'react-native'
import Products from '../../components/shop/Products';
import SearchProducts from '../../components/UI/SearchProducts';
import SupportBoxes from '../../components/UI/SupportBoxes'
import FeatureCategories from '../../components/UI/FeatureCategories'
import CustomStatusBar from '../../components/utils/CustomStatusBar';
import { PRODUCTS } from '../../data/dummyData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode'
import { Alert } from 'react-native';
import { useData } from '../../context/DataContext';

const ProductsScreen = (props) => {
    const {logout, setAuthenticated} = useData()

    const fetchToken = useCallback(async () => {
        try {
            const token = await AsyncStorage.getItem('token')

            if (token) {
                const decodedToken = jwtDecode(token)

                if (new Date(decodedToken.exp * 1000) < new Date()) {
                    logout(props.navigation)

                    Alert.alert('Ulogujte se ponovo.', 'Molimo vas da se ulogujete ponovo radi sigurnosti vašeg računa.', [{ text: 'Ok', style: 'default' }])
                }

                setAuthenticated(true)
                axios.defaults.headers.common['Authorization'] = token
            }
        } catch (e) {
            console.log(e)
        }
    }, [])

    useEffect(() => {
        fetchToken()
    }, [fetchToken])

    return (
        <View style={styles.screen}>
            <CustomStatusBar barStyle="light-content" />
            <SearchProducts navigation={props.navigation} />
            <FeatureCategories navigation={props.navigation} />
            <SupportBoxes navigation={props.navigation} />
            <Products data={PRODUCTS} navigation={props.navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fafafa',
    }
})

export default ProductsScreen
