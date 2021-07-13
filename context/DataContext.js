import React, {useContext, useState} from 'react'
import { PRODUCTS } from '../data/dummyData'

const DataContext = React.createContext()

export const useData = () => {
    return useContext(DataContext)
}

const DataContextProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS)
    const [cart, setCart] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)

    const addProductToCart = (id) => {
        // 1) Find the choosen product index
        const selectedProductIndex = products.findIndex(p => p.id === id)

        // 2) Find the product associated with the index
        const selectedProduct = products[selectedProductIndex]

        // 3) If the product is already in cart, do not add it
        if(selectedProduct.inCart === true) return

        // 4) Change its "inCart" propery for button disabling
        selectedProduct.inCart = true

        // 5) Merge new product with old cart items
        setCart(prevState => [
            ...prevState,
            {...selectedProduct, selected: false}
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
        if(selectedProduct.quantity <= 1) return 
        selectedProduct.quantity = selectedProduct.quantity - 1
        calculateTotalAmount()

        setCart(copyCart)
    }

    const calculateTotalAmount = () => {
        if(cart.length === 0) return

        const copyCart = [...cart]

        const sum = copyCart.map(p => p.price * p.quantity).reduce((acc, cur) => {
            return acc + cur
        })

        setTotalAmount(sum)
    }

    const value = {
        products,
        cart,
        setCart,
        addProductToCart,
        increaseProductQuantity,
        decreaseProductQuantity,
        totalAmount,
        calculateTotalAmount
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider