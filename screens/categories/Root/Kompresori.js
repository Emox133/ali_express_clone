import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '@ui-kitten/components'
import { useData } from '../../../context/DataContext'
import Products from '../../../components/shop/Products'

const Kompresori = (props) => {
    const {products} = useData()
    const filteredProducts = products.filter(p => p.mainCategory === 'Kompresori')

    return (
        <View style={styles.screen}>
            <Products navigation={props.navigation} data={filteredProducts} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Kompresori
