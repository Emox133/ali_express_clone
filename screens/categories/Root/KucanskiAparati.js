import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '@ui-kitten/components'

const KucanskiAparati = () => {
    return (
        <View style={styles.screen}>
            <Text>KucanskiAparati</Text>
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

export default KucanskiAparati
