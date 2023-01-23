import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '/navbar.css'


// Navbar Component
const SideNav = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-auto'>
                <div className='col-auto min-vh-100 bg-dark'>
                    <ul>
                        <li>
                            <a className='nav-link px-2'>
                                <i className='bi-speedometer' /> <span className='ms-1 d-none d-sm-inline'>Home</span>
                            </a>
                        </li> 
                        <li>
                            <a className='nav-link px-2'>
                                <i className='bi-table' /> <span className='ms-1 d-none d-sm-inline'>Appointment</span>
                            </a>
                        </li> 
                        <li>
                            <a className='nav-link px-2'>
                                <i className='bi-table' /> <span className='ms-1 d-none d-sm-inline'>Logout</span>
                            </a>
                        </li> 
                     </ul>
                </div>
            </div>
        </div>
    </div>
             )
}

export default SideNav;