import React, { useEffect, useState } from 'react'
import CardDataStats from '../../components/dashboard/userDashboard/CardDataStats'
import { IoIosFitness } from 'react-icons/io'
import useAxiosPrivate from '../../axios/useAxiosPrivate'
import { MdMenuBook } from 'react-icons/md'
import { FaUser } from "react-icons/fa";
import { RiArticleFill } from 'react-icons/ri'

interface CardData  {
blogs:number
workouts:number
recipes:number
users:number
userworkouts:number
}

type Props = {}

const AdminHome = (props: Props) => {

  const [cardData , setCardData] = useState<CardData>({
    blogs:0,
    recipes:0,
    users:0,
    userworkouts:0,
    workouts:0
  });
const axiosPrivate = useAxiosPrivate();

  const getCardData = async() => {
    try {
      const response = await axiosPrivate.get('/admin/getallcarddata')
    
      setCardData(response.data.data)
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getCardData();

  }, []);


  

  return (
    <>
  <div className="grid grid-cols-1  gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-5 2xl:gap-7.5">


        <CardDataStats title="Total Users" total={cardData.users}  >
          <FaUser className='w-4 h-5 text-white' />
        </CardDataStats>
        <CardDataStats title="Total Workouts" total={cardData.workouts}  >
          <IoIosFitness className='w-7 h-8 text-white' />
        </CardDataStats>

        <CardDataStats title="Total Blogs" total={cardData.blogs}   >
          <RiArticleFill className='w-6 h-6 text-white' />
        </CardDataStats> 
        <CardDataStats title="Total Recipe" total={cardData.recipes}   >
          <MdMenuBook className='w-6 h-6 text-white' />
        </CardDataStats> 
        <CardDataStats title="Total Workout Used" total={cardData.userworkouts}   >
          <IoIosFitness className='w-7 h-8 text-white' />
        </CardDataStats> 

    




      </div>
      
    </>
  )
}

export default AdminHome