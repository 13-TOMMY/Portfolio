import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <BrowserRouter>
        <div className='viewable-area'>
          <div className='left-side'>
          <NavBar />
          </div>
          <div className='right-side'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          </div>
          </div>
    </BrowserRouter>
  )
}

export default App
