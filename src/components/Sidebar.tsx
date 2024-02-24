

import React from 'react';
import logo from '../images/logo.png';
import CloseIcon from '@mui/icons-material/Close';
import SidebarItem from './SidebarItems';
import { menuItem } from '../utils/MenuItems'

const Sidebar: React.FC<SidebarProps> = ({ mobileOpen, handleDrawerClose, menuItems }) => {

  return (
    <>
      {/* Conditionally render the mobile drawer based on the mobileOpen state */}
      <div className={`fixed inset-y-0 z-50 duration-300 transform lg:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full bg-gradient-to-b from-slate-600 to-slate-800 shadow-lg w-64 ">
          <div className="flex items-center justify-between h-16">
            <img src={logo} alt="Logo" className="h-16 ml-2" />
            {/* Close button to close the mobile drawer */}
            <button className="lg:hidden mr-4" onClick={handleDrawerClose}>
              <CloseIcon />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto">
            <ul className="flex flex-col py-4 space-y-1">
      
              {menuItems.map((item, index) => (
                <SidebarItem key={index} text={item.text} path={item.path} icon={item.icon} />
              ))}
            </ul>
          </nav>
        </div>
        {/* Overlay to close the mobile drawer when clicked outside */}
        <div className={`fixed inset-0 opacity-25 z-40 ${mobileOpen ? 'block' : 'hidden'}`} onClick={handleDrawerClose}></div>
      </div>
    </>
  );
};



export default Sidebar;

interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerClose: () => void;
  menuItems: menuItem[];

}

