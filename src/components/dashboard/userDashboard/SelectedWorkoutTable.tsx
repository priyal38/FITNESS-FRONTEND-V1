import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { useImmer } from 'use-immer';
import useAxiosPrivate from '../../../axios/useAxiosPrivate';



type Props = {}


interface TableData {
   
        targetDays:number
        duration:number
        workoutId:{
            _id:string,
            title:string
        }
    
  }

const SelectedWorkoutTable = (props: Props) => {

    const [selectedDate, setSelectedDate] = useState<string>('')
  const [tabledata , setTableData] = useState<TableData[]>([])
   const axiosPrivate = useAxiosPrivate();

   const getTableData = async (date:string) => {
    try {
      const response = await axiosPrivate.get(`/progress/getdata?selectedDate=${date}`);
     
      setTableData(response.data.data);
 
      
      
    } catch (error) {
      console.error('Error fetching workouts:', error);
    }
  };

  useEffect(() => {
    if (selectedDate) {
        getTableData(selectedDate);
    }
}, [selectedDate]);

console.log(selectedDate)

    return (

        <div className="rounded-lg mt-5 shadow-md   sm:px-0 ">

<div className='flex justify-start items-center gap-6 mb-3'>

<input  type="date" className=" border w-36  text-sm rounded-lg  block  ps-5 p-2 bg-primary-200 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Select date"  onChange={(e) => setSelectedDate(e.target.value)} />
   
                <button className="inline-flex items-center borderfocus:outline-none focus:ring-1 font-medium rounded-md text-sm px-3 py-2 bg-primary-200 text-white border-gray-600 hover:bg-primary-400 hover:border-gray-600 focus:ring-gray-700" type="button">
                    <FaPlus className='w-4 h-4 text-white me-2' />
                    Add Workout
                </button>
</div>
            



              
            <div className=" max-h-[80vh] overflow-x-auto overflow-y-auto">
                <table className="w-full text-sm text-center   text-gray-200">
                    <thead className="text-md uppercase bg-surface-200  tracking-wide text-white">
                        <tr>
                            <th className="px-6 py-3">
                                Workout Title
                            </th>
                            <th className=" py-3 px-6 ">
                                Duration
                            </th>
                            <th className="py-3 px-6 ">
                                Target(Days)
                            </th>
                            <th className="py-3 px-6">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tabledata.map((tableItem, key) => (
                            <tr key={key} className=" border-b bg-surface-200 border-gray-700 hover:bg-gray-600">
                                <td scope="row" className="px-6 py-4  ">
                                { tableItem.workoutId.title }
                                </td>
                                <td className="px-6 py-4">

                                    {tableItem.duration} min

                                </td>
                                <td className="py-4 px-6 ">

                                    {tableItem.targetDays}

                                </td>
                                <td className="  py-4 px-6 ">
                    <div className="flex items-center justify-center">
                        <input  type="checkbox" className="w-6 h-6 text-primary-500  rounded focus:ring-primary-500 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-1 bg-gray-700 border-gray-600"/>
                        <label  className="sr-only">checkbox</label>
                    </div>
                </td>       


                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};



export default SelectedWorkoutTable