import React from 'react';
import { Route , Routes } from 'react-router-dom';
import { UserMenuItems } from '../utils/MenuItems';
import Navbar from '../components/dashboard/Navbar/Navbar';
import Sidebar from '../components/dashboard/Sidebar';
import { Suspense } from 'react';
import Loading from '../components/Loading';
import Sidebar2 from '../components/dashboard/Sidebar2';


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
    {/* <Navbar handleDrawerToggle={handleDrawerToggle} />
    <div className="flex  flex-row justify-between ">
      
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerClose={handleDrawerClose}
          menuItems = {UserMenuItems}
        />
      
      <main className=" pt-20 pl-5 pr-5 pb-10  md:ml-[15rem] w-full  h-full">
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
    </div> */}
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar  mobileOpen={mobileOpen}
          handleDrawerClose={handleDrawerClose}
          menuItems = {UserMenuItems} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Navbar  handleDrawerToggle={handleDrawerToggle} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
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
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
    </>
  );
};

export default UserDashboard;

