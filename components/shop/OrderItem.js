import React from 'react'
import {Image, View, StyleSheet} from 'react-native'
import { Text } from '@ui-kitten/components'

const OrderItem = ({itemData}) => {
    const {image, name, price, freeShipping} = itemData.item

    return (
        <View style={styles.orderItem}>
            <View style={styles.paymentProductFlex}>
                <View style={styles.paymentProductLeftPanel}>
                    <View style={styles.imageBox}>
                        <Image style={styles.image} source={{uri: image}} />
                    </View>
                </View>

                <View style={styles.paymentProductRightPanel}>
                    <View style={styles.productTextBox}>
                        <Text style={styles.productTextMain} numberOfLines={1}>{name}</Text>
                        <Text style={styles.productPriceText}>US ${price}</Text>
                        <Text status="info">{freeShipping && 'Besplatna Dostava'}</Text>
                        <Text style={styles.productMoreDetailsText}>9R Screen Protector</Text>
                        <Text style={styles.productMoreDetailsText}>Original Oneplus</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    orderItem: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    paymentProductFlex: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginBottom: 10
    },
    paymentProductLeftPanel: {},
    imageBox: {
        height: 100,
        width: 100
    },
    image: {
        height: '100%',
        width: '100%'
    },
    paymentProductRightPanel: {
        marginLeft: 30
    },
    productTextBox: {},
    productTextMain: {
        width: 250
    },
    productPriceText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    productMoreDetailsText: {
        color: '#999',
        fontSize: 12
    },
    estimatedDeliveryFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 10
    },
})

export default OrderItem
