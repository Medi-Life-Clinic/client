import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Login from '../components/Login';
import Socials from '../components/Socials';

//Passed Test 

describe('Login socials', () => {
    it('Displays the socials component', () => {
        const { getByText } = render(<Socials />)
        expect(getByText(/Contact us on socials/i)).toBeInTheDocument()
    })
})

