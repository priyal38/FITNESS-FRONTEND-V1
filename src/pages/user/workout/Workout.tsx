import React, { useEffect, useState } from 'react'
import SearchBar from '../../../components/dashboard/common/SearchBar'
import WorkoutCard from '../../../components/dashboard/workout/WorkoutCard'
import useAxiosPrivate from "../../../axios/useAxiosPrivate";
import CardSkeleton from '../../../components/dashboard/common/CardSkeleton';
import usePagination from '../../../hooks/usePagination';
import Pagination from '../../../components/dashboard/common/Pagination';

type Props = {}

export interface WorkoutData {
  _id:string
  title:string,
  thumbnail:string
  category: string;
  subCategory: string;
  difficultyLevel: string;
  equipment: string;
  videoUrl: string;
  explanation:string

}

const Workout = (_props: Props) => {

  const axiosPrivate = useAxiosPrivate();
  const [workouts , setWorkouts] = useState<WorkoutData[]>([])
  const [loading , setLoading] = useState(true)
  const { currentPage, totalPages, handlePageChange, updateTotalPages } = usePagination();
  const perPage = 6

  const getWorkout = async () => {
    try {
      const response = await axiosPrivate.get(`/workout/getworkout?page=${currentPage}&perPage=${perPage}`);
      console.log(response)
      setWorkouts(response.data.data.workouts);
      updateTotalPages(response.data.data.totalPages)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching workouts:', error);
    }
  };
  useEffect(() => {
    getWorkout();
  }, [currentPage]);
    
  console.log(workouts)

  return (
    
    <div>
      <SearchBar />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
    

      {loading ? (
                 
                 <>
                     <CardSkeleton />
                     <CardSkeleton />
                     <CardSkeleton />
                     <CardSkeleton />
                     <CardSkeleton />
                 </>
             ) : (
    
              workouts.map(workout =>(
                <WorkoutCard 
                key={workout._id}
                data={workout}/>
              ))
     )}
   
      </div>

      
      <div className='mt-8'> 
      <Pagination  currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
       </div>
    </div>
  )
}

export default Workout