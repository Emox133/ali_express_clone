import { Text } from '@ui-kitten/components'
import React from 'react'
import { View, StyleSheet, Image, TouchableNativeFeedback } from 'react-native'
import { ProductItemMenu } from '../UI/ProductItemMenu'

const ProductItem = ({ itemData }) => {
    return (
        <TouchableNativeFeedback useForeground>
            <View style={styles.product}>
                <View style={styles.imageBox}>
                    <Image style={styles.img} source={{uri: itemData.item.image}} />
                </View>
                <View style={styles.textBox}>
                    <Text>
                        {itemData.item.name}
                    </Text>
                    <Text style={{fontWeight: 'bold'}}>
                        US {itemData.item.price}
                    </Text>
                    <View style={styles.detailsBox}>
                        <Text style={{marginTop: 0}}>
                            37 prodanih
                        </Text>
                        <ProductItemMenu productId={itemData.item.id} inCart={itemData.item.inCart}/>
                    </View>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    product: {
        height: 250,
        width: 180,
        margin: 10,
        backgroundColor: '#fff',
        elevation: 2,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        overflow: 'hidden'
    },
    imageBox: {
        height: '65%',
        width: '100%',
    },
    img: {
        height: '100%',
        width: '100%'
    },
    textBox: {
        padding: 10
    },
    detailsBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default ProductItem
