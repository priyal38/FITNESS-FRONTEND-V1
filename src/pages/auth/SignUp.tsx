import React, { ChangeEvent, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import imagesignup from '../../images/about.jpg'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
export const SignUp = () => {

    let navigate = useNavigate()
    const [userDetails, setUserDetails] = useState({ firstname: '', lastname: '', email: '', username: '', password: '' });


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!userDetails.firstname || !userDetails.lastname || !userDetails.email || !userDetails.username || !userDetails.password) {
            toast.error('All fields are required');
            return;
        }
        try {
            // console.log(userDetails);
            const response = await axios.post('http://localhost:5000/api/auth/signup', userDetails);
            console.log(response);
            if (response.status === 200) {

                navigate('/login')
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
        <Header/>
        <div className=" h-screen mt-20 flex items-center justify-center" >
            {/* <!-- Background Image --> */}
            <div className="absolute mt-16 h-screen inset-0 z-0">
                <img src={imagesignup} alt=""
                    className="w-full h-full object-cover opacity-40 brightness-50" />
            </div>

            {/* ==================Signup form======================== */}
            <div className=" relative mx-auto w-full max-w-xl">
                <div className="bg-gray-900 shadow-xl shadow-neutral-600 ml-2 mr-2 rounded-2xl px-8 pt-6 pb-8 mb-4">
                    <div className="text-center">
                        <div className="bg-fuchsia-900  rounded-full inline-block p-2">
                            <LockOutlinedIcon className="h-10 w-10 text-white" />
                        </div>
                        <h2 className="mt-1
                         text-xl font-medium text-white">Sign up</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-6 mb-4 mt-4 md:grid-cols-2">

                            <div >
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white">First name</label>
                                <input type="text" id="first_name" className=" border  text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="John" required />
                            </div>

                            <div>
                                <label htmlFor="last_name" className="block mb-2 text-sm font-medium  text-white">Last name</label>
                                <input type="text" id="last_name" className=" text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Doe" required />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium  text-white">Email </label>
                            <input type="email" id="email" className=" text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="john.doe@company.com" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium  text-white">Password</label>
                            <input type="password" id="password" className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="•••••••••" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-white">Confirm password</label>
                            <input type="password" id="confirm_password" className=" border   text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="•••••••••" required />
                        </div>
                        <div className="mb-4  text-center">
                            <button
                                className="bg-blue-800 hover:bg-blue-600 w-full  text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </div>
                        <div className="text-center">
                            <Link to="/login" className="inline-block align-baseline  text-sm text-blue-500 hover:underline">
                                Already have an account? Sign in
                            </Link>
                        </div>
                    </form>
                </div>
                <Toaster />
            </div>
        </div>
        <Footer/>
        </>
    )
}
