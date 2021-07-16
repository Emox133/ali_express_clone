import React from 'react'
import { View, StyleSheet, Image, ScrollView } from 'react-native'
import { Text, Divider } from '@ui-kitten/components'
import { Ionicons } from '@expo/vector-icons'
import ReviewsQuickOverview from './ReviewsQuickOverview'

const ProductDetails = ({product}) => {
    const {mainCategory, subCategory, description, id, image, inCart, name, price, discount, varyPrice, quantity} = product.item

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.imageBox}>
                <Image resizeMode="cover" style={styles.image} source={{uri: image}} />
            </View>

            <View style={styles.titleTextBox}>
                <Text style={styles.titleMainText}>US ${price} - ${varyPrice}</Text>
                <Text style={styles.textDiscount}>{discount ? `$${price} $${discount}` : null}</Text>
                <View style={styles.heartIconContainer}>
                    <View>
                        <Ionicons name="heart-outline" size={24} color="#444" />
                    </View>
                    <Text style={styles.favouriteCount}>14</Text>
                </View>
            </View>

            <View style={styles.detailsTextBox}>
                <Text category="c1" style={styles.detailsText}>
                    {description}
                </Text>
            </View>

            <Divider style={{backgroundColor: '#ddd', marginBottom: 20}}/>

            <Text style={{marginLeft: 15, marginBottom: 5, color: '#000'}}>Više artikala</Text>
            <View style={styles.brandColorsBox}>
                <View style={styles.imageBrandBox}>
                    <Image source={{uri: image}} style={styles.imageBrand} />
                </View>

                <View style={styles.imageBrandBox}>
                    <Image source={{uri: image}} style={styles.imageBrand} />
                </View>

                <View style={styles.imageBrandBox}>
                    <Image source={{uri: image}} style={styles.imageBrand} />
                </View>

                <View style={styles.imageBrandBox}>
                    <Image source={{uri: image}} style={styles.imageBrand} />
                </View>
            </View>

            <ReviewsQuickOverview />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageBox: {
        height: 500
    },
    image: {
        height: '100%',
        width: '100%'
    },
    imageBrandBox: {
        height: 60,
        width: 60,
        borderRadius: 10,
        overflow: 'hidden',
        marginRight: 10
    },
    imageBrand: {
        height: '100%',
        width: '100%'
    },
    titleTextBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginVertical: 10,
    },
    detailsTextBox: {
        marginBottom: 15,
        paddingHorizontal: 15
    },
    titleMainText: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 20
    },
    textDiscount: {
        fontSize: 12,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        textDecorationColor: 'red',
        marginLeft: 15
    },
    brandColorsBox: {
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    heartIconContainer: {
        alignItems: 'center'
    },
    favouriteCount: {
        fontSize: 10,
        color: '#555'
    }
})

export default ProductDetails
