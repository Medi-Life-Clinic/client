import React from 'react'
import './navBar.css'
import {GiHospitalCross} from 'react-icons/gi'
// import Bookings from './Bookings.jsx'
import { AiOutlineHome, AiOutlineBook, AiOutlineLogout } from 'react-icons/ai'


const NavBar = () => {
  return (
    <>
        <nav className='links'>
          <h3><GiHospitalCross/> Medi-Life</h3>
          <div className='link'><AiOutlineHome/><h6>Home</h6></div>
          <div className='link'><AiOutlineBook/><h6>Book</h6></div>
          <div className='link'><AiOutlineLogout/><h6>Logout</h6></div>
        </nav>
        <container className='heading'>
        </container> 
        
        {/* <Bookings /> */}
    </>
  )
}

export default NavBar