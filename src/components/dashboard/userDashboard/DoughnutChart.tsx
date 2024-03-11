import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
type Props = {}

const DoughnutChart = (props: Props) => {

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 14],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],}
  return (
    <div className="sm:px-7.5 col-span-12 rounded-md border border-gray-400 bg-surface-200 px-5 pb-7 pt-8 shadow-sm xl:col-span-5">
    <div className="mb-3 justify-center items-center sm:flex">
      <div>
        <h5 className="text-2xl font-semibold text-center  text-white">
         Daily Workout Analytics
        </h5>
      </div>
      
    </div>

    <div className="mb-2">
      <div id="chartThree" className=" h-80 flex justify-center">
      <Doughnut data={data} />
      </div>
    </div>
    </div>
    
  )
}

export default DoughnutChart