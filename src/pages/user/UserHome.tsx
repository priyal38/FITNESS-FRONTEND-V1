import React, { useEffect, useState } from 'react'

import CardDataStats from '../../components/dashboard/userDashboard/CardDataStats'
import DoughnutChart from '../../components/dashboard/userDashboard/DoughnutChart';
import BarChart from '../../components/dashboard/userDashboard/BarChart';

import SelectedWorkoutTable from '../../components/dashboard/userDashboard/SelectedWorkoutTable';

import { GiNightSleep } from "react-icons/gi";
import { IoIosFitness } from "react-icons/io";
import ProgressBar from '../../components/dashboard/userDashboard/ProgressBar';
import useAxiosPrivate from '../../axios/useAxiosPrivate';


export interface TableData {
  _id:string
  title: string;
  targetDays: number;
  duration: number;
  completedDays:number
  workoutId: {
    _id: string;
    title: string;
  };
  workoutType: string
  completed:boolean
}

const UserHome = () => {

  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().slice(0, 10)); // Initialize with current date
  const [tabledata, setTableData] = useState<TableData[]>([])
  const axiosPrivate = useAxiosPrivate();

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };


  const getTableData = async (date: string) => {
    try {
      const response = await axiosPrivate.get(`/progress/getdata?selectedDate=${date}`);
      console.log(response.data.data)
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

        <DoughnutChart />
        <BarChart />


      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-7">
          <SelectedWorkoutTable setTableData={setTableData} selectedDate={selectedDate} tabledata={tabledata} getTableData={getTableData} onDateChange={handleDateChange}  />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <ProgressBar tabledata={tabledata} getTableData={getTableData}selectedDate={selectedDate} />
        </div>
      </div>



    </div>
  )
}

export default UserHome


