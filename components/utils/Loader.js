import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const Loader = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size="large" color="#e52613" />
        </View>
    )
}

export default Loader