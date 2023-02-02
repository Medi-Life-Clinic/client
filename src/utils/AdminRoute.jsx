import React from "react";
import { Navigate } from "react-router-dom";

//Protected route function

function AdminRoute(props) {
  if (localStorage.getItem("isAdmin" == "true")) {
    return props.children;
  } else {
    return <Navigate to="/doctors" />;
  }
}

export default AdminRoute;
