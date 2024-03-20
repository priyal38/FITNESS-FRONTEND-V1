import React from 'react';
import { Route , Routes} from 'react-router-dom';
import { Suspense } from "react";
import './App.css'
import Loading from './components/dashboard/common/Loading';
import PrivateRoutes from './utils/PrivateRoutes';



const LandingPage = React.lazy(() => import("./pages/home/LandingPage"));
const SignUp = React.lazy(() => import("./pages/auth/SignUp"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const ForgotPass = React.lazy(() => import("./pages/auth/ForgotPass"));
const UserDashboard  =React.lazy(() => import("./layout/UserDashboard"));
const UserHome  = React.lazy(()=>import("./pages/user/userDashboard/UserHome"))
const AdminDashboard = React.lazy(()=>import("./layout/AdminDashboard"))
const TestForm = React.lazy(()=>import("./test/TestForm"))
const Tabletest = React.lazy(()=>import("./test/Tabletest"))
const User = React.lazy(()=>import("./test/User"))
const ReactTable  = React.lazy(()=>import("./test/ReactTable"))






function App() {

  return (
    <Suspense fallback={<Loading/>}>
    <Routes>


        <Route path="/" element={<LandingPage />} />
      


        {/* ==================test==================== */}
        <Route path="/testuser" element={<User />} />
        <Route path="/test" element={<TestForm />} />
        <Route path="/testtable" element={<Tabletest />} />
        <Route path='/table' element={<ReactTable/>}/>


        {/* ===========================auth====================== */}
      
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPass />} />
       
      


        <Route element={<PrivateRoutes/>}>

        <Route path="/user/*" element={<UserDashboard />}></Route>
        <Route path="/admin/*" element={<AdminDashboard />}></Route>
        </Route>
      </Routes>
      </Suspense>
     

  );  
}


export default App;
