import React, { useEffect, useState } from 'react'
import './mainLayout.css'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { GiHospitalCross } from 'react-icons/gi'
import { FaHouseUser } from 'react-icons/fa'
import { BsCalendarDate } from 'react-icons/bs'
import { MdLogout } from 'react-icons/md'
import { DatePicker } from "antd";
import PopoutApp from './popupFeature/PopoutApp';

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
            console.log(result)
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
            console.log(result)
            return result
        } catch (err) {
            console.log(err);
        }
    };


    //NAV BAR LINKS
    return (
        <div className='main'>
            <div className='d-flex layout'>
                <div className="sidebar">
                    <div className="sidebar-header">
                        <h1><GiHospitalCross />Medi-Life</h1>
                        </div>
                    <div className="menu">
                    <Link to='/bookings' className={location.pathname === '/bookings' ? 'active' : ''}>
                            <button style={{background: "transparent", border: "none"}} class="p-0">
                            <FaHouseUser className="m-2 nav-icon" size='20'/> 
                            Doctors
                            </button>
                    </Link>
                    <Link to='/appointments' className={location.pathname === '/appointments' ? 'active' : ''}>
                            <button style={{background: "transparent", border: "none"}}  class="p-0">
                            <BsCalendarDate className="m-2 nav-icon" size='20'/>
                            Appointments
                            </button>
                    </Link>
                    <Link to='/'>
                            <button className="nav-btn"style={{background: "transparent", border: "none"}} onClick={()=>localStorage.removeItem('token')} class="p-0">
                             <MdLogout className="m-2" size = '25' />
                             Logout
                            </button>
                    </Link>

        
                     
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
                                <div className='datepicker'><DatePicker format="DD-MM-YYYY" onChange={(value) => {setDate(value)}}/></div>
                                <div className='popout-feature'>
                                <PopoutApp />
                                </div>
                                <button onClick={event => checkAvailability(event, doctor._id)} className="btn btn-primary">Check Appointment</button>
                                <button onClick={event => makeBooking(event, doctor._id)} className="btn btn-primary">Book Appointment</button>
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
{/* <button onClick={logout => localStorage.removeItem('token') } className="btn btn-primary">Logout</button> */}