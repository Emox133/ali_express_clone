import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

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
    Cart: {
        screen: CartScreen
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

export default createAppContainer(ShopNavigator)