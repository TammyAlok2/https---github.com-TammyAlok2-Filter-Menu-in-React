import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const items = useSelector((state)=>state.cart);
  return (
    <div>

<div>
    <h2>Redux Store </h2>
    <Link to='cart'> Cart </Link>
    <div>{
    items.length }  </div>
</div>


    </div>
  )
}

export default Navbar