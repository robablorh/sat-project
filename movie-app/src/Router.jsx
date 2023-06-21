import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './paths/Home'
import Movies from './paths/Movies'
import Series from './paths/Series'
import Params from './components/Params'

const Router = () => {
  return (
     <Routes>
            <Route path='/'  element= {<Home/>} />
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/series' element={<Series/>} />
            <Route path='/:id'        element={<Params/>}  />
           




     </Routes>

      
   
  )
}

export default Router
