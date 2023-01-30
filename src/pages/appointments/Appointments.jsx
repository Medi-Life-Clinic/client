import React from 'react'
import Layout from '../../components/MainLayout'
import { Link, useLocation } from 'react-router-dom'
import { GiHospitalCross } from 'react-icons/gi'

import Socials from '../../components/Socials'
import './appointments.css'


//Appointments page with social icons.
//Inherits Page layout from MainLayout.jsx

const Appointments = () => {
  return (
    <>
    <Layout>
      
      <Socials />
    </Layout>
    </>
  )
}

export default Appointments
