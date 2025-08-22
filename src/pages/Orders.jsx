import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Oders = () => {
  const {currency,products}=useContext(ShopContext)
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'}/>

      </div>
      <div>{
        products.slice(1,4).map((item, index) => (
          <div key={index} className='py-4 border-t border-b  text-gray-700 flex  flex-col md:flex-row md:items-center md:justify-between gap-4'>
            <div className='flex  items-start gap-6 text-sm'>
              <img src={item.image[0]} className='w-16 sm:w-20' alt="" />
              <p className='sm:text-base font-medium'>{item.name}</p>
              <div className='flex items-center gap-3 mt-2 text-base text-gray-500'>
                <p>{currency}{item.price}</p>
                <p>Quantity:1</p>
                <p>Size:M</p>
              </div>
              <div>
                <button className='border px-4 py-2 text-sm font-medium rounded-sm'>TRACK ORDER</button>
              </div>
            </div>
          </div>
        ))
      }</div>
    </div>
  )
}

export default Oders