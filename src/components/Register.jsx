import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'



const Register = () => {
  return (
    <>
      <div className='register-box'>
      <h1 className='card-title'>Register</h1>
        <div className='register-form card p-4'>
         <form>
            <label type="text">
             Name:
            </label>
            <input className='mb-4' type="text" name="name" placeholder="Full Name here" />
            <label type="text">
             Email:
            </label>
            <input className='mb-4' type="text" name="email" placeholder='Email address' />
            <label type="text">
             Password:
            </label>
            <input className='mb-4' type="text" name="password" placeholder='Password' />
            <input className='mb-3 register-button' type="submit" value="REGISTER" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Register