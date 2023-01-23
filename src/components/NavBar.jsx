import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './navbar.css'
import {GiHospitalCross} from 'react-icons/gi'
import { Link } from 'react-router-dom'



// Navbar Component
const NavBar = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-auto'>
                <div className='col-auto min-vh-100 '>
                    <div classname='header'>
                           <GiHospitalCross className='header-img m-5 mb-4'/>
                        <h3 class="text-center">Medi-Life</h3>
                    </div>
                    <ul>
                        <ul>
                            <a className='nav-link px-1 m-1 p-3'>
                                <i className='bi bi-house-door-fill' /> <Link to='/' className='ms-1 d-none d-sm-inline '>Home</Link>
                            </a>
                        </ul> 
                        <ul>
                            <a className='nav-link px-1 m-1 p-3'>
                                <i className='bi-table' /> <Link to='/appointments' className='ms-1 d-none d-sm-inline'>Appointment</Link>
                            </a>
                        </ul> 
                        <ul>
                      
                            <a className='nav-link px-1 m-1 p-3'>
                                <i className='bi bi-box-arrow-right' /> <Link to='/logout' className='ms-1 d-none d-sm-inline'>Logout</Link>
                               
                            </a>
                        </ul> 
                     </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default NavBar;