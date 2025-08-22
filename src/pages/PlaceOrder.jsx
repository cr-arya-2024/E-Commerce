import React, { useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
const PlaceOrder = () => {
  const [method,setmethod]=useState('cod')

  return (
    <div className='flex flex-col sm:flex-row  justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl xm:text-2xl m-5'>
          <Title text1={'DELIVRY'} text2={'INFORMATION'}/>
          
        </div>
        <div className='flex gap-3'>
          <input type="text" placeholder='Enter name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input type="email" placeholder='Enter email' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <input type="text" placeholder='Enter Street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <div className='flex gap-3'>
          <input type="text" placeholder='Enter state' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <div className='flex gap-3'>
          <input type="text" placeholder='Enter city' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        
        </div>
          <input type="number" placeholder='Enter no.' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
      </div>
      <div className='mt-8'>
        <div className='mt-5 min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title text1={'PAYEMENT'} text2={'METHOD'}/>
          
          <div className='flex gap-3 flex-col lg:flex-row '>
          <div onClick={()=>setmethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe' ?'bg-green-400':''}` }></p>
              <img src={assets.stripe_logo} className='h-5 mx-4 ' alt="" />
            
            </div> 
            <div onClick={()=>setmethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='razorpay' ?'bg-green-400':''}` }></p>
              <img src={assets.razorpay_logo} className='h-5 mx-4 ' alt="" />
            
            </div>  
            <div onClick={()=>setmethod('cod')} className={`flex items-center gap-3 border p-2 px-3 cursor-pointer `}>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='cod' ?'bg-green-400':''} ` }></p>
              
            
            <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>  
          </div>
   <div className='w-full text-end mt-8'>
<Link to={'/orders'}>
<button   className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button> 
</Link>
   </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder