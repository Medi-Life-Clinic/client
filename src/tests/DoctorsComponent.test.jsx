import React from 'react'
import { render, fireEvent, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom'
import  DoctorsComponent from '../components/DoctorsComponent'
import { BrowserRouter } from 'react-router-dom'



//Passed Test 


describe("Doctors render", () => {
    it('Renders the Doctors Component',  () => {
        render((<BrowserRouter><DoctorsComponent /></BrowserRouter>))
  })
  })

  //Passed
  it('Renders the Title Medi-Life | Doctors',  () => {
    render((<BrowserRouter><DoctorsComponent /></BrowserRouter>))
    expect(document.title).toBe('Medi-Life | Doctors')
  });

    //Passed
    describe('DoctorsComponent', () => {
      it('renders Doctors Heading', () => {
        const { getByText } = render(
          <BrowserRouter>
            <DoctorsComponent />
          </BrowserRouter>
        )
        expect(getByText('Meet Our Doctors')).toBeInTheDocument()
      })
    })
  

  //Passed
  it("Renders the H1 tag", () => {
    const { getByTestId } = render((
      <BrowserRouter>
        <DoctorsComponent />
      </BrowserRouter>
      ))
      expect(getByTestId("H1")).toBeInTheDocument()
    })

  