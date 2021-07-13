import React, {useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import CartProducts from '../../components/shop/CartProducts'
import CartProductsFooter from '../../components/UI/CartProductsFooter'
import { useData } from '../../context/DataContext'

const CartScreen = () => {
    const {calculateTotalAmount} = useData()

    useEffect(() => {
        calculateTotalAmount()
    }, [])

    return (
        <View style={styles.screen}>
           <CartProducts />
           <CartProductsFooter/>
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
