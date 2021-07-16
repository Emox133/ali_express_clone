import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '@ui-kitten/components'

const KosiliceIOprema = () => {
    return (
        <View style={styles.screen}>
            <Text>KosiliceIOprema</Text>
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

export default KosiliceIOprema
