import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

export const Login = () => {
  document.title = "Medi-Life | Login";
  // this is used to navigate to the bookings page
  const navigate = useNavigate();

  // these are the states for the email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //handleSubmit function is found in the <form> tag from the return() below
  const handleSubmit = async (e) => {
    e.preventDefault(); // this stops the page from refreshing

    // this is the fetch request to the server
    try {
      const response = await fetch("http://localhost:4001/api/user/login", {
        method: "POST", // http method
        headers: {
          // headers are used to tell the server what type of data we are sending
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // this is the data we are sending to the server
          email: email,
          password: password,
        }),
      });
      const result = await response.json();
      if (result.success === true) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("userId", result.userId);
        localStorage.setItem("user", result.user);
        localStorage.setItem("isAdmin", result.isAdmin);
        if (result.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/doctors");
        }
      } else {
        toast.error(result.message)
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };
  //Functionality/styling for the popup error message using Toast
  return (
    <>
      <ToastContainer //This package creates a notifications for the user.
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="login-box">
        <h1 className="card-title-login">Login</h1>
        <div className="login-form card p-4">
          <form onSubmit={handleSubmit}>
            <label type="text">Email:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4"
              type="text"
              name="email"
              placeholder="Email"
            />
            <label type="text">Password:</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4"
              type="password"
              name="password"
              placeholder="Password"
            />
            <input className="mb-3 login-button" type="submit" value="LOGIN" />
            <Link to="/register" className="anchor">
              Haven't registered? Click Here
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
