import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Bookings from './components/Bookings.jsx'
import './App.css'
import './components/login.css'
import Socials from './components/Socials'
import Header from './components/Header'
import BookingHeader from './components/BookingHeader.jsx'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<><Header /> <Login /> <Socials /></>}/>
      <Route path='/register' element={<><Header /> <Register/> <Socials /></>}/>
      <Route path='/home' element={<BookingHeader />}/>
    <Route path='/bookings' element={<><Bookings /> <NavBar /> </>}/>
    </Routes>
  </BrowserRouter>
   )
}

export default App