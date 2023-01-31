import React, { useEffect, useState } from 'react'
import "../pages/admin/admin.css";
// import AppointmentsComponent from "./AppointmentsComponent.jsx";


const AdminComponent = () => {
  document.title = "Medi-Life | Admin";

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
      <container className="admin-container">
        <container className="users">
          <h1>Users</h1>
          
          <table>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
            <tr>
              <td>Adam T</td>
              <td>adam.tunchay@me.com</td>
              <td>
                <input type="checkbox"></input>
              </td>
            </tr>
          </table>
        </container>
        <container className="doctors">
          <h1>Doctors</h1>
          <table>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </table>
        </container>
        <container className="appointments">
          <h1>Appointments</h1>
          <table>
            <tr>
              <th>Appointment Id</th>
              <th>Doctor</th>
              <th>User</th>
              <th>DoctorInfo</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </table>
        </container>
      </container> 
    </>
  );
};

export default AdminComponent;