import React from 'react'
import {StyleSheet, View} from 'react-native'
import Products from '../../components/shop/Products';
import SearchProducts from '../../components/UI/SearchProducts';
import SupportBoxes from '../../components/UI/SupportBoxes'
import FeatureCategories from '../../components/UI/FeatureCategories'

const ProductsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <SearchProducts />
            <FeatureCategories navigation={props.navigation} />
            <SupportBoxes navigation={props.navigation} />
            <Products />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fafafa',
    }
})

export default ProductsScreen
