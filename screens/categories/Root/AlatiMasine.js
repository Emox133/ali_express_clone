import React from 'react'
import { View, StyleSheet } from 'react-native'
import {ALATI_CATEGORIES} from '../../../data/dummyData'
import Categories from '../../../components/UI/Categories'

const AlatiMasine = (props) => {
    return (
        <View style={styles.screen}>
            <Categories title="Alati i mašine" onNavigate={props.navigation} data={ALATI_CATEGORIES} />
        </View>
    )
}

AlatiMasine.navigationOptions = {
    headerTitle: ''
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default AlatiMasine
