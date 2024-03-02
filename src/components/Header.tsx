import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { Link as LinkRouter } from 'react-router-dom';
import {Link }  from 'react-scroll'
import userImg from '../images/user.png'
import { useAuth } from '../context/AuthContext';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const {  auth, logout} = useAuth();

  const handleLogout = () =>{
    logout();
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <>
      <nav className=" fixed w-full z-20 top-0  bg-gray-900 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <LinkRouter to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          </LinkRouter>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">


           

  {auth.token ? (
    <>
     <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 "  onClick={toggleUserMenu} >

<img className="w-12 h-12 rounded-full" src={userImg} alt="user photo"/>
</button>
<LinkRouter to="/login">
            <button className=' md:block hidden bg-blue-100 px-3 py-1 ml-2 mr-2 rounded-md text-black' onClick={handleLogout}>Logout</button>
            </LinkRouter>
    </>
  ):(
    <>
     <LinkRouter to="/signup">
              <button className=' md:block hidden bg-blue-100 px-3 py-1 ml-2 mr-2 rounded-md text-black'>SignUp</button>
            </LinkRouter>
           
    </>
  )}

           
            


            {/* ========================================= */}
            <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white  rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={toggleMenu}>
              <TiThMenu className=' h-6 w-6' />
            </button>
          </div>

          {/* =======================navbar======================= */}
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4   bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
              <li>
                <Link to="home" smooth={true} duration={500}  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About</Link>
              </li>
              <li>
                <Link to="features" smooth={true} duration={500} className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Features</Link>
              </li>

              <li>
                <Link to="contact" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* User menu */}

      <div className={`absolute right-0 mt-18 md:mt-14 mr-4 z-50 ${isUserMenuOpen ? 'block' : 'hidden'} text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>


      {/* Responsive Navbar Menu */}

    </>
  );
};

export default Header;
