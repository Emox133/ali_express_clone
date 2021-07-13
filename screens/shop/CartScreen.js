import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const CartScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>CartScreen</Text>
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

export default CartScreen
