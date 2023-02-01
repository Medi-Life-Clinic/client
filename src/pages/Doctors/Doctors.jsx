import React from 'react'
import Layout from '../../components/MainLayout'
import DoctorsComponent from '../../components/DoctorsComponent'
import '../../components/mainLayout.css'
import "./doctors.css"

const Doctors = () => {
  return (
    
    <Layout>
      <div className="doctors-layout">
        <DoctorsComponent />
      </div>
    </Layout>
  )
}

export default Doctors
