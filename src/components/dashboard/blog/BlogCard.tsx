import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";




type Props = {
    id:string;
    coverImg: string;
    title: string;
    subtitle:string;
    readtime:number
    category:string

};

const BlogCard = ({ id ,title , subtitle , readtime , coverImg , category} :Props) => {
  return (
  <>     
  <Link to={`${id}`}>
        <div className="h-full  bg-surface-200 rounded-lg overflow-hidden shadow-inner shadow-slate-400">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={coverImg} alt="blog"/>
          <div className="px-6 py-4">
            <h2 className="tracking-wider text-xs title-font text-gray-400 mb-1 	text-transform: capitalize">{category}</h2>
            <h1 className="title-font text-lg font-medium text-white mb-2 truncate">{title}</h1>
            <p className="leading-relaxed text-sm text-gray-200 mb-3 truncate">{subtitle}.</p>
            <div className="flex items-center flex-wrap ">

              <Link to={`${id}`} className="text-indigo-400  text-xs inline-flex items-center justify-center md:mb-2 lg:mb-0" >Learn More
                <FaArrowRightLong className='w-3 h-3 ml-2 text-indigo-400'/>
              </Link>
              {/* <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-700">
               <MdOutlineRemoveRedEye className='w-4 h-4 mr-1'/>1.2K
              </span>
              <span className="text-gray-500 inline-flex items-center leading-none text-sm">
           <FaRegComment className='h-4 w-4 mr-1'/>6
              </span> */}
            </div>
          </div>
        </div>
        </Link>
  </>
  )
}

export default BlogCard
