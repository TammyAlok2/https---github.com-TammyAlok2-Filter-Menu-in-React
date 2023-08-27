import React, { useState } from 'react'
import Data from '../Data/Wakya.js'
import './Sentence.css'
import { Link } from 'react-router-dom';
const Sentence = () => {
    const [Sent,setSent]= useState(Data);
    const [page,setPage] = useState(1);
    let size = Sent.length;
    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= Sent.length / 10 && selectedPage !== page) {
          setPage(selectedPage)
        }
      }
  return (
    <>
    <div className="container">
    <h2>Sentence</h2>
    <div className="answer">
        {
            Sent.slice(page * 10 - 10, page * 10).map((item)=>{
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
              {Sent.length > 0 && <div className="pagination">
        <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>

        {[...Array(Sent.length / 10)].map((_, i) => {
          return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
        })}

        <span onClick={() => selectPageHandler(page + 1)} className={page < Sent.length / 10 ? "" : "pagination__disable"}>▶</span>
      </div>}

 
    </div>
  
  
    </div>
    
    </>
  )
}

export default Sentence