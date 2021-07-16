import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '@ui-kitten/components'

const TelevizoriIOprema = () => {
    return (
        <View style={styles.screen}>
            <Text>TelevizoriIOprema</Text>
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

export default TelevizoriIOprema
