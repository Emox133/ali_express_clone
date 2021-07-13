import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ProductsScreen from '../screens/shop/ProductsScreen'
import SupportScreenDetails from '../screens/ui/SupportScreenDetails'
import CategoriesScreen from '../screens/shop/CategoriesScreen'
import CartScreen from '../screens/shop/CartScreen'

const ShopNavigator = createStackNavigator({
    Products: {
        screen: ProductsScreen,
        navigationOptions: {headerShown: false}
    },
    Support: {
        screen: SupportScreenDetails
    },
    Categories: {
        screen: CategoriesScreen
    },
    Cart: {
        screen: CartScreen
    }
})

export default createAppContainer(ShopNavigator)