import React from 'react';
import { Route , Routes} from 'react-router-dom';

import { SignUp } from './pages/auth/SignUp';
import Login from './pages/auth/Login';

//user pages
import Blog from './pages/user/Blog';
import UserHome from  './pages/user/UserHome'
import Workout from './pages/user/Workout';
import Nutrition from './pages/user/Nutrition';
import UserDashboard from './layout/UserDashboard'
import UserProfile from './pages/user/UserProfile';

//admin pages
import AdminDashboard from './layout/AdminDashboard';
import AdminHome from './pages/admin/AdminHome'
import AddWorkout from './pages/admin/AddWorkout';
import AddBlog from './pages/admin/AddBlog';
import AddNutrition from './pages/admin/AddNutrition';
import AdminProfile from './pages/admin/AdminProfile';



// import './App.css';
function App() {

  return (

      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

{/* user routes */}

        <Route path="/user/*" element={<UserDashboard />}></Route>

{/* admin routes */}
        <Route path="/admin/*" element={<AdminDashboard />}></Route>
      </Routes>
   

  );  
}


export default App;
