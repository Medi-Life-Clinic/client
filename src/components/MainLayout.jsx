import './mainLayout.css'
import { Link } from 'react-router-dom'
import { GiHospitalCross } from 'react-icons/gi'
import { FaHouseUser } from 'react-icons/fa'
import { BsCalendarDate } from 'react-icons/bs'
import { MdLogout } from 'react-icons/md'


const Layout = ({ children }) => {
    // Save the username from local storage to the variable userName
    // displays username in the h4 tag below.
    const userName = localStorage.getItem("user")
    //NAV BAR LINKS
    return (
        <div className='main'>
            <div className='d-flex layout'>
                <div className="sidebar">
                    <div className="sidebar-header">
                        <h1><GiHospitalCross />Medi-Life</h1>
                        <h4 className="user-name">{userName}</h4>
                    </div>
                    <div className="menu">
                        <Link to='/bookings' className={location.pathname === '/bookings' ? 'active' : ''}>
                            <button style={{ background: "transparent", border: "none" }} class="p-0">
                                <FaHouseUser className="m-2 nav-icon" size='20' />
                                Doctors
                            </button>
                        </Link>
                        <Link to='/appointments' className={location.pathname === '/appointments' ? 'active' : ''}>
                            <button style={{ background: "transparent", border: "none" }} class="p-0">
                                <BsCalendarDate className="m-2 nav-icon" size='20' />
                                Appointments
                            </button>
                        </Link>
                        <Link to='/'>
                            <button className="nav-btn" style={{ background: "transparent", border: "none" }} onClick={() => localStorage.removeItem('token')} class="p-0">
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

export default Layout



