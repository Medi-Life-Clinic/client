import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './register.css'


export const Register = (props) => {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)

    fetch('http://localhost:4001/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.token) {
          localStorage.setItem('token', data.token)
          props.history.push('/home')
        }
        navigate('/')
      })
  }

  return (
    <>
      <div className='register-box'>
      <h1 className='card-title-register'>Register</h1>
        <div className='register-form card p-4'>
         <form onSubmit={handleSubmit}>
            <label type="text">
             Name:
            </label>
            <input value={name} onChange={(e) => setName(e.target.value)} className='mb-4' type="text" name="name" placeholder="Full Name here" />
            <label type="text">
             Email:
            </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='mb-4' type="text" name="email" placeholder='Email address' />
            <label type="text">
             Password:
            </label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className='mb-4' type="password" name="password" placeholder='Password' />
            <input className='mb-3 register-button' type="submit" value="REGISTER" />
            <Link to='/' className='anchor'>Already Registered? Click Here</Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register