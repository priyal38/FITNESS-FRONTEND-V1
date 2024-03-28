import React, { useEffect, useState } from 'react'

import CardDataStats from '../../../components/dashboard/userDashboard/CardDataStats'
import PieChart from '../../../components/dashboard/userDashboard/PieChart';

import BarChart from '../../../components/dashboard/userDashboard/BarChart';

import SelectedWorkoutTable from '../../../components/dashboard/userDashboard/SelectedWorkoutTable';

import { GiNightSleep } from "react-icons/gi";
import { IoIosFitness } from "react-icons/io";
import ProgressBar from '../../../components/dashboard/userDashboard/ProgressBar';
import useAxiosPrivate from '../../../axios/useAxiosPrivate';
import LineChart from '../../../components/dashboard/userDashboard/LineChart';
import usePagination from '../../../hooks/usePagination';




export interface UserWorkoutData {
  _id:string
  title: string;
  targetDays: number;
  duration: number;
  completedDays:number
  workoutId: {
    _id: string;
    title: string;
  };
  startDate:Date;
  endDate:Date;
  workoutType: string
  completed:boolean
  completionStatus: {
    date: Date;
    checked: boolean;
}[];
}

const UserHome = () => {

  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().slice(0, 10)); 
const [chartData , setChartData] = useState<UserWorkoutData[]>([])
  const axiosPrivate = useAxiosPrivate();
  const perPage=3

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };


  const getChartData = async (date: string ) => {
    try {
      const response = await axiosPrivate.get(`/progress/getchartdata` , {
        params:{
          selectedDate:date,
        }
      });
      console.log(response)
      setChartData(response.data.data);
    } catch (error) {
      console.error('Error fetching workouts:', error);
    }
  };

  const updateChartData = () => {
            getChartData(selectedDate);
  };

  useEffect(() => {
    if (selectedDate) {
      getChartData(selectedDate);
    }
  }, [selectedDate ]);

  

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

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7 2xl:gap-7 ">

      <div className="col-span-12 xl:col-span-5  xs:h-[28rem] h-[23rem] sm:px-7.5  rounded-md border border-gray-400 bg-surface-200 px-5 pb-7 pt-5 shadow-sm ">
    <PieChart chartData={chartData} />
  </div>
  <div className="col-span-12 xl:col-span-7 overflow-y-auto md:h-[28rem] h-[25rem] sm:px-7.5  rounded-md border border-gray-400 bg-surface-200 px-5 pb-7 pt-5 shadow-sm overflow-x-auto">
    <ProgressBar  chartData={chartData}  getChartData={getChartData} selectedDate={selectedDate} />
  </div>
      
        {/* <BarChart  tabledata={tabledata}/> */}
        {/* <LineChart tabledata={tabledata}/> */}


      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 ">
          <SelectedWorkoutTable  selectedDate={selectedDate} onDateChange={handleDateChange}  updateChartData={updateChartData} />
        </div>
      </div>



    </div>
  )
}

export default UserHome


