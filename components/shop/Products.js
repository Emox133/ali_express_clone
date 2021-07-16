import React from 'react'
import { FlatList } from 'react-native'
import ProductItem from './ProductItem'

const Products = ({navigation, data}) => {
    return <FlatList 
        data={data}
        renderItem={item => <ProductItem onNavigate={navigation} itemData={item}/>}
        keyExtractor={item => item.id.toString()}
        numColumns={2} //Improve Grid Later
    />
}

export default Products
