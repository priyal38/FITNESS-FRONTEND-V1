import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS,CategoryScale, LineElement, PointElement, LineController, LinearScale, Title, Tooltip } from 'chart.js';
import { TableData } from '../../../pages/user/userDashboard/UserHome';

ChartJS.register(LineElement ,CategoryScale, PointElement, LineController, LinearScale, Title, Tooltip);

type Props = {
  tabledata: TableData[];
}

const LineChart = ({ tabledata }: Props) => {
  // Prepare data for the chart
  const labels:any[] = [];
  const data :any[]= [];
tabledata.forEach(entry => {
    // Calculate the duration of the workout in days
    const startDate = new Date(entry.startDate);
    const endDate = new Date(entry.endDate);
   
    const durationInDays = Math.round(
        ((endDate as any) - (startDate as any)) / (1000 * 60 * 60 * 24)
      );
      

  
    for (let i = 0; i <= durationInDays; i++) {
        const currentDate = new Date(startDate.getTime() + (i * 24 * 60 * 60 * 1000));
        labels.push(currentDate.toLocaleDateString()); // Convert date to string format
      
        const completed = entry.completionStatus.some(status =>new Date(status.date).toISOString() === currentDate.toISOString() && status.checked);
        data.push(completed ? 1 : 0); // Check if the workout was completed on the current date
    }
});
// Prepare data for the chart
const chartData = {
    labels: labels,
    datasets: [{
      label: 'Completion Status',
      data: data,
      borderColor: data.map(status => status === 1 ? 'green' : 'red'),
      fill: false
    }]
  };
  return (
    <div className="sm:px-7.5 col-span-12 rounded-md border border-gray-400 bg-surface-200 px-5 pb-7 pt-8 shadow-sm xl:col-span-7">
      <div className="mb-3 justify-center items-center sm:flex">
        <div>
          <h5 className="text-2xl font-semibold text-center text-white">
            Weekly Workout Analytics
          </h5>
        </div>
      </div>

      <div className="mb-2 mt-6">
        <div id="chartThree" className="h-72 flex justify-center">
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
