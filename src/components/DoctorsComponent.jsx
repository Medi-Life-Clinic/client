import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { DatePicker, TimePicker } from "antd";
import "./doctors.css"
import dayjs from 'dayjs';


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
    const [time, setTime] = useState();
    const format = 'HH:mm'; // time picker format


    useEffect(() => {
        fetchDoctors().then(result => {
            const doctors = []
            result.data.forEach(doctor => {
                doctors.push(doctor)
            })
            setDoctors(doctors)
        })
    }, [])

     const checkAvailability = async (event, returnedId) => {

        const convertedDate = date.format('DD-MM-YYYY')
        const convertedTime = time.format('HH:mm')

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
                    date: convertedDate,
                    time : convertedTime
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
        const convertedTime = time.format('HH:mm')
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
                    time: convertedTime
                    // doctorInfo: doctor,
                    // userInfo: user
                })
            })
            const result = await response.json();
            toast.success(result.message)
            console.log(convertedTime)
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

                        <label>Please select an appointment date and time:</label>
                        <DatePicker className='date-picker' format="DD-MM-YYYY" onChange={(value) => { setDate(value) }} />
                        <TimePicker defaultValue={dayjs('09:00', format)} minuteStep={60} disabledHours={() => [0, 1, 2, 3, 4, 5, 6,7,8, 17, 18, 19, 20, 21, 22, 23, 24]} format={format} onChange={(value) => { setTime(value) }} />
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