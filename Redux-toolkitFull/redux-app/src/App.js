import React from 'react'
import Product from './Components/Product'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart'
const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
<Route path='/' element={<Product/>} />
<Route path='cart' element ={<Cart/>}/>

   </Routes>

   
   </BrowserRouter>
  )
}

export default App