import { createContext } from "react";
import {products} from '../assets/assets'
import { useState } from "react";
export const ShopContext=createContext();

const ShopContextProvider=({children})=>{
    const currency='$';
    const delivery_fee=10;
    const [search,setSearch]=useState('')
    const[showSearch,setShowSearch]=useState(0)

const value={
    products,currency,delivery_fee,search,setSearch,showSearch,setShowSearch
}
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
//check the latestcollection folder for the reciveing syntax