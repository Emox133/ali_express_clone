import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ProductsScreen from '../screens/shop/ProductsScreen'

const ShopNavigator = createStackNavigator({
    Products: {
        screen: ProductsScreen,
        navigationOptions: {headerShown: false}
    }
})

export default createAppContainer(ShopNavigator)