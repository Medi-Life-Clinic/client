import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Doctors from "./components/DoctorsComponent.jsx";
import Appointments from "./components/AppointmentsComponent.jsx";
import Admin from "./components/AdminComponent.jsx";
import Header from "./components/Header.jsx";
import Socials from "./components/Socials.jsx";
import NavBar from "./components/NavBar.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import AdminRoute from "./utils/AdminRoute.jsx";

//Main App function with routes

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> <Login />
              <Socials />{" "}
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Header /> <Register /> <Socials />
            </>
          }
        />
        <Route
          path="/doctors"
          element={
            <ProtectedRoute>
              <NavBar>
                <Doctors />
              </NavBar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/appointments"
          element={
            <ProtectedRoute>
              {" "}
              <NavBar>
                <Appointments />
              </NavBar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <NavBar>
                <Admin />
              </NavBar>
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

NavBar;
