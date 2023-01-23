import React from 'react'
import './bookingHeader.css'
import {GiHospitalCross} from 'react-icons/gi'
import Bookings from './Bookings.jsx'
import { AiOutlineHome } from 'react-icons/ai'

const BookingHeader = () => {
  return (
    <>
      <main>
        <nav className='links'>
          <h1><GiHospitalCross className='logo'/>Medi-Life</h1>
          <div className='link'><h6>Home</h6></div>
          <div className='link'><h6>Appointment</h6></div>
          <div className='link'><h6>Logout</h6></div>
        </nav>
          <Bookings />
      </main>
    </>
  )
}

export default BookingHeader