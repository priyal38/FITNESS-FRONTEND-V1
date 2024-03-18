import React from 'react';
import { Bar } from 'react-chartjs-2';
import { TableData } from '../../../pages/user/UserHome';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type Props = {
    tabledata: TableData[]
};

const BarChart = ({ tabledata }: Props) => {
    // Define labels for each day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Initialize completed and incomplete workouts data arrays
    let completedWorkoutsData: number[] = [];
    let incompleteWorkoutsData: number[] = [];

    // Track previous completed count
    let previousCompletedCount = 0;

    // Check if tabledata is null or empty
    if (!tabledata || tabledata.length === 0) {
        // If tabledata is null or empty, set both arrays to zero
        completedWorkoutsData = Array(7).fill(previousCompletedCount);
        incompleteWorkoutsData = Array(7).fill(0);
    } else {
        // Initialize completed and incomplete workouts data arrays with length 7
        completedWorkoutsData = Array(7).fill(0);
        incompleteWorkoutsData = Array(7).fill(0);

        // Iterate over each workout in tabledata
        tabledata.forEach(workout => {
            // Filter completed dates for the current workout
            const completedDates = workout.completionStatus
                .filter(status => status.checked)
                .map(status => new Date(status.date).toDateString());

            // Iterate over each day of the week
            daysOfWeek.forEach((day, index) => {
                // Calculate the current date based on workout's start date and index
                const currentDate = new Date(new Date(workout.startDate).getTime() + index * 24 * 60 * 60 * 1000).toDateString();

                if (completedDates.includes(currentDate)) {
                    // Increment completed workout count if the current date has a completed workout
                    completedWorkoutsData[index]++;
                } else if (index < (workout.targetDays || 0) && new Date(currentDate) <= new Date()) {
                    // Increment incomplete workout count if the current date is within the target days range
                    incompleteWorkoutsData[index]++;
                } else {
                    // If there are no completed or incomplete workouts for the current day,
                    // set the incomplete workout count to be the same as the previous day's count
                    incompleteWorkoutsData[index] = incompleteWorkoutsData[index - 1];
                }
            });

            // Update previousCompletedCount with the total completed count for the current workout
            previousCompletedCount += completedWorkoutsData.reduce((acc, count) => acc + count, 0);
        });
    }

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
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
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
                    <h5 className="text-2xl font-semibold text-center text-white">
                        Weekly Workout Analytics
                    </h5>
                </div>
            </div>

            <div className="mb-2 mt-6">
                <div id="chartThree" className="h-72 flex justify-center">
                    <Bar data={chartData} options={options} />
                </div>
            </div>
        </div>
    );
};

export default BarChart;
