import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import Socials from './components/Socials.jsx'
import Header from './components/Header.jsx'
import Bookings from './pages/bookings/Bookings.jsx'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<><Header /> <Login /><Socials /> </>}/>
      <Route path='/register' element={<><Header /> <Register /> <Socials /></>}/>
      <Route path='/bookings' element={<><Bookings /></>}/>
    </Routes>
  </BrowserRouter>
   )
}

export default App


