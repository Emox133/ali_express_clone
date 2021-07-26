import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import ProductsScreen from '../screens/shop/ProductsScreen'
import SupportScreenDetails from '../screens/ui/SupportScreenDetails'
import CategoriesScreen from '../screens/shop/CategoriesScreen'
import CartScreen from '../screens/shop/CartScreen'
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen'

import AlatiMasine from '../screens/categories/Root/AlatiMasine'
import Domacinstvo from '../screens/categories/Root/Domacinstvo'
import KeramickePlocice from '../screens/categories/Root/KeramickePlocice'
import GrijanjeKlima from '../screens/categories/Root/GrijanjeKlima'
import Kompresori from '../screens/categories/Root/Kompresori'
import BijelaTehnika from '../screens/categories/Root/BijelaTehnika'
import Vodoinstalacije from '../screens/categories/Root/Vodoinstalacije'
import VrtniProgram from '../screens/categories/Root/VrtniProgram'
import MainCategoryScreen from '../screens/shop/MainCategoryScreen'
import SubCategoryScreen from '../screens/shop/SubCategoryScreen'
import WishListScreen from '../screens/shop/WishListScreen'
import CheckoutScreen from '../screens/shop/CheckoutScreen'
import AuthenticateScreen from '../screens/user/AuthenticateScreen'
import RegisterOrSignupScreen from '../screens/user/RegisterOrSignupScreen'
import AuthenticateRootScreen from '../screens/user/AuthenticateRootScreen'

const CartStackNavigator = createStackNavigator({
    Cart: CartScreen,
    Checkout: {
        screen: CheckoutScreen
    },
})

const AuthenticationNavigator = createStackNavigator({
    Authenticate: {
        screen: AuthenticateScreen,
        navigationOptions: {headerShown: false}
    },
    LoginSignup: {
        screen: RegisterOrSignupScreen,
        navigationOptions: {headerShown: false}
    },
    AuthenticateRoot: {
        screen: AuthenticateRootScreen
    }
})

const ShopNavigator = createStackNavigator({
    Products: {
        screen: ProductsScreen,
        navigationOptions: {headerShown: false}
    },
    ProductDetails: {
        screen: ProductDetailsScreen,
        navigationOptions: {headerShown: false}
    },
    Support: {
        screen: SupportScreenDetails
    },
    Categories: {
        screen: CategoriesScreen
    },
    MainCategory: {
        screen: MainCategoryScreen,
        // navigationOptions: {headerShown: false}
    },
    SubCategory: {
        screen: SubCategoryScreen
    },
    AlatiMasine: {
        screen: AlatiMasine
    },
    Domacinstvo: {
        screen: Domacinstvo
    },
    KeramickePlocice: {
        screen: KeramickePlocice
    },
    GrijanjeKlima: {
        screen: GrijanjeKlima
    },
    Kompresori: {
        screen: Kompresori
    },
    BijelaTehnika: {
        screen: BijelaTehnika
    },
    Vodoinstalacije: {
        screen: Vodoinstalacije
    },
    VrtniProgram: {
        screen: VrtniProgram
    },
})

const ShopTabNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: ShopNavigator,
        navigationOptions: {
            tabBarIcon: (tabBarInfo) => (
                <Ionicons 
                    name="home-outline"
                    color={tabBarInfo.tintColor}
                    size={23}
                />
            ),
        }
    },
    Korpa: {
        screen: CartStackNavigator,
        navigationOptions: {
            tabBarIcon: (tabBarInfo) => (
                <Ionicons 
                    name="cart-outline"
                    color={tabBarInfo.tintColor}
                    size={23}
                />
            )
        }
    },
    WishList: {
        screen: WishListScreen,
        navigationOptions: {
            tabBarIcon: (tabBarInfo) => (
                <Ionicons 
                    name="heart-outline"
                    color={tabBarInfo.tintColor}
                    size={23}
                />
            ),
            title: 'Lista Želja'
        }
    },
    Račun: {
        screen: AuthenticationNavigator,
        navigationOptions: {
            tabBarIcon: (tabBarInfo) => (
                <MaterialCommunityIcons 
                    name="account-circle-outline"
                    color={tabBarInfo.tintColor}
                    size={23}
                />
            )
        }
    }
}, {
    shifting: false,
    barStyle: {
        backgroundColor: '#e52613'
    }
})

export default createAppContainer(ShopTabNavigator)