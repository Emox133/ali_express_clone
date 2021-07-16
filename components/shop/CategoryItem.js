import React from 'react'
import { View, StyleSheet, TouchableNativeFeedback, Image } from 'react-native'
import { Text } from '@ui-kitten/components'

const CategoryItem = ({ itemData }) => {
    return (
        <TouchableNativeFeedback useForeground style={{minHeight: 100}}>
            <View style={styles.categoryBox}>
                <View style={styles.imageBox}>
                    <Image resizeMode="stretch" style={styles.img} source={{ uri: itemData.item.image }} />
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
        minHeight: 100,
        width: 130,
        margin: 10,
        backgroundColor: '#fff',
        elevation: 2,
    },
    imageBox: {
        height: 100,
    },
    img: {
        height: '100%',
        width: '100%'
    },
    categoryItemTitleBox: {
        // fixed
        marginBottom: 5
    },
    categoryItemTitle: {
        fontSize: 11,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default CategoryItem
