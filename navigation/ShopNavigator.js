import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ProductsScreen from '../screens/shop/ProductsScreen'
import SupportScreenDetails from '../screens/ui/SupportScreenDetails'

const ShopNavigator = createStackNavigator({
    Products: {
        screen: ProductsScreen,
        navigationOptions: {headerShown: false}
    },
    Support: {
        screen: SupportScreenDetails
    }
})

export default createAppContainer(ShopNavigator)