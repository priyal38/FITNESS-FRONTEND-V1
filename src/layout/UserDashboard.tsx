import React from 'react';
import { Route , Routes } from 'react-router-dom';
import { UserMenuItems } from '../components/MenuItems';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Workout from '../pages/user/Workout';
import Nutrition from '../pages/user/Nutrition';
import UserProfile from '../pages/user/UserProfile';
import Blog from '../pages/user/Blog';
import UserHome from '../pages/user/UserHome';

const UserDashboard = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  
  const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    
  };

  return (
    <div className="flex min-h-screen">
      
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <div className="lg:w-64">
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerClose={handleDrawerClose}
          menuItems = {UserMenuItems}
        />
      </div>
      <main className="flex-grow pt-20 pl-10 pr-10 pb-10 bg-gradient-to-b from-slate-600 to-slate-800 w-full md:w-3/4 lg:w-5/6 xl:w-4/5">
         <Routes>
       <Route path="home" element={<UserHome />} />
        <Route path="workout" element={<Workout />} />
        <Route path="nutrition" element={<Nutrition />} />
        <Route path="profile" element={<UserProfile/>} />
        <Route path="blog" element={<Blog/>} />
        </Routes>
      </main>
    </div>
  );
};

export default UserDashboard;

