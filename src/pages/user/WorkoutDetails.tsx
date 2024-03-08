import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useAxiosPrivate from '../../axios/useAxiosPrivate';
import ReactPlayer from 'react-player';
import BlogCard from '../../components/dashboard/BlogCard';
import SearchBar from '../../components/dashboard/SearchBar';

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
    const axiosPrivate = useAxiosPrivate();
const [workoutDetails , setWorkoutDetails] = useState<Workoutdata | null >(null)


useEffect(() => {
    const fetchWorkoutDetails = async () => {
      try {
        const response = await axiosPrivate.get(`/workout/getworkout/${id}`);
        setWorkoutDetails(response.data.data);
        // console.log(response)
      } catch (error) {
        console.error('Error fetching workout details:', error);
      }
    };

    fetchWorkoutDetails();
  }, [id]);

  console.log(workoutDetails)
  return (
    <div>

       <h2 className='text-white font-semibold text-3xl mb-6 mt-4'>{workoutDetails?.title}</h2>
       
       <ReactPlayer
                    url={workoutDetails?.videoUrl}
                    controls
                    width='100%'
                    light={<img src={`http://localhost:5000/${workoutDetails?.thumbnail}`} alt='Thumbnail' className='h-full w-full' />}
                    muted={true}
                    // playing={true}
      
      />
<h2 className='text-white c'>Overview</h2>
     <p className='text-white'>{workoutDetails?.explanation}</p>
    
    </div>

    
  )
}

export default WorkoutDetails