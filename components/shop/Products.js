import React from 'react'
import { FlatList } from 'react-native'
// import { Text } from '@ui-kitten/components'
import { useData } from '../../context/DataContext'
import ProductItem from './ProductItem'

const Products = () => {
    const {products} = useData()

    return <FlatList 
        data={products}
        renderItem={item => <ProductItem itemData={item}/>}
        keyExtractor={item => item.id.toString()}
        numColumns={2} //Improve Grid Later
    />
}

export default Products
