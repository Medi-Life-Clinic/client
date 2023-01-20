import React from 'react'
import {GiHospitalCross} from 'react-icons/gi'
import './header.css'

const Header = () => {
  return (
    <>
    <div className='header'>
        <GiHospitalCross className=''/>
        <h1>Medi-Life</h1>
    </div>
    <div className='header'>
        <p>Login and book your next healthcare appointment </p>
    </div>
    </>
  )
}

export default Header