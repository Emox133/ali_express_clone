import React from 'react'
import {StyleSheet, View} from 'react-native'
import SearchProducts from '../../components/UI/SearchProducts';
import SupportPages from '../../components/UI/SupportPages'

const ProductsScreen = () => {
    return (
        <View style={styles.screen}>
            <SearchProducts />
            <SupportPages />
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
