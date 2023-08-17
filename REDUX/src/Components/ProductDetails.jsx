import React from 'react'
import Product from './UseEffect'
const ProductDetails = ({match}) => {
    const product = Product.find((p)=> p._id === match.params.id);
  return (
    <div>
<div className="container">
    <img src={product.image} alt="" />
    <div className="title">{product.title}</div>
    <div className="description">{product.description}</div>
</div>



    </div>
  )
}

export default ProductDetails