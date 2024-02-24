import React from 'react';
import { AdminMenuItems } from '../utils/MenuItems';
import { Route , Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
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
      <div className="lg:w-64">
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerClose={handleDrawerClose}
          menuItems={AdminMenuItems}
        />
      </div>
      <main className="flex-grow pt-20 pl-10 pr-10 pb-10 bg-gradient-to-b from-slate-600 to-slate-800 w-full md:w-3/4 lg:w-5/6 xl:w-4/5">
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


