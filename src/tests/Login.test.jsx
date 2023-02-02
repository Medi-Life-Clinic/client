import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Login from '../components/Login';
import Socials from '../components/Socials';
import { BrowserRouter } from 'react-router-dom';

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
// //Failed
// it('Should update the email state when the input value changes', () => {
//     const { getByPlaceholderText } = render(<BrowserRouter><Login /></BrowserRouter>)
//     const emailinput = getByPlaceholderText(/Email/i)
//     fireEvent.change(emailInput, { target: { value: 'test@email.com'}})
//     expect(emailInput.value).toBe('test@email.com')
// })

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









// //Failed -Dep
// it('Should display a toast notification when form submission fails', () => {
//     const { getByPlaceholderText, getByText } = render(<Login />)
//     const emailInput = getByPlaceholderText(/Email/i)
//     fireEvent.change(emailInput, { target: { value: 'test@email.com' } })
//     const passwordInput = getByPlaceholderText(/Password/i)
//     fireEvent.change(passwordInput, { target: { value: 'testpassword' } })
//     const submitBtn = getByText(/LOGIN/i)
//     fireEvent.click(submitBtn)
//     const toast = getByText(/Something went wrong/i)
//     expect(toast).toBeInTheDocument()
// })

// //Failed - Dep Testing state of email and password field
// describe('Test the state of the email field and password fields', () => {
//     it('Displays the email box with an empty value', () => {
//         const { getByLabelText } = render(<BrowserRouter><Login /></BrowserRouter>)
//         const emailInput = getByLabelText(/email/i)
//         expect(emailInput.value).toBe('')
//     })
//     it('Displays the password box with an empty value', () => {
//         const { getByLabelText } = render(<BrowserRouter><Login /></BrowserRouter>)
//         const emailInput = getByLabelText(/password/i)
//         expect(passwordInput.value).toBe('')
//     })
// })