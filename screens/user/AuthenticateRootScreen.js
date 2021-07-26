import React from 'react'
import {StyleSheet, View} from 'react-native'
import Signup from '../../components/shop/Signup'
import Login from '../../components/shop/Login'

const AuthenticateRootScreen = (props) => {
    const mode = props.navigation.getParam('mode')
    return (
        <View style={styles.screen}>
            {mode === 'Registracija' ? <Signup navigate={props.navigation} /> : <Login navigate={props.navigation} />}
        </View>
    )
}

AuthenticateRootScreen.navigationOptions = (navData) => {
    const mode = navData.navigation.getParam('mode')

    return {
        headerTitle: mode
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default AuthenticateRootScreen
