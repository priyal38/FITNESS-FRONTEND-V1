import React from 'react';
import { Route , Routes } from 'react-router-dom';
import { UserMenuItems } from '../utils/MenuItems';
import Navbar from '../components/dashboard/Navbar';
import Sidebar from '../components/dashboard/Sidebar';
import { Suspense } from 'react';
import Loading from '../components/Loading';


const Workout = React.lazy(()=> import("../pages/user/Workout"))
const Nutrition = React.lazy(()=> import("../pages/user/Nutrition"))
const UserProfile = React.lazy(()=> import("../pages/user/UserProfile"))
const Blog = React.lazy(()=> import("../pages/user/Blog"))
const UserHome = React.lazy(()=> import("../pages/user/UserHome"))
const WorkoutDetailsPage = React.lazy(()=>import('../pages/user/WorkoutDetails'))

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
      <main className="bg-gray-900  pt-20 pl-5 pr-5 pb-10 w-full ">
        <Suspense fallback = {<Loading/>} >
         <Routes>
       <Route path="home" element={<UserHome />} />
        <Route path="workout" element={<Workout />} />
        <Route path="nutrition" element={<Nutrition />} />
        <Route path="profile" element={<UserProfile/>} />
        <Route path="workout/:id" element={<WorkoutDetailsPage />} />
        <Route path="blog" element={<Blog/>} />
        </Routes>
        </Suspense>
      </main>
    </div>
    </>
  );
};

export default UserDashboard;

