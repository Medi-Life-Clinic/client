import React from 'react'
import './layout.css'
import { Link, useLocation } from 'react-router-dom'
import { GiHospitalCross } from 'react-icons/gi'


const Layout = () => {
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

    return (
        <div className='main p-2'>
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
                            <div className='box'>
                                <div className='imgBx'>
                                </div>
                                <p>Doctor1</p>
                            </div>
                            <div className='box'>
                                <div className='imgBx'>
                                </div>
                                <p>Doctor2</p>
                            </div>
                            <div className='box'>
                                <div className='imgBx'>
                                </div>
                                <p>Doctor3</p>
                            </div>
                            <div className='box'>
                                <div className='imgBx'>
                                </div>
                                <p>Doctor4</p>
                            </div>
                            <div className='box'>
                                <div className='imgBx'>
                                </div>
                                <p>Doctor5</p>
                            </div>
                            <div className='box'>
                                <div className='imgBx'>
                                </div>
                                <p>Doctor6</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout