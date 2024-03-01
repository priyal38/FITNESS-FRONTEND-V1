import React from 'react';
import { Route , Routes} from 'react-router-dom';
import './App.css'

import { SignUp } from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import LandingPage from './pages/home/LandingPage';
import TestForm from './test/TestForm';
//user dashboard
import UserDashboard from './layout/UserDashboard'
//admin dashboard
import AdminDashboard from './layout/AdminDashboard';
import Sign from './pages/auth/Sign';

function App() {

  return (
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<TestForm />} />
        <Route path="/home" element={<LandingPage />} />
       
        <Route path="/signup2" element={<SignUp />} />
        <Route path="/signup" element={<Sign/>} />
        <Route path="/login" element={<Login />} />

{/* user routes */}

        <Route path="/user/*" element={<UserDashboard />}></Route>

{/* admin routes */}
        <Route path="/admin/*" element={<AdminDashboard />}></Route>
      </Routes>
   

  );  
}


export default App;
