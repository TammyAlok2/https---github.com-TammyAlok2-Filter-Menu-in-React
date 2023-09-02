import React from 'react'
import Sentence from './Pages/DailyEnglish/DailySentence'
import SentenceSingle from './Pages/SingleDailyEnglish/SentenceSingle'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Error from './Pages/Error'
import DailyVocabs from './Pages/DailyEnglish/DailyVocabs'
import VocabSingle from './Pages/SingleDailyEnglish/VocabSingle'
import DailyIdioms from './Pages/DailyEnglish/DailyIdioms'
import IdiomSingle from './Pages/SingleDailyEnglish/IdiomSingle'
const App = () => {
return (
<BrowserRouter>
<Navbar/>
 <Routes>
    <Route path ='/' element={<Home/>}/>
<Route path='/sentence' element={<Sentence/>}/> 
<Route path='/vocab' element={<DailyVocabs/>}/> 
<Route path='/idiom' element={<DailyIdioms/>}/>
<Route path = 'sentence/:productId' element={<SentenceSingle/>}/>
<Route path = 'vocab/:vocabId' element={<VocabSingle/>}/>
<Route path ='idiom/:idiomId' element ={<IdiomSingle/>}/>
<Route path = '*' element ={<Error/>}/>
 </Routes>
 </BrowserRouter>

)

  
}

export default App