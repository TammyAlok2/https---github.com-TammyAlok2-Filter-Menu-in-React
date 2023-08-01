import React, { useEffect,useState } from 'react'

const Practise = () => {

    const [users,getUsers]= useState([]);
    const setUsers = async () =>{
        const response =  await fetch ("https://fakestoreapi.com/products");
        getUsers(await (response.json()));
    
    }
    useEffect(()=>{
        setUsers();
    },[])


  return (
    <>
   <h2 className='product-card'>Product Card</h2>

    <div className="container">
        <div className='main'> 
        {
users.map((currElem)=>{
return (
  <div>
    

<div class="card">
  <img src={currElem.image} alt="Denim Jeans"/>
  <h1>{currElem.title}</h1>
  <p className="price">{currElem.price}</p>
  <p>{currElem.description}</p>
  <p><button>Add to Cart</button></p>
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
