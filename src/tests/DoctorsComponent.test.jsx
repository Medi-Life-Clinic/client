import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Doctors from '../components/DoctorsComponent';
import { BrowserRouter } from 'react-router-dom';



describe('Doctors Component', () => {
    it('Renders the component and shows the data from the doctors/users arrays', () => {
        const component = shallow(<BrowserRouter><Doctors /></BrowserRouter>);
        component.setState({ 
          doctors: [{
            _id: "1",
            name: "Doctor 1",
            specialization: "Specialization 1",
            bio: "Doctor 1 bio",
            image: "Doctor 1 image"
          }],
          users: [{
            _id: "2",
            name: "User 1",
            email: "user1@example.com"
          }]
        });
        expect(component.find('.doctors').length).toEqual(1);
        expect(component.find('.doctors .box').length).toEqual(1);
        expect(component.find('.doctors .box img').prop('src')).toEqual('Doctor 1 image');
        expect(component.find('.doctors .box p').at(0).text()).toEqual('Doctor 1');
        expect(component.find('.doctors .box p').at(1).text()).toEqual('Specialization 1');
    })
})