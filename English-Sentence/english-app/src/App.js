import React from 'react'
import Sentence from './Pages/Sentence'
import SentenceSingle from './Pages/SentenceSingle'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
const App = () => {
return (
<BrowserRouter>
 <Routes>
<Route path='/' element={<Sentence/>}/> 
<Route path = 'category/:productId' element={<SentenceSingle/>}/>
 </Routes>
 </BrowserRouter>

)

  
}

export default App