import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Text } from '@ui-kitten/components'
import { PRODUCTS } from '../../data/dummyData'
import ProductItem from './ProductItem'

const Products = () => {
    return <FlatList 
        data={PRODUCTS}
        renderItem={item => <ProductItem itemData={item}/>}
        keyExtractor={item => item.id.toString()}
    />
}

export default Products
