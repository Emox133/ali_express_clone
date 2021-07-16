import React from 'react'
import {View, StyleSheet} from 'react-native'
import CategoriesSidebar from './CategoriesSidebar'
import CategoriesContent from '../shop/CategoriesContent'

const Categories = ({onNavigate, data, title}) => {
    return (
        <View style={styles.flexContainer}>
            <CategoriesSidebar navigation={onNavigate} />
            <CategoriesContent data={data} title={title}/>
        </View>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
        flexDirection: 'row'
    }
})

export default Categories
