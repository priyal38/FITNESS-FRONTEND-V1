import React, { useEffect, useState } from 'react';
import SearchBar from '../../../components/dashboard/common/SearchBar';
import WorkoutCard from '../../../components/dashboard/workout/WorkoutCard';
import useAxiosPrivate from "../../../axios/useAxiosPrivate";
import CardSkeleton from '../../../components/dashboard/common/CardSkeleton';
import usePagination from '../../../hooks/usePagination';
import Pagination from '../../../components/dashboard/common/Pagination';
import { useSearchParams } from 'react-router-dom';
import Filters from '../../../components/dashboard/workout/Filters';

type Props = {};

export interface WorkoutData {
  _id: string;
  title: string;
  thumbnail: string;
  category: string;
  subCategory: string;
  difficultyLevel: string;
  equipment: string;
  videoUrl: string;
  explanation: string;
}

const Workout = (_props: Props) => {
  const axiosPrivate = useAxiosPrivate();
  const [workouts, setWorkouts] = useState<WorkoutData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [searchParams] = useSearchParams();
  const { currentPage, totalPages, handlePageChange, updateTotalPages } = usePagination();
  const perPage = 6;

  const getWorkoutData = async () => {
    try {
      console.log(selectedCategories);
      console.log(selectedSubcategories);
      console.log(selectedSubcategories);

      
      const queryParamValue = searchParams.get('q');
      const response = await axiosPrivate.get(`/workout/getworkout`, {
        params: {
          page: currentPage,
          perPage:perPage,
          query: queryParamValue || '',
          category: selectedCategories.join(','), 
          subCategory: selectedSubcategories.join(','), 
          difficultyLevel: selectedDifficulties.join(',') 
        }
      });

      setWorkouts(response.data.data.workouts);
      updateTotalPages(response.data.data.totalPages);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching workouts:', error);
      setWorkouts([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    getWorkoutData();

  }, [currentPage, searchParams]);

  const handleFilterChange = () => {
    getWorkoutData();
    // Trigger fetching data when filters change
  };
  console.log(workouts);

  return (
    <>
    <div className='flex md:flex-row flex-col gap-4'>

      <SearchBar />
      

      <Filters
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedSubcategories={selectedSubcategories}
        setSelectedSubcategories={setSelectedSubcategories}
        selectedDifficulties={selectedDifficulties}
        setSelectedDifficulties={setSelectedDifficulties}
        onFilterChange={handleFilterChange}
      />
      
    </div>

      {loading ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />

          </div>
        </>
      ) : workouts.length !== 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {workouts.map((workout) => (
              <WorkoutCard
                key={workout._id}
                data={workout}
              />
            ))}
          </div>
          <div className="mt-8">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        </>
      ) : (
        <div className="mt-8 text-center text-white text-3xl">Oops! No Workouts found.</div>
      )}
    </>
  );
}

export default Workout;
