import React, { useEffect, useState } from 'react'
import Popup from './Popup.jsx'
import { DatePicker } from "antd";




const PopoutApp = () => {
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
    const [buttonPopup, setButtonPopup] = useState(false);
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
            console.log(result)
            return result
        } catch (err) {
            console.log(err);
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
                    date: convertedDate
                })
            })
            const result = await response.json();
            console.log(result)
            return result
        } catch (err) {
            console.log(err);
        }
    };

    function getDoctorById(id) {
        axios.get(`https://your-api-endpoint.com/doctors/${id}`)
            .then(response => {
                const doctor = response.data;
                // do something with the doctor data, such as displaying their name
                console.log(doctor.name)
            })
            .catch(error => {
                console.log(error);
            });
    }

    
    return (
        <div className="Popout">
        <main>
            <br></br>
            <button onClick={() => setButtonPopup(true)}>Book Now</button>
        </main>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <section className='doctors'>
                {
                    doctors.length > 0 ? (
                        <div>
                            <p>hello{doctors[0].name}</p>
                            <div className='datepicker'><DatePicker format="DD-MM-YYYY" onChange={(value) => { setDate(value) }} /></div>
                            <div className='popout-feature'>
                            </div>
                            <button onClick={event => checkAvailability(event, doctors[0]._id)} className="btn btn-primary">Check Appointment</button>
                            <button onClick={event => makeBooking(event, doctors[0]._id)} className="btn btn-primary">Book Appointment</button>
                            <button onClick={() => getDoctorById(doctorId)}>Book Now</button>
                        </div>
                    ) : (
                            <div>
                                <p>No Doctor available</p>
                            </div>
                        )
                }
            </section>
        </Popup>
    </div>
    )
}

export default PopoutApp

