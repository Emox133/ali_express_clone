import React from 'react'
import { View, StyleSheet } from 'react-native'
import {BIJELA_TEHNIKA_CATEGORIES} from '../../../data/dummyData'
import Categories from '../../../components/UI/Categories'

const BijelaTehnika = (props) => {
    return (
        <View style={styles.screen}>
            <Categories title="Bijela tehnika" onNavigate={props.navigation} data={BIJELA_TEHNIKA_CATEGORIES} />
        </View>
    )
}

BijelaTehnika.navigationOptions = {
    headerTitle: ''
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default BijelaTehnika
