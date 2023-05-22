import { Outlet, Navigate } from "react-router-dom";
import React, { useContext } from 'react'
import { AuthContext } from "../context/UserAuthContext";

const ProtectedRoute = () => {
    const { user } = useContext(AuthContext)
    return user ? <>
        <Outlet />
    </> : <Navigate to='/login' />
}

export default ProtectedRoute