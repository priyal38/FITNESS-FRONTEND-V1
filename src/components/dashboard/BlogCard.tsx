import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdTime } from "react-icons/io";

type Props = {}

const BlogCard = (props: Props) => {
  return (
    <div>
        <div className="max-w-xl mx-auto bg-gray-700 rounded-xl shadow-md overflow-hidden md:max-w-3xl">
    <div className="md:flex">
        <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://loremflickr.com/g/320/240/team"/>
        </div>
        <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-300 font-semibold">Company retreats</div>
           
            <p className="mt-2 text-white">Looking to take your team away on a retreat to enjoy awesome food and take in
                some sunshine? We have a list of places to do just that.
            </p>
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
