import { createContext, useEffect } from "react";
import {products} from '../assets/assets'
import { useState } from "react";
export const ShopContext=createContext();

const ShopContextProvider=({children})=>{
    const currency='$';
    const delivery_fee=10;
    const [search,setSearch]=useState('')
    const[showSearch,setShowSearch]=useState(0)
const [cartItems,setCartItems]=useState({})

const addToCart=async(itemId)=>{
let cartData=structuredClone(cartItems)
if(cartData[itemId]){
    cartData[itemId]+=1
}else{
    cartData[itemId]=1
}
}
useEffect(()=>{console.log(cartItems);
},[cartItems])

const value={
    products,currency,delivery_fee,search,setSearch,showSearch,setShowSearch,cartItems,setCartItems,addToCart
}
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
//check the latestcollection folder for the reciveing syntax