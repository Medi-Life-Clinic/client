import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Login from '../components/Login'
import Socials from '../components/Socials'
import { BrowserRouter } from 'react-router-dom'

//Passed Test 

describe("Login render", () => {
    it('Renders the Login Component',  () => {
        render((<BrowserRouter><Login /></BrowserRouter>))
  })
  })

//Passed Test 

describe('Login socials', () => {
    it('Displays the socials component', () => {
        const { getByText } = render(<Socials />)
        expect(getByText(/Contact us on socials/i)).toBeInTheDocument()
    })
})
//Passed 
describe('Login component', () => {
    it('Should render email input', () => {
        const { getByPlaceholderText } = render(<BrowserRouter><Login /></BrowserRouter>)
        expect(getByPlaceholderText(/Email/i)).toBeInTheDocument()
    })
})

//Passed
it('Should render password input', () => {
    const{ getByPlaceholderText } = render(<BrowserRouter><Login /></BrowserRouter>)
    expect(getByPlaceholderText(/Password/i)).toBeInTheDocument()
})


//Passed
it('Should update the email state when input value changes', () => {
    const { getByPlaceholderText } = render(<BrowserRouter><Login /></BrowserRouter>)
    const emailInput = getByPlaceholderText(/Email/i)
    fireEvent.change(emailInput, { target: { value: 'test@email.com' } })
    expect(emailInput.value).toBe('test@email.com')
})

//Passed 
it('Should update the password state when input value changes', () => {
    const { getByPlaceholderText } = render(<BrowserRouter><Login /></BrowserRouter>)
    const passwordInput = getByPlaceholderText(/Password/i)
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } })
    expect(passwordInput.value).toBe('testpassword')
})




