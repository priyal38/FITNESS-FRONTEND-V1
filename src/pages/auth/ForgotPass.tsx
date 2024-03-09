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

import Header from '../../components/LandingPage/Header';
import Footer from '../../components/LandingPage/Footer';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup.string().required('Confirm password is required').oneOf([yup.ref('password')], 'Passwords must match')
});
interface FormInput{
  email: string;
  password: string;
  confirmPassword:string
}


const ForgotPass = () => {

  const navigate = useNavigate();
   const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  
 
  

  const onSubmit = async (data:FormInput) => {
  
    try {



      const response = await axios.post('http://localhost:5000/api/auth/forgot', data);

    
      if (response.status === 200) {
        navigate('/login')
      
        
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

      {/* forgot Form */}
      <div className="relative mx-auto w-full max-w-md">
        <div className="bg-gray-900 shadow-xl shadow-neutral-600 ml-2 mr-2 rounded-2xl px-8 pt-6 pb-8 mb-4">
         
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
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Confirm Password</label>
              <input type="password" id="password" {...register('confirmPassword')} className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="•••••••••" required />
              {errors.confirmPassword && <p className="text-red-500 text-sm italic">{errors.confirmPassword.message}</p>}
            </div>
            <div className="mb-4 text-center">
              <button className="bg-blue-800 hover:bg-blue-600 w-full text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="submit">Submit</button>
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

export default ForgotPass