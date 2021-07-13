import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '@ui-kitten/components'
import CartProducts from '../../components/shop/CartProducts'

const CartScreen = () => {
    return (
        <View style={styles.screen}>
           <CartProducts />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

CartScreen.navigationOptions = (navData) => {
    const cartItemsQuantity = navData.navigation.getParam('cartQuantity')

    return {
        title: `Korpa (${cartItemsQuantity})`
    }
}

export default CartScreen
