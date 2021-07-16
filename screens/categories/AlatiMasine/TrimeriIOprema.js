import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '@ui-kitten/components'

const TrimeriIOprema = () => {
    return (
        <View style={styles.screen}>
            <Text>TrimeriIOprema</Text>
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

export default TrimeriIOprema
