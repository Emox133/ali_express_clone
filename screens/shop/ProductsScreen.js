import React from 'react'
import {StyleSheet, View} from 'react-native'
import SearchProducts from '../../components/UI/SearchProducts';
import SupportBoxes from '../../components/UI/SupportBoxes'

const ProductsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <SearchProducts />
            <SupportBoxes navigation={props.navigation} />
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
