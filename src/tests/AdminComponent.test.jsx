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
  });

  it("populates the appointments state", () => {
    const { getByTestId } = render((<BrowserRouter><AdminComponent /></BrowserRouter>));
    const appointmentsData = getByTestId("appointments-data");
    expect(appointmentsData).toBeDefined();

  })

  it("populates the doctors state", () => {
    const { getByTestId } = render((<BrowserRouter><AdminComponent /></BrowserRouter>));
    const doctorsData = getByTestId("doctors-data");
    expect(doctorsData).toBeDefined();
  });
  
    
