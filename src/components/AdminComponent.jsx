import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  getAllAppointments,
  fetchDoctors,
  fetchUsers,
  authHeaders,
} from "../utils/fetchFunctions";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import "./adminComponent.css";

const AdminComponent = () => {
  document.title = "Medi-Life | Admin";

  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [users, setUsers] = useState([]);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const localAdmin = localStorage.getItem("isAdmin");

  useEffect(() => {
    getAllAppointments().then((result) => {
      setAppointments(result.data);
    });
    fetchDoctors().then((result) => {
      setDoctors(result.data);
    });
    fetchUsers().then((result) => {
      setUsers(result.data);
    });
  }, []);

  // Cancel appointment
  const deleteAppointment = async (event, appointment) => {
    try {
      const response = await fetch(
        "http://localhost:4001/api/appointment/delete-by-id",
        {
          method: "DELETE",
          headers: authHeaders,
          body: JSON.stringify({
            id: appointment._id,
            isAdmin: localAdmin,
          }),
        }
      );
      const responseData = await response.json();
      if (responseData.success == true) {
        const updatedAppointments = appointments.filter(
          (appointment) => appointment._id !== responseData.data._id
        );
        setAppointments(updatedAppointments);
        toast.success("Appointment cancelled successfully");
      }
    } catch (error) {
      toast.error("Error cancelling appointment");
    }
  };

  // delete doctor
  const deleteDoctor = async (event, doctor) => {
    try {
      const response = await fetch(
        "http://localhost:4001/api/doctor/delete-by-id",
        {
          method: "DELETE",
          headers: authHeaders,
          body: JSON.stringify({
            id: doctor._id,
            isAdmin: localAdmin,
          }),
        }
      );
      const responseData = await response.json();
      if (responseData.success == true) {
        const updatedDoctors = doctors.filter(
          (doctor) => doctor._id !== responseData.data._id
        );
        setDoctors(updatedDoctors);
        toast.success("Doctor Deleted Successfully");
      }
    } catch (error) {
      toast.error("Error Deleting Doctor");
    }
  };

  const deleteUser = async (event, user) => {
    try {
      const response = await fetch(
        "http://localhost:4001/api/user/delete-by-id",
        {
          method: "DELETE",
          headers: authHeaders,
          body: JSON.stringify({
            id: user._id,
            isAdmin: localAdmin,
          }),
        }
      );
      const responseData = await response.json();
      if (responseData.success == true) {
        const updatedUsers = users.filter(
          (user) => user._id !== responseData.data._id
        );
        setUsers(updatedUsers);
        toast.success("User Deleted Successfully");
      }
    } catch (error) {
      toast.error("Error Deleting User");
    }
  };

  const checkAvailability = async (event, appointment) => {
    try {
      const response = await fetch(
        "http://localhost:4001/api/appointment/check-availability",
        {
          method: "POST",
          headers: authHeaders,
          body: JSON.stringify({
            doctorId: appointment.doctorId,
            date: date,
            time: time,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        upDateBooking(appointment);
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  // Update Booking
  const upDateBooking = async (appointment) => {
    try {
      const response = await fetch(
        "http://localhost:4001/api/appointment/update-by-id",
        {
          method: "PUT",
          headers: authHeaders,
          body: JSON.stringify({
            id: appointment._id,
            date: date,
            time: time,
            isAdmin: localAdmin,
          }),
        }
      );
      const responseData = await response.json();
      if (responseData.success == true) {
        const updatedAppointments = appointments.filter(
          (appointment) => appointment._id !== responseData.data._id
        );
        setAppointments(updatedAppointments);
        toast.success("Booking Updated Successfully");
      }
    } catch (error) {
      toast.error("Error Updating Booking");
    }
  };

  // DatePicker
  const onChange = (value, dateString) => {
    const dateSplit = dateString.split(" ")[0];
    const timeSplit = dateString.split(" ")[1];
    return setDate(dateSplit), setTime(timeSplit);
  };

  return (
    <>
      <div className="global-admin-container">
        <div className="main-heading">
          <h1>
            {/* {location.pathname === '/appointments' ? 'Your Appointments' : 'Meet our doctors'} */}
            Admin Portal
          </h1>
        </div>

        <div className="map-container">
          {/* <div className='scrollable-container'> */}

          <section className="admin-appointments">
            <h2>Appointments</h2>
            {appointments.map((appointment) => {
              return (
                <div className="single-appointment">
                  <p>Patient: {appointment.userInfo.name}</p>
                  <p>Doctor: {appointment.doctorInfo.name}</p>
                  <p>Specialization: {appointment.doctorInfo.specialization}</p>
                  <p>Date: {appointment.date}</p>
                  <p>Time: {appointment.time}</p>
                  {/* THIS HAS TO CHANGE CANNOT NEST DatePicker in <p> tag */}
                  <p>
                    <DatePicker
                      className="update-picker"
                      placeholder="Update Booking Time"
                      format="DD-MM-YYYY HH:mm"
                      onChange={onChange}
                      minuteStep={60}
                      disabledHours={() => [
                        0, 1, 2, 3, 4, 5, 6, 7, 8, 17, 18, 19, 20, 21, 22, 23,
                        24,
                      ]}
                      hideDisabledOptions={true}
                      showTime={{ defaultValue: dayjs("09:00", "HH:mm") }}
                    />
                  </p>
                  <button
                    onClick={(event) => checkAvailability(event, appointment)}
                    className="admin-appointment-button"
                  >
                    Update Appointment
                  </button>
                  <section className="button-section">
                    <button
                      className="admin-appointment-button"
                      onClick={(event) => deleteAppointment(event, appointment)}
                    >
                      Cancel Appointment
                    </button>
                  </section>
                </div>
              );
            })}
          </section>

          <section className="admin-appointments">
            <h2>Doctors</h2>
            {doctors.map((doctor) => {
              return (
                <div className="single-appointment">
                  <p>Name: {doctor.name}</p>
                  <p>Specialization: {doctor.specialization}</p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <section className="button-section">
                    <button
                      className="admin-appointment-button"
                      onClick={(event) => deleteDoctor(event, doctor)}
                    >
                      Delete Doctor
                    </button>
                  </section>
                </div>
              );
            })}
          </section>

          <section className="admin-appointments">
            <h2>Users</h2>
            {users.map((user) => {
              return (
                <div className="single-appointment">
                  <p>Name: {user.name}</p>
                  <p>Email: {user.email}</p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <section className="button-section">
                    <button
                      className="admin-appointment-button"
                      onClick={(event) => deleteUser(event, user)}
                    >
                      Delete User
                    </button>
                  </section>
                </div>
              );
            })}
          </section>
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
      </div>
    </>
  );
};

export default AdminComponent;
