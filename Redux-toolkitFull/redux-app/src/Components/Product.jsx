import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  };
const handleRemove=(product)=>{
    dispatch(remove(product));
};
  return (
    <div>
      {product.map((item) => {
        return (
          <>
            <img src={item.image} alt="alok " height={100} />
            <h2>{item.title}</h2>
            {items.some((p) => p.id === item.id) ? (
              <button onClick={()=> handleRemove(item)}> Remove from cart</button>
            ) : (
              <button onClick={() => handleAdd(item)}> Add to cart </button>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Product;
