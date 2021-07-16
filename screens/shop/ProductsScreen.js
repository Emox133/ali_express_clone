import React from 'react'
import { StyleSheet, View } from 'react-native'
import Products from '../../components/shop/Products';
import SearchProducts from '../../components/UI/SearchProducts';
import SupportBoxes from '../../components/UI/SupportBoxes'
import FeatureCategories from '../../components/UI/FeatureCategories'
import CustomStatusBar from '../../components/utils/CustomStatusBar';
import { PRODUCTS } from '../../data/dummyData';

const ProductsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <CustomStatusBar barStyle="light-content" />
            <SearchProducts navigation={props.navigation} />
            <FeatureCategories navigation={props.navigation} />
            <SupportBoxes navigation={props.navigation} />
            <Products data={PRODUCTS} navigation={props.navigation} />
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
