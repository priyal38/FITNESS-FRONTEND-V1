import React from 'react'
import CardDataStats from '../../components/dashboard/userDashboard/CardDataStats'
import { IoIosFitness } from 'react-icons/io'


type Props = {}

const AdminHome = (props: Props) => {
  return (
    <>
  <div className="grid grid-cols-1  gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-5 2xl:gap-7.5">


        <CardDataStats title="Total Workout" total="fdggh"  >
          <IoIosFitness className='w-9 h-10 text-white' />
        </CardDataStats>
        <CardDataStats title="Total Users" total="fdggh"  >
          <IoIosFitness className='w-9 h-10 text-white' />
        </CardDataStats>

        <CardDataStats title="Total Blogs" total="dffgg"   >
          <IoIosFitness className='w-9 h-10 text-white' />
        </CardDataStats> 
        <CardDataStats title="Total Recipe" total="dffgg"   >
          <IoIosFitness className='w-9 h-10 text-white' />
        </CardDataStats> 
        <CardDataStats title="Total Workout Used" total="dffgg"   >
          <IoIosFitness className='w-9 h-10 text-white' />
        </CardDataStats> 

    




      </div>
      
    </>
  )
}

export default AdminHome