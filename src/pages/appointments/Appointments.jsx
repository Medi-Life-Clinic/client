import React from 'react'
import Layout from '../../components/MainLayout'
import { Link, useLocation } from 'react-router-dom'
import { GiHospitalCross } from 'react-icons/gi'
import Socials from '../../components/Socials'
import { RxTwitterLogo } from 'react-icons/rx'
import './appointments.css'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'



const Appointments = () => {

    return (
      <>
        <Layout />
        <div className='contact'>
          <h1 className='social-heading'>Contact us on socials</h1>
          <div className='socials-mainlayout'>
          <a href="https://facebook.com" className="social-link">
                <AiOutlineFacebook className='social-icons' class="mx-4" />
         </a>
         <a href="https://instagram.com" className="social-link">
            <AiOutlineInstagram className="social-icons" class="mx-4" />
        </a>
        <a href="https://twitter.com" className="social-link">
        <RxTwitterLogo className='social-icons' class="mx-4" />
      </a>
          </div>
  
        </div>
      </>
    )
  }
  
  export default Appointments
