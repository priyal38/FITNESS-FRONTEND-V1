import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  
    const labels = ["Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [200, 450, 300, 800, 700], // Sample data, replace with your data
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
           
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
      <Bar data={data} options={options} />
      </div>
    </div>
    </div>
    
  )
}

            export default BarChart;
