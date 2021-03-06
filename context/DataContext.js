import React, { useContext, useState, useCallback } from 'react'
import { PRODUCTS } from '../data/dummyData'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { StackActions, NavigationActions } from 'react-navigation';

const DataContext = React.createContext()

export const useData = () => {
    return useContext(DataContext)
}

const DataContextProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(true)
    const [showGateway, setShowGateway] = useState(false)
    const [products, setProducts] = useState(PRODUCTS)
    const [cart, setCart] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    const [loading, setLoading] = useState(false)

    const addProductToCart = (id) => {
        // 1) Find the choosen product index
        const selectedProductIndex = products.findIndex(p => p.id === id)

        // 2) Find the product associated with the index
        const selectedProduct = products[selectedProductIndex]

        // 3) If the product is already in cart, do not add it
        if (selectedProduct.inCart === true) return

        // 4) Change its "inCart" propery for button disabling
        selectedProduct.inCart = true
        selectedProduct.selected = false

        // 5) Merge new product with old cart items
        setCart(prevState => [
            ...prevState,
            selectedProduct
            // BELLOW IS AN ALTERNATIVE THAT DOES NOT WORK
            // {...selectedProduct, selected: false}
        ])

        // ? Do something with it // if not delete later
        // const isProductInCart = cart.includes(selectedProduct)
    }

    const increaseProductQuantity = (id) => {
        const copyCart = [...cart]

        const selectedProduct = copyCart.find(p => p.id === id)
        selectedProduct.quantity = selectedProduct.quantity + 1
        calculateTotalAmount()

        setCart(copyCart)
    }

    const decreaseProductQuantity = (id) => {
        const copyCart = [...cart]

        const selectedProduct = copyCart.find(p => p.id === id)
        if (selectedProduct.quantity <= 1) return
        selectedProduct.quantity = selectedProduct.quantity - 1
        calculateTotalAmount()

        setCart(copyCart)
    }

    const calculateTotalAmount = useCallback(() => {
        if (cart.length === 0) {
            setTotalAmount(0)
            return
        }

        const copyCart = [...cart]
        const sum = copyCart.map(p => p.price * p.quantity).reduce((acc, cur) => {
            return acc + cur
        })

        setTotalAmount(sum)
    }, [cart, totalAmount])

    const deleteSelectedFromCart = () => {
        const copyCart = [...cart]
        const updatedCart = copyCart.filter(p => p.selected !== true)

        // 1) Find indexes of products that are just deleted and restore their inCart state
        const deletedProductIndexes = products.map((p, i) => {
            if (p.inCart === true) {
                return i
            }
        }).filter(el => el !== undefined)

        deletedProductIndexes.map(dpi => {
            const copyProducts = [...products]

            if (copyProducts[dpi].selected) {
                copyProducts[dpi].inCart = false
                setProducts(copyProducts)
            }

        })

        setCart(updatedCart)
        calculateTotalAmount()
    }

    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'LoginSignup' })]
    })

    const logout = async (navigation) => {
        setLoading(true)

        try {
            await AsyncStorage.removeItem('token')
            setAuthenticated(false)
            delete axios.defaults.headers.common['Authorization']
            navigation.navigate('LoginSignup')
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    const value = {
        authenticated,
        setAuthenticated,
        logout,
        products,
        cart,
        setCart,
        addProductToCart,
        increaseProductQuantity,
        decreaseProductQuantity,
        totalAmount,
        calculateTotalAmount,
        deleteSelectedFromCart,
        loading,
        setLoading,
        showGateway,
        setShowGateway,
        resetAction
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider