import React, { useEffect, useState } from 'react'
import './mainLayout.css'
import { Link, useLocation } from 'react-router-dom'
import { GiHospitalCross } from 'react-icons/gi'

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

    const checkAvailability = async (eventObject, returnedId) => {
       const date = "30-01-2023"
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
                    date: date
                })
            })
            const result = await response.json();
            console.log(result)
            return result
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='main'>
            <div className='d-flex layout'>
                <div className="sidebar">
                    <div className="sidebar-header">
                        <h1><GiHospitalCross />Medi-Life</h1>
                    </div>
                    <div className="menu">
                        {menuToBeRendered.map((menu) => {
                            const isActive = location.pathname === menu.path
                            return <div className={`d-flex menu-item ${isActive && 'active-menu-item'}`}>
                                <i className={menu.icon}></i>
                                <Link to={menu.path}>{menu.name}</Link>
                            </div>
                        })}
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
                                <label for="datepicker">Please select an appointment date:</label>
                                <input type="date" id="datepicker" name="trip-start" value="2018-07-22"min="2018-01-01" max="2018-12-31"></input>
                                <button onClick={event => checkAvailability(event, doctor._id)} className="btn btn-primary">Check Appointment</button>
                                <button className="btn btn-primary">Book Appointment</button>
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