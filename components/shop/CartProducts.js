import React from 'react'
import { FlatList } from 'react-native'
import { useData } from '../../context/DataContext'
import CartItem from './CartItem'

const CartProducts = () => {
    const { cart } = useData()

    return <FlatList
        data={cart}
        renderItem={item => <CartItem itemData={item} />}
        // keyExtractor={(item, index) => item.key}
    />
}

export default CartProducts
