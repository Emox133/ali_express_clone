import React from 'react'
import { View, StyleSheet, TouchableNativeFeedback, Image } from 'react-native'
import { Text } from '@ui-kitten/components'

const CategoryItem = ({ itemData }) => {
    return (
        <TouchableNativeFeedback useForeground>
            <View style={styles.categoryBox}>
                <View style={styles.imageBox}>
                    <Image style={styles.img} source={{ uri: itemData.item.image }} />
                </View>
                <View style={styles.categoryItemTitleBox}>
                    <Text style={styles.categoryItemTitle}>
                        {itemData.item.name}
                    </Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    categoryBox: {
        height: 150,
        width: 130,
        margin: 10,
        backgroundColor: '#fff',
        elevation: 2,
    },
    imageBox: {
        height: '88%',
        width: '100%',
    },
    img: {
        height: '100%',
        width: '100%'
    },
    categoryItemTitleBox: {
        // fix later
    },
    categoryItemTitle: {
        fontSize: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default CategoryItem
