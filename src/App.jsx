import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import './App.css'
import './components/login.css'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/>
    </Routes>
  </BrowserRouter>
   )
}

export default App


