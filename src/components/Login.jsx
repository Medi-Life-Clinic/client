import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'


const Login = () => {
  return (
    <>
      <div className='login-box'>
      <h1 className='card-title'>Login</h1>
        <div className='login-form card p-4'>
         <form>
            <label type="text">
              Email:
            </label>
            <input className='mb-4' type="text" name="email" placeholder="Email" />
            <label type="text">
              Password:
            </label>
            <input className='mb-4' type="text" name="password" placeholder='Password' />
            <input className='mb-3 login-button' type="submit" value="LOGIN" />
            <Link to='/register' className='anchor'>Haven't registered? Click Here</Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login