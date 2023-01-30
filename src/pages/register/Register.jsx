import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './register.css'


export const Register = (props) => {


  // this is used to navigate to the bookings page
  const navigate = useNavigate()

  // these are the states for the name, email and password
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // handleSubmit function is found in the <form> tag from the return() below
  const handleSubmit = (e) => {
    e.preventDefault() // this stops the page from refreshing
    console.log(email) // this is just a test to check that the email is being passed through

    fetch('https://medi-life-clinic.herokuapp.com/api/user/register', { // this is the fetch request to the server
      method: 'POST', // http method
      headers: { // headers are used to tell the server what type of data we are sending
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ // this is the data we are sending to the server
        name: name,
        email: email,
        password: password
      })
    })
      .then(res => res.json()) // this converts the response to json
      .then(data => { //
        console.log(data) // this returns the message from the server
        navigate('/') // this navigates to the homepage (which is currently login)
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