import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ProductsScreen from '../screens/shop/ProductsScreen'
import SupportScreenDetails from '../screens/ui/SupportScreenDetails'
import CategoriesScreen from '../screens/shop/CategoriesScreen'

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
    }
})

export default createAppContainer(ShopNavigator)