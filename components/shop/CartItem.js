import React from 'react'
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { Radio, Button, Text } from '@ui-kitten/components'
import { useData } from '../../context/DataContext'

const CartItem = ({ itemData }) => {
    const { quantity, image, name, price, id: pId, selected } = itemData.item
    const { cart, setCart, increaseProductQuantity, decreaseProductQuantity } = useData()

    const onSelectedHandler = (id) => {
        const copyCart = [...cart]
        const selectedProductIndex = copyCart.findIndex(p => p.id === id)
        const selectedProduct = copyCart[selectedProductIndex]
        selectedProduct.selected = !selectedProduct.selected

        setCart(copyCart)
    }

    // DO LATER :)
    // const batchProductsForDeletion = cart.filter(p => p.selected === true)

    return (
        <TouchableWithoutFeedback onPress={() => onSelectedHandler(pId)}> 
            <View style={styles.mainContainer}>
                <View style={styles.leftPane}>
                    <Radio
                        checked={selected}
                        style={styles.itemRadio}
                        status="info"
                    >
                    </Radio>
                    <View style={styles.imageBox}>
                        <Image resizeMode="cover" style={styles.image} source={{ uri: image }} />
                    </View>
                </View>

                <View style={styles.rightPane}>
                    <View style={styles.rightPaneTextBox}>
                        <Text numberOfLines={1} style={styles.rightPaneTitleText}>{name}</Text>
                        <Text numberOfLines={1} style={{ ...styles.rightPaneTitleText, ...{ color: '#999' } }} category="s2">Purple Add 32GB TF Card</Text>
                    </View>
                    <View style={styles.pricingOptionsBox}>
                        <View style={styles.priceShippingBox}>
                            <Text style={styles.price}>US {price}</Text>
                            <Text category="c1" status="info">Free Shipping</Text>
                        </View>
                        <View style={styles.quantityBox}>
                            <Button appearance="outline" size="tiny" status="basic" style={styles.quantityBtn} onPress={() => decreaseProductQuantity(pId)} disabled={quantity <= 1}>-</Button>
                            <Text style={styles.quantityText}>{quantity}</Text>
                            <Button appearance="outline" size="tiny" status="basic" style={styles.quantityBtn} onPress={() => increaseProductQuantity(pId)}>+</Button>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 150,
        width: '100%',
        backgroundColor: '#fff',
        marginVertical: 10,
        flexDirection: 'row',
        borderRadius: 5,
        elevation: 2
    },
    leftPane: {
        width: 120,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    imageBox: {
        height: 80,
        width: 70
    },
    image: {
        height: '100%',
        width: '100%'
    },
    rightPaneTextBox: {
        marginVertical: 10,
        marginHorizontal: 5
    },
    rightPaneTitleText: {
        width: '50%'
    },
    pricingOptionsBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 250,
        paddingHorizontal: 5
    },
    priceShippingBox: {},
    quantityBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    quantityBtn: {

    },
    quantityText: {
        marginHorizontal: 5,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 17,
        fontWeight: 'bold'
    }
})

export default CartItem
