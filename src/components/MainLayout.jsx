import React, { useEffect, useState } from 'react'
import './mainLayout.css'
import { Link, useLocation } from 'react-router-dom'
import { GiHospitalCross } from 'react-icons/gi'
import PopoutApp from '../components/PopoutApp.jsx'
import { AiOutlineMenuFold } from 'react-icons/ai'

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
            path: '/',
            icon: 'ri-logout-circle-line'
        }
    ]
    
    const menuToBeRendered = userMenu

    // const logOut = location.name === 'Logout'
    // if (logOut === false) {
    //     localStorage.removeItem('token')
    // }

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
                            useEffect(() => {
                                if(location.pathname === '/'){
                                    // localStorage.removeItem('token')
                                    console.log('hello')
                                }
                            }, [location.pathname])
                            
                            
                            // const logOut = location.pathname
                            // if (logOut === false) {
                            //     console.log("hello")
                            // }
                            
                            
                            
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
                                <PopoutApp />
                            </div>
                            })}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout