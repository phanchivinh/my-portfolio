import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, About, Contact, Portfolio, NavList } from './components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons'

import './index.css'
import './App.css'

const App = () => {
  const [theme, setTheme] = useState('dark')

  const handleToggleTheme = () => {
    setTheme(current => current === 'dark' ? 'light' : 'dark')
  }
  return (
    <BrowserRouter>
      <div className='App' id={theme}>
        <NavList />
        <button className='theme-toggle-btn' onClick={handleToggleTheme}>
          { theme === 'dark' ? (<FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon>) : (<FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>)}
        </button>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App