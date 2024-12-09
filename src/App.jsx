import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NoPage from './pages/NoPage'
import Contact from './pages/Contact'
import User from './pages/User'
import Number from './pages/Number'
import Blog from './pages/Blog'
import Catch from './pages/Catch'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='*' Component={NoPage} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user/:id' element={ <User />} />
        <Route path='number/:num' Component={Number} />
        <Route path='/blog' Component={Blog} />
        <Route path='/reading' Component={Catch} />
      </Routes>
    </BrowserRouter>
  )
}
