import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdTime } from "react-icons/io";



type Props = {
    id:string;
    coverImg: string;
    title: string;
    subtitle:string;
    readtime:number

};

const BlogCard = ({title , subtitle , readtime , coverImg} :Props) => {
  return (
    <div>
        <div className="max-w-xl  overflow-hidden mx-auto bg-gray-700 rounded-xl shadow-md ">
    <div className="md:flex">
        <div className="md:shrink-0">
            <img className=" w-full object-cover md:h-full md:w-48" src={coverImg}/>
        </div>
        <div className="p-8">
            <div className="uppercase tracking-wide text-sm  text-indigo-300 font-semibold">{title}</div>
           
            <h6 className="mt-2   text-white truncate">{subtitle}
            </h6>
            <div className='inline-flex mt-2 items-center text-red-400'>

            <IoMdTime className=' h-4 w-4' />
            <p className='  text-sm'> 18 min</p>
            </div>
         
        </div>
    </div>
</div>
    </div>
  )
}

export default BlogCard
