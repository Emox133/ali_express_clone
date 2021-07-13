import React from 'react';
import { StyleSheet, View, TouchableNativeFeedback } from 'react-native';
import { Input, Icon, Button, Text } from '@ui-kitten/components';
import { Ionicons } from '@expo/vector-icons';
import { useData } from '../../context/DataContext';

export default SearchProducts = ({navigation}) => {
    const { cart } = useData()

    const searchIcon = () => (
        <Icon name="search-outline" animation={null} style={{ height: 25, width: 25 }} fill="#fff" />
    )

    const renderSearchIcon = () => (
        <Button status="danger" size="tiny" style={styles.button} accessoryLeft={searchIcon}></Button>
    )

    const CartComponent = () => (
        <TouchableNativeFeedback style={styles.cartBox} onPress={() => navigation.navigate('Cart')}>
            <View>
                <Ionicons style={styles.cartIcon} name="cart" size={35} color="#555" style={{ margin: 10 }} />
                <Text style={styles.cartNumOfItems}>{cart.length}</Text>
            </View>
        </TouchableNativeFeedback>
    )

    const styles = StyleSheet.create({
        search__container: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
            backgroundColor: '#fafafa',
            elevation: 5
        },
        search__input: {
            flexGrow: 1,
            marginLeft: 10,
            borderRadius: 30
        },
        button: {
            borderRadius: 20,
            height: 35,
            width: 55
        },
        cartBox: {
            position: 'relative'
        },
        cartNumOfItems: {
            height: 22,
            width: 22,
            fontSize: 13,
            position: 'absolute',
            top: 0,
            right: 5,
            color: '#fff',
            backgroundColor: '#e52613',
            borderRadius: 44,
            textAlign: 'center'
        }
    })

    return (
        <>
            <View style={{ backgroundColor: '#fafafa', height: 90 }}>
                <View style={styles.search__container}>
                    <Input
                        placeholder='slušalice...'
                        accessoryRight={renderSearchIcon}
                        status="primary"
                        style={styles.search__input}
                        status="danger"
                    />
                    <CartComponent />
                </View>
            </View>
        </>
    );
};