import React from 'react'
import login from './login.css'

const Login = () => {
  return (
    <div className='login-box'>
        <div className='login-form card p-2'>
          <h1 className='card-title'>Nice to meet you</h1>
            <form>
              <label>
              Email:
              <input type="text" name="name" />
              </label>
              <label type="text">
              Password:
              </label>
              <input type="text" name="password" />
              <input type="submit" value="Login" />
              <input type="submit" value="Register" />
              </form>
        </div>
  </div>
  )
}

export default Login