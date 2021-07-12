import React from 'react'
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import { Text } from '@ui-kitten/components'
import {Ionicons} from '@expo/vector-icons'

const FeatureCircle = ({onNavigate}) => {
    return (
        <>
            <View style={styles.featureCircle}>
                <TouchableOpacity onPress={() => onNavigate.navigate('Categories')} activeOpacity={0.5} style={{...styles.iconBox, ...{backgroundColor: '#e63946'}}}>
                    <Ionicons name="list-outline" size={35} color="white" />
                </TouchableOpacity>
                <Text category="label" style={styles.featureTitle}>Kategorije</Text>
            </View>
            <View style={styles.featureCircle}>
                <TouchableOpacity activeOpacity={0.5} style={{...styles.iconBox, ...{backgroundColor: '#a8dadc'}}}>
                    <Ionicons name="happy-outline" size={35} color="white" />
                </TouchableOpacity>
                <Text category="label" style={styles.featureTitle}>Nešto</Text>
            </View>
            <View style={styles.featureCircle}>
                <TouchableOpacity activeOpacity={0.5} style={{...styles.iconBox, ...{backgroundColor: '#b5179e'}}}>
                    <Ionicons name="gift-outline" size={35} color="white" />
                </TouchableOpacity>
                <Text category="label" style={styles.featureTitle}>Pokloni</Text>
            </View>
            <View style={styles.featureCircle}>
                <TouchableOpacity activeOpacity={0.5} style={{...styles.iconBox, ...{backgroundColor: '#fdc500'}}}>
                    <Ionicons name="cash-outline" size={35} color="white" />
                </TouchableOpacity>
                <Text category="label" style={styles.featureTitle}>Bonus</Text>
            </View>
            <View style={styles.featureCircle}>
                <TouchableOpacity activeOpacity={0.5} style={{...styles.iconBox, ...{backgroundColor: '#14213d'}}}>
                    <Ionicons name="bulb-outline" size={35} color="white" />
                </TouchableOpacity>
                <Text category="label" style={styles.featureTitle}>Novo</Text>
            </View>
            <View style={styles.featureCircle}>
                <TouchableOpacity activeOpacity={0.5} style={{...styles.iconBox, ...{backgroundColor: '#2364aa'}}}>
                    <Ionicons name="star-outline" size={35} color="white" />
                </TouchableOpacity>
                <Text category="label" style={styles.featureTitle}>Top Selekcija</Text>
            </View>
            <View style={styles.featureCircle}>
                <TouchableOpacity activeOpacity={0.5} style={{...styles.iconBox, ...{backgroundColor: '#d3d3d3'}}}>
                    <Ionicons name="shirt-outline" size={35} color="white" />
                </TouchableOpacity>
                <Text category="label" style={styles.featureTitle}>StyleZone</Text>
            </View>
            <View style={styles.featureCircle}>
                <TouchableOpacity activeOpacity={0.5} style={{...styles.iconBox, ...{backgroundColor: '#76c893'}}}>
                    <Ionicons name="car-outline" size={35} color="white" />
                </TouchableOpacity>
                <Text category="label" style={styles.featureTitle}>Besplatna Dostava</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    featureCircle: {
        alignItems: 'center',
        margin: 10
    },
    featureTitle: {
        // marginRight: 10
    },
    iconBox: {
        height: 50,
        width: 50,
        borderRadius: 100,
        // marginHorizontal: 10
        // margin: 10,
        borderColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 35,
        width: 35
    }
})

export default FeatureCircle
