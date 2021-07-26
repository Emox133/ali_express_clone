import React from 'react'
import { View, StyleSheet } from 'react-native'
import Order from '../../components/UI/Order'

const CheckoutScreen = () => {
    return (
        <View style={styles.screen}>
          <Order />
        </View>
    )
}

CheckoutScreen.navigationOptions = {
    headerTitle: "Informacije o narudžbi",
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: '#e52613'
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#eee'
    }
})

export default CheckoutScreen
