import React from 'react'
import Layout from '../../components/MainLayout'
import DoctorsComponent from '../../components/DoctorsComponent'
import '../../components/mainLayout.css'
import '../../components/doctors.css'

const Doctors = () => {
  return (
    <Layout>
        <DoctorsComponent />
    </Layout>
  )
}

export default Doctors