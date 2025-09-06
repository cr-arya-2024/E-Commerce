import { createContext, use, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(0)
    const [products, setProducts] = useState([])
    const [token,setToken]=useState('')
    const [cartItems, setCartItems] = useState({})
    const navigate = useNavigate()

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
    const getcartAmount = () => {
        let totalAmount = 0
        for (const itemId in cartItems) {
            const itemInfo = products.find((product) => product._id === itemId)
            if (!itemInfo) continue
            for (const size in cartItems[itemId]) {
                const quantity = cartItems[itemId][size]
                if (quantity > 0) {
                    totalAmount += Number(itemInfo.price) * quantity
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
    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list')
            if(response.data){
                console.log(response.data);
                setProducts(response.data.products)
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
toast.error(error.message)
        }
    }
    useEffect(() => {
        getProductsData()
    }, [])
    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
        }}
    )
    const value = {
        products, currency, delivery_fee, search,token,setToken, setSearch, showSearch, getcartAmount, setShowSearch, cartItems, getcartCount, backendUrl, setCartItems, addToCart, navigate,
    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
//check the latestcollection folder for the reciveing syntax