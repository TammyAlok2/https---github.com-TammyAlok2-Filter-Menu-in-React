import React ,{useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {Toaster,toast} from 'react-hot-toast'
import {
  remove,
  incrementQuantity,
  decrementQuantity,
} from "../Store/createSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const [totalAmount ,setTotal] = useState(0);
  useEffect(()=>{
setTotal(products.reduce((acc,curr)=> acc+ curr.price,0));
  },[products])
  const handleRemove = (product) => {
    console.log(product);
    toast.error('Product Removed from cart');
    dispatch(remove(product));
    
  };
  const handleIncrement = (product) => {
    dispatch(incrementQuantity(product));
  };
  const handleDecrement = (product) => {
    dispatch(decrementQuantity(product));
  };
  if (products.length > 0) {
    return (
      <div>
        {products.map((item) => {
          return (
            <>
              <img src={item.image} alt="alok" height={80} />
              <h3>{item.title}</h3>
              <button onClick={() => handleRemove(item.id)}>Remove</button>

              <button onClick={() => handleIncrement(item.id)}>
                Increment
              </button>
              <button onClick={() => handleDecrement(item.id)}>
                Decrement
              </button>
              <Toaster/>
            </>
          );
        })}

        <h2> TotalAmount :{totalAmount}</h2>
      </div>
    );
  }
return (
    <>
    <div> 
        <h2>No Product Found </h2>
        <Link to='/'>Buy Now</Link>
    </div>
    </>
)


};

export default Cart;
