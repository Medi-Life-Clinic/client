import React from 'react'
import { render, fireEvent, getByTestId } from '@testing-library/react'
import App from "./src/App.jsx"
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

//Passed
describe("App Component", () => {
    it('Renders the app',  () => {
        render((<App />))
})
})

//Passed
it("renders the Login component by default", () => {
    const { getByTestId } = render((<App />))
    expect(getByTestId("H1").textContent).toBe("Login")
})


//Passed
describe("Register Component", () => {
it('Renders the Register Button', () => {
  const { getByTestId } = render(<App />)
  const registerButton = getByTestId('Register-button')
  fireEvent.click(registerButton)
  const h1 = getByTestId('H1')
  expect(h1.textContent).toEqual('Register')
  expect(getByTestId('Submitbtn')).toBeInTheDocument()
})

})

