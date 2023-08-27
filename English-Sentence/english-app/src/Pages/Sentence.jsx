import React, { useState } from 'react'
import Data from '../Data/Wakya.js'
import { Link } from 'react-router-dom';
const Sentence = () => {
    const [Sent,setSent]= useState(Data);
    const [page,setPage] = useState(1);
  
    const handleClick =()=>{
setPage(20);
    }
  return (
    <>
    <div className="container">
    <h2>Sentence</h2>
    <div className="answer">
        {
            Sent.slice(page*1,page*10).map((item)=>{
                return(
                    <>
                    <div className="date">{item.Date}</div>
                    <span className='month'>{item.Month}</span>
                    
                    <Link to={`/category/${item.id}`} className='title'><div className="title">Sentence of the Day | {item.id}</div></Link>
                    <div className='hindi'>Sentence of the Data |{item.Hindi}</div>
                    <Link to={`/category/${item.id}`}> <img src={item.Image} alt='alok' height={100}/></Link>
                   
                    <Link to={`/category/${item.id}`}>Read more</Link>
                    </>
                )
            })
        }
 
    </div>
  
  
    </div>
    
    </>
  )
}

export default Sentence