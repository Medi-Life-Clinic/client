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

  //Passed
  it('Renders the Title Medi-Life | Appointments',  () => {
    render((<BrowserRouter><AppointmentsComponent /></BrowserRouter>));
    expect(document.title).toBe('Medi-Life | Appointments');
  });

  //Passed
  describe('AppointmentsComponent', () => {
    it('renders appointments Heading', () => {
      const { getByText } = render(
        <BrowserRouter>
          <AppointmentsComponent />
        </BrowserRouter>
      )
      expect(getByText('Your Appointments')).toBeInTheDocument()
    })
  })


//   describe('AppointmentsComponent', () => {
//   it('Renders ToastContainer',  () => {
//     const { getByTestId } = render((<BrowserRouter><AppointmentsComponent /></BrowserRouter>));
//     const toastContainer = getByTestId('Toast');
//     expect(toastContainer).toBeInTheDocument();
//   })
// })