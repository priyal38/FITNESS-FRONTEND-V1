import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie  } from 'react-chartjs-2';
import { TableData } from '../../../pages/user/userDashboard/UserHome';

ChartJS.register(ArcElement, Tooltip, Legend);
type Props = {
  tabledata: TableData[]
}

const PieChart = ({tabledata}: Props) => {

  const completedColor = [
    'rgba(255, 99, 132, 0.7)',
    'rgba(54, 162, 235,  0.7)',
    'rgba(255, 206, 86,  0.7)',
    'rgba(75, 192, 192,  0.7)',
    'rgba(153, 102, 255,  0.7)',
    'rgba(255, 159, 64,  0.7)',
  ];
  const remainingColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
  ];

 const borderColor= [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
  ]


  const data = {
    labels: ["Completed","Remaining"],
    datasets: tabledata.map((entry, index) => ({
      label:entry.workoutId ? entry.workoutId.title : entry.title,
      data: [entry.completedDays, entry.targetDays - entry.completedDays],
      backgroundColor: [
        completedColor[index % completedColor.length],
        remainingColor[index % remainingColor.length],
      ],
      borderColor: [
        completedColor[index % completedColor.length], 
      ],
      borderWidth: 1,
    })),
    
    
  };
console.log(data);
 // },

const options = {
  plugins: {
   
    legend: {
      labels: {
        usePointStyle: true,
        generateLabels: function (chart: any) {
          const datasets = chart.data.datasets;
          const labels: any[] = [];
          datasets.forEach(function (dataset: any, i: any) {
            const label = dataset.label; 
            const color = completedColor[i % completedColor.length];
            labels.push({ text: label, fillStyle: color , pointStyle: 'rect', lineWidth: 0, fontColor: '#FFFFFF'});
          });
          return labels;
        },
      },
      
    },
    tooltip: {
      callbacks: {
        label: function (context :any) {
          const label = context.dataset.label || '';
          const value = context.formattedValue + ' days';
          return `${label}: ${value}`;
        },
      },
    },
  },
};



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
      <Pie data={data} options={options} />  </div>
    </div>
    </div>
    
  )
}

export default PieChart


