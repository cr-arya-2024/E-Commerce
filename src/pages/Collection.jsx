import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import Productitem from '../components/Productitem'
import SearchBar from '../components/SearchBar'
const Collection = () => {
  const [showFilter, setShowFilter] = useState(0)
  const [filterProducts,setFilterProducts]=useState([])
  const[category,setCategory]=useState([])
  const[subCategory,setSubCategory]=useState([])
  
  const { products,search,showSearch } = useContext(ShopContext)

  const toggleCategory=(e)=>{
    if(category.includes(e.target.value)){
      setCategory(pre=>pre.filter(item=>item !==e.target.value))
    }else{
      setCategory(pre=>[...pre,e.target.value])
    }
  }
  const toggleSubCategory=(e)=>{
if(subCategory.includes(e.target.value)){
setSubCategory(pre=>pre.filter(item=>item !==e.target.value))
}else{
setSubCategory(pre=>[...pre,e.target.value])
}
  }
const applyfilter=()=>{
    let productCopy=products.slice()
  
    if(category.length>0){
      productCopy=productCopy.filter(item=>category.includes(item.category))
    }
    if(subCategory.length>0){
      productCopy=productCopy.filter(item=>subCategory.includes(item.subCategory))
    }
    if(showSearch && search){
      productCopy=productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }



    setFilterProducts(productCopy)

  }
useEffect(()=>{
setFilterProducts(products)
},[])

useEffect(()=>{
  applyfilter()
},[category,subCategory,search,showSearch ])


  return (
   <div className='flex flex-col'>
    <div>
      <SearchBar/>
    </div>
     <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer'>FILTERS</p>
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium' >CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory}/>Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory}/>Kids
            </p>
          </div>
        </div>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium' >TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleSubCategory}/>TopWear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSubCategory}/>BottomWear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Winterwear'} onChange={toggleSubCategory}/>Winterwear
            </p>
          </div>
        </div>
      </div>
{/* Right side */}
  <div className='flex-1'>
    <div className='flex justify-between text-base sm:text-2xl mb-4'>
      <Title text1={'ALL'} text2={'COLLECTIONS'}/>
      <select className="border-2 border-gray-300 text-sm px-2" >
        <option value="relavent">Sort By:Relavent</option>
        <option value="low-high">Sort By:Low to High</option>
        <option value="high -low">Sort By:High to Low</option>
      </select>
    </div>
    <div className='grid grid-cols-2   sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5'>
{
  filterProducts.map((item,index)=>{
    return <Productitem key={index} id={item._id} img={item.image} name={item.name} price={item.price} />
  })
}
    </div>
  </div>
    </div>
   </div>
  )
}

export default Collection