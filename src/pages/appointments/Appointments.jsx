import React from 'react'
import Layout from '../../components/MainLayout'
import { Link, useLocation } from 'react-router-dom'
import { GiHospitalCross } from 'react-icons/gi'

import Socials from '../../components/Socials'
import './appointments.css'
import AppointmentsComponent from '../../components/AppointmentsComponent'


//Appointments page with social icons.
//Inherits Page layout from MainLayout.jsx

const Appointments = () => {
  return (
    
    <Layout>
      
      <AppointmentsComponent />
      
    </Layout>
    
  )
}

export default Appointments
