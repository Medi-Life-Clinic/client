import React, { useEffect, useState } from 'react'

const AppointmentsComponent = () => {

    const getAppointments = async () => {
        try {
            const response = await fetch("http://localhost:4001/api/appointment/get-all-by-user-id", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    userId: localStorage.getItem("userId")
                })

            })
            // console.log(response)
            const responseData = await response.json()
            // console.log(responseData)
            return responseData
        } catch (error) {

        }
    }
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        getAppointments().then(result => {
            const appointments = []
            result.data.forEach(appointment => {
                appointments.push(appointment)
            })
            setAppointments(appointments)
            console.log(appointments)
        })
    }, [])

    return (
        <>
            <div className="layout-header">
                <h1>
                    {location.pathname === '/appointments' ? 'Your Appointments' : 'Meet our doctors'}
                </h1>
            </div>

            <section className="appointments">
                {appointments.map((appointment) => {
                    return (
                        <div className="appointment">
                            <p>Doctor: {appointment.doctorInfo.name}</p>
                            <p>Specialization: {appointment.doctorInfo.specialization}</p>
                            <p>Date: {appointment.date}</p>
                            <p>Time:{appointment.time}</p>
                        </div>
                    )
                })}

            </section>
        </>
    )
}

export default AppointmentsComponent