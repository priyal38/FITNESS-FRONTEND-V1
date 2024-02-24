import React from 'react'
import { Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'

const Header = () => {
  return (
    <>
      {/* <!-- navbar --> */}
      {/* <header className='bg-black'> */}
      <nav className="flex justify-between text-white w-screen h-16">
        <div className="px-5 xl:px-6 py-6 flex w-full items-center">
          <a className="text-xl font-bold font-heading" href="#">
            {/* <!-- <img className="h-9" src="logo.png" alt="logo"> --> */}
            Logo Here.
          </a>

          <ul className="hidden md:flex ml-10 mr-auto font-semibold font-heading space-x-10">
            <li><Link className="hover:text-gray-200" to="/home">Home</Link></li>
            <li><Link className="hover:text-gray-200" to="/about">About Us</Link></li>
            <li><Link className="hover:text-gray-200" to="/features">Features</Link></li>
            <li><Link className="hover:text-gray-200" to="/contact">Contact Us</Link></li>
          </ul>
          <div className='flex '>
            {/* <Link to="/login">
        <button className='bg-blue-100 px-3 py-1 rounded-md text-black'>Login</button>
            </Link> */}
            <Link to="/signup">
              <button className='bg-blue-100 px-3 py-1 mr-4 rounded-md text-black'>SignUp</button>
            </Link>
            <span className="md:hidden" >
              <BiMenu className=" mt-2 w-6 h-6 cursor-pointer" />
            </span>

          </div>
        </div>


      </nav>






    </>
  )
}

export default Header