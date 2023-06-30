import { useContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'
import NavBar from './components/NavBar/NavBar'
import {ThemeContext} from './context/ThemeContext';


function App() {

  const {darkMode, setDarkMode} = useContext(ThemeContext);

  return (
    <BrowserRouter>
     
        <div className={darkMode ? "dark-mode-viewArea  viewable-area" : "light-mode-viewArea  viewable-area"}>
        <div className={darkMode ? "dark-mode-l left-side" : "light-mode-l left-side"}>
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
  );
}

export default App
