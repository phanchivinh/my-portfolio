import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './App.css'

import { Home, About, Contact, Portfolio, NavList } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavList />
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