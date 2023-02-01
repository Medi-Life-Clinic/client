import React from 'react'
import Layout from '../../components/MainLayout'
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
