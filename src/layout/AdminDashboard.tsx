import React from 'react';
import { AdminMenuItems } from '../utils/MenuItems';
import { Route , Routes } from 'react-router-dom';
import Navbar from '../components/dashboard/Navbar/Navbar';
import Sidebar from '../components/dashboard/Sidebar';
import { Suspense } from 'react';
import Loading from '../components/Loading';
import Sidebar2 from '../components/dashboard/Sidebar2';



const AddBlog = React.lazy(()=>import("../pages/admin/AddBlog"))
const AddRecipes = React.lazy(()=>import("../pages/admin/AddRecipes"))
const AddWorkout = React.lazy(()=>import("../pages/admin/AddWorkout"))
const AdminHome = React.lazy(()=>import("../pages/admin/AdminHome"))
const AdminProfile = React.lazy(()=>import("../pages/admin/AdminProfile"))


const AdminDashboard = () => {
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
    <div className="flex flex-row justify-between">
      
      <div className="md:w-[18rem]">
        <Sidebar2
          mobileOpen={mobileOpen}
          handleDrawerClose={handleDrawerClose}
          menuItems={AdminMenuItems}
        />
      </div>
      <main className="  bg-gray-900  pt-20 pl-5 pr-5 pb-10 w-full h-full  ">
  <Suspense fallback={<Loading/>}>
      <Routes>
       <Route path="addworkout" element={<AddWorkout />} />
       <Route path="home" element={<AdminHome />} />
        <Route path="addblog" element={<AddBlog />} />
        <Route path="addNutritionPlan" element={<AddRecipes />} />
        <Route path="profile" element={<AdminProfile />} />
        </Routes>
        </Suspense>
      </main>
    </div>
    </>
  );
};

export default AdminDashboard;


