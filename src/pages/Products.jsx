import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
const Products = () => {
  const { productId } = useParams()
  const { products,addToCart } = useContext(ShopContext)
  const [productData, setproductData] = useState(0)
  const [img, setImg] = useState('')
  const fetchProductData = async () => {
    products.map((itm) => {
      if (itm._id === productId) {
        setproductData(itm)
        setImg(itm.image[0])
        return null
      }
    })
  }
  
  useEffect(() => { fetchProductData() }, [productId])
  // console.log(productData);

  return productData ? (
    <div className='border-t-2  pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex  gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData?.image?.map((item, index) => (
                <img onClick={()=>setImg(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={img}  />
          </div>
          <div className='w-full flex flex-row items-end h-full sm:w-[80%] '  >
            <button onClick={()=>addToCart(productData._id)} className='mb-14 px-8 py-3 text-sm active:bg-gray-700 text-white ml-44 bg-black'>Add to Cart</button>
          </div> 
        </div>
            
      </div>

    </div>
  ) : <div className='opacity-0'></div>
}

export default Products