import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
   <Routes >
    <Route path='/' element={<Home/>}/>
    <Route path='/collection' element={<Collection/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/product/:productId' element={<Products/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/place-order' element={<PlaceOrder/>}/>
    <Route path='/orders' element={<Orders/>}/>
    <Route path='/login' element={<Login/>}></Route>
    </Routes> 
    </div>
    
  
  )
}

export default App
