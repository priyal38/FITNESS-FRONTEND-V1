import React from 'react'
import { IoSearch } from "react-icons/io5";

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <div>   
<form className="max-w-lg mx-auto">
    <div className="flex">
        <div className="relative w-96">
        <input type="text" className=" border text-md rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full ps-5 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="Enter search query here"  />
            <div  className="absolute top-0 end-0 p-2.5  h-full text-white rounded-e-lg border  border-gray-600  focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-400 ">
            <IoSearch />
            </div>
        </div>
    </div>
</form>

    </div>
  )
}

export default SearchBar