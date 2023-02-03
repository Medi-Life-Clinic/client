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

//   //Passed
//   describe('AdminComponent', () => {
//     it('renders admin Heading', () => {
//       const { getByText } = render(
//         <BrowserRouter>
//           <AdminComponent />
//         </BrowserRouter>
//       )
//       expect(getByText('Your Appointments')).toBeInTheDocument()
//     })
//   })


// //Passed
// it("Renders the H1 tag", () => {
//   const { getByTestId } = render((
//     <BrowserRouter>
//       <AppointmentsComponent/>
//     </BrowserRouter>
//   ))
//   expect(getByTestId("H1")).toBeInTheDocument()
// })

// it('Renders ToastContainer',  () => {
//   const { getByTestId } = render((<BrowserRouter><AppointmentsComponent /></BrowserRouter>));
//   const toastContainer = getByTestId('toast-container');
//   expect(toastContainer).toBeInTheDocument();
// });
