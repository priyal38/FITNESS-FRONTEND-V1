import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";

import { TbLogout2 } from "react-icons/tb";

import defaultuser from '../../../../images/defaultUser.jpg'
import { FaRegUser } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { useAuth } from '../../../../context/AuthContext';



const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const {  auth, logout} = useAuth();

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  const handleLogout = () =>{
    logout();
  }

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

 

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2"
        to="#"
      >
    
        <div >
          {/* <img src={user} alt="User" /> */}
         <img src={auth.user.image ? `http://localhost:5000/${auth.user.image}` :defaultuser} className=' className="h-9 w-9 rounded-full border-1 border-gray-800 mx-auto my-4"'/>
        </div>

        <MdKeyboardArrowDown className="hidden text-gray-300 text-lg sm:block" />
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-2 flex w-[15rem] flex-col rounded-lg border  shadow border-surface-300 bg-surface-100 ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-4 border-stroke px-6 pt-4 pb-2 border-surface-300">
          <li>
            <Link
              to="profile"
              className="flex items-center gap-3 text-sm font-medium text-gray-300  hover:text-white lg:text-base"
            >
                <FaRegUser className='text-lg' />
              
              My Profile
            </Link>
          </li>
      
       
         
        </ul>
        <Link to='/login' className="flex items-center gap-3 px-6 py-4 text-sm font-medium text-gray-300 lg:text-base" onClick={handleLogout}>
        <TbLogout2 className='text-xl'/>
          Log Out
        </Link>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;