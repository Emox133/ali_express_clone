import React from 'react'
import { SafeAreaView, StatusBar, Platform } from 'react-native'

const CustomStatusBar = ({ background = '#e52613', barStyle }) => {
    const AndroidSafeArea = {
        backgroundColor: background,
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }

    return (
        <SafeAreaView style={AndroidSafeArea}>
            <StatusBar backgroundColor={background} barStyle={barStyle} />
        </SafeAreaView>
    )
}

export default CustomStatusBar
