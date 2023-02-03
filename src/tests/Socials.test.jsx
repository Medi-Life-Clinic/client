import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Socials from '../components/Socials'
import { BrowserRouter } from 'react-router-dom'

//Passed
describe("Socials Component", () => {
    it("Renders the heading text", () => {
        const { getByText } = render(<Socials />)
        const heading = getByText("Contact us on socials")
        expect(heading).toBeInTheDocument()
      })
    })

   it("It Renders three social icons", () => {
      const { getByTestId } = render(<Socials />)
      const facebook = getByTestId("facebook-icon")
      const instagram = getByTestId("instagram-icon")
      const twitter = getByTestId("twitter-icon")
      expect(facebook).toBeInTheDocument()
      expect(instagram).toBeInTheDocument()
      expect(twitter).toBeInTheDocument()
    })