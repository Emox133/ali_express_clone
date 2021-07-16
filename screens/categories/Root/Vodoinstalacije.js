import React from 'react'
import { View, StyleSheet } from 'react-native'
import {VODOINSTALACIJA_OPREMA_CATEGORIES} from '../../../data/dummyData'
import Categories from '../../../components/UI/Categories'

const Vodoinstalacije = (props) => {
    return (
        <View style={styles.screen}>
            <Categories title="Vodoinstalacije i oprema" onNavigate={props.navigation} data={VODOINSTALACIJA_OPREMA_CATEGORIES} />
        </View>
    )
}

Vodoinstalacije.navigationOptions = {
    headerTitle: ''
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default Vodoinstalacije
