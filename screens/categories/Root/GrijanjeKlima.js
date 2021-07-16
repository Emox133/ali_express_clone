import React from 'react'
import { View, StyleSheet } from 'react-native'
import {GRIJANJE_KLIMA_CATEGORIES} from '../../../data/dummyData'
import Categories from '../../../components/UI/Categories'

const GrijanjeKlima = (props) => {
    return (
        <View style={styles.screen}>
            <Categories title="Grijanje i klima" onNavigate={props.navigation} data={GRIJANJE_KLIMA_CATEGORIES} />
        </View>
    )
}

GrijanjeKlima.navigationOptions = {
    headerTitle: ''
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default GrijanjeKlima
