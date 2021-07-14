import React, {useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import CartProducts from '../../components/shop/CartProducts'
import CartProductsFooter from '../../components/UI/CartProductsFooter'
import { useData } from '../../context/DataContext'
import HeaderButton from '../../components/UI/HeaderButton'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

const CartScreen = (props) => {
    const {calculateTotalAmount, deleteSelectedFromCart, cart, totalAmount} = useData()
    const {navigation} = props

    useEffect(() => {
        navigation.setParams({cartQuantity: cart.length})
    }, [cart, totalAmount])

    useEffect(() => {
        navigation.setParams({deleteSelected: deleteSelectedFromCart})
    }, [])

    useEffect(() => {
        calculateTotalAmount()
    }, [calculateTotalAmount])

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
    const deleteSelected = navData.navigation.getParam('deleteSelected')

    return {
        title: `Korpa (${cartItemsQuantity ? cartItemsQuantity : '0'})`,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title="trash-outline" 
                    color="#e52613"
                    iconName="trash-outline"
                    onPress={() => deleteSelected()}
                />
            </HeaderButtons>
        )
    }
}

export default CartScreen
