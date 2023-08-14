import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UseEffect from './Components/UseEffect'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart'

const App = () => {
  return (
    <>

       <BrowserRouter>
      <Routes>
        <Route path="/" element={<UseEffect/>}>
         
          <Route path="cart" element={<Cart/>} />
        
        </Route>
      </Routes>
    </BrowserRouter>

  

    </>
  )
}

export default App