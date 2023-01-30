import React from 'react'
import Layout from '../../components/MainLayout'
import DoctorsComponent from '../../components/DoctorsComponent'
import '../../components/mainLayout.css'
import Socials from '../../components/Socials.jsx'

const Doctors = () => {
  return (
    <Layout>
        <DoctorsComponent />
        <Socials />
    </Layout>
  )
}

export default Doctors