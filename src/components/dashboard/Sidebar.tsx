

import React from 'react';
import logo from '../../images/logo.png';
import CloseIcon from '@mui/icons-material/Close';
import SidebarItem from './SidebarItems';
import { menuItem } from '../../utils/MenuItems'

const Sidebar: React.FC<SidebarProps> = ({ mobileOpen, handleDrawerClose, menuItems }) => {

  return (
    <>
     {/* <div
       id='sidebar'
      //  ref={sidebar}
       className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
         mobileOpen ? "translate-x-0" : "-translate-x-64"
       }`}
      > */}
      {/* Conditionally render the mobile drawer based on the mobileOpen state */}
      <aside
      
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark md:static md:translate-x-0 ${
        mobileOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >

      {/* <div className={`absolute inset-y-0  bg-gray-950 duration-300 transform md:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}> */}
        <div className="flex flex-col h-full  shadow-lg w-60 ">
          <div className="flex items-center justify-between h-16">
            <img src={logo} alt="Logo" className="h-16 ml-2" />
            {/* Close button to close the mobile drawer */}
            <button className="md:hidden mr-4 text-white" onClick={handleDrawerClose}>
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
        {/* <div className={`fixed inset-0 opacity-25 z-40 ${mobileOpen ? 'block' : 'hidden'}`} onClick={handleDrawerClose}></div> */}
      {/* </div> */}
      </aside>
      {/* </div> */}
    </>
  );
};



export default Sidebar;

interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerClose: () => void;
  menuItems: menuItem[];

}

