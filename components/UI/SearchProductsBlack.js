import React from 'react'
import { View, StyleSheet } from 'react-native'
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
import HeaderButton from './HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Input, Button } from '@ui-kitten/components'

const SearchIconCmp = () => (
    <Ionicons name="search-outline" size={23} color="#ccc"/>
)

const CartIconCmp = () => (
    <Ionicons name="cart-outline" size={24} color="#fff"/>
)

const ShareIconCmp = () => (
    <Ionicons name="share-social-outline" size={24} color="#fff"/>
)

const GoBackIconCmp = () => (
    <Ionicons name="arrow-back" size={24} color="#fff"/>
)

const MenuIconCmp = () => (
    <MaterialCommunityIcons name="dots-vertical" size={24} color="#fff"/>
)

const SearchProductsBlack = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.flexContainer}>
                <View style={styles.backBtnContainer}>
                    <Button style={styles.btn} appearance="ghost" accessoryLeft={GoBackIconCmp}></Button>
                </View>

                <View style={styles.inputContainer}>
                    <Input placeholder="cover vivo v17neo" size="small" accessoryLeft={SearchIconCmp} style={styles.input}/>
                </View>

                <View style={styles.buttonsContainer}>
                    <Button style={styles.btn} appearance="ghost" accessoryLeft={CartIconCmp}></Button>
                    <Button style={styles.btn} appearance="ghost" accessoryLeft={ShareIconCmp}></Button>
                    <Button style={styles.btn} appearance="ghost" accessoryLeft={MenuIconCmp}></Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 75,
        backgroundColor: '#000',
        justifyContent: 'center'
    },
    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputContainer: {
        width: 200,
        marginLeft: 30
    },
    input: {
        borderRadius: 20,
        borderWidth: 0
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 150,
        marginRight: 5
    },
    backBtnContainer: {
        width: 10
    }
})

export default SearchProductsBlack
