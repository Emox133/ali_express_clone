import React from 'react'
import { FlatList } from 'react-native'
// import { Text } from '@ui-kitten/components'
import { useData } from '../../context/DataContext'
import ProductItem from './ProductItem'

const Products = ({navigation}) => {
    const {products} = useData()

    return <FlatList 
        data={products}
        renderItem={item => <ProductItem onNavigate={navigation} itemData={item}/>}
        keyExtractor={item => item.id.toString()}
        numColumns={2} //Improve Grid Later
    />
}

export default Products
