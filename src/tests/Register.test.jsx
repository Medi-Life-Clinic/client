import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Register from '../components/Register'
import Socials from '../components/Socials'
import { BrowserRouter } from 'react-router-dom'



//Passed Test 
describe("Register Render", () => {
    it('Renders the Register Component',  () => {
        render((<BrowserRouter><Register /></BrowserRouter>))
  })
  })

//Passed Test 

describe('Register socials', () => {
    it('Displays the socials component', () => {
        const { getByText } = render(<Socials />)
        expect(getByText(/Contact us on socials/i)).toBeInTheDocument()
    })
})
//Passed 
describe('Register component', () => {
    it('Should render email input', () => {
        const { getByPlaceholderText } = render(<BrowserRouter><Register /></BrowserRouter>)
        expect(getByPlaceholderText(/Email/i)).toBeInTheDocument()
    })
})

    it('Should render name input', () => {
        const { getByPlaceholderText } = render(<BrowserRouter><Register /></BrowserRouter>)
        expect(getByPlaceholderText(/Name/i)).toBeInTheDocument()
    })


//Passed
it('Should render password input', () => {
    const{ getByPlaceholderText } = render(<BrowserRouter><Register /></BrowserRouter>)
    expect(getByPlaceholderText(/Password/i)).toBeInTheDocument()
})

//Passed
it('Should update the email state when input value changes', () => {
    const { getByPlaceholderText } = render(<BrowserRouter><Register /></BrowserRouter>)
    const emailInput = getByPlaceholderText(/Email/i)
    fireEvent.change(emailInput, { target: { value: 'test@email.com' } })
    expect(emailInput.value).toBe('test@email.com')
})

//Passed 
it('Should update the password state when input value changes', () => {
    const { getByPlaceholderText } = render(<BrowserRouter><Register /></BrowserRouter>)
    const passwordInput = getByPlaceholderText(/Password/i)
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } })
    expect(passwordInput.value).toBe('testpassword')
})


//Passed 
describe("Register render", () => {
    it("Renders the H1 tag", () => {
      const { getByTestId } = render((
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      ))
      expect(getByTestId("H1")).toBeInTheDocument();
    })
  })


  //Passed
  describe("Register Btn Component", () => {
    it('Renders register button', () => {
      const { getByText } = render(<BrowserRouter><Register /></BrowserRouter>)
      expect(getByText(/Register/i)).toBeInTheDocument()
  })
    })