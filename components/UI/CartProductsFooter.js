import React from 'react'
import {View, StyleSheet, Dimensions} from 'react-native'
import { Text, Button } from '@ui-kitten/components'
import { useData } from '../../context/DataContext'
import { withNavigation } from 'react-navigation'

const CartProductsFooter = (props) => {
    const {cart, totalAmount} = useData()
    
    return (
        <View style={styles.mainContainer}>
            <View style={styles.flexContainer}>
                <View style={styles.textBox}>
                    <Text style={styles.currentAmmountText}>Trenutno</Text>
                </View>

                <View style={styles.checkoutBox}>
                    <Text style={styles.currentAmmountPrice}>US ${Number(totalAmount).toFixed(0)}</Text>
                    <Button disabled={cart.length === 0} style={styles.checkoutBtn} status="danger" appearance="outline" onPress={() => props.navigation.navigate('Checkout')}>Idi na kasu!</Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 60,
        width: Dimensions.get('window').width,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textBox: {
        alignItems: 'center'
    },
    currentAmmountText: {},
    currentAmmountPrice: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    checkoutBtn: {
        marginLeft: 10
    },
    checkoutBox: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        alignItems: 'center'
    }
})

export default withNavigation(CartProductsFooter)
