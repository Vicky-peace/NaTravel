import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home/Home'
import './App.css'
import Lists from './pages/List/Lists';
import Hotels from './pages/hotel/Hotels';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hotels' element={<Lists/>}/>
      <Route path='/hotels/:id' element={<Hotels/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
