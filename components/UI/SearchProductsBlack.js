import React from 'react'
import { View, StyleSheet, Share } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Input, Button } from '@ui-kitten/components'

const SearchIconCmp = () => (
    <Ionicons name="search-outline" size={23} color="#ccc" />
)

const CartIconCmp = () => (
    <Ionicons name="cart-outline" size={24} color="#fff" />
)

const ShareIconCmp = () => (
    <Ionicons name="share-social-outline" size={24} color="#fff" />
)

const GoBackIconCmp = () => (
    <Ionicons name="arrow-back" size={24} color="#fff" />
)

const MenuIconCmp = () => (
    <MaterialCommunityIcons name="dots-vertical" size={24} color="#fff" />
)

const SearchProductsBlack = ({ navigate }) => {
    
    const ShareProduct = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.flexContainer}>
                <View style={styles.backBtnContainer}>
                    <Button style={styles.btn} appearance="ghost" accessoryLeft={GoBackIconCmp} onPress={() => navigate.goBack()}></Button>
                </View>

                <View style={styles.inputContainer}>
                    <Input placeholder="cover vivo v17neo" size="small" accessoryLeft={SearchIconCmp} style={styles.input} />
                </View>

                <View style={styles.buttonsContainer}>
                    <Button style={styles.btn} appearance="ghost" accessoryLeft={CartIconCmp} onPress={() => navigate.navigate('Cart')}></Button>
                    <Button style={styles.btn} appearance="ghost" accessoryLeft={ShareIconCmp} onPress={ShareProduct}></Button>
                    <Button style={styles.btn} appearance="ghost" accessoryLeft={MenuIconCmp}></Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 75,
        backgroundColor: '#e52613',
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
