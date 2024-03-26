// import React from 'react'
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie  } from 'react-chartjs-2';
// import { TableData } from '../../../pages/user/userDashboard/UserHome';

// ChartJS.register(ArcElement, Tooltip, Legend);
// type Props = {
//   tabledata: TableData[]
// }

// const DoughnutChart = ({tabledata}: Props) => {

//   const completedColor = [
//     'rgba(255, 99, 132, 0.7)',
//     'rgba(54, 162, 235,  0.7)',
//     'rgba(255, 206, 86,  0.7)',
//     'rgba(75, 192, 192,  0.7)',
//     'rgba(153, 102, 255,  0.7)',
//     'rgba(255, 159, 64,  0.7)',
//   ];
//   const remainingColor = [
//     'rgba(255, 99, 132, 0.2)',
//     'rgba(54, 162, 235, 0.2)',
//     'rgba(255, 206, 86, 0.2)',
//     'rgba(75, 192, 192, 0.2)',
//     'rgba(153, 102, 255, 0.2)',
//     'rgba(255, 159, 64, 0.2)',
//   ];

//  const borderColor= [
//     'rgba(255, 99, 132, 1)',
//     'rgba(54, 162, 235, 1)',
//     'rgba(255, 206, 86, 1)',
//     'rgba(75, 192, 192, 1)',
//     'rgba(153, 102, 255, 1)',
//     'rgba(255, 159, 64, 1)',
//   ]


//   const data = {
//     labels: ["Completed(in days)","Remaining(in days)"],
//     datasets: tabledata.map((entry, index) => ({
//       label:entry.workoutId ? entry.workoutId.title : entry.title,
   
//       data: [entry.completedDays, entry.targetDays - entry.completedDays],
//       backgroundColor: [
//         completedColor[index % completedColor.length],
//         remainingColor[index % remainingColor.length],
//       ],
//       borderColor: [
//         completedColor[index % completedColor.length], // Border color same as completed color
//         // Border color same as remaining color
//       ],
//       borderWidth: 1,
//     })),
    
    
//   };
  
// console.log(data);


//   return (
//     <div className="sm:px-7.5 col-span-12 rounded-md border border-gray-400 bg-surface-200 px-5 pb-7 pt-8 shadow-sm xl:col-span-5">
//     <div className="mb-3 justify-center items-center sm:flex">
//       <div>
//         <h5 className="text-2xl font-semibold text-center  text-white">
//          Daily Workout Analytics
//         </h5>
//       </div>
      
//     </div>

//     <div className="mb-2">
//       <div id="chartThree" className=" h-80 flex justify-center">
//       <Pie data={data} />   </div>
//     </div>
//     </div>
    
//   )
// }

// export default DoughnutChart


import React from 'react';
import {  Pie } from 'react-chartjs-2';
import { TableData } from '../../../pages/user/userDashboard/UserHome';
// import ChartJS from 'chart.js/auto'; // Import 'chart.js/auto' to use the new plugin system
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// ChartJS.register(ChartJS.ArcElement, ChartJS.Tooltip, ChartJS.Legend);
ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  tabledata: TableData[]
};

const DoughnutChart = ({ tabledata }: Props) => {
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
    labels: tabledata.map(entry => entry.workoutId ? entry.workoutId.title : entry.title),
    datasets: tabledata.map((entry, index) => ({
      label:entry.workoutId ? entry.workoutId.title : entry.title,
      data: [entry.completedDays, entry.targetDays - entry.completedDays],
      backgroundColor: [
        completedColor[index % completedColor.length],
        remainingColor[index % remainingColor.length],
      ],
      borderColor: borderColor[index % borderColor.length],
      borderWidth: 1,
    })),
  };

  const config = {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            generateLabels: function (chart: any) {
              const original = ChartJS.overrides.doughnut.plugins.legend.labels.generateLabels;
              const labelsOriginal = original.call(this, chart);

              let datasetColors = chart.data.datasets.map((e: any) => e.backgroundColor);
              datasetColors = datasetColors.flat();

              labelsOriginal.forEach((label: any) => {
                label.datasetIndex = Math.floor(label.index / 2);
                label.hidden = !chart.isDatasetVisible(label.datasetIndex);
                label.fillStyle = datasetColors[label.index];
              });

              return labelsOriginal;
            },
          },
          onClick: function (_: any, legendItem: any, legend: any) {
            const datasetIndex = Math.floor(legendItem.index / 2);
            legend.chart.getDatasetMeta(datasetIndex).hidden = !legend.chart.isDatasetVisible(datasetIndex);
            legend.chart.update();
          },
        },
        tooltip: {
          callbacks: {
            label: function (context: any) {
              const labelIndex = (context.datasetIndex * 2) + context.dataIndex;
              return `${context.chart.data.labels[labelIndex]}: ${context.formattedValue}`;
            },
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
          <Pie data={data} options={config.options} />
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
