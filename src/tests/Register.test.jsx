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
it('Should update name when input value changes', () => {
  const { getByPlaceholderText } = render(<BrowserRouter><Register /></BrowserRouter>)
  const nameInput = getByPlaceholderText(/Name/i)

  fireEvent.change(nameInput, { target: { value: 'John Doe' } })

  expect(nameInput.value).toBe('John Doe')
})


  //Passed
  describe("Register Components", () => {
    it('Renders register button', () => {
      const { getByTestId } = render(<BrowserRouter><Register /></BrowserRouter>)
      expect(getByTestId("Submitbtn")).toBeInTheDocument()
  })

  it("Renders the H1 tag", () => {
    const { getByTestId } = render((
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    ))
    expect(getByTestId("H1")).toBeInTheDocument();
  })
})

describe("Register Components", () => {
it('Allows user to submit form', () => {
  const { getByPlaceholderText, getByTestId } = render(<BrowserRouter><Register /></BrowserRouter>)
  const nameInput = getByPlaceholderText(/Name/i)
  const emailInput = getByPlaceholderText(/Email/i)
  const passwordInput = getByPlaceholderText(/Password/i)
  const submitBtn = getByTestId('Submitbtn')

  fireEvent.change(nameInput, { target: { value: 'John Doe' } })
  fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } })
  fireEvent.change(passwordInput, { target: { value: 'secret' } })
  fireEvent.click(submitBtn)

  expect(submitBtn).toBeEnabled()
})
})