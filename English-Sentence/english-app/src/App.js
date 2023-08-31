import React from 'react'
import Sentence from './Pages/DailySentence'
import SentenceSingle from './Pages/SentenceSingle'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Error from './Pages/Error'
const App = () => {
return (
<BrowserRouter>
<Navbar/>
 <Routes>
    <Route path ='/' element={<Home/>}/>
<Route path='/sentence' element={<Sentence/>}/> 
<Route path = 'category/:productId' element={<SentenceSingle/>}/>
<Route path = '*' element ={<Error/>}/>
 </Routes>
 </BrowserRouter>

)

  
}

export default App