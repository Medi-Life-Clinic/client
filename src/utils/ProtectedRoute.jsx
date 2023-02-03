import React from 'react'
import { Navigate } from 'react-router-dom'


//Protected route function

function ProtectedRoute(props) {
    if (localStorage.getItem('token')) {
        return props.children
    } else {
        return <Navigate to='/' />
    }
}

export default ProtectedRoute