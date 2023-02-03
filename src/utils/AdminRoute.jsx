import React from "react";
import { Navigate } from "react-router-dom";

//Protected route function

function AdminRoute(props) {
  const isAdmin = localStorage.getItem("isAdmin");
  if (isAdmin == "true") {
    return props.children;
  } else {
    return <Navigate to="/doctors" />;
  }
}

export default AdminRoute;
