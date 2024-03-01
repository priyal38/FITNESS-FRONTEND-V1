import React from 'react';
import { Route , Routes } from 'react-router-dom';
import { UserMenuItems } from '../utils/MenuItems';
import Navbar from '../components/dashboard/Navbar';
import Sidebar from '../components/dashboard/Sidebar';
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
    <>
    <Navbar handleDrawerToggle={handleDrawerToggle} />
    <div className="flex ">
      <div className="md:w-[18rem]">
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerClose={handleDrawerClose}
          menuItems = {UserMenuItems}
        />
      </div>
      <main className="bg-gradient-to-b from-slate-800 to-slate-950  pt-20 pl-5 pr-5 pb-10 w-full ">
         <Routes>
       <Route path="home" element={<UserHome />} />
        <Route path="workout" element={<Workout />} />
        <Route path="nutrition" element={<Nutrition />} />
        <Route path="profile" element={<UserProfile/>} />
        <Route path="blog" element={<Blog/>} />
        </Routes>
      </main>
    </div>
    </>
  );
};

export default UserDashboard;

