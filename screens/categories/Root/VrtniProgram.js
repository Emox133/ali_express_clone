import React from 'react'
import { View, StyleSheet } from 'react-native'
import {VRTNI_PROGRAM_CATEGORIES} from '../../../data/dummyData'
import Categories from '../../../components/UI/Categories'

const VrtniProgram = (props) => {
    return (
        <View style={styles.screen}>
            <Categories title="Vrtni program" onNavigate={props.navigation} data={VRTNI_PROGRAM_CATEGORIES} />
        </View>
    )
}

VrtniProgram.navigationOptions = {
    headerTitle: ''
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default VrtniProgram
