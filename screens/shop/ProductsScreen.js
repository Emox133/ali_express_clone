import React from 'react'
import {StyleSheet} from 'react-native'
import SearchProducts from '../../components/UI/SearchProducts';
import {View} from 'react-native'

const ProductsScreen = () => {
    return (
        <View style={styles.screen}>
            <SearchProducts />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
})

export default ProductsScreen
