import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {}

const Features = (props: Props) => {
  return (
    <>
      <div>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-indigo-400 ">
          Features
        </h2>
      </div>

      <div className='flex  flex-col  md:flex-row sm:flex-row  md:ml-4 md:mr-4  p-2 items-center gap-3 md:mb-10' >
        {/* =================card1================== */}

        <div className="p-6 bg-gray-800 border border-gray-200 rounded-lg shadow-lg shadow-gray-600">  

          <h5 className="mb-3 text-xl text-center text-blue-300 font-bold tracking-tight">

            Explore Diverse Workouts</h5>

          <p className="mb-3 font-normal text-center text-white dark:text-gray-400">Discover a world of workouts tailored to your preferences. From strength training to yoga, find the perfect workout for your fitness journey.</p>
          <div className='flex justify-center items-center mt-4'>
            <Link to="/signup" className="inline-flex items-center  px-3 py-2 text-sm font-medium text-center text-blue bg-blue-400 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
              Explore
              <FaArrowRightLong className='ml-2 mt-0.5  ' />
            </Link>
          </div>
        </div>

        {/* =================card 2================== */}

        <div className=" p-6 bg-gray-800 border border-gray-200 rounded-lg  shadow-lg shadow-gray-600">

          <h5 className="mb-3 text-xl text-center text-blue-300 font-bold tracking-tight">

          Seamless Progress Tracking</h5>

          <p className="mb-3 font-normal text-center text-white dark:text-gray-400">Effortlessly monitor your fitness journey and crush your goals with our intuitive progress tracking feature. Stay motivated and focused as you conquer new milestones.</p>
          <div className='flex justify-center items-center mt-4'>
            <Link to="/signup" className="inline-flex items-center  px-3 py-2 text-sm font-medium text-center text-blue bg-blue-400 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
              Explore
              <FaArrowRightLong className='ml-2 mt-0.5  ' />
            </Link>
          </div>
        </div> 
        
        {/* =================card 3================== */}

        <div className="p-6 bg-gray-800 border border-gray-200 rounded-lg shadow-lg shadow-gray-600">

          <h5 className="mb-3 text-xl text-center text-blue-300 font-bold tracking-tight">

          Inspiring Articles & Blogs</h5>

          <p className="mb-3 font-normal text-center text-white dark:text-gray-400">Stay motivated and informed with our curated collection of inspiring articles and blogs. Get expert advice and stay on top of the latest fitness trends.</p>
          <div className='flex justify-center items-center mt-4'>
            <Link to="/signup" className="inline-flex items-center  px-3 py-2 text-sm font-medium text-center text-blue bg-blue-400 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
              Explore
              <FaArrowRightLong className='ml-2 mt-0.5  ' />
            </Link>
          </div>
        </div>



      </div>
    </>


  )
}

export default Features