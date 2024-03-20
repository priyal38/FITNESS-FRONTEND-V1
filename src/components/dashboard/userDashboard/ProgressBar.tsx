import React, { useEffect } from 'react'
import { Line, Circle } from 'rc-progress';
import { TableData } from '../../../pages/user/userDashboard/UserHome';

type Props = {
    tabledata: TableData[]
    getTableData: (date: string) => void;
    selectedDate: string;
}

const colors = [
    '#FF6384', // Red
    '#36A2EB', // Blue
    '#FFCE56', // Yellow
    '#8A2BE2', // Purple
    '#20B2AA', // Light Sea Green
    '#FF7F50', // Coral
    '#32CD32', // Lime Green
    '#FFD700'  // Gold
];

const ProgressBar = ({ tabledata, getTableData , selectedDate }: Props) => {

    useEffect(() => {
        getTableData(selectedDate)
    }, [])
    return (
        <>
          

            <div className="sm:px-7.5 mt-[4.5rem] rounded-md border border-gray-400 bg-surface-200 px-5 pb-7 pt-5 shadow-sm ">
                <div className=" justify-center items-center mb-3 sm:flex">
                    <div>
                        <h5 className="text-2xl font-semibold text-center 2 text-white">
                            Workout Analytics
                        </h5>
                    </div>

                </div>


                <div className="  flex flex-col gap-4 overflow-y-auto">
                    {tabledata.map((tableItem, index) => (
                        <div key={index} className='flex flex-col gap-3  '>
                            <div className='flex relative'>
                            <p className='text-white text-sm text-left'>{tableItem.workoutId ? tableItem.workoutId.title : tableItem.title}</p>

<div className='absolute right-0 top-0'>
<p className='text-white text-sm'> {((tableItem.completedDays / tableItem.targetDays) * 100).toFixed(2)}%</p>
</div>
                            </div>

                            <div>
                                <Line percent={((tableItem.completedDays) / tableItem.targetDays) * 100} strokeWidth={2} strokeColor={colors[index % colors.length]} className='w-full' />
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </>
    )
}

export default ProgressBar