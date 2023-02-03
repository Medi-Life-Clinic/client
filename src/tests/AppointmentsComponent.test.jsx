import React from 'react'
import { render, fireEvent, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom'
import  AppointmentsComponent from '../components/AppointmentsComponent'
import { BrowserRouter } from 'react-router-dom'



//Passed Test 

describe("Appointment render", () => {
    it('Renders the Appointments Component',  () => {
        render((<BrowserRouter><AppointmentsComponent /></BrowserRouter>))
  })
  })

  it('Sets page title to Medi-Life | Appointments',  () => {
    render((<BrowserRouter><AppointmentsComponent /></BrowserRouter>));
    expect(document.title).toBe('Medi-Life | Appointments');
  });