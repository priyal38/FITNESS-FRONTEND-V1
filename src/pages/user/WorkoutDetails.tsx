import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPrivate from '../../axios/useAxiosPrivate';
import ReactPlayer from 'react-player';
import FormModal from '../../components/dashboard/common/FormModal';

type Props = {};

interface WorkoutData {
  title: string;
  explanation: string;
  videoUrl: string;
  thumbnail: string;
  category: string;
  subCategory: string;
  difficultyLevel: string;
  equipment: string

}

const WorkoutDetails = (props: Props) => {
  const { id } = useParams();
  const axiosPrivate = useAxiosPrivate();
  const [workoutDetails, setWorkoutDetails] = useState<WorkoutData | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const fetchWorkoutDetails = async () => {
    try {
      const response = await axiosPrivate.get(`/workout/getworkout/${id}`);
      setWorkoutDetails(response.data.data);
    } catch (error) {
      console.error('Error fetching workout details:', error);
    }
  };

  useEffect(() => {
    fetchWorkoutDetails();
  }, [id]);

  return (
    <div className='px-2'>
      {modalOpen && (
        <>
          <div className="fixed inset-0 backdrop-filter backdrop-blur-lg
                     " onClick={handleCloseModal}></div>
          <FormModal handleCloseModal={handleCloseModal} />
        </>
      )}

      {workoutDetails && (
        <>
         


          <div className="flex lg:flex-row flex-col gap-8">
            <ReactPlayer
              url={workoutDetails.videoUrl}
              controls
              // width="50%"
              light={<img src={`http://localhost:5000/${workoutDetails.thumbnail}`} alt="Thumbnail" className="h-full w-full" />}
              muted={true}
            />

            <div className=''>
              <div className='mb-4'>
                <h2 className="text-white font-semibold  text-3xl truncate">{workoutDetails.title}</h2>
              </div>


              <div className='text-white mt-4 shadow-md'>
                <table className='mx-w-lg'>
                  <tr className='border-b bg-surface-200 border-gray-700 hover:bg-gray-600'>
                    <td className='px-6 py-4'>Category:</td>
                    <td className='px-4 py-4'>{workoutDetails.category}</td>
                  </tr>
                  <tr className='border-b bg-surface-200 border-gray-700 hover:bg-gray-600'>
                    <td className='px-6 py-4'>SubCategory:</td>
                    <td className='px-4 py-4'>{workoutDetails.subCategory}</td>
                  </tr>
                  <tr className='border-b bg-surface-200 border-gray-700 hover:bg-gray-600'>
                    <td className='px-6 py-4'>DifficultyLevel:</td>
                    <td className='px-4 py-4'>{workoutDetails.difficultyLevel}</td>
                  </tr>
                  <tr className='border-b bg-surface-200 border-gray-700 hover:bg-gray-600'>
                    <td className='px-6 py-4'>Equipment:</td>
                    <td className='px-4 py-4'>{workoutDetails.equipment}</td>
                  </tr>
                </table>

              </div>
 <button
            className=" text-white mt-4 bg-primary-300 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleOpenModal}
          >
            Add to your routine
          </button>

            </div>
          </div>
          <h3 className="text-white mt-6 mb-3 text-xl font-medium text-justify">Overview</h3>
          <div className='mr-10'>

            <p className="text-white text-sm  text-justify tracking-wide ">{workoutDetails.explanation}</p>
          </div>
        </>
      )}

    </div>
  );
};

export default WorkoutDetails;
