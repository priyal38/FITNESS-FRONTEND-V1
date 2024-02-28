import React from 'react';
import { AdminMenuItems } from '../utils/MenuItems';
import { Route , Routes } from 'react-router-dom';
import Navbar from '../components/dashboard/Navbar';
import Sidebar from '../components/dashboard/Sidebar';
import AddWorkout from '../pages/admin/AddWorkout';
import AddBlog from '../pages/admin/AddBlog';
import AddNutrition from '../pages/admin/AddNutrition';
import AdminProfile from '../pages/admin/AdminProfile'
import AdminHome from '../pages/admin/AdminHome';


const AdminDashboard = () => {
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
      <div className="md:w-[19rem]">
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerClose={handleDrawerClose}
          menuItems={AdminMenuItems}
        />
      </div>
      <main className="  bg-gradient-to-b from-gray-700 to-gray-900 first-letter:flex-grow pt-20 pl-5 pr-5 pb-10 w-full  ">
      <Routes>
       <Route path="addworkout" element={<AddWorkout />} />
       <Route path="home" element={<AdminHome />} />
        <Route path="addblog" element={<AddBlog />} />
        <Route path="addNutritionPlan" element={<AddNutrition />} />
        <Route path="profile" element={<AdminProfile />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;


