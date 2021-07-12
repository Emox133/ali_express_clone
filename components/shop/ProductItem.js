import { Text } from '@ui-kitten/components'
import React from 'react'
import { View, StyleSheet, Image, TouchableNativeFeedback } from 'react-native'

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
                        <Text>
                            37 sold
                        </Text>
                        <Text>
                            ...
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    product: {
        height: 350,
        width: 350,
        backgroundColor: '#fff',
        elevation: 2,
        marginVertical: 10
    },
    imageBox: {
        height: '65%',
        width: '100%',
        // borderRadius: 8,
        overflow: 'hidden',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8
    },
    img: {
        height: '100%',
        width: '100%',
    },
    textBox: {
        padding: 10
    },
    detailsBox: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default ProductItem
