import React from 'react'
import { render, fireEvent, getByTestId, getAllByTestId } from '@testing-library/react'
import '@testing-library/jest-dom'
import AdminComponent from '../components/AdminComponent'
import { BrowserRouter } from 'react-router-dom'
import NavBar from '../components/NavBar'




//Passed Test 

describe("Admin render", () => {
    it('Renders the Admin Component',  () => {
        render((<BrowserRouter><AdminComponent /></BrowserRouter>))
  })
  })

  //Passed
  it('Renders the Title Medi-Life | Admin',  () => {
    render((<BrowserRouter><AdminComponent /></BrowserRouter>))
    expect(document.title).toBe('Medi-Life | Admin')
  })


  
//Passed
it("Renders the Doctors-H2 tag", () => {
  const { getByTestId } = render((
    <BrowserRouter>
      <AdminComponent/>
    </BrowserRouter>
  ))
  expect(getByTestId("h2-doctors")).toBeInTheDocument()
})

it("Renders the Users-H2 tag", () => {
  const { getByTestId } = render((
    <BrowserRouter>
      <AdminComponent/>
    </BrowserRouter>
  ))
  expect(getByTestId("h2-users")).toBeInTheDocument()
})
