import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPrivate from '../../axios/useAxiosPrivate';
import ReactPlayer from 'react-player';
import FormModal from '../../components/dashboard/FormModal';

type Props = {};

interface WorkoutData {
  title: string;
  explanation: string;
  videoUrl: string;
  thumbnail: string;
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
    <div>
      {modalOpen && (
        <>
          <div className="fixed inset-0 bg-black opacity-65
                     " onClick={handleCloseModal}></div>
          <FormModal handleCloseModal={handleCloseModal} />
        </>
      )}

      {workoutDetails && (
        <>


          <button
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleOpenModal}
          >
            Add to your routine
          </button>

          <div className="flex gap-6 mb-6">

            <div className='flex justify-center'>
              <h2 className="text-white font-semibold  text-3xl truncate">{workoutDetails.title}</h2>
            </div>
            <ReactPlayer
              url={workoutDetails.videoUrl}
              controls
              // width="50%"
              light={<img src={`http://localhost:5000/${workoutDetails.thumbnail}`} alt="Thumbnail" className="h-full w-full" />}
              muted={true}
            />


          </div>
          <h2 className="text-white">Overview</h2>
          <p className="text-white">{workoutDetails.explanation}</p>
        </>
      )}

      {modalOpen && <FormModal handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default WorkoutDetails;
