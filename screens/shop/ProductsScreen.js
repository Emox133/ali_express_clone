import React from 'react'
import { SafeAreaView } from 'react-native';
import {StyleSheet} from 'react-native'
import { Layout } from '@ui-kitten/components';
import SearchProducts from '../../components/UI/SearchProducts';

const ProductsScreen = () => {
    return (
        <Layout>
            <SearchProducts />
        </Layout>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})

export default ProductsScreen
