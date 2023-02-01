import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { getAllAppointments, fetchDoctors, fetchUsers, authHeaders } from './fetchFunctions'
import Layout from './MainLayout';
import './adminComponent.css'


const AdminComponent = () => {
  document.title = "Medi-Life | Admin";

  const [appointments, setAppointments] = useState([])
  const [doctors, setDoctors] = useState([])
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    getAllAppointments().then(result => {
      setAppointments(result.data)
    })
    fetchDoctors().then(result => {
      setDoctors(result.data)
    })
    fetchUsers().then(result => {
      setUsers(result.data)
    })
  }, [])

// Cancel appointment
const deleteAppointment = async (event, appointment) => {
  try {
      const response = await fetch("http://localhost:4001/api/appointment/delete-by-id", {
          method: 'POST',
          headers: authHeaders,
          body: JSON.stringify({
              id: appointment._id
          })
      })
      const responseData = await response.json()
      if (responseData.success == true) {
          const updatedAppointments = appointments.filter(appointment => appointment._id !== responseData.data._id)
          setAppointments(updatedAppointments)
          toast.success("Appointment cancelled successfully")
      } 
  } catch (error) {
      toast.error('Error cancelling appointment')
  }
}

// delete doctor
const deleteDoctor = async (event, doctor) => {
  try {
      const response = await fetch("http://localhost:4001/api/doctor/delete-by-id", {
          method: 'POST',
          headers: authHeaders,
          body: JSON.stringify({
              id: doctor._id
          })
      })
      const responseData = await response.json()
      console.log(responseData)
      if (responseData.success == true) {
          const updatedDoctors = doctors.filter(doctor => doctor._id !== responseData.data._id)
          setDoctors(updatedDoctors)
          toast.success("Doctor Deleted Successfully")
      } 
  } catch (error) {
      toast.error('Error Deleting Doctor')
      console.log(error)
  }
}

const deleteUser = async (event, user) => {
  try {
      const response = await fetch("http://localhost:4001/api/user/delete-by-id", {
          method: 'POST',
          headers: authHeaders,
          body: JSON.stringify({
              id: user._id
          })
      })
      const responseData = await response.json()
      console.log(responseData)
      if (responseData.success == true) {
          const updatedUsers = users.filter(user => user._id !== responseData.data._id)
          setUsers(updatedUsers)
          toast.success("User Deleted Successfully")
      } 
  } catch (error) {
      toast.error('Error Deleting User')
      console.log(error)
  }
}
  console.log(appointments)
  console.log(doctors)
  console.log(users)

  return (
<>
<Layout >
<div className="admin-heading">
    <h1>
        {/* {location.pathname === '/appointments' ? 'Your Appointments' : 'Meet our doctors'} */}
        Admin Portal
    </h1>
</div>

<div className='map-container'>
<div className='scrollable-container'>

<section className="admin-appointments">
<h2>Appointments</h2>
    {appointments.map((appointment) => {
        return (
            // <h1>Appointments</h1>
            <div className="single-appointment">
              <p>Patient: {appointment.userInfo.name}</p>
              <p>Doctor: {appointment.doctorInfo.name}</p>
              <p>Specialization: {appointment.doctorInfo.specialization}</p>
              <p>Date: {appointment.date}</p>
              <p>Time: {appointment.time}</p>
                <section className='button-section'>
                  <button className='admin-appointment-button' onClick={event => deleteAppointment(event, appointment)}>Cancel Appointment</button>
                </section>
                
            </div>
        )
    })
    }

</section>

<section className="admin-appointments">
<h2>Doctors</h2>
    {doctors.map((doctor) => {
        return (
            // <h1>Appointments</h1>
            <div className="single-appointment">
                <p>Name: {doctor.name}</p>
                <p>Specialization: {doctor.specialization}</p>
                <p></p>
                <p></p>
                <p></p>
                <section className='button-section'>
                  <button className='admin-appointment-button' onClick={event => deleteDoctor(event, doctor)}>Delete Doctor</button>
                </section>
                
            </div>
        )
    })
    }

</section>

<section className="admin-appointments">
<h2>Users</h2>
    {users.map((user) => {
        return (
            // <h1>Appointments</h1>
            <div className="single-appointment">
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p></p>
                <p></p>
                <p></p>
                <section className='button-section'>
                  <button className='admin-appointment-button' onClick={event => deleteUser(event, user)}>Delete User</button>
                </section>
                
            </div>
        )
      })
    }
</section>

</div>
    </div>

<ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        // pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
    />
        </Layout>
</>
  );
};

export default AdminComponent;




// template 

      // /* <container className="admin-container">
      //   <container className="users">
      //     <h1>Users</h1>
      //     <table>
      //       <thead>
      //       <tr>
      //         <th>Username</th>
      //         <th>Email</th>
      //         <th>Delete</th>
      //       </tr>
      //       </thead>
      //       <tbody>
      //       <tr>
      //         <td>Adam T</td>
      //         <td>adam.tunchay@me.com</td>
      //         <td>
      //           <input type="checkbox"></input>
      //         </td>
      //       </tr>
      //       </tbody>
      //     </table>
      //   </container>
      //   <container className="doctors">
      //     <h1>Doctors</h1>
      //     <table>
      //     <thead>
      //       <tr>
      //         <th>Username</th>
      //         <th>Email</th>
      //         <th>Delete</th>
      //       </tr>
      //       </thead>
      //     </table>
      //   </container>
      //   <container className="appointments">
      //     <h1>Appointments</h1>
      //     <table>
      //       <thead>
      //       <tr>
      //         <th>Appointment Id</th>
      //         <th>Doctor</th>
      //         <th>User</th>
      //         <th>DoctorInfo</th>
      //         <th>Date</th>
      //         <th>Time</th>
      //       </tr>
      //       </thead>
      //     </table>
      //   </container>
      // </container> 