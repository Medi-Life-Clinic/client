import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { fetchDoctors, fetchUsers, authHeaders } from "../utils/fetchFunctions";
import "./doctorsComponent.css";

const Doctors = () => {
  document.title = "Medi-Life | Doctors";

  const [users, setUsers] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const checkAvailability = async (event, returnedId) => {
    try {
      const response = await fetch(
        "http://localhost:4001/api/appointment/check-availability",
        {
          method: "POST",
          headers: authHeaders,
          body: JSON.stringify({
            doctorId: returnedId,
            date: date,
            time: time,
          }),
        }
      );
      const result = await response.json();
      if (result.success) {
        makeBooking(event, returnedId);
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const makeBooking = async (event, returnedId) => {
    const doctor = doctors.find((doctor) => doctor._id === returnedId);
    const userInfo = users.find(
      (user) => user._id === localStorage.getItem("userId")
    );

    try {
      const response = await fetch(
        "http://localhost:4001/api/appointment/book-appointment",
        {
          method: "POST",
          headers: authHeaders,
          body: JSON.stringify({
            doctorId: returnedId,
            userId: localStorage.getItem("userId"),
            userInfo: { name: userInfo.name, email: userInfo.email },
            date: date,
            time: time,
            doctorInfo: doctor,
          }),
        }
      );
      const result = await response.json();
      toast.success(result.message);
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchDoctors().then((result) => {
      setDoctors(result.data);
    });
    fetchUsers().then((result) => {
      setUsers(result.data);
    });
  }, []);

  // DatePicker
  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    const dateSplit = dateString.split(" ")[0];
    const timeSplit = dateString.split(" ")[1];
    return setDate(dateSplit), setTime(timeSplit);
  };

  return (
    <>
      <div className="doctors-layout">
        <div className="main-heading">
          <h1 data-testid="H1">
            {/* {location.pathname === '/appointments' ? 'Your Appointments' : 'Meet our doctors'} */}
            Meet Our Doctors
          </h1>
        </div>
        <div className="body">
          <section className="doctors">
            {doctors.map((doctor) => {
              return (
                <div className="box">
                  <div className="imgBx">
                    <img className="doctor-image" src={doctor.image}></img>
                  </div>
                  <p>{doctor.name}</p>
                  <p>{doctor.specialization}</p>
                  <p className="bio">{doctor.bio}</p>

                  <section className="booking-container">
                    <label>Please select an appointment date and time:</label>
                    <DatePicker
                      placeholder="Select date and time:"
                      format="DD-MM-YYYY HH:mm"
                      onChange={onChange}
                      minuteStep={60}
                      disabledHours={() => [
                        0, 1, 2, 3, 4, 5, 6, 7, 8, 17, 18, 19, 20, 21, 22, 23,
                        24,
                      ]}
                      hideDisabledOptions={true}
                      showTime={{ defaultValue: dayjs("09:00", "HH:mm") }}
                    />
                    <button
                      onClick={(event) => checkAvailability(event, doctor._id)}
                      className="booking-button" 
                    >
                      Book Appointment
                    </button>
                  </section>
                </div>
              );
            })}
          </section>
          <ToastContainer  data-testid="Toast"
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
    </>
  );
};

export default Doctors;
