import React from 'react';
import { Route , Routes} from 'react-router-dom';
import './App.css'

import { SignUp } from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import ForgotPass from './pages/auth/ForgotPass';
import LandingPage from './pages/home/LandingPage';
import TestForm from './test/TestForm';
//user dashboard
import UserDashboard from './layout/UserDashboard'
//admin dashboard
import AdminDashboard from './layout/AdminDashboard';


function App() {

  return (
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<TestForm />} />
        <Route path="/home" element={<LandingPage />} />
       
        <Route path="/signup" element={<SignUp />} />
     
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPass />} />

{/* user routes */}

        <Route path="/user/*" element={<UserDashboard />}></Route>

{/* admin routes */}
        <Route path="/admin/*" element={<AdminDashboard />}></Route>
      </Routes>
   

  );  
}


export default App;
