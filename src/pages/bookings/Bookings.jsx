import React from 'react'
import NavBar from './NavBar.jsx'
import Doctors from './Doctors.jsx'
import './bookings.css'
import Heading from './Heading.jsx'

const Bookings = () => {
  return (
    <>
    <section className='bookings-layout'>
        <>
        <NavBar />
        <Heading />
        <Doctors />
        </>
    </section>
    
    </>
  )
}

export default Bookings