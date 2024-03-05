import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

type Props = {}

interface Workoutdata {
title:string;
explanation:string;
category:string;
subCategory:string;
difficultyLevel:string;
thumbnail:string
videoUrl:string
equipment:string
}

const WorkoutDetails = (props: Props) => {
    const {id} = useParams()
const [workoutDetails , setWorkoutDetails] = useState<Workoutdata | null >(null)


useEffect(() => {
    const fetchWorkoutDetails = async () => {
      try {
        const response = await axios.get(`/api/workout/getworkout/${id}`);
        setWorkoutDetails(response.data);
        console.log(response)
      } catch (error) {
        console.error('Error fetching workout details:', error);
      }
    };

    fetchWorkoutDetails();
  }, [id]);

  console.log(workoutDetails)
  return (
    <div>
        dddddddddddd
    </div>
  )
}

export default WorkoutDetails