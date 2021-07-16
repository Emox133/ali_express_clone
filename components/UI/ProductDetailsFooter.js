import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Text, Button } from '@ui-kitten/components'
import { useData } from '../../context/DataContext'

// BEWARE THIS COMPONENT IS NOT FINISHED YET
const ProductDetailsFooter = ({product}) => {
    const {addProductToCart} = useData()
    const {id, inCart} = product.item

    return (
        <View style={styles.mainContainer}>
            <View style={styles.flexContainer}>
                <View style={styles.iconButtonsContainer}>
                    <View style={styles.iconButtonsFlexContainer}>
                        <MaterialCommunityIcons name="store-outline" size={25} color="#555" />
                        <Text style={styles.iconButtonsText}>STORE</Text>
                    </View>
                    <View style={styles.iconButtonsFlexContainer}>
                        <Ionicons name="chatbubble-ellipses-outline" size={25} color="#555" />
                        <Text style={styles.iconButtonsText}>CHAT</Text>
                    </View>
                </View>

                <View style={styles.classicButtonsContainer}>
                    <View style={styles.classicBtnWrapper}>
                        <Button disabled={inCart} appearance="filled" status="primary" size="small" style={styles.classicBtnSoft} onPress={() => addProductToCart(id)}>{inCart ? 'U KORPI' : 'DODAJ U KORPU'}</Button>
                    </View>
                    <View style={styles.classicBtnWrapper}>
                        <Button appearance="filled" status="danger" size="small" style={styles.classicBtnStrong}>BUY NOW</Button>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 50,
    },
    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%'
    },
    iconButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '25%',
        marginHorizontal: 5,
    },
    iconButtonsFlexContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconButtonsText: {
        fontSize: 8,
        color: '#999'
    },
    classicButtonsContainer: {
        flexDirection: 'row',
        width: '75%'
    },
    classicBtnWrapper: {
        width: '50%',
    },
    classicBtnSoft: {
       borderRadius: 0,
       height: '100%'
    },
    classicBtnStrong: {
        borderRadius: 0,
        height: '100%'
    }
})

export default ProductDetailsFooter
