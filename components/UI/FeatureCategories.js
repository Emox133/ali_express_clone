import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import FeatureCircle from './FeatureCircle'

const FeatureCategories = ({navigation}) => {
    return (
        <ScrollView contentContainerStyle={styles.features} horizontal>
            <FeatureCircle onNavigate={navigation} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    features: {
        height: 130,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default FeatureCategories
