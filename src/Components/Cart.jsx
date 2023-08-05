import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/createSlice';
import './Cart.css'

const Cart = () => {
    const products = useSelector((state)=>state.cart);
    const dispatch = useDispatch;
    
    const handleRemove=(product)=>{
dispatch(remove(product));
    }
  return (
    <div>

        <h3>Cart</h3>
        <div className="wrapper">{
            products.map((main)=>{
                return(
                    <div>
                    <div className="contanier">
                        <img src={main.image} alt="" />
                        <div className="title">{main.title}</div>
                        <div className="price">{main.price}</div>
                        <button className="remove" onClick={()=>handleRemove(main.id)}>remove</button>
                    </div>
                    
                                    </div>
                )
              
            })
        }


        </div>
    </div>
  )
}

export default Cart