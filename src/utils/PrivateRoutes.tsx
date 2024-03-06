import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PrivateRoutes = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const role = auth?.user?.role
  useEffect(() => {
    if (!auth.user.token)
      navigate('/login')
    
  }, [])
  console.log(auth)
  return (
    <Outlet />
  )
}

export default PrivateRoutes