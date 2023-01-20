import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import './App.css'
import './components/login.css'
import Socials from './components/Socials'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<><Header /> <Login /> <Socials /></>}/>
      
    </Routes>
  </BrowserRouter>
   )
}

export default App


