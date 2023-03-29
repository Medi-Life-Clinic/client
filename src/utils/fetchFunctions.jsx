import { toast } from "react-toastify";
// variable that stores headers for requests
export const authHeaders = () => ({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': "Bearer " + localStorage.getItem("token"),
})

// get apointments by user id
export const getAppointments = async () => {
  try {
    const response = await fetch(
      "https://medi-life-clinic.herokuapp.com/api/appointment/get-all-by-user-id",
      {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify({
          userId: localStorage.getItem("userId"),
        }),
      }
    );
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    toast.error("Error fetching appointments");
  }
};

// get all appointments
export const getAllAppointments = async () => {
  try {
    const response = await fetch(
      "https://medi-life-clinic.herokuapp.com/api/appointment/get-all",
      {
        headers: authHeaders(),
      }
    );
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

// get all doctors
export const fetchDoctors = async () => {
  try {
    const response = await fetch(
      "https://medi-life-clinic.herokuapp.com/api/doctor/get-all",
      {
        headers: authHeaders(),
      }
    );
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

// get all users
export const fetchUsers = async () => {
  try {
    const response = await fetch(
      "https://medi-life-clinic.herokuapp.com/api/user/get-all",
      {
        headers: authHeaders(),
      }
    );
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    console.log(err);
  }
};
