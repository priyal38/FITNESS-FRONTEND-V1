import React, { ChangeEvent, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import imagesignup from '../../images/about.jpg'
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const schema = yup.object().shape({
    firstname: yup.string().required('First name is required'),
    lastname: yup.string().required('Last name is required'),
    email: yup.string().required('Email is required').matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Invalid email format'),
    password: yup.string().required('Password is required').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number'),
    confirmPassword: yup.string().required('Confirm password is required').oneOf([yup.ref('password')], 'Passwords must match')
});
export const SignUp = () => {

    let navigate = useNavigate()

    interface FormData {
        firstname: string;
        lastname: string;
        email: string;
        password: string;
        confirmPassword: string;
    }

   
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    const onSubmit = async (data:FormData) => {
        
        const { confirmPassword, ...formData } = data;
        
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
            console.log(response);
            if (response.status === 200) {
                navigate('/login');
                toast.success('Sign up successful');
            }
        }
        catch (error: any) {
            console.error(error);
            if (error.response && error.response.status === 409) {
                toast.error(error.response.data.message); // Show toast message if username already exists
            }
        }
    }
    return (
        <>
          <Header />
            <div className="h-screen mt-20 flex items-center justify-center">
                <div className="absolute mt-16 h-screen inset-0 z-0">
                    <img src={imagesignup} alt="" className="w-full h-full object-cover opacity-40 brightness-50" />
                </div>
                <div className="relative mx-auto w-full max-w-xl">
                    <div className="bg-gray-900 shadow-xl shadow-neutral-600 ml-2 mr-2 rounded-2xl px-8 pt-6 pb-8 mb-4">
                        <div className="text-center">
                            <div className="bg-fuchsia-900  rounded-full inline-block p-2">
                                <LockOutlinedIcon className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="mt-1 text-xl font-medium text-white">Sign up</h2>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid gap-6 mb-4 mt-4 md:grid-cols-2">
                                <div >
                                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white">First name</label>
                                    <input type="text" id="first_name" {...register('firstname')} className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="John" />
                                    {errors.firstname && <span className="text-sm text-red-500 italic">{errors.firstname.message}</span>}
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-white">Last name</label>
                                    <input type="text" id="last_name" {...register('lastname')} className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Doe" />
                                    {errors.lastname && <span className="text-sm text-red-500 italic">{errors.lastname.message}</span>}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
                                <input type="email" id="email" {...register('email')} className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="john.doe@company.com" />
                                {errors.email && <span className="text-sm text-red-500 italic">{errors.email.message}</span>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                <input type="password" id="password" {...register('password')} className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="•••••••••" />
                                {errors.password && <span className="text-sm text-red-500 italic">{errors.password.message}</span>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-white">Confirm password</label>
                                <input type="password" id="confirm_password" {...register('confirmPassword')} className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="•••••••••" />
                                {errors.confirmPassword && <span className="text-sm text-red-500 italic">{errors.confirmPassword.message}</span>}
                            </div>
                            <div className="mb-4  text-center">
                                <button className="bg-blue-800 hover:bg-blue-600 w-full text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline" type="submit">Sign Up</button>
                            </div>
                            <div className="text-center">
                                <Link to="/login" className="inline-block align-baseline text-sm text-blue-500 hover:underline">Already have an account? Sign in</Link>
                            </div>
                        </form>
                    </div>
                    <Toaster />
                </div>
            </div>
            <Footer />
        </>
    )
}
