import React, { useEffect, useState } from 'react'
import SearchBar from '../../../components/dashboard/common/SearchBar'
import WorkoutCard from '../../../components/dashboard/workout/WorkoutCard'
import useAxiosPrivate from "../../../axios/useAxiosPrivate";
import CardSkeleton from '../../../components/dashboard/common/CardSkeleton';

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

  const getWorkout = async () => {
    try {
      const response = await axiosPrivate.get('/workout/getworkout');
      console.log(response)
      setWorkouts(response.data.data);
      setLoading(false)
    } catch (error) {
      console.error('Error fetching workouts:', error);
    }
  };
  useEffect(() => {
   

    getWorkout();
  }, []);
    
  console.log(workouts)

  return (
    
    <div>
      {/* <SearchBar/> */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
    

      {loading ? (
                 
                 <>
                     <CardSkeleton />
                     <CardSkeleton />
                     <CardSkeleton />
                 </>
             ) : (
    
              workouts.map(workout =>(
                <WorkoutCard 
                key={workout._id}
                id={workout._id}
                imageSrc={`http://localhost:5000/${workout.thumbnail}`}
                title={workout.title}
                />
              ))
     )}
   
     

      </div>
    </div>
  )
}

export default Workout