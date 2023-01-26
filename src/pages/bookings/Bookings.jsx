import React, { useEffect } from 'react'
import Layout from '../../components/MainLayout'
import Socials from '../../components/Socials'
import './bookings.css'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'



const Bookings = () => {
 
  return (
    <>
    <Layout/>
    <div className='contact'>
    <h1 className='social-heading'>Contact us on socials</h1>
    <div className='socials-mainlayout'>  
    <AiOutlineFacebook className='social-icons' />
    <AiOutlineInstagram className='social-icons'/>
    <AiOutlineTwitter className='social-icons'/> 
    </div>
    
    </div>
    </>
  )
}

export default Bookings