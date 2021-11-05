import React from 'react'
import { View, StyleSheet } from 'react-native'
import SearchProductsBlack from '../../components/UI/SearchProductsBlack'
import ProductDetails from '../../components/UI/ProductDetails'
import ProductDetailsFooter from '../../components/UI/ProductDetailsFooter'
import CustomStatusBar from './../../components/utils/CustomStatusBar'
import { useData } from '../../context/DataContext'
import PaypalScreen from '../../components/shop/PayPalPayment'

const ProductDetailsScreen = (props) => {
    const productInfo = props.navigation.getParam('productInfo')
    const {showGateway} = useData()

    return (
        !showGateway ?
        <View style={styles.screen}>
            <CustomStatusBar />
            <SearchProductsBlack navigate={props.navigation} />
            <ProductDetails product={productInfo} />
            <ProductDetailsFooter navigate={props.navigation} product={productInfo} />
        </View> : <PaypalScreen />
    )
}

ProductDetailsScreen.navigationOptions = {
    headerTitle: '',
    headerStyle: {
        backgroundColor: '#000'
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default ProductDetailsScreen
