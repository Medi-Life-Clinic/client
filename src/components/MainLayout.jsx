import React, { useEffect, useState } from 'react'
import './mainLayout.css'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { GiHospitalCross } from 'react-icons/gi'
import { DatePicker } from "antd";
import { ToastContainer, toast } from 'react-toastify'
import { Toast } from 'bootstrap';


const Layout = () => {
    const fetchDoctors = async () => {
        try {
            const response = await fetch("http://localhost:4001/api/doctor/get-all", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            });
            const responseData = await response.json();
            return responseData
        } catch (err) {
            console.log(err);
        }
    };

    const [doctors, setDoctors] = useState([])
    const [date, setDate] = useState();

    useEffect(() => {
        fetchDoctors().then(result => {
            const doctors = []
            result.data.forEach(doctor => {
                doctors.push(doctor)
            })
            setDoctors(doctors)
        })
    }, [])

    const location = useLocation()
    const userMenu = [
        {
            name: 'Home',
            path: '/bookings',
            icon: 'ri-home-4-line'
        },
        {
            name: 'Appointments',
            path: '/appointments',
            icon: 'ri-bookmark-line'

        },
        {
            name: 'Logout',
            path: '/logout',
            icon: 'ri-logout-circle-line'
        }
    ]




    const menuToBeRendered = userMenu

    // Adam testing booking backend

    const checkAvailability = async (event, returnedId) => {

        const convertedDate = date.format('DD-MM-YYYY')

        try {
            const response = await fetch("http://localhost:4001/api/appointment/check-availability", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    doctorId: returnedId,
                    date: convertedDate
                })
            })
            const result = await response.json();
            // console.log(result)
            toast.success(result.message)
            return result
        } catch (err) {
            console.log(err);
        }
    };

    const makeBooking = async (event, returnedId) => {
        const convertedDate = date.format('DD-MM-YYYY')
        try {
            const response = await fetch("http://localhost:4001/api/appointment/book-appointment", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    doctorId: returnedId,
                    userId: localStorage.getItem("userId"),
                    date: convertedDate
                })
            })
            const result = await response.json();
            // console.log(result)
            toast.success(result.message)
            return result
        } catch (err) {
            console.log(err);
        }
    };

    // Save the username from local storage to the variable userName
    // displays username in the h4 tag below.
    const userName = localStorage.getItem("user")
    

    return (
        <div className='main'>
            <div className='d-flex layout'>
                <div className="sidebar">
                    <div className="sidebar-header">
                        <h1><GiHospitalCross />Medi-Life</h1>
                        <h4 className="user-name">{userName}</h4>
                    </div>
                    <div className="menu">
                        <Link to='/bookings'><button >Doctors</button></Link>
                        <Link to='/appointments'><button>Appointments</button></Link>
                        <Link to='/'><button onClick={() => localStorage.removeItem('token')} >Logout</button></Link>

                    </div>
                </div>

                <div className='content'>
                    <div className="layout-header">
                        <h1>Meet our doctors</h1>
                    </div>
                    <div className="body">
                        <section className='doctors'>
                            {doctors.map((doctor) => {
                                return <div className='box'>
                                    <div className='imgBx'>
                                        <img className="doctor-image" src={doctor.image}></img>
                                    </div>
                                    <p>{doctor.name}</p>
                                    <p>{doctor.specialization}</p>
                                    <p className="bio">{doctor.bio}</p>

                                    <container className='booking-container'>
                                        <ToastContainer
                                            position="bottom-center"
                                            autoClose={5000}
                                            hideProgressBar={false}
                                            newestOnTop={false}
                                            closeOnClick
                                            rtl={false}
                                            pauseOnFocusLoss
                                            draggable
                                            pauseOnHover
                                            theme="dark"
                                        />
                                        <label>Please select an appointment date:</label>
                                        <DatePicker className='date-picker' format="DD-MM-YYYY" onChange={(value) => { setDate(value) }} />
                                        <button onClick={event => checkAvailability(event, doctor._id)} className="booking-button">Check Appointment</button>
                                        <button onClick={event => makeBooking(event, doctor._id)} className="booking-button">Book Appointment</button>
                                    </container>
                                </div>
                            }
                            )}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout



// logout arrow functions
{/* <button onClick={logout => localStorage.removeItem('token') } className="btn btn-primary">Logout</button> */ }