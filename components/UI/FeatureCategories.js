import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import FeatureCircle from './FeatureCircle'

const featureDetails = [
    {
        name: 'Categories',
        style: {
            backgroundColor: '#e63946'
        },
        iconName: 'list-outline',
        id: '1'
    }, 
    {
        name: 'Coins',
        style: {
            backgroundColor: '#a8dadc',
        },
        iconName: 'happy-outline',
        id: '2'
    },
    {
        name: 'Freebies',
        style: {
            backgroundColor: '#b5179e'
        },
        iconName: 'gift-outline',
        id: '3'
    }, 
    {
        name: 'Bonus',
        style: {
            backgroundColor: '#fdc500'
        },
        iconName: 'cash-outline',
        id: '4'
    },
    {
        name: 'Fresh Finds',
        style: {
            backgroundColor: '#14213d'
        },
        iconName: 'bulb-outline',
        id: '5'
    }, 
    {
        name: 'Top Selection',
        style: {
            backgroundColor: '#2364aa',
        },
        iconName: 'star-outline',
        id: '6'
    },
    {
        name: 'StyleZone',
        style: {
            backgroundColor: '#d3d3d3'
        },
        iconName: 'shirt-outline',
        id: '7'
    }, 
    {
        name: 'Free Shipping',
        style: {
            backgroundColor: '#76c893',
        },
        iconName: 'car-outline',
        id: '8'
    },
]

const features = featureDetails.map(feature => (
    <FeatureCircle feature={feature} key={feature.id} />
))

const FeatureCategories = () => {
    return (
        <ScrollView contentContainerStyle={styles.features} horizontal>
            {features}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    features: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        // backgroundColor: '#fff',
        marginTop: 10,
        // padding: 20,
        // overflow: 'hidden'
    }
})

export default FeatureCategories
