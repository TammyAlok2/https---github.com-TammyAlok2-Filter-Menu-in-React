import React from 'react'
import './Navbar.css'
import {  useSelector } from 'react-redux'
import './UseEffect.css'
const Navbar = () => {
    const items = useSelector((state)=>state.cart);
  return (
    <>
    <div className='nav'>  
    <div className='logo'>ALOK STORE</div>
    <div> cartItems  <b>{items.length}</b>
    </div>
    </div>


    
    </>
    
  )
}

export default Navbar