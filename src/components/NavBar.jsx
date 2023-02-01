import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { GiHospitalCross } from 'react-icons/gi'
import { FaHouseUser } from 'react-icons/fa'
import { BsCalendarDate, BsPerson } from 'react-icons/bs'
import { MdLogout } from 'react-icons/md'
import './navBar.css'


const NavBar = ({ children }) => {
    // Save the username from local storage to the variable userName
    // displays username in the h4 tag below.
    const userName = localStorage.getItem("user")
    const [showNav, setShowNav] = useState(false);
    //NAV BAR LINKS
    return (
        <div className='main'>
            <div className='page-layout'>
            <button
                    className="hamburger"
                    onClick={() => setShowNav(!showNav)}>
                    &#9776; 
            </button>
                <div className={`sidebar ${showNav ? 'show' : ''}`}>
                    <div className="sidebar-header">
                        <h1><GiHospitalCross />Medi-Life</h1>
                        <h4 className="user-name"><BsPerson className='person-icon'/>{userName}</h4>
                    </div>
                    <div className="menu">
                        <Link to='/doctors' className={location.pathname === '/doctors' ? 'active' : ''}>
                            <button style={{ background: "transparent", border: "none" }} className="p-0">
                                <FaHouseUser className="m-2" size='20' />
                                Doctors
                            </button>
                        </Link>
                        <Link to='/appointments' className={location.pathname === '/appointments' ? 'active' : ''}>
                            <button style={{ background: "transparent", border: "none" }} className="p-0">
                                <BsCalendarDate className="m-2" size='20' />
                                Appointments
                            </button>
                        </Link>
                        <Link to='/'>
                            <button className="p-0" style={{ background: "transparent", border: "none" }} onClick={() => localStorage.removeItem('token')}>
                                <MdLogout className="m-2" size='25' />
                                Logout
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="body">{children}</div>
            </div>
        </div>
    )
}

export default NavBar



