import React , {useState , useEffect} from 'react'  
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import imagelogin from '../../images/about.jpg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});
interface LoginFormInputs {
  email: string;
  password: string;
}


const Login = () => {

  const navigate = useNavigate();
   const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  
  const {auth , setAuth} = useAuth();
  

  const onSubmit = async (data:LoginFormInputs) => {
  
    try {

      const email = data.email
      console.log(email)

      const response = await axios.post('http://localhost:5000/api/auth/login', data);

      const {  token } = response.data;
      const role = response.data.user.role

    
      if (response.status === 200) {
        window.localStorage.setItem(
          'user',
          JSON.stringify({
          role , token
          }),
          );

          setAuth({
            user: {
            email,
              role
            },
            token
          })


          setTimeout(() => {
            console.log(auth)
          }, 50000);
      
        if(response.data.user.role === 1){
          navigate('/admin')
        }  
        if(response.data.user.role === 0){
          navigate('/user')
        }  
        
      }

      console.log(response);
    } 
    catch (error:any) {
      console.error(error);
      if (error.response && error.response.status === 500) {
        toast.error(error.response.data.message);
      }
    }
  };
  
  return (
    <>
    <Header />
    <div className="min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={imagelogin} alt="" className="w-full h-full object-cover opacity-40 brightness-50" />
      </div>

      {/* Login Form */}
      <div className="relative mx-auto w-full max-w-xl">
        <div className="bg-gray-900 shadow-xl shadow-neutral-600 ml-2 mr-2 rounded-2xl px-8 pt-6 pb-8 mb-4">
          <div className="text-center">
            <div className="bg-fuchsia-900  rounded-full inline-block p-2">
              <LockOutlinedIcon className="h-10 w-10 text-white" />
            </div>
            <h2 className="mt-1 text-xl font-medium text-white">Login</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
              <input type="email" id="email" {...register('email')} className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="john.doe@company.com" required />
              {errors.email && <p className="text-red-500 text-sm italic">{errors.email.message}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
              <input type="password" id="password" {...register('password')} className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="•••••••••" required />
              {errors.password && <p className="text-red-500 text-sm italic">{errors.password.message}</p>}
            </div>
            <div className="mb-4 text-center">
              <button className="bg-blue-800 hover:bg-blue-600 w-full text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="submit">Login</button>
            </div>
            <div className="text-center">
              <Link to="/signup" className="inline-block align-baseline text-sm text-blue-500 hover:underline">Don't have an account? Sign Up</Link>
            </div>
          </form>
        </div>
        <Toaster />
      </div>
    </div>
    <Footer />
  </>
);
}

export default Login