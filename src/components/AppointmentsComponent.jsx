import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const AppointmentsComponent = () => {
    document.title = 'Medi-Life | Appointments'

    const getAppointments = async () => {
        try {
            const response = await fetch("http://localhost:4001/api/appointment/get-all-by-user-id", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    userId: localStorage.getItem("userId")
                })
            })
            const responseData = await response.json()
            return responseData
        } catch (error) {
            toast.error("Error fetching appointments")
        }
    }

    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        getAppointments().then(result => {
            setAppointments(result.data)
        })
    }, [])
    
    // Cancel appointment
    const deleteAppointment = async (event, appointment) => {
        try {
            const response = await fetch("http://localhost:4001/api/appointment/delete-by-id", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': "Bearer " + localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    id: appointment._id
                })
            })
            const responseData = await response.json()
            if (responseData.success == true) {
                const updatedAppointments = appointments.filter(appointment => appointment._id !== responseData.data._id)
                setAppointments(updatedAppointments)
                toast.success("Appointment cancelled successfully")
            }

        } catch (error) {
            toast.error('Error cancelling appointment')
        }
    }

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
                            <button className='booking-button'onClick={event => deleteAppointment(event, appointment)}>Cancel Appointment</button>
                        </div>
                    )
                })}

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
        </>
    )
}

export default AppointmentsComponent