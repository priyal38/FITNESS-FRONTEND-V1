import React from 'react'
import { Line, Circle } from 'rc-progress';
import { TableData } from '../../../pages/user/UserHome';

type Props = {
    tabledata : TableData[]
}

const ProgressBar = ({tabledata}: Props) => {
  return (
    <>
    {/* <div className='flex flex-col gap-5'>

         <Line percent={10} strokeWidth={2} strokeColor="#ff39FE" className='w-full '/>
         <Line percent={10} strokeWidth={2} strokeColor="#D3D3D3" />
         <Line percent={30} strokeWidth={2} strokeColor="#D3D3D3" />
         <Line percent={10} strokeWidth={2} strokeColor="#D3D3D3" />
    </div> */}

    <div className="sm:px-7.5 mt-[4.5rem] rounded-md border border-gray-400 bg-surface-200 px-5 pb-7 pt-5 shadow-sm ">
    <div className=" justify-center items-center mb-3 sm:flex">
      <div>
        <h5 className="text-2xl font-semibold text-center 2 text-white">
         Workout Analytics
        </h5>
      </div>
      
    </div>

   
      <div className="  flex flex-col gap-4 overflow-y-auto">
        {tabledata.map((tableItem, index) => (
                <div key={index} className='flex justify-center gap-3 items-center '>
                    <p className='text-white'>{tableItem.workoutId ? tableItem.workoutId.title : tableItem.title}</p>

                    <div>
                    <Line percent={((tableItem.completedDays)/tableItem.targetDays)*100} strokeWidth={3} strokeColor="#ff39FE" className='w-full' />
                    </div>
                </div>
            ))}
     
        </div>
        
    </div>
    
    </>
  )
}

export default ProgressBar