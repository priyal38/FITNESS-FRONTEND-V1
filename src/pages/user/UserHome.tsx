import React from 'react'

import CardDataStats from '../../components/dashboard/userDashboard/CardDataStats'
import DoughnutChart from '../../components/dashboard/userDashboard/DoughnutChart';
import BarChart from '../../components/dashboard/userDashboard/BarChart';
import SelectedWorkoutTable from '../../components/dashboard/userDashboard/SelectedWorkoutTable';

import { GiNightSleep } from "react-icons/gi";
import { IoIosFitness } from "react-icons/io";
import ProgressBar from '../../components/dashboard/userDashboard/ProgressBar';


type Props = {}

const UserHome = (props: Props) => {
  return (
    <div>
      


   
      <div className="grid grid-cols-1  gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
       
      <CardDataStats title="Total Workout" total="14"   >
      <IoIosFitness className='w-9 h-10 text-white' />
      </CardDataStats>
      <CardDataStats title="Total Sleep" total="8  Hours"   >
      <GiNightSleep className='w-7 h-9 text-white' />
      </CardDataStats>
      <CardDataStats title="Total Workout" total="14"   >
      <IoIosFitness className='w-9 h-10 text-white' />
      </CardDataStats>
      <CardDataStats title="Total Workout" total="14"   >
      <IoIosFitness className='w-9 h-10 text-white' />
      </CardDataStats>
     
     
         
      </div>

   <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5"> 
  
        <DoughnutChart/>
        <BarChart/>
      
    
      
        

        
   
        

        
      
      </div>
      <div className="grid grid-cols-12 gap-6">
    <div className="col-span-12 xl:col-span-8">
        <SelectedWorkoutTable />
    </div>
    <div className="col-span-12 xl:col-span-4">
        <ProgressBar />
    </div>
</div>
  
   

    </div>
  )
}

export default UserHome