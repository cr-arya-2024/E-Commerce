import { createContext, useEffect } from "react";
import { products } from '../assets/assets'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(0)
    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId, size) => {
        if (!size) {
            toast.error('select product size')
            return;
        }
        let cartData = structuredClone(cartItems)
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            }
            else {
                cartData[itemId][size] = 1
            }
        }
        else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        setCartItems(cartData)
    }
const getcartAmount=()=>{
    let totalAmount=0
    for(const items in cartItems){
        let itemInfo=products.find((product)=>product._id===items._id)
        for(const item in cartItems[items]){
            try {
                if(cartItems[items][item]>0){
                    totalAmount+=itemInfo.price*cartItems[items][item]
                }
            } catch (error) {
                
            }
        }
    }
    return totalAmount
}
    const getcartCount = () => {
        let count = 0
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        count += cartItems[items][item]
                    }
                } catch (error) {
                    console.error('Error calculating cart count:', error)
                }
            }
        }
        return count;
    }

    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch,getcartAmount, setShowSearch, cartItems, getcartCount, setCartItems, addToCart
    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
//check the latestcollection folder for the reciveing syntax