import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '@ui-kitten/components'

const GradjevinskiMaterijal = () => {
    return (
        <View style={styles.screen}>
            <Text>GradjevinskiMaterijal</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GradjevinskiMaterijal
