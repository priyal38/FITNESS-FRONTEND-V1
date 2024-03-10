import React, { useEffect, useState } from 'react'
import SearchBar from '../../components/dashboard/common/SearchBar'
import WorkoutCard from '../../components/dashboard/workout/WorkoutCard'
import useAxiosPrivate from "../../axios/useAxiosPrivate";

type Props = {}

interface WorkoutData {
  _id:string
  title:string,
  thumbnail:string

}

const Workout = (_props: Props) => {

  const axiosPrivate = useAxiosPrivate();
  const [workouts , setWorkouts] = useState<WorkoutData[]>([])


  useEffect(() => {
    const getWorkout = async () => {
      try {
        const response = await axiosPrivate.get('/workout/getworkout');
        console.log(response)
        setWorkouts(response.data.data);
        
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };

    getWorkout();
  }, []);
    
  console.log(workouts)

  return (
    
    <div>
      {/* <SearchBar/> */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4 ml-2">
    
    {workouts.map(workout =>(
      <WorkoutCard 
      key={workout._id}
      id={workout._id}
      imageSrc={`http://localhost:5000/${workout.thumbnail}`}
      title={workout.title}
      />
    ))}
     

      </div>
    </div>
  )
}

export default Workout