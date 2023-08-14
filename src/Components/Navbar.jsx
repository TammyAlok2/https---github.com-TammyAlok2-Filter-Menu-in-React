import React from 'react'
import './Navbar.css'

import {  useSelector } from 'react-redux'
import './UseEffect.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const items = useSelector((state)=>state.cart);
  return (
<>
    <nav>
 <Link to={'cart'}> Cart </Link>
    <div> cartItems<b>{items.length}</b>
    </div>
  </nav>
     
  </>  

   
    
  
    
  )
}

export default Navbar