import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import { Text } from '@ui-kitten/components'
import {RECOMMENDED_CATEGORIES} from './../../data/dummyData'
import CategoryItem from './CategoryItem'

const CategoryPlaceholder = () => {
    return <FlatList 
        data={RECOMMENDED_CATEGORIES}
        renderItem={item => <CategoryItem itemData={item}/>}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
    />
}

export default CategoryPlaceholder
