import React from 'react'
import { createAppContainer } from 'react-navigation'
import { useData } from './context/DataContext'
// import ShopNavigator from './navigation/ShopNavigator'
import { ShopTabNavigator, AuthenticationNavigator } from './navigation/ShopNavigator'
import {createSwitchNavigator} from 'react-navigation'

export const NavigatorCmp = () => {
    const {authenticated} = useData()

    const RootNavigator = createSwitchNavigator({
        Auth: {
            screen: ShopTabNavigator
        },
        NotAuth: {
            screen: AuthenticationNavigator
        }
    }, {
        initialRouteName: authenticated ? 'Auth' : 'NotAuth'
    })

    const MyNavigator = createAppContainer(RootNavigator)

    return <MyNavigator />
}

export default NavigatorCmp