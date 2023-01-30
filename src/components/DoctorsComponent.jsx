import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { DatePicker } from "antd";



const Doctors = () => {
    const fetchDoctors = async () => {
        try {
            const response = await fetch("http://localhost:4001/api/doctor/get-all", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            });
            const responseData = await response.json();
            return responseData
        } catch (err) {
            console.log(err);
        }
    };

    const [doctors, setDoctors] = useState([])
    const [date, setDate] = useState();

    useEffect(() => {
        fetchDoctors().then(result => {
            const doctors = []
            result.data.forEach(doctor => {
                doctors.push(doctor)
            })
            setDoctors(doctors)
        })
    }, [])
     // Adam testing booking backend

     const checkAvailability = async (event, returnedId) => {

        const convertedDate = date.format('DD-MM-YYYY')

        try {
            const response = await fetch("http://localhost:4001/api/appointment/check-availability", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    doctorId: returnedId,
                    date: convertedDate
                })
            })
            const result = await response.json();
            if (result.success) {
                makeBooking(event, returnedId)
            } else {
                toast.error(result.message)
            }
        } catch (err) {
            toast.error('Something went wrong');
        }
    };

    const makeBooking = async (event, returnedId) => {
        const convertedDate = date.format('DD-MM-YYYY')
        try {
            const response = await fetch("http://localhost:4001/api/appointment/book-appointment", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    doctorId: returnedId,
                    userId: localStorage.getItem("userId"),
                    date: convertedDate,
                    time: "10:00"
                    // doctorInfo: doctor,
                    // userInfo: user
                })
            })
            const result = await response.json();
            toast.success(result.message)
        } catch (err) {
            toast.error('Something went wrong');
        }
    };

    
  return (
    <div className='content'>
    <div className="layout-header">
        <h1>
            {location.pathname === '/appointments' ? 'Your Appointments' : 'Meet our doctors'}
        </h1>
    </div>
    <div className="body">
        <section className='doctors'>
            {doctors.map((doctor) => {
                return <div className='box'>
                    <div className='imgBx'>
                        <img className="doctor-image" src={doctor.image}></img>
                    </div>
                    <p>{doctor.name}</p>
                    <p>{doctor.specialization}</p>
                    <p className="bio">{doctor.bio}</p>

                    <container className='booking-container'>

                        <label>Please select an appointment date:</label>
                        <DatePicker className='date-picker' format="DD-MM-YYYY" onChange={(value) => { setDate(value) }} />
                        <button onClick={event => checkAvailability(event, doctor._id)} className="booking-button">Book Appointment</button>
                        {/* <button onClick={event => makeBooking(event, doctor._id)} className="booking-button">Book Appointment</button> */}
                    </container>
                </div>
            }
            )}
        </section>
        <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            // pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
    </div>
</div>
  )
}

export default Doctors