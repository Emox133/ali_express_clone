import React from 'react'
import {View, StyleSheet, Dimensions} from 'react-native'
import { Text, Button } from '@ui-kitten/components'
import { useData } from '../../context/DataContext'

const CartProductsFooter = () => {
    const {totalAmount} = useData()

    return (
        <View style={styles.mainContainer}>
            <View style={styles.flexContainer}>
                <View style={styles.textBox}>
                    <Text style={styles.currentAmmountText}>Trenutno</Text>
                </View>

                <View style={styles.checkoutBox}>
                    <Text style={styles.currentAmmountPrice}>US ${totalAmount}</Text>
                    <Button style={styles.checkoutBtn} status="danger" appearance="outline">Idi na kasu!</Button>
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

export default CartProductsFooter
