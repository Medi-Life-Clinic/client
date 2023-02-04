import React from 'react'
import { GiHospitalCross } from 'react-icons/gi'
import './header.css'

//Main header for Login and register page.
const Header = () => {
  return (
    <>
    <div className='headerContainer'>
      <div className='header'>
        <GiHospitalCross className='' />
        <h1>Medi-Life</h1>
      </div>
      <div className='header'>
        <p>Your Gateway to Healthcare </p>
      </div>
      </div>
    </>
  )
}

export default Header


