import React from 'react'
import { View, StyleSheet } from 'react-native'
import Categories from '../../components/UI/Categories'
import { RECOMMENDED_CATEGORIES } from '../../data/dummyData'

const CategoriesScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Categories data={RECOMMENDED_CATEGORIES} onNavigate={props.navigation} />
        </View>
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: "Kategorije Proizvoda"
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default CategoriesScreen
