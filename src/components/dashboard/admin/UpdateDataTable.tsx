import React from 'react'

type Props = {}

const UpdateDataTable = (props: Props) => {
  return (
    <div>


        <table className="w-full text-sm text-left  text-gray-400">
            <thead className="text-md  uppercase  bg-surface-300 text-gray-200">
                <tr>
                  
                    <th scope="col" className="px-6 py-4">
                        Workout title
                    </th>
                    <th scope="col" className="px-6 py-4">
                        Category
                    </th>
                    <th scope="col" className="px-6 py-4">
                        subCategory
                    </th>
                    <th scope="col" className="px-6 py-4">
                        Difficulty Level
                    </th>
                    <th scope="col" className="px-6 py-4">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className=" border-b bg-surface-200 border-gray-700 hover:bg-gray-600">
                   
                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                        Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">
                        Silver
                    </td>
                    <td className="px-6 py-4">
                        Laptop
                    </td>
                    <td className="px-6 py-4">
                        $2999
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" className="font-medium  text-primary-400 hover:underline">Edit</a>
                        
                    <a href="#" className="font-medium text-red-500 hover:underline ms-3">Remove</a>
                    </td>
                </tr>
              
            </tbody>
        </table>
    </div>
  
  )
}

export default UpdateDataTable