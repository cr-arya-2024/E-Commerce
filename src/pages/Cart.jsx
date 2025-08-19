import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Cart = () => {
  const {products,currency,cartItems}=useContext(ShopContext)
  const [cartData,setcartData]=useState([])
  useEffect(()=>{
const temp=[];
for(const items in cartItems){
  
}
  },[cartItems])
  console.log({cartItems});
  
  return (
    <div className=''>


    </div>
  )
}

export default Cart