import React, { useEffect,useState } from 'react'
import './UseEffect.css'
import { useDispatch } from 'react-redux';
import { add } from '../store/createSlice';

import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Practise = () => {
  const dispatch = useDispatch();

    const [users,getUsers]= useState([]);
    const setUsers = async () =>{
        const response =  await fetch("https://fakestoreapi.com/products");
        getUsers(await (response.json()));
    
    }
    useEffect(()=>{
        setUsers();
    },[])
  const handleAdd= (product)=>{
    toast('succefully added');
    console.log('hello muskan');
    console.log('love you muskan');
dispatch(add(product));
    }


  return (
    <>
    <Link to="cart"> Cart </Link>
   <h2 className='product-card'>Product Card</h2>

    <div className="container">
        <div className='main'> 
        {
users.map((currElem)=>{
return (
  <div>
    
<div className='product'>
<div className="card">
  <img src={currElem.image}alt="Denim Jeans" className='image' />
  <div className='title'> {currElem.title}</div>
  <p className="price">{currElem.price}</p>
<button>more </button>

  <p><button onClick={() => handleAdd(currElem)}>Add to Cart</button></p>
</div>
</div>

    </div>
)
})
        }
      </div>
         </div>
    </>
  )
}

export default Practise
