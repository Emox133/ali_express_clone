import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {PRODUCTS} from '../../data/dummyData'
import Products from '../../components/shop/Products'

const WishListScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Products data={PRODUCTS.filter(p => p.mainCategory === 'Kompresori')} navigation={props.navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default WishListScreen
