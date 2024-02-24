import React from 'react';
import { Route , Routes} from 'react-router-dom';
import './App.css'

import { SignUp } from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import LandingPage from './pages/main/LandingPage';
import AboutUs from './pages/main/AboutUs';
import Contact from './pages/main/Contact';
import Features from './pages/main/Features';
//user dashboard
import UserDashboard from './layout/UserDashboard'
//admin dashboard
import AdminDashboard from './layout/AdminDashboard';

function App() {

  return (
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

{/* user routes */}

        <Route path="/user/*" element={<UserDashboard />}></Route>

{/* admin routes */}
        <Route path="/admin/*" element={<AdminDashboard />}></Route>
      </Routes>
   

  );  
}


export default App;
