import React from 'react'
import { View, StyleSheet, FlatList, Dimensions } from 'react-native'
import { Text } from '@ui-kitten/components'
import CategoryItem from './CategoryItem'

const CategoriesContent = ({ data, title="Preporučene Kategorije" }) => {
    return (
        <View style={styles.categoryPanel}>
            <View>
                <Text category="h6" style={{ fontWeight: 'bold', marginLeft: 10  }}>{title}</Text>
            </View>
            <FlatList
                data={data}
                renderItem={item => <CategoryItem itemData={item} />}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    categoryPanel: {
        width: '75%',
        paddingBottom: 30
        // height: Dimensions.get('window').height
    }
})

export default CategoriesContent
