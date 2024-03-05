import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PrivateRoutes = () => {
  const {auth} = useAuth();
    return(
        auth.user.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes