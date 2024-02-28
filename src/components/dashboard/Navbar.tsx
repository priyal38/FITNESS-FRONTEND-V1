
import React from 'react';
import { useState , useEffect, useRef } from 'react'; // Import useState hook
import userImage from '../../images/user.png';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';


interface NavbarProps {
  handleDrawerToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleDrawerToggle }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  const handleOpenUserMenu = () => {
    setDropdownOpen(true);
  };

  const handleCloseUserMenu = () => {
    setDropdownOpen(false);
  };

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
    <nav className=" fixed w-full  bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={handleDrawerToggle}
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white md:hidden"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-bold text-white lg:ml-60">Welcome Back!</h1>
          <div className="flex items-center">
            <button onClick={handleOpenUserMenu}  ref={trigger} className="mr-0">
              <img
                src={userImage}
                alt="User Avatar"
                className="w-14 h-14 rounded-full"
              />
            </button>
            {dropdownOpen && (
              <div   ref={dropdown} className="origin-bottom-right absolute right-0 mt-36 mr-4 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="menu-appbar">
                {[
              { id: 'profile', text: 'Profile', path: 'profile', icon:<Person2Icon/> },
              { id: 'logout', text: 'Logout', path: 'logout', icon:<LogoutIcon/> }
            ].map((menuItem) => (
              <Link
                key={menuItem.id}
                to={menuItem.path}
                onClick={handleCloseUserMenu}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                <div className="flex items-center">
                  {menuItem.icon && <span className="mr-2">{menuItem.icon}</span>}
                  <span>{menuItem.text}</span>
                </div>
              </Link>
            ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
