import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Icon, Button } from '@ui-kitten/components';

export default SearchProducts = () => {
    const searchIcon = () => (
        <Icon name="search-outline" animation={null} style={{ height: 25, width: 25 }} fill="#fff" />
    )

    const cameraIcon = () => (
        <Icon name="camera-outline" animation={null} style={{ height: 35, width: 35 }} fill="#555" />
    )

    const renderSearchIcon = () => (
        <Button size="tiny" style={styles.button} accessoryLeft={searchIcon}></Button>
    )

    const SearchWithCamera = () => (
        <Button size="tiny" appearance="ghost" accessoryLeft={cameraIcon}></Button>
    )

    const styles = StyleSheet.create({
        search__container: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
            backgroundColor: '#eee',
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
        }
    })

    return (
        <View style={styles.search__container}>
            <Input
                placeholder='Place your Text'
                accessoryRight={renderSearchIcon}
                status="primary"
                style={styles.search__input}
            />
            <SearchWithCamera />
        </View>
    );
};