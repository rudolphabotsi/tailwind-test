import React, { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from "chart.js";
import colors from "tailwindcss/colors";

Chart.register(ArcElement)

const data = {
    labels: [
        'Blue',
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [13, 2],
        backgroundColor: [
            colors.blue[600], colors.slate[300]
        ],
        hoverOffset: 0,
    }],
};

function Timer() {

    return (
        <div className='w-80 bg-white dark:bg-slate-700 rounded-3xl shadow-md flex flex-col items-center py-9 ' >
            <div className=' w-52 relative' >
                <Doughnut data={data} options={{ borderColor: 'transparent', cutout: 75 }} className='relative' />
                <div className='absolute inset-0 justify-center items-center flex flex-col ' >
                    <p className='text-4xl font-bold text-slate-900 dark:text-white ' >04:50</p>
                    <p className='text-md text-gray-700 dark:text-white ' >05:20 AM</p>
                </div>
            </div>
            <div className='w-full flex justify-around mt-10' >
                <button className="bg-slate-300 text-slate-800 py-2 mt-5 mb-5 font-semibold tracking-wider w-28 rounded-full" >
                    Cancel
                </button>
                <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 mt-5 mb-5 font-bold tracking-wider shadow-xl shadow-blue-50 w-28 rounded-full dark:shadow-md" >
                    Pause
                </button>
            </div>
        </div>
    )
}

export default Timer;
