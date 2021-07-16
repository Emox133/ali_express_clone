import React from 'react'
import { View, StyleSheet } from 'react-native'
import {DOMACINSTVO_CATEGORIES} from '../../../data/dummyData'
import Categories from '../../../components/UI/Categories'

const Domacinstvo = (props) => {
    return (
        <View style={styles.screen}>
            <Categories title="Domacinstvo" onNavigate={props.navigation} data={DOMACINSTVO_CATEGORIES} />
        </View>
    )
}

Domacinstvo.navigationOptions = {
    headerTitle: ''
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default Domacinstvo
