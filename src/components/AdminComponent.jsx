import React, { useEffect, useState } from 'react'
import "../pages/admin/admin.css";
import { ToastContainer, toast } from 'react-toastify'
import { getAllAppointments, fetchDoctors, fetchUsers } from './fetchFunctions'


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

  
  console.log(appointments)
  console.log(doctors)
  console.log(users)
  
  
  // const [appointments, setAppointments] = useState([])
  
  // useEffect(() => {
  //   const fetchAppointments = async () => { 
  //     const appointmentsData = await AppointmentsComponent.getAppointments()
      
  //     setAppointments(appointmentsData)
  //   }
  //   fetchAppointments()
  // }, [])

  return (
    <>
      {/* {appointments.map(appointment => (
        <p key={appointment.id}>{appointment.date}</p>
      ))}
      { */}
      
      
      <div className="layout-header">
        <h1>{location.pathname === "/admin" ? "Admin" : "Meet our doctors"}</h1>
      </div>
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