import React from 'react'
import { View, StyleSheet} from 'react-native'
import SearchProductsBlack from '../../components/UI/SearchProductsBlack'
import ProductDetails from '../../components/UI/ProductDetails'
import ProductDetailsFooter from '../../components/UI/ProductDetailsFooter'

const ProductDetailsScreen = () => {
    return (
        <View style={styles.screen}>
            <SearchProductsBlack />
            <ProductDetails/>
            <ProductDetailsFooter/>
        </View>
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
