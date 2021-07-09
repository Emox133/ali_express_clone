import React from 'react'
import {View, StyleSheet} from 'react-native'
import { Icon, Button, Text } from '@ui-kitten/components'
import {Ionicons} from '@expo/vector-icons'

const FeatureCircle = ({feature}) => {
    const renderIcon = () => (
        <Icon name={feature.iconName} style={styles.icon} fill='#fff' />
    )

    return (
        <View style={styles.featureCircle}>
            {/* ALTERNATIVE DELETE LATER */}
            {/* <Button style={{...styles.iconBox, ...feature.style}} accessoryLeft={renderIcon}></Button> */}
            <View style={{...styles.iconBox, ...feature.style}}>
                <Ionicons name={feature.iconName} size={35} color="white" />
            </View>
            <Text category="label" style={styles.featureTitle}>{feature.name}</Text>
        </View>
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
