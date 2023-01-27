import React from 'react'
import Layout from '../../components/MainLayout'
import { Link, useLocation } from 'react-router-dom'
import { GiHospitalCross } from 'react-icons/gi'

import Socials from '../../components/Socials'
import './appointments.css'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'



const Appointments = () => {

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
  
  export default Appointments
