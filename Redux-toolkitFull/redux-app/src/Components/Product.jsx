import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Toaster,toast}   from 'react-hot-toast';
import { add , remove} from "../Store/createSlice";

const Product = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const handleProduct = async () => {
    const api = await fetch("https://fakestoreapi.com/products/");
    setProduct(await api.json());
  };
  const items = useSelector((state)=>state.cart);
  

  useEffect(() => {
    handleProduct();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
    toast.success('Product added to cart')
  };
const handleRemove=(product)=>{
    dispatch(remove(product));
    toast.error('Product remove from cart')
};
  return (
    <div>
      {product.map((item) => {
        return (
          <>
            <img src={item.image} alt="alok " height={100} />
            <h2>{item.title}</h2>
            {items.find((p) => p.id === item.id) ? 
            (
              <button onClick={()=> handleRemove(item.id)}> Remove from cart</button>
            ) : (
              <button onClick={() => handleAdd(item)}> Add to cart </button>
            )}
            <Toaster/>
          </>
        );
      })}
    </div>
  );
};

export default Product;
