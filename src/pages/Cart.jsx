import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import {Link} from 'react-router-dom'

const Cart = () => {
  const {products,currency,cartItems}=useContext(ShopContext)
  const [cartData,setcartData]=useState([])
  useEffect(()=>{
const temp=[];
for(const items in cartItems){
  for(const item in cartItems[items]){
    if(cartItems[items][item]>0){
      temp.push({
        _id:items,
        size:item,
        quantity:cartItems[items][item]
      })
    }
  }
}setcartData(temp)
  },[cartItems])

  
  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
      <Title text1={'YOUR'} text2={'CART'} />
      </div>
<div className=''>
{
  cartData.map((itm,index)=>{
        
   const productData=products.find((product)=>product._id===itm._id)
   
   return (
    <div className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4' key={index}>
<div className='flex items-start gap-6'>
<img src={productData.image[0]} className='w-16 sm:w-20' alt="" />
<div>
  <p className='text-xs sm:texdt-lg font-medium'>{productData.name}</p>
  <div className='flex items-center gap-5 mt-2'>
    <p>{currency}{productData.price}</p>
    <p>{itm.size}</p>
  </div>
</div>
</div>
    </div>
   ) 
  })
}
</div>
<div className='flex justify-end my-20'>
  <div className='w-full sm:w-[450px'>
    <CartTotal/>
    <div className='w-full text-end '>
      <Link to={'/place-order'}>
      <button className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
      </Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cart