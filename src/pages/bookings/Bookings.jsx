import React, { useEffect } from 'react'
import Layout from '../../components/MainLayout'
import Socials from '../../components/Socials'
import './bookings.css'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'


//Bookings page with social icons.

const Bookings = () => {

  return (
    <>
      <Layout />
      <div className='contact'>
        <h1 className='social-heading'>Contact us on socials</h1>
        <div className='socials-mainlayout'>
          <Socials />
      
        </div>
        </div>
    </>
  )
}

export default Bookings