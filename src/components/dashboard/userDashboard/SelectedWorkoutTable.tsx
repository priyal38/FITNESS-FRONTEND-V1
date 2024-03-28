import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import useAxiosPrivate from '../../../axios/useAxiosPrivate';
import FormModalCustom from './FormModalCustom';
import { UserWorkoutData } from '../../../pages/user/userDashboard/UserHome';
import Pagination from '../common/Pagination';
import usePagination from '../../../hooks/usePagination';

import FormUpdateModal from './FormUpdateModal';

interface Props {
    selectedDate: string;
    onDateChange: (date: string) => void;
    updateChartData: () => void;

}

const SelectedWorkoutTable= ({ selectedDate, onDateChange, updateChartData  }: Props) => {
    const axiosPrivate = useAxiosPrivate();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
    const { currentPage, totalPages, handlePageChange, updateTotalPages } = usePagination();
  const [tabledata, setTableData] = useState<UserWorkoutData[]>([])
  const [editWorkout, setEditWorkout] = useState<UserWorkoutData | null>(null);
const perPage=3

    // const handleOpenModal = () => {
    //     setModalOpen(true);
    // };

    const handleCloseModal = () => {
        setModalOpen(false);
        getTableData(selectedDate);
    };
    const handleCloseEditModal = () => {
        setEditModalOpen(false);
        getTableData(selectedDate);
    };

    const handleEditWorkout = (workout: UserWorkoutData) => {
        setEditWorkout(workout); 
        setEditModalOpen(true);
    };


    const getTableData = async (date: string ) => {
        try {
          const response = await axiosPrivate.get(`/progress/getdata` , {
            params:{
              selectedDate:date,
              page: currentPage,
              perPage:perPage,
    
            }
          });
          console.log(response)
          setTableData(response.data.data.workouts);
         
          updateTotalPages(response.data.data.totalPages);
        } catch (error) {
          console.error('Error fetching workouts:', error);
        }
      };

    const handleCheckboxChange = async (id: string, completed: boolean  ,selectedDate:string  ) => {
    
        try {
       const response =  await axiosPrivate.put('/progress/updateCompletionStatus', { workoutId: id, completed , selectedDate });

            if(response && response.status===200){
                const nextTable = tabledata.map((c:UserWorkoutData, i) => {
                    if (c._id === id) {
                        return { ...c, completed: true };
                    }
                    return c;
                  });
                  setTableData(nextTable)
                 updateChartData();
                getTableData(selectedDate);
            }
     
            // Optionally, you can handle success or error responses from the backend here
        } catch (error) {
            console.error('Error updating completion status:', error);
        }
    };

    useEffect(() => {
        getTableData(selectedDate);
      }, [currentPage, selectedDate]);

    return (
        <>
            {/* =======================formModel===================== */}
            {modalOpen && (
                <>
                    <div className="fixed inset-0 bg-black opacity-80" onClick={handleCloseModal}></div>
                    <FormModalCustom handleCloseModal={handleCloseModal} />
                   
                </>
            )}
            {editModalOpen && (
                <>
                    <div className="fixed inset-0 bg-black opacity-80" onClick={handleCloseModal}></div>
                    <FormUpdateModal handleCloseEditModal={handleCloseEditModal}  workoutData={editWorkout}/>
                   
                </>
            )}

            <div className="rounded-lg mt-5 shadow-md sm:px-0 ">
                <div className='flex justify-start items-center gap-6 mb-3'>
                    {/* =================select date=========================== */}
                    <input type="date" className="dark:[color-scheme:dark] border w-36 text-sm rounded-lg block ps-5 p-2 bg-primary-200 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Select date" value={selectedDate} onChange={(e) => {
                        onDateChange(e.target.value);
                    }} />

                    {/* =============button for adding custom workout====================== */}
                    <button className="inline-flex items-center borderfocus:outline-none focus:ring-1 font-medium rounded-md text-sm px-3 py-2 bg-primary-200 text-white border-gray-600 hover:bg-primary-400 hover:border-gray-600 focus:ring-gray-700" type="button" onClick={()=>{setModalOpen(true)}}>
                        <FaPlus className='w-4 h-4 text-white me-2' />
                        Add Workout
                    </button>
                </div>

                {/* ===================main table========================= */}
                <div className="w-full overflow-x-auto sm:overflow-hidden">
                    <table className="w-full text-sm text-center text-gray-100">
                        <thead className="text-md uppercase bg-surface-200 tracking-wide text-white">
                            <tr>
                                <th className="px-6 py-3">Workout Title</th>
                                <th className="py-3 px-6">Duration</th>
                                <th className="py-3 px-6">Target(Days)</th>
                                <th className="py-3 px-6">Status</th>
                                <th className="py-3 px-6">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tabledata.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="text-center py-4">Workouts not added for this day</td>
                                </tr>
                            ) : (
                                tabledata.map((tableItem, key) => (
                                    <tr key={key} className="border-b bg-surface-200 border-gray-700 hover:bg-gray-600">
                                        <td scope="row" className="px-6 py-4">{tableItem.workoutId ? tableItem.workoutId.title : tableItem.title}</td>
                                        <td className="px-6 py-4">{tableItem.duration} min</td>
                                        <td className="py-4 px-6">{tableItem.targetDays}</td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center justify-center">
                                                <input
                                                    type="checkbox"
                                                    className="w-6 h-6 text-primary-500 rounded focus:ring-primary-500 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-1 bg-gray-700 border-gray-600"
                                                    onChange={() => handleCheckboxChange(tableItem._id, !tableItem.completed , selectedDate )}
                                                    
                                                    checked={tableItem.completed} 
                                                    disabled={tableItem.completed} 
                                                />
                                                <label className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <td className="flex items-center justify-center  px-6 py-4">
                                        <button onClick={() => handleEditWorkout(tableItem)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                <div className="mt-2">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
          </div>
                </div>
            </div>
        </>
    );
};

export default SelectedWorkoutTable;
