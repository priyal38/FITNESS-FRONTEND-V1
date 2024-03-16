import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

import { TableData } from '../../../pages/user/UserHome';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type Props = {
    tabledata: TableData[]
   
}
const BarChart = ({tabledata}:Props) => {
   // Define labels for each day of the week
   const daysOfWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'  ];

   // Initialize completed workouts data for each day
   const completedWorkoutsData: number[] = Array(7).fill(0);
   const incompleteWorkoutsData: number[] = Array(7).fill(0);

   // Count completed workouts for each day of the week
   tabledata.forEach(workout => {
       workout.completionStatus.forEach(status => {
           const dayIndex = new Date(status.date).getDay(); // Get day index (0-6)
           if (status.checked) {
               completedWorkoutsData[dayIndex]++;
           }
         
       });
   });

   // Prepare data for chart
   const chartData = {
       labels: daysOfWeek,
       datasets: [
           {
               label: 'Completed Workouts',
               data: completedWorkoutsData,
               backgroundColor: 'rgba(54, 162, 235, 0.5)',
           },
           {
            label: 'Incomplete Workouts',
            data: incompleteWorkoutsData,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
        }
       ],
   };


    const options = {
       responsive:true,
       maintainAspectRatio: false,
        plugins: {
            //   legend: {
            //     position: 'top',
            //   },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            }
        },
    };

    return (
        <div className="sm:px-7.5 col-span-12 rounded-md border border-gray-400 bg-surface-200 px-5 pb-7 pt-8 shadow-sm xl:col-span-7">
    <div className="mb-3 justify-center items-center sm:flex">
      <div>
        <h5 className="text-2xl font-semibold text-center  text-white">
         Weekly Workout Analytics
        </h5>
      </div>
    
    </div>

    <div className="mb-2 mt-6">
      <div id="chartThree" className=" h-72 flex justify-center">
      <Bar data={chartData} options={options} />
      </div>
    </div>
    </div>
    
  )
}
export default BarChart;

