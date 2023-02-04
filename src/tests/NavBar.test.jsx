import React from 'react'
import { render, fireEvent, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom'
import NavBar from '../components/NavBar'
import { BrowserRouter } from 'react-router-dom'

//Passed
describe("NavBar Component", () => {
    it('Renders the NavBar component ', () => {
        const { getByText } = render(
          <BrowserRouter><NavBar /></BrowserRouter>
      
 
        )
        const element = getByText(/Medi-Life/i);
        expect(element).toBeInTheDocument();
      })
    })

    //Passed
  it ('Username is displayed in h4 tag', () => {
        localStorage.setItem('user', 'testUser');
        const { getByText } = render(
          <BrowserRouter>
         <NavBar /></BrowserRouter>
   
    )
    const element = getByText(/testUser/i);
    expect(element).toBeInTheDocument();
  })
  
  //Passed 

  it("Navigates succesfully", () => {
    const { getByTestId, getByText } = render(
      <BrowserRouter><NavBar /></BrowserRouter>
     )
    const hamburger = getByTestId("Burgbtn");
    fireEvent.click(hamburger);
    const menu = getByText(/Doctors/i);
    expect(menu).toBeInTheDocument();
  })
