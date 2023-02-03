import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import NavBar from '../components/NavBar'
import { BrowserRouter } from 'react-router-dom'

describe("NavBar Component", () => {
    it('Renders the NavBar component ', () => {
        const { getByText } = render(
          <BrowserRouter>
            <NavBar />
          </BrowserRouter>
        )
        const element = getByText(/Medi-Life/i);
        expect(element).toBeInTheDocument();
      })
    })

    it ('Username is displayed in h4 tag', () => {
        localStorage.setItem('user', 'testUser');
        const { getByText } = render(
        <BrowserRouter>
         <NavBar />
        </BrowserRouter>
    )
    const element = getByText(/testUser/i);
    expect(element).toBeInTheDocument();
  })

  it('Navigates succesfully', () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const hamburger = getByText(/\u{9776}/i);
    fireEvent.click(hamburger);
    const menu = getByText(/Doctors/i);
    expect(menu).toBeInTheDocument();
  });